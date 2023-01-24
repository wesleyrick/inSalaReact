import { useState } from "react"

const Exercicio12 = () => {
    const [valor, setValor] = useState();
    const [desconto, setDesconto] = useState();
    const [resultado, setResultado] = useState();

    const handleResult = (e) => {
        e.preventDefault()
        setResultado(Math.floor(valor * (1 - desconto / 100)))
    }

    return (
        <div>
            
            <form>
                <label>
                    <span>Valor:</span>
                    <input onChange={(e) => setValor(e.target.value)} type="text" />
                </label>
                <label>
                    <span>Valor do desconto:</span>
                    <input type="text" onChange={(e) => setDesconto(e.target.value)} />
                </label>
                <button onClick={handleResult} >Calcular desconto</button>
            </form>
            <p>O valor do desconto é: {resultado}</p>
        </div>
    )
}

export default Exercicio12