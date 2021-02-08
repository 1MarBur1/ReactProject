import React, {useState, useEffect} from 'react'
import './NavTab.css'
import ClearIcon from '@material-ui/icons/Clear';

export const NavTab = () => {
	const [chosen, setChosen] = useState('Home')
	const [opened, setOpened] = useState(false)

	const onHome = () => {
		setChosen('Home')
		setOpened(false)
	}
	const onAbout = () => {
		setChosen('About me')
		setOpened(false)
	}
	const onSkills = () => {
		setChosen('Skills')
		setOpened(false)
	}
	const onPortfolio = () => {
		setChosen('Portfolio')
		setOpened(false)
	}
	const onContacts = () => {
		setChosen('Contacts')
		setOpened(false)
	}
	const [scrolled, setScrolled] = useState(false);

	const handleScroll=()=>{
		const offset=window.scrollY;
		if(offset > 40 ){
			setScrolled(true);
		}
		else{
			setScrolled(false);
		}
		if(offset<530){
			setChosen('Home')
		}
		else if(offset<1010){
			setChosen('About me')
		}
		else if(offset<1700){
			setChosen('Skills')
		}
		else if(offset<3800){
			setChosen('Portfolio')
		}
		else if(offset>390){
			setChosen('Contacts')
		}
  	}	
	useEffect(() => {
		window.addEventListener('scroll', handleScroll)
	})

	const onMobileMenu = () => setOpened(!opened);

	return (
		<>
			<nav className={scrolled ? 'sticky':'nav'}>
 				<ul className='nav__container'>
 					<li>
 						<a href='#home'
							onClick={onHome} 
							className={chosen==='Home' ? 'active':'inactive'}>
							Home
						</a>
					</li>

					<li>
						<a 
							href='#about'
							onClick={onAbout} 
							className={chosen==='About me' ? 'active':'inactive'}>
							About me
						</a>
					</li>

					<li>
						<a 
							href='#skills'
							onClick={onSkills} 
							className={chosen==='Skills' ? 'active':'inactive'}>
							Skills
						</a>
					</li>

					<li>
						<a 
							href='#portfolio'
							onClick={onPortfolio} 
							className={chosen==='Portfolio' ? 'active':'inactive'}>
							Portfolio
						</a>
					</li>

					<li>
						<a 
							href='#contacts'
							onClick={onContacts} 
							className={chosen==='Contacts' ? 'active':'inactive'}>
							Contacts
						</a>
					</li>
				</ul>

				<hr/>
			</nav>

			<button className='burger' onClick={onMobileMenu}>
				<span/>
			</button>

			<nav className={opened ? 'mobile__menu':'none'}>
				<ul className='mobile__nav__container'>
 					<li>
 						<a href='#home'
							onClick={onHome} 
							className={chosen==='Home' ? 'active':'inactive'}>
							Home
						</a>
					</li>

					<li>
						<a 
							href='#about'
							onClick={onAbout} 
							className={chosen==='About me' ? 'active':'inactive'}>
							About me
						</a>
					</li>

					<li>
						<a 
							href='#skills'
							onClick={onSkills} 
							className={chosen==='Skills' ? 'active':'inactive'}>
							Skills
						</a>
					</li>

					<li>
						<a 
							href='#portfolio'
							onClick={onPortfolio} 
							className={chosen==='Portfolio' ? 'active':'inactive'}>
							Portfolio
						</a>
					</li>

					<li>
						<a 
							href='#contacts'
							onClick={onContacts} 
							className={chosen==='Contacts' ? 'active':'inactive'}>
							Contacts
						</a>
					</li>
				</ul>
				
				<div className='cross' onClick={onMobileMenu}>
					<ClearIcon fontSize='large' color='action'/>
				</div>
			</nav>
		</>
	)
}