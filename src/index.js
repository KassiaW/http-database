import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

//if the URL that is being used to send and recieve data is always the same then - 
axios.defaults.baseURL = 'http://jsonplaceholder.typicode.com';
axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN';
axios.defaults.headers.post['Content-Type'] = 'application/json';

axios.interceptors.request.use(request => {
    console.log(request);
    return(request); 
    //alays retuen the request in this file. 
    //otherwise you are blocking the request from other files 

}, error => {
    console.log(error);
    return Promise.reject(error); //same as above explaination
});

axios.interceptors.response.use(response => {
    console.log(response);
    return(response); 
    //alays retuen the request in this file. 
    //otherwise you are blocking the request from other files 

}, error => {
    console.log(error);
    return Promise.reject(error); //same as above explaination
});


ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
