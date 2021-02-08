import React from 'react';
//css
import './Social.css';

//images
import inst from '../../images/inst.png';
import linked from '../../images/in.png';
import behance from '../../images/Be.png';
import dribble from '../../images/dribble.png';

export const Social = () => {
	return (
		<div className='social__container'>
			<div className='social__icons'>
				<img src={linked} alt=''/>
				<img src={inst} alt=''/>
				<img src={behance} alt=''/>
				<img src={dribble} alt=''/>
			</div>

			<p>Like me on<br/>LinkedIn, Instagram, Behance, Dribble</p>
		</div>
	)
}
