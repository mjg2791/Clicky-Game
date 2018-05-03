import React from 'react';
import "./Game.css";

const Game = props => (
	<div className="Game">
		<img className="rbs" onClick={() => 
			props.updateState(props.id)} 
			alt={props.name} 
			src={props.image} 
			/>
	</div>
	);

export default Game;