import React from 'react';
// import logo from './logo.svg';
// import './App.css';
// import './index.css'

import Footer from './layout/Footer'
import Navbar from './layout/Navbar';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import About from './pages/About'


interface  AppProps  {
  title: string
}

function App() {
  // const title_:AppProps = {
  //   title: 'My Notes'
  // }

    const title = 'My Notes'
  return (

    <Router>
      <div className='flex flex-col justify-between h-screen'>
      <Navbar title={title}></Navbar>
      <main className="container mx-auto px-3 pb-12 bg-pink-200">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/notfound' element={<NotFound />} />
          <Route path='/*' element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
     </div> 
    </Router>

    
  );
}

export default App;
