import React, { useEffect, useState } from 'react';
import axios from 'axios';
import HomePage from '../Components/HomePage';
import baseURL from '../config';

const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const getData = await axios.get(`${baseURL}homepage.json`);
      setData(getData.data);
    };
    fetchData();
  }, []);
  return (
    <HomePage data={data} />
  );
};

export default Home;
