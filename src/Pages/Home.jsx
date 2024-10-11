import React from 'react';
import { useGetDataQuery } from '../api/homeApi';
import HomePage from '../Components/HomePage';

const Home = () => {
  const { data = [], isLoading } = useGetDataQuery();
  return (
    <HomePage
      data={data}
      isLoading={isLoading}
    />
  );
};

export default Home;
