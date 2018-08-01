import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import YSearch from 'youtube-api-search';

const YOUTUBE_API_KEY = 'AIzaSyAypMwkSgPExT_Sm1e6ckqlgG8GqysFxkY'

class App extends Component {

state = { videos: [] }

componentDidMount(){
  YSearch({ key: YOUTUBE_API_KEY, term: '猫　きゅうり'},
    (data) => {this.setState({videos: data});
  });
}


  render() {
    return (
      <div className="App">
        <Header />
      </div>
    );
  }
}

export default App;
