import React from 'react';
import Landing from './Landing/Landing';
import NavBar from './NavBar/NavBar';
import { Wrapper } from '../Styles/StyledWrapper';

export default function Home1() {
	return (
		<Wrapper>
			<NavBar />
			<Landing />
		</Wrapper>
	);
}
