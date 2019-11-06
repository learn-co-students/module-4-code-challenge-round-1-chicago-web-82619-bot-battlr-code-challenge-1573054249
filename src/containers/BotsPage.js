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
      .then(res => this.setBots(res));
  }

  setBots = data => {
    this.setState({
      bots: data
    });
  };

  addToArmy = bot => {
    this.setState({
      army: [...this.state.army, bot]
    });
  };
  
  render() {
    return (
      <div>
        <YourBotArmy bots={this.state.army} />
        <BotCollection bots={this.state.bots} addToArmy={this.addToArmy} />
      </div>
    );
  }

}

export default BotsPage;
