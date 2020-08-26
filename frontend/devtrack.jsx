import React from 'react'; 
import ReactDOM from 'react-dom'; 
import Root from './components/root'; 
import configureStore from './store/store'; 

// testing 

//testing 

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root"); 
    const store = configureStore(); 

    //testing 

    //testing 

    ReactDOM.render(<Root store={store} />, root)
}); 