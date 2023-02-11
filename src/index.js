import ReactDOM from 'react-dom/client'
import React from 'react'
import './index.css'

import App from './App'

//Dentro do arquivo /public/index.html vai ser criado uma div com id="root".
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <App/>
)