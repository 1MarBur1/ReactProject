import React from 'react'
import './Home.css'
import img_1 from '../../images/img-1.png'
import img_5 from '../../images/img-5.png'

export const Home = () => {
	return (
		<div className='home__container'>
			<div className='home__text'>
				<h1 className='name'>Denis Novik</h1>
				<p className='info'>UX | UI designer <br/> 24 years old, Minsk</p>
			</div>

			<div className='img'><img src={img_1} className='img' alt=''/></div>
			<div className='img__2'><img src={img_5} className='img__2' alt=''/></div>
		</div>
	)
}
