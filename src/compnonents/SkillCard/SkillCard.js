import React from 'react'
import {Stars} from '../Stars/Stars'; 
import './SkillCard.css';

export const SkillCard = ({src, title, raiting}) => {
	return (
		<div className='skill__card__container'>
			<img src={src} alt=''/>

			<p className='skill__card__title'>{title}</p>

			<Stars raiting={raiting}/>
		</div>
	)
}
