import { useEffect, useState } from "react";
import axios from "axios";

const backendUrl = process.env.REACT_APP_BACKEND_URL;

const useFetch = (url) => {

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
  }, [ url]);

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
