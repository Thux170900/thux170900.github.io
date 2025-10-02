
window.addEventListener("scroll", function() {
    let header = document.querySelector('#cabeca');
    header.classList.toggle('rolagem', window.scrollY > 0);
});


document.getElementById('decision-form').addEventListener('submit', function(event) {
    event.preventDefault();  

   
    let activity = document.getElementById('atividade').value;
    let nextQuestionContainer = document.getElementById('next-question');
    let nivel = document.getElementById('nivel').value;

    if (!activity || !nivel) {
        alert("Por favor, selecione uma atividade e um nível de progresso.");
        return;
    }

   
    if (activity) {
        nextQuestionContainer.style.display = 'block';
        let nextQuestion = getNextQuestion(activity);
        nextQuestionContainer.innerHTML = nextQuestion;
    } else {
        nextQuestionContainer.style.display = 'none';
    }
});


function getNextQuestion(activity) {
    switch (activity) {
        case 'mining':
            return `
                <label for="mining-level">Qual o seu nível de mineração?</label>
                <select id="mining-level" name="mining-level">
                    <option value="low">Baixo</option>
                    <option value="medium">Médio</option>
                    <option value="high">Alto</option>
                </select>
            `;
        case 'dungeon':
            return `
                <label for="dungeon-class">Qual a sua classe preferida em Dungeons?</label>
                <select id="dungeon-class" name="dungeon-class">
                    <option value="tank">Tank</option>
                    <option value="mage">Mago</option>
                    <option value="archer">Arqueiro</option>
                    <option value="berserker">Berserker</option>
                </select>
            `;
        case 'farming':
            return `
                <label for="farming-crops">Quais culturas você mais cultiva?</label>
                <select id="farming-crops" name="farming-crops">
                    <option value="wheat">Trigo</option>
                    <option value="carrot">Cenoura</option>
                    <option value="pumpkin">Abóbora</option>
                    <option value="melon">Melão</option>
                </select>
            `;
        case 'rift':
            return `
                <label for="rift-experience">Qual a sua experiência com Rift?</label>
                <select id="rift-experience" name="rift-experience">
                    <option value="beginner">Iniciante</option>
                    <option value="intermediate">Intermediário</option>
                    <option value="advanced">Avançado</option>
                </select>
            `;
        case 'fishing':
            return `
                <label for="fishing-level">Qual o seu nível de pesca?</label>
                <select id="fishing-level" name="fishing-level">
                    <option value="novice">Novato</option>
                    <option value="intermediate">Intermediário</option>
                    <option value="expert">Especialista</option>
                </select>
            `;
        case 'kuudra':
            return `
                <label for="kuudra-mode">Qual modo de Kuudra você prefere?</label>
                <select id="kuudra-mode" name="kuudra-mode">
                    <option value="easy">Fácil</option>
                    <option value="normal">Normal</option>
                    <option value="hard">Difícil</option>
                </select>
            `;
        default:
            return 'Selecione uma atividade para mais perguntas.';
    }
}


document.getElementById("decision-form").addEventListener("submit", function(event) {
    event.preventDefault(); 

    
    const atividade = document.getElementById("atividade").value;
    const nivel = document.getElementById("nivel").value;

   
    if (!atividade || !nivel) {
        alert("Por favor, selecione uma atividade e um nível de progresso.");
        return;
    }

    
    let mensagem = `Você escolheu a atividade: <strong>${atividade}</strong> no nível de progresso: <strong>${nivel}</strong>.`;

    
    if (nivel === "early") {
        mensagem += " Você está apenas começando sua jornada! Boa sorte!";
    } else if (nivel === "mid") {
        mensagem += " Você está no meio do caminho. Continue assim, a jornada é longa!";
    } else if (nivel === "end") {
        mensagem += " Você já é um mestre no jogo! Parabéns por chegar tão longe!";
    }

    
    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = mensagem;
    resultadoDiv.style.display = "block";  

    resultadoDiv.style.backgroundColor = "#f0f8ff";
    resultadoDiv.style.border = "2px solid #4CAF50";
    resultadoDiv.style.padding = "20px";
    resultadoDiv.style.borderRadius = "10px";
    resultadoDiv.style.marginTop = "20px";
});
