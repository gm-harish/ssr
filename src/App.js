import './App.css';
import React, {lazy, Suspense} from 'react';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';
// import Home from './pages/Home';
// import Articles from './pages/Articles';
// import About from './pages/About';

const About = lazy(() => import('./pages/About'));
const Articles = lazy(() => import('./pages/Articles'));
const Home = lazy(() => import('./pages/Home'));

function App() {
  //server side issues
  // this would not work becuase it is being served side rendered and window is not present in server but in browser
  // we will get error window is not defined
  // console.log(window.location);
  // console.log(document)

  return (
    <BrowserRouter>
      <h1>Server Side Rendering</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/articles">Articles</Link>
        </li>
      </ul>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} exact />
          <Route path="/articles" component={Articles} exact />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
