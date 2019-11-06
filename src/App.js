import React, { Component } from "react";
import BotsPage from "./containers/BotsPage";
import "./App.css";
import YourBotArmy from "./containers/YourBotArmy";

const API = 'https://bot-battler-api.herokuapp.com/api/v1/bots'

class App extends Component {

  state = {
    bots: [],
    enlistedBots: []
  }

componentDidMount() {
  fetch(API)
  .then(resp => resp.json())
  .then(bots => {
    this.setState({
      bots
    })
  })
}

addBot = (bot) => {
  if (!this.state.enlistedBots.includes(bot)) {
    this.setState({
      enlistedBots: [...this.state.enlistedBots, bot]
    })
  } else {
    return
  }
}

removeBot = (botToRemove) => {
  this.setState({
    enlistedBots: this.state.enlistedBots.filter(bot => bot !== botToRemove)
  })
}

  render() {
    return (
      <div className="App">
        <YourBotArmy bots={this.state.enlistedBots} removeBot={this.removeBot}/>
        <BotsPage bots={this.state.bots} addBot={this.addBot}/>
      </div>
    );
  }
}

export default App;
