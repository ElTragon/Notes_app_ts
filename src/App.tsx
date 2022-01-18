import React from 'react';
// import logo from './logo.svg';
// import './App.css';
// import './index.css'

import Footer from './layout/Footer'
import Navbar from './layout/Navbar';

interface  AppProps  {
  title: string
}

function App() {
  // const title_:AppProps = {
  //   title: 'My Notes'
  // }

  const title_ = 'My Notes'
  return (
    <div className='flex flex-col justify-between h-screen'>
      <Navbar title={'swwwwwwwww'}></Navbar>
      <h1 className='text-3xl font-bold underline'>Hello world!</h1>
      <Footer />
    </div>
  );
}

export default App;
