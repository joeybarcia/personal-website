import React from 'react'
import Header from './HeaderComponent'
import Footer from './FooterComponent'

import About from './AboutComponent'
import Home from './HomeComponent'
import Portfolio from './PortfolioComponent'

import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import Container from '@material-ui/core/Container'

function Main() {
    return (
        <React.Fragment>
            <Container maxWidth="sm" content="center">
            <Header />
            <switch>
                <Route path='/home' component={Home} />
                <Route path='/about' component={About} />
                <Route path='/portfolio' component={Portfolio} />
                <Redirect to='/home'/>
            </switch>
            <Footer />
            </Container>
        </React.Fragment>
    )
}

export default withRouter(Main);