import React, { useEffect, useState } from "react";
import HomePage from "../Components/HomePage";
import { baseURL } from "../config";
import axios from "axios";

export const Home = () => {
  const [homes, setHome] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const respHome = await axios.get(`${baseURL}homepage.json`);
      setHome(respHome.data);
    };
    fetchData();
  }, []);
  return (
    <React.Fragment>
      {homes.map((home, index) => (
        <HomePage home={home} key={index} />
      ))}
    </React.Fragment>
  );
};
