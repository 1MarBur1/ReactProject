import React from 'react';
import './Portfolio.css';

import {PortfolioCard} from '../PortfolioCard/PortfolioCard';

//images
import img_2 from '../../images/img-2.png';
import img_3 from '../../images/img-3.png';
import img_4 from '../../images/img-4.png';

export const Portfolio = () => {
	return (
		<div className='portfolio__container'>
			<h2 className = 'portfolio__header'>Portfolio</h2>

			<PortfolioCard img={img_2} title='Online fashion store - Homepage' url='https://www.online-fashion.ru/' />
			<PortfolioCard img={img_3} title='Reebok Store - Concept' url='https://www.reebok.ru/' />
			<PortfolioCard img={img_4} title='Braun Landing Page - Concept' url='https://braun-russia.ru/' />
		</div>
	)
}
