import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  displayBots = () => {
	  if(this.props.botArmy[0]) {
      return this.props.botArmy.map(bot => {
        return <BotCard bot={bot} handleClick={this.props.handleRemove} />
      })  
	  }
  }

  render(){
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            { this.displayBots() }
          </div>
        </div>
      </div>
    );
  }
  
};

export default YourBotArmy;
