import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CardList from './Component/CardList';
import Form from './Component/forms.js';

class App extends Component {

  state = {cards : []}


onFormSubmit = (addNewCard) =>{

this.setState((prevState) =>({

cards : prevState.cards.concat(addNewCard)

}));
}

render() {
    return (
      <div>
      <Form onSubmitForm = {this.onFormSubmit}/>
      <CardList cards = {this.state.cards} />
      </div>
    );
  }
}

export default App;
