import { useState } from "react";
import useClient from "./useClient";

const usePostService = () => {
  const client = useClient();
  const [loading, setLoading] = useState(false);

  const getData = async (collection) => {
    if (loading) return;

    setLoading(true);
    try {
      const response = await client.get('/tim4_product');
      return response.data.reverse();
    } catch (error) {
      console.error(error);
      throw error;
    } finally {
      setLoading(false);
      console.log("ini get data");
    }
  };

  const getDataById = async (collection, id) => {
    if (loading) return;

    setLoading(true);
    try {
      const response = await client.get(`${'/tim4_product'}/id/${id}`);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    } finally {
      setLoading(false);
      console.log("ini get data");
    }
  };

  const createData = async (collection, dataForm) => {
    if (loading) return;

    setLoading(true);
    try {
      const response = await client.post(collection, dataForm);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    } finally {
      setLoading(false);
      console.log("ini create data");
    }
  };

  const deleteData = async (collection, id) => {
    if (loading) return;

    setLoading(true);
    try {
      const response = await client.delete(`${'/tim4_product'}/id/${id}`);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    } finally {
      setLoading(false);
      console.log("delete");
    }
  };

  const updateData = async (collection, id, dataForm) => {
    if (loading) return;

    setLoading(true);
    try {
      const response = await client.put(`${'/tim4_product'}/id/${id}`, dataForm);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    } finally {
      setLoading(false);
      console.log("ini update data");
    }
  };

  return { getData, getDataById, createData, deleteData, updateData, loading };
};

export default usePostService;
