import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar'

const API_KEY = process.env.REACT_APP_ACCESS_KEY
const SECRET_KEY = process.env.REACT_APP_SECRET_KEY

class App extends React.Component {

  onSearchSubmit(term) {
    // axios.get('https://api.unsplash.com/search/photos', {
    //   params: {query: term},
    //   headers: {
    //     Authorization: `Client-ID ${process.env.REACT_APP_ACCESS_KEY}`
    //   }
    // })
    console.log(term)
    console.log("API: ", API_KEY)
  }

  render() {
    return(
      <div className="ui container" style={{marginTop: '10px'}}>
        <SearchBar onSubmit={this.onSearchSubmit}/>
      </div>
    )
  }
}

export default App
