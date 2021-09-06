import './App.css';
import React from 'react'

import Phonebook from './components/Phonebook';
import data from './components/data.json'

const App = () => {
  return (
    <Phonebook contacts={data} />
  )
}

export default App
