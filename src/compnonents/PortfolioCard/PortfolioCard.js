import React from 'react';
import './PortfolioCard.css';

export const PortfolioCard = ({img, url, title, style}) => {
	return (
		<div className='portfolio__card__container'>
			<div className='portfolio__card__img'><img src={img} className='portfolio__card__img' alt=''/></div>

			<a className='portfolio__card__title' href={url}>{title}</a>
		</div>
	)
}
