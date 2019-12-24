import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from './landingpage';
import AboutMe from './aboutme';
import Contact from './contact';
import Graphics1 from './graphics1';
import Graphics2 from './graphics2';
import Graphics3 from './graphics3';

import Resume from './resume';
import Portfolio from './portfolio';


const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/aboutme" component={AboutMe} />
    <Route path="/contact" component={Contact} />
    <Route path="/graphics1" component={Graphics1} />
    <Route path="/graphics2" component={Graphics2} />
    <Route path="/graphics3" component={Graphics3} />
   
    <Route path="/resume" component={Resume} />
    <Route path="/portfolio" component={Portfolio} />
  </Switch>
)

export default Main;
