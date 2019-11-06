import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'
import BotSpec from '../components/BotSpecs'

const API = 'https://bot-battler-api.herokuapp.com/api/v1/bots'

class BotsPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      bots: [],
      botArmy: [],
      display: false
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

  handleDisplay = (bot) => {
    this.setState({
      display: bot
    })
  }
  
  handleRemove = (selectedBot) => {
    if(this.state.botArmy.includes(selectedBot)){
      const updatedArmy = this.state.botArmy.filter(bot => bot.id !== selectedBot.id)
      this.setState({
        botArmy: updatedArmy
      })
    }
  }
  
  handleEnlist = (bot) => {
    if(!this.state.botArmy.includes(bot)){
      const enlisted = [...this.state.botArmy, bot]
      this.setState({
        botArmy: enlisted,
        display: false
      })
    }
  }

  handleBack = () => {
    this.setState({
      display: false
    })
  }

  render() {
    return (
      <div>
        <YourBotArmy 
          handleRemove={this.handleRemove} 
          botArmy={this.state.botArmy} 
          />

        { 
        !this.state.display 
          ?
        <BotCollection 
          bots={this.state.bots} 
          handleDisplay={this.handleDisplay}
          />
          :
        <BotSpec 
          bot={this.state.display}
          handleBack={this.handleBack}
          handleEnlist={this.handleEnlist} 
          />
        }
      </div>
    );
  }

}

export default BotsPage;
