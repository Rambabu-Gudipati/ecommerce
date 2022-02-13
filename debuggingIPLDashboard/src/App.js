import {Route, Switch} from 'react-router-dom'

import Home from './components/Home'
import NotFound from './components/NotFound'
import TeamMatches from './components/TeamMatches'

import './App.css'

const App = () => (
  <Switch>
    <Route path="/" component={Home} />
    <Route path="/TeamMatches/:id" />
    <Route component={NotFound} />
  </Switch>
)

export default App
