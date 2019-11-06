import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'

const API = 'https://bot-battler-api.herokuapp.com/api/v1/bots'

class BotsPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      bots: [],
      botArmy: []
    }
  }
  
  componentDidMount() {
    fetch(API) 
    .then(res => res.json())
    .then(data => {
      this.setState({
        bots: data
      })
    })
  }

  handleEnlist = (bot) => {
    if(!this.state.botArmy.includes(bot)){
      const enlisted = [...this.state.botArmy, bot]
      this.setState({
        botArmy: enlisted
      })
    }
  }

  handleRemove = (selectedBot) => {
    if(this.state.botArmy.includes(selectedBot)){
      const updatedArmy = this.state.botArmy.filter(bot => bot.id !== selectedBot.id)
      this.setState({
        botArmy: updatedArmy
      })
    }
  }

  render() {
    return (
      <div>
        <YourBotArmy handleRemove={this.handleRemove} botArmy={this.state.botArmy} />
        <BotCollection bots={this.state.bots} handleEnlist={this.handleEnlist} />
      </div>
    );
  }

}

export default BotsPage;
