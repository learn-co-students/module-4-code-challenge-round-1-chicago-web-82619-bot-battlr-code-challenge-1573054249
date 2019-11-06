import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here

  render(){
		const bots = this.props.bots
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {bots.map(bot => <BotCard key={bot.id} bot={bot} addBot={this.props.addBot}/>)}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
