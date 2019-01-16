import React from "react";
import "./Title.css";

function Title(props) {
  return (
    <div className="navbar-fixed">
		  <nav> 
        <div className="nav-wrapper container">
          <h1 className="title">{props.children}</h1>
          <h4 className="center">Game Instructions:</h4>
				<ol>
					<li>Click on an Image to start the game.</li>
					<li>Every time you click an image, the images will rearrange.</li>
					<li>Use your memory to not pick the same image.</li>
					<li>If you click all 12 images without repeating...You Win!</li>
        </ol>
          <p className="card-text">Score: {props.score}</p>
          <p className="card-text">Top Score: {props.topScore}</p>
        </div>  
      </nav>
    </div>
  ); 
}

export default Title;
