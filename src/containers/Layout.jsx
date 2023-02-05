import React from 'react';
import Header from '../components/Header';
import '../styles/Layout.css'

const Layout = () => {
    return (
        <React.Fragment>
            <div className="main-container">
                <Header />
            </div>
        </React.Fragment>
    );
}

export default Layout;