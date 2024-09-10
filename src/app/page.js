import React from 'react';
import ThreeScene from './components/ThreeScene';
import Cube from './components/Cube';
import SketchFab from './components/SketchFab';

const HomePage = () => {
  return (
    <div>
      <div className="mt-24 min-h-screen">
        <div className="flex items-center justify-evenly">

          <SketchFab className='w-full'></SketchFab>
          <div className='w-1/3'>
            <h1 className="text-5xl font-bold">Orrery App!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
              quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;