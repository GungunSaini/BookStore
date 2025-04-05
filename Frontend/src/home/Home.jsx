import React from 'react';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import Freebook from '../components/Freebook';

const Home = () => {
  return (
    <>
       <div className='overflow-hidden'>
              <Navbar/>
              <Banner/>
              <Freebook/>
              <Footer/>
        </div>
    </>
  )
}

export default Home
