import React from "react";
import classes from "./List.module.scss";
import Valorant from "../img/Valorants-new-character-Chamber.jpeg";

const List = ({ data }) => {
  console.log(data);
  const filteredData = data.filter(
    (agent) => agent.isPlayableCharacter === true
  );
  return (
    <div className={classes.list}>
      {filteredData.map((agent) => (
        <div className={classes.list_content}>
          <div className={classes.card}>
            <div key={data.uuid} className={classes.card_content}>
              <div className={classes.poster}>
                <img src={agent.bustPortrait} />
              </div>
            </div>
          </div>
          <div className={classes.info}>
            <div className={classes.header}>
              <h1>{agent.displayName}</h1>
              <p>{agent.role.displayName}</p>
            </div>
            <p className={classes.description}>{agent.description}</p>
            <div className={classes.abilities}>
              {agent.abilities.map((ability) => (
                <div className={classes.abilities_content}>
                  <img src={ability.displayIcon} />
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default List;
