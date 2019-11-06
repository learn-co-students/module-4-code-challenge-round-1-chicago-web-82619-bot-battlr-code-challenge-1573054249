import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'

class BotsPage extends React.Component {
  //start here with your code for step one

  state = {
    bots: [],
    myBots: []
  }

  componentDidMount = () => {
    console.log('component mounted')
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
      .then(resp => resp.json())
      .then(botsData => {
        this.setState({bots: botsData})
      })
  }

  handleBotAdd = (bot) => {
    if (!this.state.myBots.includes(bot)) {
      this.setState(prevState=> {
        return {
          myBots: [...prevState.myBots, bot]
        }
      }
      )
    }
  }

  handleBotRemove = (botObj) => {
    console.log('removing bot', botObj)
    const myNewBots = this.state.myBots.filter(bot => {
      return bot.id !== botObj.id
    })
    this.setState({myBots: myNewBots})
  }

  render() {
    return (
      <div>
        <YourBotArmy myBots={this.state.myBots} handleBotRemove={this.handleBotRemove}/>
        <BotCollection bots={this.state.bots} handleBotAdd={this.handleBotAdd}/>
      </div>
    );
  }

}

export default BotsPage;
