import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'

class BotsPage extends React.Component {
  constructor() {
    super()
    this.state = {
      bots: [],
    }
  }

  // fetch bot data, set state with additional 'selected' property by mapping through
  // returned json, spreading the original object data, and adding 'selected' status.
  // set the state to updated array with full object properties
  async componentDidMount() {
    let resp = await fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
    let bots = await resp.json()
    const botsData = bots.map(bot => {
      return({...bot, selected: false})
    })
    this.setState({
      bots: botsData
    })
  }

  // handle click event for both adding bots to botArmy display and removing. As mentioned
  // in botCard comments, this could probaby be a conditional for two functions?
  // but in the short time frame, status of selected is tested to toggle 'selected'
  // a new array is returned with the updated status if the id's match, otherwise the original 
  // array is returned and the state is updated.
  handleClick = (bot) => {
    if(bot.selected === false) {
      let newArray = this.state.bots.map(bots => {
        if (bot.id === bots.id) {
          return {
            ...bot, 
            selected: true
          }
        } else {
          return bots
        }
      }) 
      this.setState({
        bots: newArray
      })
    } else {
      let newArray = this.state.bots.map(bots => {
        if (bot.id === bots.id) {
          return {
            ...bot, 
            selected: false
          }
        } else {
          return bots
        }
      }) 
      this.setState({
        bots: newArray
      })
    }
  }


  render() {
    return (
      <div>
        {<YourBotArmy bots={this.state.bots} handleClick={this.handleClick}/>}
        {<BotCollection bots={this.state.bots} handleClick={this.handleClick} />}
      </div>
    );
  }

}

export default BotsPage;
