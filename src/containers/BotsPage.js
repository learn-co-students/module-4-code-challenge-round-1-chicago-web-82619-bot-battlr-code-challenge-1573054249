import React from "react";
import BotCollection from './BotCollection';
import YourBotArmy from './YourBotArmy';

class BotsPage extends React.Component {
  state = {
    bots: [],
    myArmy: []
  }

  componentDidMount() {
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
      .then(resp => resp.json())
      .then(data => {
        this.setState({
          bots: data
        })
      })
  }

  addBotToArmy = (bot) => {
    if(this.state.myArmy.includes(bot)) {
      return
    }
    let updatedArmy = [...this.state.myArmy, bot]
    this.setState({myArmy: updatedArmy})
  }

  render() {
    return (
      <div>
        <YourBotArmy bots={this.state.myArmy} />
        <BotCollection bots={this.state.bots} addBotToArmy={this.addBotToArmy}/>
      </div>
    );
  }

}

export default BotsPage;
