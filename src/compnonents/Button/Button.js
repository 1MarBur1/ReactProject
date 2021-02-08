import React from 'react';
import './Button.css';

export const Button = ({text}) => {
	return (
		<a className='button__container' href='/'>
			<p>{text}</p>
		</a>
	)
}