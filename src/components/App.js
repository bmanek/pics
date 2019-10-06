import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar'

require('dotenv').config()

const API_KEY = process.env.REACT_APP_ACCESS_KEY
const SECRET_KEY = process.env.REACT_APP_SECRET_KEY

class App extends React.Component {
  state = { images: [] }

  onSearchSubmit = async (term) => {
    const response = await axios
      .get('https://api.unsplash.com/search/photos', {
        params: {query: term},
        headers: {
          Authorization: `Client-ID ${API_KEY}`
        }
      })

    this.setState({ images: response.data.results})
  }

  render() {
    return(
      <div className="ui container" style={{marginTop: '10px'}}>
        <SearchBar onSubmit={this.onSearchSubmit}/>
        Found: {this.state.images.length} images
      </div>
    )
  }
}

export default App
