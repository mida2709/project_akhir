import useClient from "./index";
import { useState, useEffect } from "react";

const usePostService = () => {
  const collection = "tim4_cart";
  const client = useClient();
  const [loading, setLoading] = useState(false);
  const [carts, setCarts] = useState([]);

  useEffect(() => {
    fetchAllCarts();
  }, []);

  const createCart = async (name, price) => {
    if (loading) return;
    setLoading(true);

    const data = {
      name: name,
      price: price,
      status: "selesai",
      timestamp: new Date().toISOString(),
    };

    try {
      const response = await client.post(collection, data);
      setLoading(false);
      fetchAllCarts();
      return response.data;
    } catch (error) {
      setLoading(false);
      console.error("Gagal untuk memasukkan data!:", error);
      throw error;
    }
  };

  const fetchAllCarts = async () => {
    try {
      const response = await client.get(collection);
      const sortedCarts = response.data.sort((a, b) => {
        const dateA = new Date(a.timestamp);
        const dateB = new Date(b.timestamp);
        return dateB - dateA;
      });
      setCarts(sortedCarts);
    } catch (error) {
      console.error("Failed to fetch carts:", error);
    }
  };

  return { createCart, loading, carts };
};

export default usePostService;