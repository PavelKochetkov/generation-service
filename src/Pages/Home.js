import React, { useEffect, useState } from 'react'
import '../css/home.css'
import HomePage from '../Components/HomePage'
import { baseURL } from '../config'
import axios from 'axios'

export const Home = () => {
    const [homes, setHome] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const respHome = await axios.get(`${baseURL}homepage.json`)
            setHome(respHome.data)
        }
        fetchData()
    }, [])
    console.log(homes)

    return(
        <React.Fragment>
            {homes.map(home => <HomePage home={home}/>)}
        </React.Fragment>
    )
}