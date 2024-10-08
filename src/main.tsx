//import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'


import { store, persistor } from '@/redux/store'
import { PersistGate } from 'redux-persist/integration/react'
import Loading from "@/shared/components/Loading"

ReactDOM.createRoot(document.getElementById('root')!).render(
    //<React.StrictMode>

    <BrowserRouter>
        <Provider store={store}>
            <PersistGate persistor={persistor} loading={<Loading/>}>
            <App />
            </PersistGate>
        </Provider>
    </BrowserRouter>

    // </React.StrictMode>,
)
