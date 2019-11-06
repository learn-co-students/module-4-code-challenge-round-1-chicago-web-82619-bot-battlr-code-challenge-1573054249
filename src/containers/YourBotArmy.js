import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  //your bot army code here...
  render(){
    const botsList = this.props.bots.map(bot => <BotCard handleClick={this.props.handleClick} key={bot.id} bot={bot}/>)
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {botsList}
          </div>
        </div>
      </div>
    );
  }
  
};

export default YourBotArmy;
