import React from "react"
import { Header } from "../Components/Header"
import { UpdatesPage } from "../Components/UpdatesPage"
import { useState, useEffect } from "react"
import axios from "axios"
import { baseURL } from "../config"
export function Updates() {
    const [updates, setUpdates] = useState([])
    const [showUpdate, setShowUpdate] = useState(false)
    const handleShowUpdate = () => {
        setShowUpdate(!showUpdate)
        console.log(showUpdate)
    }
    useEffect(() => {
        const fetchData = async () => {
            const respUpdates = await axios.get(`${baseURL}updates.json`)
            setUpdates(respUpdates.data)
        }
        fetchData()
    }, [])
    return (
        <React.Fragment>
            <Header title = {'Обновления'}/>
            {updates.map((update, index) => 
            <div key={index}>
                <UpdatesPage 
                    update={update}
                    active={showUpdate}
                    handle={handleShowUpdate}
                />
            </div>)}
        </React.Fragment>
    )
}