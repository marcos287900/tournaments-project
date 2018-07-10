import React from 'react'
import { Route} from 'react-router'
import JuryScreen from './components/JuryScreen'
import BattlePublic from './components/BattlePublic'
import {  BrowserRouter } from 'react-router-dom'
import App from './App'
import { browserHistory} from "react-router";
import Players from "./components/Players";

const routes = (

  <BrowserRouter history={browserHistory} path="/" component={App}>
      <Route path="battleJury/:juryName" component={JuryScreen} />
      <Route path="battle" component={BattlePublic} />
      <Route path="players" component={Players} />
  </BrowserRouter>
);

export default routes
