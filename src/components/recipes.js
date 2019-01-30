import React from 'react';

const Recipes = (props) => (
    <div className="container">
        <div className="row">
            { 
					props.recipes.map((recipe) => {
						return (
							<div className="col-sm-4" key={recipe.recipe_id}>
								<div className="card mgb-15" style={{width:"18rem"}}>
									<img className="card-img-top img-height" src={recipe.image_url} alt={recipe.title} />
										<div className="card-body pd-15">
											<h6 className="card-title">	
												{recipe.title.length < 20 ? `${recipe.title}` : `${recipe.title.substring(0, 25)}...`}
											</h6>
											<p className="">Publisher:<span> {recipe.publisher}</span></p>
											<button className="btn btn-outline-dark">View More</button>
										</div>
								</div>
							</div>
						);
					})
            }
        </div>
    </div>
)

export default Recipes