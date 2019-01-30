import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const API_KEY = '2c2950a97a8a48550bc2fcfb6015b5c9';
class RecipeDescription extends Component {
	state = {
		activeRecipe: []
	}

	componentDidMount = async () => {
		const title = this.props.location.state.recipe;
		const request = await fetch(`https://www.food2fork.com/api/search?key=${API_KEY}&q=${title}`);
  
		const response = await request.json();
		this.setState({
			activeRecipe:response.recipes[0]
		})
		console.log(this.state.activeRecipe);
	}

	render() {
		const recipe = this.state.activeRecipe;
		return (
				<div className="container">
					{ this.state.activeRecipe.length !== 0 && 
						<div className="">
						<img className="" src={recipe.image_url} alt={recipe.title}/>
						<h3 className="">{recipe.title}</h3>
						<h4 className="">Publisher: <span>{recipe.publisher}</span></h4>
						<p className="">Website:
						<span><a href={recipe.publisher_url}>{recipe.publisher_url}</a></span>
						</p>
						<button className="">
							<Link to="/">Go Home</Link>
						</button>
					</div>
					}
				</div>
		)
	}
}

export default RecipeDescription