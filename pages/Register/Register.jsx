import { useEffect } from "react";
import { Grid, Typography } from "@mui/material";
import { RegisForm } from "./RegisForm";
import NavbarLogin from "../Styles/NavbarLogin";
import { useSelector, useDispatch } from "react-redux";
import { resetForm } from "../../store/RegisFormSlice";

export const Register = () => {
  const credentials = useSelector((state) => state.regisForm.credentials);
  const dispatch = useDispatch();

  useEffect(() => {
    !credentials && dispatch(resetForm());
  }, [credentials, dispatch]);


  return (
    <div>
        <NavbarLogin/>
        <Typography marginTop={10}>
      <h1>Halaman Registrasi Teknisi</h1>
      </Typography>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Grid item xs={12} sm={8} md={6} lg={4}>
          <RegisForm />
        </Grid>
      </div>
    </div>
  );
}

export default Register;