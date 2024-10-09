import React, { useEffect, useState } from 'react';
import axios from 'axios';
import getId from '../utils/generateId';
import HomePage from '../Components/HomePage';
import baseURL from '../config';

const Home = () => {
  const [homes, setHome] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const respHome = await axios.get(`${baseURL}homepage.json`);
      setHome(respHome.data);
    };
    fetchData();
  }, []);
  return (
    <>
      {homes.map((home) => (
        <HomePage key={getId()} home={home} />
      ))}
    </>
  );
};

export default Home;
