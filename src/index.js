import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import '../sass/main.scss'


import Header from './common/Header'
import Routes from './common/Routes'
import Footer from './common/Footer'

const Root = () => {
    return(
        <BrowserRouter>
            <div id="mainDiv" className="main_div">
                <Header />
                <Routes />
                <Footer />
            </div>
        </BrowserRouter>
    )
}

ReactDOM.render(<Root />, document.getElementById('app'))