// Uma factory retorna um nove objeto

module.exports = () =>{
    return {
        valor:1,
        inc() {
            this.valor++
        }
    }
}