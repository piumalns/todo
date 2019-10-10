import React from 'react';
import './App.css';
import Home from './component/home';
import Complete from './component/complete'
import Navbar from './component/navbar'
import Delete from './component/delete'
import { BrowserRouter as Router ,Switch, Route} from 'react-router-dom';
import Form from './component/newTodo'
import newTodo from './component/newTodo';

function App() {

  return (
    // <Router>
    //   <Navbar/>
    //   <Switch>
    //   <Route path="/" exact component={Home}/>
    //   <Route path="/delete" component={Delete}/>
    //   <Route path="/complete" component={Complete}/>
    //   </Switch>
    // </Router>
    <Form/>
  );
}

export default App;
