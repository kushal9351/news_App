// import './App.css';
import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

  
  

const App = () => {
  const [progress, setProgress] = useState(0);

  const pageSize = 5;
  const apiKey = process.env.REACT_APP_NEWS_API

    return (
      <div > // class="p-3 mb-2 bg-info text-dark"
        <Router>
          <Navbar />
          <LoadingBar
            height={3}
            color='#f11946'
            progress={progress}
          />
          <Switch>
            <Route exact path="/"><News setProgress={setProgress} apiKey={apiKey} key="/" pages={pageSize} country="in" category="general" /></Route>
            <Route exact path="/business" ><News setProgress={setProgress} apiKey={apiKey} key="business" pages={pageSize} country="in" category="business" /></Route>
            <Route exact path="/entertainment"><News setProgress={setProgress} apiKey={apiKey} key="entertainment" pages={pageSize} country="in" category="entertainment" /></Route>
            <Route exact path="/general"><News setProgress={setProgress} apiKey={apiKey} key="general" pages={pageSize} country="in" category="general" /></Route>
            <Route exact path="/health"><News setProgress={setProgress} apiKey={apiKey} key="health" pages={pageSize} country="in" category="health" /></Route>
            <Route exact path="/science"><News setProgress={setProgress} apiKey={apiKey} key="science" pages={pageSize} country="in" category="science" /></Route>
            <Route exact path="/sports"><News setProgress={setProgress} apiKey={apiKey} key="sports" pages={pageSize} country="in" category="sports" /></Route>
            <Route exact path="/technology"><News setProgress={setProgress} apiKey={apiKey} key="technology" pages={pageSize} country="in" category="technology" /></Route>
          </Switch>
        </Router>
      </div>
    )

}

export default App
