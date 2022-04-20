import React, { useState, useEffect } from "react";
import { API_URL } from "../Utils";
import { get } from "lodash";
import "./PlayerList.css";
import Card from "../components/Card";

function PlayerList() {
  const [displayList, setDisplayList] = useState([]);
  const [playerList, setPlayerList] = useState([]);

  useEffect(() => {
    fetch(API_URL).then((response) => {
      response.json()
    .then((res) => {

     setPlayerList(get(res, "playerList", []).sort((a, b) => Number(a.Value) - Number(b.Value)) );
     setDisplayList(get(res, "playerList", []).sort((a, b) => Number(a.Value) - Number(b.Value)) );

        }).catch((e) => {
         setPlayerList([]);       
         setDisplayList([]);
        });
   });
 }, []);

  const displayPlayer = (player) => {
    return <Card player={player} />; 
  };

  const filterElements = (searchString) => {
    const filtered = playerList.filter((player) => {
      return (
        player.TName.toLowerCase().startsWith(searchString) ||
        player.PFName.toLowerCase().startsWith(searchString)
      );
    });
    return filtered;
  };

  const handleSearchange = (e) => {
    const searchString = e.target.value;
    const updatedList =
      filterElements(searchString.toLowerCase()) || playerList;
    setDisplayList(updatedList);
  };

  return (
    <>
      <input
        onChange={(e) => handleSearchange(e)}
        type="search"
        placeholder="Search Player's Name/Team"
        className="searchbox"
      />

      <div className="playerList">
        {displayList.map((player) => displayPlayer(player))}
      </div>
    </>
  );
}

export default PlayerList;
