import React from 'react';
class Ex11 extends React.Component {
    constructor(props){
        super(props)
    
}
    render(){
    return (
        <div>
        <label for="Num1">Number one</label>
        <input id="Num1" type="Number"/>

        <label for="Num2">Number tow</label>
        <input id="Num2" type="Number"/>
        
        <label for="Num3">Number three</label>
        <input id="Num3" type="Number"/>
        </div>

    )
    }
}


export default Ex11