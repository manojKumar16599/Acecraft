import React, { Component } from 'react'
import Header from './Header'
import Footer from './Footer'

class Layout extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className='children-components'>
                    {this.props.children}
                </div>
                <Footer />
            </div>
        )
    }
}

export default Layout;