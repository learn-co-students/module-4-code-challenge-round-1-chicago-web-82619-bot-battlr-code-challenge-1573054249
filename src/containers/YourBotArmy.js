import React from "react";
import MyBotCard from "../components/MyBotCard";

class YourBotArmy extends React.Component {
  //your bot army code here...

  render(){
    const { myBots } = this.props

    const allMyBots = myBots.map(bot => {
      return <MyBotCard bot={bot} key={bot.id} id={bot.id} handleBotRemove={this.props.handleBotRemove}/>
    })

    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {allMyBots}
          </div>
        </div>
      </div>
    );
  }

};

export default YourBotArmy;
