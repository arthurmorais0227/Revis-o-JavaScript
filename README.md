# ⚔️ Batalha Pokémon em JavaScript

Este é um mini-script de batalha entre dois Pokémon icônicos: **Pikachu** ⚡ e **Charmander** 🔥. A batalha acontece em turnos com ataques aleatórios, e o combate continua até que um dos dois (ou ambos!) sejam derrotados.

## 📜 Descrição

Cada Pokémon começa com **80 pontos de energia**. A cada rodada, eles atacam simultaneamente com um dano aleatório dentro de um intervalo definido. O resultado da batalha é impresso no console a cada rodada, até que haja um vencedor ou um empate.

### ⚙️ Regras do Combate:

- **Pikachu** pode causar entre `10` e `25` de dano por ataque.
- **Charmander** pode causar entre `8` e `22` de dano por ataque.
- A energia de cada um é reduzida pelo valor do ataque do oponente.
- O combate termina quando a energia de um ou dos dois Pokémon chega a `0` ou menos.

## 📦 Código

```javascript
// Inicializa as energias dos dois Pokémon
let pikachuEnergia = 80;
let charmanderEnergia = 80;

// Contador de rodadas
let rodada = 1;

// Loop principal: continua enquanto ambos tiverem energia acima de 0
while (pikachuEnergia > 0 && charmanderEnergia > 0) {
    console.log(`🔁 Rodada ${rodada}.`);

    // Gera ataque aleatório do Pikachu (10 a 25)
    let pikachuAtaque = Math.floor(Math.random() * (25 - 10 + 1) + 10);

    // Gera ataque aleatório do Charmander (8 a 22)
    let charmanderAtaque = Math.floor(Math.random() * (22 - 8 + 1) + 8);

    // Aplica os danos nas energias
    pikachuEnergia -= charmanderAtaque;
    charmanderEnergia -= pikachuAtaque;

    // Exibe os ataques e seus danos
    console.log(`⚡Pikachu usou Choque do Trovão e causou ${pikachuAtaque} de dano!`);
    console.log(`🔥Charmander usou Chama Ardente e causou ${charmanderAtaque} de dano!`);

    // Mostra a energia restante de cada um
    console.log(`❤️⚡ Energia do Pikachu: ${pikachuEnergia}`);
    console.log(`❤️🔥 Energia do Charmander: ${charmanderEnergia}`);
    console.log("--------🔴⚪--------🔴⚪--------🔴⚪--------🔴⚪--------");
    console.log("...");

    // Avança para a próxima rodada
    rodada++;
}

// Verifica e exibe o resultado final da batalha
if (pikachuEnergia <= 0 && charmanderEnergia <= 0) {
    console.log("Foram derrotados juntos! Empate!🤝");
} else if (pikachuEnergia > charmanderEnergia) {
    console.log("Pikachu amassou o Charmander! Pikachu venceu! ⚡🏆");
} else {
    console.log("Charmander amassou o Pikachu! Charmander venceu! 🔥🏆");
}

```
## Autor:

- Arthur Morais dos Santos - 1TDS1.
- ChatGPT ajudou na organização das ideias em formato readme.md em formato de MarkDown.
