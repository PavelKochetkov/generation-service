import React from 'react';
import { useGetDataQuery } from '../api/homeApi';
import HomePage from '../Components/HomePage';

const Home = () => {
  const { data: homeData = [], isLoading } = useGetDataQuery();
  return (
    <HomePage
      homeData={homeData}
      isLoading={isLoading}
    />
  );
};

export default Home;
