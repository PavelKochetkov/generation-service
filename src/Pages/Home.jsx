import React, { useEffect, useState } from 'react';
import axios from 'axios';
import HomePage from '../Components/HomePage';
import baseURL from '../config';

const Home = () => {
  const [homes, setHome] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const respHome = await axios.get(`${baseURL}homepage.json`);
      console.log(respHome.data);
      setHome(respHome.data);
    };
    fetchData();
  }, []);
  return (
    <>
      {homes.map((home) => (
        <HomePage home={home} />
      ))}
    </>
  );
};

export default Home;
