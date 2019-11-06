import React from "react";
import BotCollection from "./BotCollection"
import YourBotArmy from "./YourBotArmy"

class BotsPage extends React.Component {
  //start here with your code for step one

  state = {
    bots: [],
    selectedBots: []
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
 else {
   let oldArmy = this.state.selectedBots
   this.setState({
     selectedBots: [...oldArmy, bot]
   })
 }
}


  render() {
    return (
      <div>
        {/* put your components here */}
        <YourBotArmy army={this.state.selectedBots} handleBotSelection={this.handleBotSelection}/>
        <BotCollection bots={this.state.bots} handleBotSelection={this.handleBotSelection}/>
      </div>
    );
  }

}

export default BotsPage;
