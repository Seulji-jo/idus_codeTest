import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
/**** Components ****/
import Header from './components/Header';
import CardUi from './components/CardUi';
import TextBoxFormUi from './components/TextBoxFormUi';

import './style/App.scss';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={CardUi} />
        <Route path="/card" component={CardUi} />
        <Route path="/textbox" component={TextBoxFormUi} />
      </Switch>
    </Router>
  );
}

export default App;
