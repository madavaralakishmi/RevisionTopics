import NavBar from './NavBar'
//import ContainerList from './ContainerList'
//import food_List from '../utilis/mockData'
//import {useState, useEffect} from "react"
//import ResturantCardList from './ResturantCardList'
import { Outlet } from 'react-router-dom'


const Applayout =()=>{

    return(
    <div className="App">
      <NavBar/>
      <Outlet/>
    </div>
    )
}

export default Applayout