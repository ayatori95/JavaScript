import React, {Component} from "react";
import './Calculator.css'

import Button from "../components/Button";
import Display from "../components/Display";

export default class Calculator extends Component {

    clearMemory () {
        console.log('limpar')
    }

    setOperation (operation) {
        console.log(operation)
    }

    addDigit (n) {
        console.log(n)
    }

    render () {
        const addDigit = n => this.addDigit(n)
        const setOperation = operation => this.setOperation(operation)
        return ( 
            <div className="calculator">
                <Display value={100}></Display>
                <Button label="AC"></Button>
                <Button label="/"></Button>
                <Button label="7"></Button>
                <Button label="8"></Button>
                <Button label="9"></Button>
                <Button label="*"></Button>
                <Button label="4"></Button>
                <Button label="5"></Button>
                <Button label="6"></Button>
                <Button label="-"></Button>
                <Button label="1"></Button>
                <Button label="2"></Button>
                <Button label="3"></Button>
                <Button label="+"></Button>
                <Button label="0"></Button>
                <Button label="."></Button>
                <Button label="="></Button>
            </div>
        )
    }
}