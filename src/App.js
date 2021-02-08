import React from "react";
import './App.css';
import {Home} from './compnonents/Home/Home';
import {About} from './compnonents/About/About';
import {NavTab} from './compnonents/NavTab/NavTab';
import {Skills} from './compnonents/Skills/Skills';	
import {Portfolio} from './compnonents/Portfolio/Portfolio';
import {Contacts} from './compnonents/Contacts/Contacts';

export const App = () => {
  return (
      <div>
	  	<div id='nav'>
			<NavTab />
		</div>

		<div id='home'>
			<Home/>
		</div>

		<div id='about'>
			<About/>
		</div>

		<div id='skills'>
			<Skills/>
		</div>

		<div id='portfolio'>
			<Portfolio/>
		</div>

		<div id='contacts'>
			<Contacts/>
		</div>
      </div>
  );
}