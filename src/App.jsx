import React from 'react'
import './App.css'
import Box from './component/box/Box'
import BreadCrump from './component/breadCrump/BreadCrump'
import Container from './component/container/Container'
import Header from './component/header/Header'
import Navigation from './component/navigation/Navigation'

import {menu} from './data/data'

const App = () => {
  return (
    <div className="layout-wrapper">

      <Header />

      <div className="layout-container">
        <Navigation menu={menu} />
        <Container>
          <BreadCrump />
          <Box>
              box
          </Box>
          <Box>
              box
          </Box>
          <Box>
              box
          </Box>
          <Box>
              box
          </Box>
          
        </Container>
      </div>

    </div>
  )
}

export default App