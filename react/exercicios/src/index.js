import React from 'react'
import ReactDOM from 'react-dom'


//import Primeiro from './componentes/Primeiro'
//import BomDia from './componentes/BomDia'
import Multi, { BoaTarde } from './componentes/Multiplos'
import Saudacao from './componentes/Saudacao'
import Pai from './componentes/Pai'
import Filho from './componentes/Filho'

// funciona nas duas formas
ReactDOM.render(
    <div>
      <BoaTarde nome='Ana'></BoaTarde> 
      <Multi.BomDia2 nome='Claúdia'/>
    </div>
, document.getElementById('root'))

ReactDOM.render(
<div>
  <Pai nome="Marcus" sobrenome =" O'Connel">
{/* Como passar os componentes Filhos direto pela chamada? */}
    <Filho nome="Tyler" />
    <Filho nome="Elijah" />
    <Filho nome="Juniper" />
  </Pai>
</div>, document.getElementById('root2'))