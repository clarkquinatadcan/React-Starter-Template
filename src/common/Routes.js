import React from 'react'
import { Route } from 'react-router-dom'

import Homepage from '../components/Homepage'
import Aboutpage from '../components/Aboutpage'

const Routes = () => {
    return(
        <main className="container">
            <Route exact path='/' component={Homepage} />
            <Route path='/about' component={Aboutpage} />
        </main>
    )
}

export default Routes