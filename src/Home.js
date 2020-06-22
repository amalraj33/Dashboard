import React from 'react'
import './App.css';
import { Header } from './Continer/Header'
import { Chartpart } from './Continer/Chartpart'
import { Piechart } from './Continer/Piechart'
export const Home = () => {
    return (
        <div className="container" style={{marginLeft:"210px"}}>
         <Header/>
         <Chartpart/>
         <Piechart/>
       </div>
    )
}
