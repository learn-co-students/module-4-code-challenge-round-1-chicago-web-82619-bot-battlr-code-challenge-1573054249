import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
	constructor(props) {
		super(props)
	}
	
	render(){
	//maps through the array of all the bots and sends single bot data to BotCard
	const botData = this.props.bots.map(bot => {
		return <BotCard bot={bot} handleClick={this.props.handleClick}/>
	})

  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {botData}
    		  Collection of all bots
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
