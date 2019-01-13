import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import HomeContainer from '../../views/Home/HomeContainer';
import CategoryContainer from '../../views/Category/CategoryContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <svg className="svgBackground0" width="1440" height="861" viewBox="0 0 1440 861" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 593.372C52.1889 543.472 186.39 375.5 386 375.5C635.513 375.5 649.131 443.674 748.538 405.059C847.945 366.445 939.458 160.243 1184 64.5C1355.03 -2.46134 1442.62 15.8795 1453.87 6.23648L1454 0C1455.52 2.88284 1455.48 4.84924 1453.87 6.23648L1435.44 860.5H0V593.372Z" fill="url(#paint0_linear)"/>
          <defs>
          <linearGradient id="paint0_linear" x1="1382.5" y1="142.5" x2="8.26731e-05" y2="860.5" gradientUnits="userSpaceOnUse">
          <stop stopColor="#8248FF"/>
          <stop offset="1" stopColor="#4CB3FF"/>
          </linearGradient>
          </defs>
        </svg>
        <svg className="svgBackground1" width="1440" height="841" viewBox="0 0 1440 841" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 574.872C52.1889 524.972 206.469 425.174 406.079 425.174C655.592 425.174 649.131 425.174 748.538 386.559C847.945 347.945 982.643 262.252 1227.18 166.509C1376.31 108.125 1429.06 55.61 1440.36 23.7876L1440.5 0.5C1443.38 5.94966 1443.88 13.8621 1440.36 23.7876L1435.44 842H0V574.872Z" fill="url(#paint0_linear)"/>
          <defs>
          <linearGradient id="paint0_linear" x1="1382.5" y1="124" x2="-2.84378e-05" y2="842" gradientUnits="userSpaceOnUse">
          <stop stopColor="#8248FF"/>
          <stop offset="1" stopColor="#4CB3FF"/>
          </linearGradient>
          </defs>
        </svg>
        <Router>
          <Fragment>
            <Route exact path="/" component={HomeContainer} />
            <Route path="/categories/:id" component={CategoryContainer} />
          </Fragment>
        </Router>
      </div>
    );
  }
}

export default App;
