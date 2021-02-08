import React from 'react';
import './Stars.css';

//icons
import StarIcon from '@material-ui/icons/Star';

export const Stars = ({raiting}) => {
	return (
		<div className='stars__container'>
			<StarIcon color={raiting>=1 ? '' : 'disabled'}/>
			<StarIcon color={raiting>=2 ? '' : 'disabled'}/>
			<StarIcon color={raiting>=3 ? '' : 'disabled'}/>
			<StarIcon color={raiting>=4 ? '' : 'disabled'}/>
			<StarIcon color={raiting>=5 ? '' : 'disabled'}/>
		</div>
	)
}
