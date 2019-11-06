import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here

  render(){
    const { bots } = this.props

    const allBots = bots.map(bot => {
      return <BotCard bot={bot} key={bot.id} id={bot.id} handleBotChange={this.props.handleBotAdd}/>
    })

    return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {allBots}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
