/*  React hooks used in this template includes: useState, useRef, useEffect
    Frameworks & Libraries integrated with this product includes: 
     react-router-dom;
     framer-motion;
     bootstrap (which is linked to the index.html file in the public folder);
     fontawesome (which is linked to the index.html file in the public folder);
*/

/* 
The author of this product strongly recommends the usage of 600 by 430 dimension images to be used 
if the images that is shipped with the original template is not to be used

*/

import {useState} from 'react';

import ImageOverlayDisplay from './components/ImageOverlayDisplay';

import './App.css';

import {HashRouter} from 'react-router-dom';

import AnimatedRoutes from './AnimatedRoutes';

import Navbar from './components/Navbar';

import Footer from './components/Footer';

// App component

function App() {

const [overlayInfo, setOverlayInfo]= useState({
  image: null,
  show: false
});

const setViewCardVisibility= (image, show)=>{
  setOverlayInfo({
    image: image,
    show: show
  })
};

const closeViewCard= ()=>{
    setOverlayInfo({
    image: null,
    show: false
  })
};



  return (

    <HashRouter>
    {overlayInfo.show &&<ImageOverlayDisplay image={overlayInfo.image} closeViewCard={closeViewCard}/>}


    <Navbar/>
  {/*  Check "./AnimatedRoutes.js" for reference */}
      <AnimatedRoutes  setViewCardVisibility={setViewCardVisibility}/>
      <Footer/>
    </HashRouter>

  )
}

export default App;
