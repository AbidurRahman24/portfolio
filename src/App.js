import Header from "./component/Header/Header";
import Hero from "./component/Hero/Hero";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "./component/About/About";
import Contact from "./component/Contact/Contact";
import NoMatch from "./component/NoMatch/NoMatch";
import Project from "./component/Project/Project";
import NewsDetails from "./component/NewsDetails/NewsDetails";

function App() {
  return (
    <div>
      <Header />
      <Router>
        <Switch>
          <Route path="/home">
            <Hero />
          </Route>
          <Route exact path="/">
            <Hero />
          </Route>
          <Route path='/about'>
            <About></About>
          </Route>
          <Route path='/project'>
            <Project></Project>
          </Route>
          <Route path='news/:id'>
            <NewsDetails />
          </Route>
          <Route path='/contact'>
            <Contact></Contact>
          </Route>
          <Route path='*'>
            <NoMatch></NoMatch>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
