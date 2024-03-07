class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }

    atacar() {
        let tipos = ["ninja", "mago", "guerreiro", "monge"]
        let tipo = tipos[this.tipo]
        let ataque = ""

        if (tipo === "mago") {
            ataque = "magia";
        } else if (tipo === "guerreiro") {
            ataque = "espada";
        } else if (tipo === "monge") {
            ataque = "artes marciais";
        } else if (tipo === "ninja") {
            ataque = "shuriken";
        }

        console.log(`O ${tipo} atacou usando ${ataque}`)
    }
}

for (let i = 0; i < 4; i++) {
    // Saída -> ataque
    let heroi = new Heroi("", 16, i)
    heroi.atacar()
}


