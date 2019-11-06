import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  constructor(props) {
		super(props)
	}

  render(){

    //maps through bots array and selects bots that have a selected status of true
    //passes the bot as prop to the BotCard when called in render-return
    const visibleBot = this.props.bots.map(bot => {
      if(bot.selected === true) {
        return <BotCard bot={bot} handleClick={this.props.handleClick}/>
      }
    })

    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {visibleBot}
          </div>
        </div>
      </div>
    );
  }
  
};

export default YourBotArmy;
