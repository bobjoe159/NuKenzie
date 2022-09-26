import './style.css'

const Total = ({cardTotal}) => {
    console.log(cardTotal)
    let sumArr = []
    let expenseArr = []
    cardTotal.forEach(card => {
        if(card.data.type === 'true') {
            sumArr.push(card)
        } else {
            expenseArr.push(card)
        }
    })

    const totalSum = sumArr.reduce(function (acumulador, atual) {
        return acumulador + Number(atual.data.value)
      }, 0)

    const totalExpense = expenseArr.reduce(function (acumulador, atual) {
        return acumulador + Number(atual.data.value)
      }, 0)

    const finalSum = (totalSum - totalExpense)

    return (
        <>
        <div className="totalCard">
            <section className="totalHeader">
                <h2>Valor Total</h2>
                <p>R$ {finalSum},00</p>
            </section>
            <p>O valor refere-se ao saldo.</p>
        </div>
        </>
    )
}

export default Total;