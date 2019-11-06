import React from "react";
import BotCollection from "./BotCollection"
import YourBotArmy from "./YourBotArmy"
import BotSpecs from '../components/BotSpecs'

class BotsPage extends React.Component {
  //start here with your code for step one

  state = {
    bots: [],
    selectedBots: [],
    showBot: {}
  }

async componentDidMount() {
  let resp = await fetch("https://bot-battler-api.herokuapp.com/api/v1/bots")
  let botsData = await resp.json()
  this.setState({
    bots: botsData
  })
}

handleBotSelection = (bot) => {

 if (this.state.selectedBots.includes(bot)) {
   const newBots = this.state.selectedBots.filter( botEl=> bot !== botEl ) 

   this.setState({selectedBots: newBots})
 }
}

setShowBot = (bot) => {
  this.setState({showBot: bot})
}

addBotToArmy = (bot) => {
  let oldArmy = this.state.selectedBots
  if (!oldArmy.includes(bot)) {
  this.setState({
    selectedBots: [...oldArmy, bot]
  })}
}

clearShowBot = () => {this.setState({showBot: {}})}



  render() {
    return (
      <div>
        {/* put your components here */}
        <YourBotArmy army={this.state.selectedBots} handleBotSelection={this.handleBotSelection}/>
        {this.state.showBot.name ?
        <BotSpecs bot={this.state.showBot} goBack={this.clearShowBot} addBotToArmy={this.addBotToArmy}/>
        :
        <BotCollection bots={this.state.bots} handleBotSelection={this.setShowBot}/>}
      </div>
    );
  }

}

export default BotsPage;
