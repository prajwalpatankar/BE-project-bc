import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NewProjectDashboard from './components/newProject/NewProjectDashboard';
import DropCsv from './components/newProject/DropCsv';


function App() {


  return (
    <BrowserRouter>
      <div className="App">
        <Switch >
          <Route exact path='/newProject' component={NewProjectDashboard} />          
          <Route exact path='/dropCsv' component={DropCsv} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}



export default App;
