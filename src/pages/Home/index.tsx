import {DivApp} from './index.styled'
import logo from '../../logo.svg'
import {Button} from 'antd'
import React from 'react'

function Home() {
    return (
        <DivApp>
            <h2>Home</h2>
            <img src={logo} className="app-logo"/>
            <div>
                <Button type="primary">Button</Button>
            </div>
        </DivApp>
    )
}

export default Home
