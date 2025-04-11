let pikachuEnergia = 80;
let charmanderEnergia = 80;

let rodada = 1;


while (pikachuEnergia > 0 && charmanderEnergia > 0) {
    console.log(`🔁 Rodada ${rodada}.`);

    let pikachuAtaque = Math.floor(Math.random() * (25 - 10 + 1) + 10);
    let charmanderAtaque = Math.floor(Math.random() * (22 - 8 + 1) + 8);

    pikachuEnergia -= charmanderAtaque;
    charmanderEnergia -= pikachuAtaque;

    console.log(`⚡Pikachu usou Choque do Trovão e causou ${pikachuAtaque} de dano!`);
    console.log(`🔥Charmander usou Chama Ardente e causou ${charmanderAtaque} de dano!`);

    console.log(`❤️⚡ Energia do Pikachu: ${pikachuEnergia}`);
    console.log(`❤️🔥 Energia do Charmander: ${charmanderEnergia}`);
    console.log("--------🔴⚪--------🔴⚪--------🔴⚪--------🔴⚪--------");
    console.log("...");
    
    rodada++;
}
if (pikachuEnergia <= 0 && charmanderEnergia <= 0) {
    console.log("Foram derrotados juntos! Empate!🤝");
} else if (pikachuEnergia > charmanderEnergia) {
    console.log("Pikachu amassou o Charmander! Pikachu venceu! ⚡🏆");
} else {
    console.log("Charmander amassou o Pikachu! Charmander venceu! 🔥🏆");
}