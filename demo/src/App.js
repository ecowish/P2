import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';
import './App.test.css';

import Navigator from './nav';
import Search from './search/header';
import Main from './main';

class App extends React.Component {
    render() {
        return <BrowserRouter>
            <header>
                <Navigator />
                <Search />
            </header>
            <Main />
            <footer>
                <div>
                    <p>Eco-Ending</p>
                    <address>77, Jeongneung-ro, Seongbuk-gu, Seoul, Republic of Korea</address>
                    <p>(C) 2020 Eco-Ending.</p>
                </div>
            </footer>
        </BrowserRouter>;
    }
}

export default App;
