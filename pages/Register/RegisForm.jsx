import { Button, Card, CardActions, CardContent, CircularProgress, TextField, Typography, Select, MenuItem, InputLabel } from '@mui/material';
import { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setNama, setNomor, setEmail, setAlamat, setTempatLahir, setTanggalLahir, setJenisKelamin, setKeahlian, setErrorText, setLoading, setCreatedPost, resetForm } from '../../store/RegisFormSlice';
import { useJwt } from 'react-jwt';
import { useLocalStorage } from '../../hooks/localStorage';
import { RegisContext } from '../context/regis-context';
import { usePostService } from '../rest-client/post';
import { useNavigate } from 'react-router-dom';

export const RegisForm = () => {
  const [credential] = useLocalStorage('credential');
  const { fetchPosts } = useContext(RegisContext);
  const { decodedToken } = useJwt(credential);
  const dispatch = useDispatch();
  const formState = useSelector((state) => state.regisForm);
  const { createPosts } = usePostService();
  const navigate = useNavigate();

  const handleCreatePost = async () => {
    dispatch(setLoading(true));

    if (!formState.nama || !formState.nomor || !formState.email || !formState.alamat || !formState.tempatLahir || !formState.tanggalLahir || !formState.jenisKelamin || !formState.keahlian) {
      dispatch(setErrorText('Mohon lengkapi semua form'));
      dispatch(setLoading(false));
      return;
    }

    try {
      await createPosts({
        nama: formState.nama,
        nomor: formState.nomor,
        email: formState.email,
        alamat: formState.alamat,
        tempatLahir: formState.tempatLahir,
        tanggalLahir: formState.tanggalLahir,
        jenisKelamin: formState.jenisKelamin,
        keahlian: formState.keahlian,
        createdBy: decodedToken.id,
      });

      await fetchPosts();

      dispatch(resetForm());
      dispatch(setCreatedPost(formState));

      navigate('/register-read');
    } catch (error) {
      dispatch(setErrorText('Gagal Menginputkan Data!'));
    } finally {
      dispatch(setLoading(false));
    }
  };

  const handleNamaChange = (event) => {
    dispatch(setNama(event.target.value));
  };

  const handleNomorChange = (event) => {
    dispatch(setNomor(event.target.value));
  };

  const handleEmailChange = (event) => {
    dispatch(setEmail(event.target.value));
  };

  const handleAlamatChange = (event) => {
    dispatch(setAlamat(event.target.value));
  };

  const handleTempatLahirChange = (event) => {
    dispatch(setTempatLahir(event.target.value));
  };

  const handleTanggalLahirChange = (event) => {
    dispatch(setTanggalLahir(event.target.value));
  };

  const handleJenisKelaminChange = (event) => {
    dispatch(setJenisKelamin(event.target.value));
  };

  const handleKeahlianChange = (event) => {
    dispatch(setKeahlian(event.target.value));
  };

  return (
    <Card style={{marginBottom: 50}}>
      <CardContent>
        <TextField style={{ margin: 10, width: 400 }} multiline label="Nama" value={formState.nama} onChange={handleNamaChange}  error={formState.errorText && true || false} helperText={formState.errorText} /><br/>
        <TextField style={{ margin: 10, width: 400 }} multiline label="Nomor" value={formState.nomor} onChange={handleNomorChange} error={formState.errorText && true || false} helperText={formState.errorText} /><br/>
        <TextField style={{ margin: 10, width: 400 }} multiline label="Email" value={formState.email} onChange={handleEmailChange} error={formState.errorText && true || false} helperText={formState.errorText} /><br/>
        <TextField style={{ margin: 10, width: 400 }} multiline label="Alamat" value={formState.alamat} onChange={handleAlamatChange} error={formState.errorText && true || false} helperText={formState.errorText} /><br/>
        <TextField style={{ margin: 10, width: 400 }} multiline label="Tempat Lahir" value={formState.tempatLahir} onChange={handleTempatLahirChange} error={formState.errorText && true || false} helperText={formState.errorText} /><br/>
        <InputLabel id="jenis-kelamin-label">Jenis Kelamin</InputLabel>
        <Select
          labelId="jenis-kelamin-label"
          id="jenis-kelamin"
          value={formState.jenisKelamin}
          label="Jenis Kelamin"
          onChange={handleJenisKelaminChange}
          error={formState.errorText && true}
          style={{ margin: 10, width: 400 }}
        >
          <MenuItem value={'Laki-laki'}>Laki-laki</MenuItem>
          <MenuItem value={'Perempuan'}>Perempuan</MenuItem>
        </Select>
        <InputLabel style={{ marginRight: 10 }}>Tanggal Lahir</InputLabel>
        <TextField style={{ margin: 10, width: 400 }} type='date' value={formState.tanggalLahir} onChange={handleTanggalLahirChange} error={formState.errorText && true || false} helperText={formState.errorText} /><br/>
        <InputLabel id="keahlian-label">Pilih Keahlian</InputLabel>
        <Select
          labelId="keahlian-label"
          id="keahlian"
          value={formState.keahlian}
          label="Keahlian"
          onChange={handleKeahlianChange}
          error={formState.errorText && true || false}
          style={{ margin: 10, width: 400 }}
        >
          <MenuItem value={'air dan listrik'}>Air dan Listrik</MenuItem>
             <MenuItem value={'elektronik rumah tangga'}>Elektronik Rumah Tangga</MenuItem>
             <MenuItem value={'elektronik kantor'}>Elektronik Kantor</MenuItem>
        </Select>
        <Typography color="error">{formState.errorText}</Typography>
      </CardContent>
      <CardActions style={{ justifyContent: 'center', marginBottom: '20px' }}>
        <Button onClick={handleCreatePost} disabled={formState.loading}>
          {formState.loading ? <CircularProgress size={20} /> : 'Berikutnya'}
        </Button>
      </CardActions>
    </Card>
  );
};