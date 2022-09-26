import Header from './components/Header';
import Form from './components/Form';
import Summary from './components/Summary';
import { useState } from "react";
import './Dashboard.css'

const Dashboard = ({ setLogged }) => {

    const [card, setCard] = useState([])
    const [id, setId] = useState('')
    const [cardEntrada, setCardEntrada] = useState([])
    const [cardSaida, setCardSaida] = useState([])


    function handleDelete(id) {
        let arrSuporte = []
        for(let i = 0; i < card.length; i++) {
            if(card[i] != card[id]) {
                arrSuporte.push(card[i])
            }
        }
        setCard(arrSuporte)
    }

    return (
        <>
            <Header className="headerDashboard"setLogged = {setLogged} />
                <div className="mainDashboard animate__animated animate__bounceInRight">
                    <Form 
                    setCard={setCard} 
                    setCardEntrada={setCardEntrada} 
                    setCardSaida={setCardSaida} 
                    card={card}
                    />

                    <Summary 
                    card={card}
                    setId = {setId}
                    handleDelete={handleDelete}
                    setCard={setCard} 
                    />
                </div>   
        </>
    )
}

export default Dashboard