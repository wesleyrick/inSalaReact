import React, { useEffect } from "react";

class Form extends React.Component {
    constructor() {
        super()
    }
    
    render() {
        return <div>
            <form action="">
                <label htmlFor="">Nome</label>
                <input data-js="input" className="form-control" type="text" />
                <label htmlFor="">Email</label>
                <input className="form-control" type="text" />
                <textarea name="" id="" cols="25" rows="5"></textarea>
                <button className="btn btn-success">Enviar</button>
            </form>
        </div>
    }
}


export default Form 