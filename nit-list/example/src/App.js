import React from 'react'

import NitList from 'nit-list'
import 'nit-list/dist/index.css'

const App = () => {
  return <NitList title="Players" data={['Sachin','Dhoni','Kohli']}/>
}

export default App
