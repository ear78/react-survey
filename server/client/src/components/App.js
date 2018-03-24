import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './Header';
import Dashboard from './Dashboard';
import SurveyNew from './SurveyNew';
import Landing from './Landing';

class App extends React.Component{
    render(){
        return (

            <BrowserRouter>
                <div>
                    <Header />
                    <Route exact path="/" component={Landing} />
                    <Route exact path="/surveys" component={Dashboard} />
                    <Route path="/surveys/new" component={SurveyNew} />
                </div>
            </BrowserRouter>

        )
    }

};

export default App;
