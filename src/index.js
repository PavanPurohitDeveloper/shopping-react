import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { LoginComponent } from './components/login/login.component';
import { NetflixIndex } from './netflix/netflix-index/netflix-index';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { DataBindingComponent2 } from './components/data-binding/data-binding.component2';
import { DataBindingComponent3 } from './components/data-binding/data-binding.component3';
import { DataBindingComponent4 } from './components/data-binding/data-binding.component4';
import { DataBindingComponent5 } from './components/data-binding/data-binding.component5';
import { DataBindingComponent6 } from './components/data-binding/data-binding.component6';
import { DataBindingComponent7 } from './components/data-binding/data-binding.component7';
import { DataBindingComponent8 } from './components/data-binding/data-binding.component8';
import { DataBindingComponent9 } from './components/data-binding/data-binding.component9';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <LoginComponent></LoginComponent> */}
    {/* <NetflixIndex></NetflixIndex> */}
    {/* <DataBindingComponent></DataBindingComponent> */}
    {/* <DataBindingComponent2></DataBindingComponent2> */}
    {/* <DataBindingComponent3></DataBindingComponent3> */}
    {/* <DataBindingComponent4></DataBindingComponent4> */}
    {/* <DataBindingComponent5></DataBindingComponent5> */}
    {/* <DataBindingComponent6></DataBindingComponent6> */}
    {/* <DataBindingComponent7></DataBindingComponent7> */}
    {/* <DataBindingComponent8></DataBindingComponent8> */}
    <DataBindingComponent9></DataBindingComponent9>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

