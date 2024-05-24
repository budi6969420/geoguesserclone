import { useState } from "react";

const useFetch = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const url = "http://192.168.0.2:7084/api/";
  async function fetchData(endpoint, method = "GET", body = null) {
    let responseData;
    try {
      setLoading(true);
      const options = {
        method: method,
        headers: {},
      };

      if (body) {
        if (body instanceof FormData) {
          options.body = body;
        } else {
          options.headers["Content-Type"] = "application/json";
          options.body = JSON.stringify(body);
        }
      }
      const response = await fetch(url + endpoint, options);

      if (!response.ok) {
        setError("error");
        return "error";
      }

      responseData = await response.json();
      setData(responseData);
      return responseData;
    } catch (e) {
      setError(e);
      return "error";
    } finally {
      setLoading(false);
    }
  }

  return { data, error, loading, fetchData };
};

export default useFetch;
