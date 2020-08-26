import React from 'react'; 
import ReactDOM from 'react-dom'; 
import Root from './components/root'; 
import configureStore from './store/store'; 

// testing 

//testing 

document.addEventListener("DOMContentLoaded", () => {
    
    let store; 
    if (window.currentUser) {
        const preloadedState = {
            session: {
                currentUserId: window.currentUser.id
            }, 
            entities: {
                users: {
                    [window.currentUser.id]: window.currentUser
                }
            }
        }; 
        store = configureStore(preloadedState);
        delete window.currentUser; 
    } else {
        store = configureStore(); 
    }
    
    const root = document.getElementById("root"); 

    //testing 
    window.getState = store.getState; 
    //testing 

    ReactDOM.render(<Root store={store} />, root)
}); 