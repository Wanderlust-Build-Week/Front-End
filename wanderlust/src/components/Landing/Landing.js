import React from 'react';
import SimpleSlider from '../Carousel/SimpleSlider';
import './Landing.css';
import Search from '../Search/Search'

export default function Landing(props) {
  
  return (
    <>
      <SimpleSlider />   
      <Search
        placeholder="Where do you want to go?" />
    </>
    )
}