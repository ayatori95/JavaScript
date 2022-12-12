import React from 'react'
import ReactDOM from 'react-dom'

//import Primeiro from './componentes/Primeiro'
//import BomDia from './componentes/BomDia'
import Multi, { BoaTarde } from './componentes/Multiplos'
import Saudacao from './componentes/Saudacao'


// funciona nas duas formas
ReactDOM.render(
    <div>
      <BoaTarde nome='Ana'></BoaTarde> 
      <Multi.BomDia2 nome='Claúdia'/>
    </div>
, document.getElementById('root'))

ReactDOM.render(<div><Saudacao tipo="Bom dia," nome="Marcus"/></div>, document.getElementById('root2'))