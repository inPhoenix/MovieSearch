import React, { Component } from 'react'
import Header from './components/Header/Header'
import MovieSearch from './containers/MovieSearch/MovieSearch'
class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <MovieSearch />
        <div />
      </div>
    )
  }
}

export default App
// Public code added to github recognise the language