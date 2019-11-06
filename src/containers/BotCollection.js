import React from "react";
import BotCard from "../components/BotCard";
import BotSpecs from "../components/BotSpecs";

class BotCollection extends React.Component {
	state = {
		selectedBot: false
	}

	handleSelectedBot = (bot) => {
		this.setState({selectedBot: bot})
	}

	handleGoBack = () => {
		this.setState({selectedBot: false})
	}

  render(){
  	return (
  	  <div className="ui four column grid">
				<div className="row">
				  {this.state.selectedBot && <BotSpecs  bot={this.state.selectedBot} addBotToArmy={this.props.addBotToArmy} handleGoBack={this.handleGoBack}/>}
					{!this.state.selectedBot && this.props.bots.map(bot => <BotCard key={bot.id} bot={bot} handleSelectedBot={this.handleSelectedBot}/>)}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
