import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  constructor(props) {
	  super(props)
  }

  displayBots = () => {
	  if(this.props.bots[0]) {
		return this.props.bots.map(bot => {
			return <BotCard bot={bot} handleClick={this.props.handleEnlist} />
		})  
	  }
  }

  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  { this.displayBots() } 
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
