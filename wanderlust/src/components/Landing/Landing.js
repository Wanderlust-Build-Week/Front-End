import React from 'react';
import SimpleSlider from '../Carousel/SimpleSlider';
import './Landing.css';
import Search from '../Search/Search'
import {Wrapper} from '../../Styles/StyledWrapper';

export default function Landing(props) {
  
  return (
    <Wrapper>
      <SimpleSlider />   
      <Search
        placeholder="Where do you want to go?" />
    </Wrapper>
    )
}