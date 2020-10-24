import React from 'react';
import './scss/main.scss';
import HomeHeads from "./components/LandingPage/HomeHeads";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ProductsMain from "./components/LandingPage/ProductsMain";
import ProductsBee from "./components/LandingPage/ProductsBee";
import ProductsOther from "./components/LandingPage/ProductsOther";
import AboutUs from "./components/LandingPage/AboutUs";
import Contact from "./components/LandingPage/Contact";

function App() {
  return (
      <>
        {/*<div className="App">*/}
        <Router>
            <Switch>
                <Route path={'/'} exact component={HomeHeads}/>
                <Route path={'/productsMain'} exact component={ProductsMain}/>
                <Route path={'/productsBee'} exact component={ProductsBee}/>
                <Route path={'/productsOther'} exact component={ProductsOther}/>
                <Route path={'/aboutUs'} exact component={AboutUs}/>
                <Route path={'/contact'} exact component={Contact}/>

            </Switch>

        </Router>

        {/*</div>*/}
          </>
  );
}

export default App;
