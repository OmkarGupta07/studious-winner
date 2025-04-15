import React from 'react';
import ReactDOM from "react-dom/client";
import { Footer } from './Footer';
import { Header } from './Header';
import { Menu } from './Menu';
import "./index.css";
export default function App() {


    return <>
    <div className='container'>        
        <Header />
        <Menu />
        <Footer />
        </div>
    </>
}


