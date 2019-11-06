import React from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";
import BotSpecs from "../components/BotSpecs";

class BotsPage extends React.Component {

  state = {
    bots: [],
    army: []
  };

  componentDidMount() {
    fetch("https://bot-battler-api.herokuapp.com/api/v1/bots")
      .then(res => res.json())
      .then(data => {
        const bots = data.map(bot => {
          return {
            ...bot, isEnlisted: false
          }
        })
        this.setState({bots})
      });
  }

  changeArmyStatus = bot => {

    if(bot.isEnlisted == false){
      const updatedBots = this.state.bots.map(b => {
        if(b.id == bot.id){
          return {
            ...b, isEnlisted: true
          }
        } else {
          return b
        }
      })
      console.log(updatedBots)
      this.setState({
        army: [...this.state.army, bot],
        bots: updatedBots
      });
    } else {
      const updatedBots = this.state.bots.map(b => {
        if(b.id == bot.id){
          return {
            ...b, isEnlisted: false
          }
        } else {
          return b
        }
      })
      console.log(updatedBots)
      this.setState({
        bots: updatedBots
      });
    }
  };
  
  render() {
    return (
      <div>
        <YourBotArmy bots={this.state.army} changeArmyStatus={this.changeArmyStatus}/>
        <BotCollection bots={this.state.bots} changeArmyStatus={this.changeArmyStatus} />
      </div>
    );
  }

}

export default BotsPage;
