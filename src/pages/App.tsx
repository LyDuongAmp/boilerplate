import React from 'react'
import {BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom'
import '../common/globalStyles/antd.less'
import About from './About'
import Dashboard from './Dashboard'
import Home from './Home'

export default function App() {
    return (
        <Router>
            <div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/dashboard">Dashboard</Link>
                    </li>
                </ul>
                <hr/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/dashboard" element={<Dashboard/>}/>
                </Routes>
            </div>
        </Router>
    )
}



