import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here


  render() {
	   const botCards = this.props.bots.map((bot) => {
	   return <BotCard bot={bot} handleBotSelection={this.props.handleBotSelection}/>
	})

  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {/*...and here..*/}
			  {botCards}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
