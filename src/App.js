import React, { Component } from 'react';
import './App.css';
import Form from './components/Form';
import Recipes from './components/Recipes';

const API_KEY = '7738efcc285f0ff0dfcb63044a744030';
class App extends Component {

  state = {
    recipes: []
  }

  getRecipe = async (e) => {
    const recipeName = e.target.elements.recipename.value;
    e.preventDefault();
    const api_call = await fetch(`https://www.food2fork.com/api/search?key=${API_KEY}&q=${recipeName}&count=10`);

    const data = await api_call.json();
    this.setState({
      recipes: data.recipes
    });
  }

  componentDidMount = () => {
    if (this.state.recipes.length > 0) {
      const json = localStorage.getItem('recipies');
      const recipes = JSON.parse(json);

      this.setState({
        recipes: recipes
      });
    }
  }

  componentDidUpdate = () => {
    const recipes = JSON.stringify(this.state.recipes);
    localStorage.setItem('recipies', recipes);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Recipe Search</h1>
        </header>
        <Form getRecipe={this.getRecipe} />
        <Recipes recipes={this.state.recipes} />
      </div>
    );
  }
}

export default App;
