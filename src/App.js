import React, { Component } from 'react';
import Footer from './components/Footer/Footer.js';
import ImageCard from './components/ImageCard/ImageCard.js';
import Title from './components/Title/Title.js'
import ImageCards from './ImageCards.json';
import './index.css';


class App extends Component {
  state = {
      ImageCards: ImageCards,
      score: 0,
      topScore: 0,
      clickedCards: [],
      footerText: ""
    }

  clickedCharacter = (id) => {
    const [pageBody] = document.getElementsByTagName('body');

    if (this.state.clickedCards.includes(id)) {
      this.setState({score: 0, clickedCards: []})

      pageBody.classList.add('shakeWrapper')
      this.setState({footerText: 'You picked that already! Start Over.'})
      setTimeout(() => {
        pageBody.classList.remove('shakeWrapper');
      }, 500);
      setTimeout(() => {
        this.setState({footerText: ""})
      }, 1800)

    } else {
      this.setState({clickedCards: [...this.state.clickedCards, id]})
      this.setState({score: this.state.score + 1})
      if (this.state.score >= this.state.topScore) {
        this.setState({topScore: this.state.score + 1})

      } 
      if (this.state.score === 11) {
        this.setState({footerText: 'You Won! Play again?'})
        this.setState({score: 0, clickedCards: [], ImageCards: ImageCards})
        setTimeout(() => {
          this.setState({footerText: ''})
        }, 1800)
      } 
    }
  }

    reArrangeCards = (array) => {
    let currentIndex = array.length;

    while (0 !== currentIndex) {
      // Pick a remaining element...
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      // And swap it with the current element.
      let temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    this.setState({ImageCards: ImageCards});
  }

  renderCards = (array) => {
    return this.state.ImageCards.map(card => (
      <section className='col s4 m3 l3' key={card.id} id={card.id}>
        <ImageCard
          name={card.name} 
          image={card.image} 
          reArrangeCards={() => {this.reArrangeCards(this.state.ImageCards)}}
          clickedCharacter={() => {this.clickedCharacter(card.id)}}/>
      </section>
      )
    )
  }


  render() {
    return (
      <div className="container-fluid">
        <Title score={this.state.score} topScore={this.state.topScore}/>
        <br />
        <div className="container row cardWrapper">
          {this.renderCards(this.state.ImageCards)}
        </div>
        <Footer text={this.state.footerText}/>
      </div>
    );
  }
}





export default App;