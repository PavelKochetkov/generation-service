import React from "react"
import { useState, useEffect } from "react"
import PasswordForm from "../Components/PasswordForm"
import { Header } from "../Components/Header"
import { baseURL } from "../config"
import axios from "axios"

export function Password() {
    const [descriptions, setDescriptions] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const respPassword = await axios.get(`${baseURL}passwordpage.json`)
            setDescriptions(respPassword.data)
        }
        fetchData()
    }, [])
    const [lenght, setLenght] = useState(6)
    const handleChangedLenght = (event) => {
        setLenght(parseInt(event.target.value++))
    }
    const [checkedUpperCase, setCheckedUpperCase] = useState(true)
    const changeCheckBoxUpperCase = () => {
        setCheckedUpperCase(!checkedUpperCase)
    }
    const [checkedLowerCase, setCheckedLowerCase] = useState(false)
    const changeCheckBoxLowerCase = () => {
        setCheckedLowerCase(!checkedLowerCase)
    }
    const [checkedNumber, setCheckedNumber] = useState(false)
    const changeCheckBoxNumber = () => {
        setCheckedNumber(!checkedNumber)
    }
    const [checkedSymbols, setcheckedSymbols] = useState(false)
    const changeCheckBoxSymbols = () => {
        setcheckedSymbols(!checkedSymbols)
    }
    const [password, setPassword] = useState('')
    const generatePassword = () => {
        const upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','P','Q','R','S','T', 'U', 'V', 'W', 'X', 'Y', 'Z']
        const lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','p','q','r','s','t', 'u', 'v', 'w', 'x', 'y', 'z']
        const numbers = ['1','2','3','4','5','6','7','8','9']
        const symbols = ['!','@','#','$','%','?','-','+','=','~', '_']
        let arrayResult = []
        if (checkedUpperCase) {arrayResult = arrayResult.concat(upperCase)}
        if (checkedLowerCase) {arrayResult = arrayResult.concat(lowerCase)}
        if (checkedNumber) {arrayResult = arrayResult.concat(numbers)}
        if (checkedSymbols) {arrayResult = arrayResult.concat(symbols)}
        let result = ''
        for(let i = 0; i < lenght; i++) {
            result += arrayResult.join('').charAt(Math.floor(Math.random() * arrayResult.length))
        }
        setPassword(result)
    }
    return (
        <React.Fragment>
            <Header title={'Генератор паролей'}/>
            {descriptions.map((description, index) => 
                <div key={index}>
                    <PasswordForm 
                        description={description}
                        lenght={lenght} 
                        handleChangedLenght={handleChangedLenght}
                        checkedUpperCase={checkedUpperCase}
                        changeCheckBoxUpperCase={changeCheckBoxUpperCase}
                        checkedLowerCase={checkedLowerCase}
                        changeCheckBoxLowerCase={changeCheckBoxLowerCase}
                        checkedNumber={checkedNumber}
                        changeCheckBoxNumber={changeCheckBoxNumber}
                        checkedSymbols={checkedSymbols}
                        changeCheckBoxSymbols={changeCheckBoxSymbols}
                        generatePassword={generatePassword}
                        password={password}
                    />
                </div>)}
        </React.Fragment>
    )
}