import React from "react";
import "./Card.css";

function Card(prop) {
  const { player } = prop;

  return (
    <>
      <div className="card" key={player.Id}>
        <img
          className="cardImg"
          src={require(`../player-images/${player.Id}.jpg`)}
        />
         <div className="name">
          <h3>{player.PFName}</h3>
 </div>

        <div className="skill">
          <h4>Skill &nbsp; : &nbsp; {player.SkillDesc}</h4>
        </div>

        <div className="value">
          <h4> Value : &nbsp; {player.Value} $</h4>
        </div>

        <div className="match">
          <h4>
            {" "} Upcoming Match : &nbsp; { player.UpComingMatchesList[0].CCode } vs {player.UpComingMatchesList[0].VsCCode}{" "}
          </h4>
        </div>

        <div className="date">
          <h4> Date : &nbsp; {player.UpComingMatchesList[0].MDate} </h4>
        </div> 
      </div>
    </>
  );
}

export default Card;
