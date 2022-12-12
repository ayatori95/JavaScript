// eslint-disable-next-line import/no-anonymous-default-export
export default props =>
    <div>
    <h1>Bom dia para {props.nome}</h1>
    <h2>Até breve, {props.nome}</h2>
    </div>
/* ou pode ser caso não queira uma div incapsulando o code
<React.Fragment>
    <h1>Bom dia para {props.nome}</h1>
    <h2>Até breve, {props.nome}</h2>
<React.Fragment>
*/
/* ou pode ser caso não queira uma div incapsulando o code
[
    <h1 key='h1'>Bom dia para {props.nome}</h1>
    <h2 key='h2'>Até breve, {props.nome}</h2>
]
*/
