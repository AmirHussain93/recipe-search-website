import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import App from '../App';
import RecipeDescription from './RecipeDescription';

const Router = () => (
    <div>
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={App} />
                <Route path="/recipe/:id" component={RecipeDescription} />
            </Switch>
        </BrowserRouter>
    </div>
)

export default Router