import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {

  render(){
		const bots = this.props.bots
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {bots.map(bot => <BotCard key={bot.id} bot={bot} addBot={this.props.addBot} selectedBot={this.props.selectedBot}/>)}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
