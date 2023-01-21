import React from 'react'
import Account from './Account'
import Claim from './Claim'

const HomeContent = () => {
  return (
    <React.Fragment>
        <h1>HomeContent</h1>
        <Claim/>
        <br/><br/>
        <Account/>
    </React.Fragment>
  )
}

export default HomeContent