import React from 'react'
import ReactDOM from 'react-dom'
import './common/globalStyles/index.css'
import 'antd/dist/antd.less'

import App from './pages/App'

ReactDOM.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
    document.getElementById('root')
)
