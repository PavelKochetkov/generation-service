import React, { useState } from "react"
import { QrPage } from "../Components/QrPage"
import { Header } from "../Components/Header"
import logo from '../JustDoIt.png'

export const QrService = () => {
    const [qrCode, setQrCode] = useState(logo)
    const [text, setText] = useState('')
    const [error, setError] = useState('')
    const appError = () => {
        setError('Поле не может быть пустым')
    }
    const clearError = () => {
        setError('')
    }
    const changeText = (event) => {
        setText(event.target.value)
    }
    const fetchData = () => {
        text.length === 0 ? appError() : clearError()
        setQrCode(`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${text}`)
        setText('')
    }
    return (
        <React.Fragment>
            <Header title={'Генератор QR-кода'}/>
            <QrPage
                text={text}
                changeText={changeText}
                qrCode={qrCode}
                fetchData={fetchData}
                error={error}
            />
        </React.Fragment>
    )
}