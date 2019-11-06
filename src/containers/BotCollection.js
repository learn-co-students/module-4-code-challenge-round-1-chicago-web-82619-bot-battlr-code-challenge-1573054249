import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here

  render(){
	const botsList = this.props.bots.map(bot => <BotCard handleClick={this.props.handleClick} key={bot.id} bot={bot}/>)
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {botsList}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
