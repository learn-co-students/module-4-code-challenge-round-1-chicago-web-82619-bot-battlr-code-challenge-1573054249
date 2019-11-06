import React from "react";
import BotCard from "../components/BotCard";

const YourBotArmy = props => {
  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {props.bots.length > 0 ? props.bots.map(bot => <BotCard key={bot.id} bot={bot} changeArmyStatus={props.changeArmyStatus}/>) : <h3>01010111 01100101 00100000 01110111 01100001 01101110 01110100 00100000 01111001 01101111 01110101!</h3>}
        </div>
      </div>
    </div>
  );
};

export default YourBotArmy;