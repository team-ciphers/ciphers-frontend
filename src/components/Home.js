import React, { Component } from 'react'
import Header from './Header'
import Footer from './Footer'


export class Home extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Footer/>
            </div>
        )
    }
}

export default (Home);
