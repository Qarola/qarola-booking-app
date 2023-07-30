import { useEffect, useState } from "react";
import axios from "axios";

const useFetch = (url) => {
  const backendUrl = process.env.REACT_APP_BACKEND_URL;

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await axios.get(`${backendUrl}${url}`);
        setData(res.data);
      } catch (err) {
        setError(err);
      }
      setLoading(false);
    };
    fetchData();
  }, [backendUrl, url]);

  const reFetch = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${backendUrl}${url}`);
      setData(res.data);
    } catch (err) {
      setError(err);
    }
    setLoading(false);
  };

  return { data, loading, error, reFetch };
};

export default useFetch;
