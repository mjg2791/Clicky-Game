import React from 'react';
import "./Nav.css";

const Nav = props => (
	<nav className="Nav">
		<ul>
			<li><h1 className="Nav-title">Bear Memory Game</h1></li>
			<li><h2 className="Nav-note">{props.navNote}</h2></li>
			<li><h2 className="scoreboard">Current Score: {props.currentScore} | {props.maxScore}</h2></li>
		</ul>
	</nav>
);

export default Nav;