
import './App.css';
import React from 'react';
import ye from './ye.png';

class QuoteGenerator extends React.Component {
  constructor(props){
    super(props)
    this.state={
      index:"",
      change: false
    }
   this.generate = this.generate.bind(this); 
  }
  generate(){
    this.setState((state) => ({
      index: Math.floor(Math.random() * 10),
      change: !state.change
    })); 
  }
  render(){
    const quotes =['"I be taking naps."', '"Stop texting. Go find God. Come back after you found God."', '"THERES A SKETE LURKING IN EVERY DIRTY ASS ALLEY WAITING TO HELP DESTROY YOUR FAMILY AND WALK AROUND IN CALVIN KLEINS AROUND YOUR CHILDREN"', '"WE ALL SPEAK IN BILLIE LANGUAGE NOW"', '"God saved me from that crash just so I can beat Pete Davidson\'s ass"','"Put my fist in her like a civil rights sign"', '"I love your titties cause they prove I can focus on two things at once"','"Kris Jong-Un"','"Look at Gaga, shes the creative director of Polaroid. I like some of the Gaga songs. What the fuck does she know about cameras?"','"Poopy-di scoop. Scoop-diddy-whoop. Whoop-di-scoop-di-poop. Poop-di-scoopty"']
    const randomQuote = quotes[this.state.index];
    return (
      <div className="container">
        <div className="App">
          <h1 className="title">QUOTES BY YE</h1>
          <img className="yeezy" src={ye} />
          <button onClick={this.generate} className="generate">GENERATE</button>
        </div>
        <div className="quotediv">
          <p className={this.state.change === false? "fadein1": "fadein2"}>{randomQuote}</p>
        </div>
      </div>
    )
  }
}




export default QuoteGenerator;
