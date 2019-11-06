import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from "./YourBotArmy"
import BotSpecs from "../components/BotSpecs"
import FilterBar from "../components/FilterBar"

class BotsPage extends React.Component {
  //start here with your code for step one
  constructor() {
    super()
    this.state = {
      bots: [],
      showBots: [],
      myBots: [],
      show: true,
      showBot: {},
      filter: ""
    }
  }

  changeSort = event => {
    if (event.target.value === "Health"){
      this.state.showBots.sort((a, b) => a.health - b.health)
    }
    else if (event.target.value === "Damage"){
      this.state.showBots.sort((a, b) => a.damage - b.damage)
    }
    else if (event.target.value === "Armor"){
      this.state.showBots.sort((a, b) => a.armor - b.armor)
    }
  }

  changeFilter = event => {
    console.log(event.target.value)
    let newShowBots = this.state.bots
    if (event.target.value !== ""){
      newShowBots = newShowBots.filter(bot => bot.bot_class === event.target.value)
    }
    this.setState({
      showBots: newShowBots
    })
  }
  componentDidMount () {
    fetch("https://bot-battler-api.herokuapp.com/api/v1/bots")
    .then(resp => resp.json())
    .then(json => {
      this.setState({
        bots: json,
        showBots: json
      })
    })
  }

  handleShow = bot => {
    this.setState({
      show: false,
      showBot: bot
    })
  }

  handleAdd = bot => {
    const myBots = this.state.myBots;
    if (!myBots.includes(bot)){
      myBots.push(bot)
    }
    else {
      alert("You already have that bot")
    }
    this.setState({
      myBots,
      show: true
    })
  }

  handleRemove = inBot => {
    const myBots = this.state.myBots.filter(bot => bot !== inBot)
    this.setState({
      myBots
    })
  }

  handleBack = () => {
    this.setState({
      show: true
    })
  }

  render() {
    return (
      <div>
        <YourBotArmy handleClick={this.handleRemove} bots={this.state.myBots}/>
        {this.state.show
         ?
         <div>
          <FilterBar changeSort={this.changeSort} changeFilter={this.changeFilter}/>
          <BotCollection handleClick={this.handleShow} bots={this.state.showBots}/>
        </div>
        :
        <BotSpecs handleAdd={this.handleAdd} handleBack={this.handleBack} bot={this.state.showBot}/>
        }
        {/* put your components here */}
      </div>
    );
  }

}

export default BotsPage;
