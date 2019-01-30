import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Form = (props) => (
    <form onSubmit={props.getRecipe} style={{ marginBottom:"50px"}}>
        <div className="input-group input-width">
            <input className="form-control" type="text" name="recipename" placeholder="Enter recipe name"/>
            <div className="input-group-append">
                <button className="btn btn-secondary" >Search</button>
            </div>
        </div>
    </form>
);

export default Form;