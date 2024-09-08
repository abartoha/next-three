import React from 'react';
import ThreeScene from './components/ThreeScene';
import Cube from './components/Cube';

const HomePage = () => {
  return (
    <div className='flex'>
      <ThreeScene/>
      <Cube/>
    </div>
  );
};

export default HomePage;