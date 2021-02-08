import React from 'react';
import './Contacts.css';

//components
import {Button} from '../Button/Button';
import {Social} from '../Social/Social';

export const Contacts = () => {
	return (
		<div className='contacts__container'>
			<h2>Contacts</h2>

			<p className='contacts__subtitle'>Want to know more or just chat? You are welcome!</p>

			<Button text='Send message'/>
			
			<div className='social'>
				<Social/>
			</div>
		</div>
	)
}
