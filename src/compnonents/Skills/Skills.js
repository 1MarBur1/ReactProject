import React from 'react';

//css
import './Skills.css';

//components
import {SkillCard} from '../SkillCard/SkillCard';

//images
import ps from '../../images/PS.png';
import ai from '../../images/Ai.png';
import ae from '../../images/Ae.png'
import figma from '../../images/Figma.png'

export const Skills = () => {
	return (
		<div className='skills__container'>
			<h2>Skills</h2>
			<p className='skills__subtitle'>I work in such programs as</p>

			<div className='programs'>
				<SkillCard title='Adobe Photoshop' src={ps} raiting={4} />
				<SkillCard title='Adobe Illustrator' src={ai} raiting={3} />
				<SkillCard title='Adobe After Effects' src={ae} raiting={4} />
				<SkillCard title='Figma' src={figma} raiting={4} />
			</div>
		</div>
	)
}
