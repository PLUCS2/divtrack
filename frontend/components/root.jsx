import React from 'react'; 
import { Provider } from 'react-redux'; 
import { HashRouter } from 'react-router-dom'; 
import App from './app'; 


export default ({store}) => {
    return( 
        <Provider store={store}> 
            <HashRouter>
                <div>Welcome to Divtrack</div>
                <App />
            </HashRouter>
        </Provider >
    )
}; 