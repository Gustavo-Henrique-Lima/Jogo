const pathImages = "./src/assets/icons/"
const cardData = [
    {
        id: 0,
        name: 'Blue Eyes White Dragon',
        img: `${pathImages}dragon.png`,
        attributes: {
            attack: 3000,
            defense: 2500,
        },
        description: 'Uma criatura lendária com poderes de destruição massiva. Seus olhos brilham como safiras.'
    },
    {
        id: 1,
        name: 'Dark Magician',
        img: `${pathImages}magician.png`,
        attributes: {
            attack: 2500,
            defense: 2100,
        },
        description: 'O mago definitivo em ataque e defesa. Um símbolo do poder mágico.'
    },
    {
        id: 2,
        name: 'Exodia',
        img: `${pathImages}exodia.png`,
        attributes: {
            attack: 1000000,
            defense: 1000000,
        },
        description: 'Uma lenda que nenhum duelista ousa desafiar. Exodia possui poder absoluto.'
    },
    {
        id: 3,
        name: 'Red Eyes Black Dragon',
        img: `${pathImages}red_eyes_black_dragon.png`,
        attributes: {
            attack: 2400,
            defense: 2000,
        },
        description: 'Um dragão com olhos vermelhos flamejantes. Seu poder é um símbolo de coragem.'
    },
    {
        id: 4,
        name: 'Summoned Skull',
        img: `${pathImages}summoned_skull.png`,
        attributes: {
            attack: 2500,
            defense: 1200,
        },
        description: 'Uma invocação poderosa que causa terror nos corações de seus oponentes.'
    },
    {
        id: 5,
        name: 'Celtic Guardian',
        img: `${pathImages}celtic_guardian.png`,
        attributes: {
            attack: 1400,
            defense: 1200,
        },
        description: 'Um guerreiro ágil e habilidoso que utiliza sua velocidade para vencer batalhas.'
    },
    {
        id: 6,
        name: 'Dark Magician Girl',
        img: `${pathImages}dark_magician_girl.png`,
        attributes: {
            attack: 2000,
            defense: 1700,
        },
        description: 'Uma maga talentosa que luta ao lado do Mago Negro com lealdade e graça.'
    },
    {
        id: 7,
        name: 'Buster Blader',
        img: `${pathImages}buster_blader.png`,
        attributes: {
            attack: 2600,
            defense: 2300,
        },
        description: 'Especialista em destruir dragões, seu poder aumenta contra esses adversários.'
    },
    {
        id: 8,
        name: 'Kuriboh',
        img: `${pathImages}kuriboh.png`,
        attributes: {
            attack: 300,
            defense: 200,
        },
        description: 'Pequeno mas corajoso, Kuriboh é um companheiro leal que protege seu mestre.'
    },
    {
        id: 9,
        name: 'Slifer the Sky Dragon',
        img: `${pathImages}slifer_the_sky_dragon.png`,
        attributes: {
            attack: 2200,
            defense: 1850,
        },
        description: 'Uma divindade poderosa que adapta seu poder com base na força do duelista.'
    },
    {
        id: 10,
        name: 'Obelisk the Tormentor',
        img: `${pathImages}obelisk_the_tormentor.png`,
        attributes: {
            attack: 4000,
            defense: 4000,
        },
        description: 'O destruidor imbatível. Sua força é incomparável entre os deuses.'
    },
    {
        id: 11,
        name: 'The Winged Dragon of Ra',
        img: `${pathImages}winged_dragon_of_ra.png`,
        attributes: {
            attack: 2000,
            defense: 1900,
        },
        description: 'Uma divindade lendária que concede poder absoluto a quem controla seu segredo.'
    },
    {
        id: 12,
        name: 'Gaia The Fierce Knight',
        img: `${pathImages}gaia_the_fierce_knight.png`,
        attributes: {
            attack: 2300,
            defense: 2100,
        },
        description: 'Um cavaleiro que cavalga com a velocidade do vento para derrotar seus inimigos.'
    },
    {
        id: 13,
        name: 'Black Luster Soldier',
        img: `${pathImages}black_luster_soldier.png`,
        attributes: {
            attack: 3000,
            defense: 2500,
        },
        description: 'Um guerreiro lendário que representa o equilíbrio entre luz e escuridão.'
    },
    {
        id: 14,
        name: 'Mystical Elf',
        img: `${pathImages}mystical_elf.png`,
        attributes: {
            attack: 800,
            defense: 2000,
        },
        description: 'Uma elfa mística com poderes de proteção e habilidades de cura.'
    },
    {
        id: 15,
        name: 'Dark Paladin',
        img: `${pathImages}dark_paladin.png`,
        attributes: {
            attack: 2900,
            defense: 2400,
        },
        description: 'Um guerreiro mago imbatível que combina magia e força bruta.'
    }
];

const state = {
    life: {
        playerLife: 100,
        computerLife: 100, 
    },
    fieldCards: {
        player: document.getElementById('player-field-card'),
        computer: document.getElementById('computer-field-card'),
    },
    playerSide: {
        player1: 'player-cards',
        player1Box: document.querySelector('#player-cards'),
        computer: 'computer-cards',
        computerBox: document.querySelector('#computer-cards'),
    }
}

async function getRandomCardId() {
    const randomIndex = Math.floor(Math.random() * cardData.length)
    return cardData[randomIndex].id
}

function updatePlayerLifeBar() {
    
    const playerLifeBar = document.getElementById('player-life'); 
    const computerLifeBar = document.getElementById('computer-life'); 

    const playerLifePercentage = state.life.playerLife;
    playerLifeBar.style.height = `${playerLifePercentage}%`;

    const computerLifePercentage = state.life.computerLife;
    computerLifeBar.style.height = `${computerLifePercentage}%`;

    playerLifeBar.style.backgroundColor = playerLifePercentage > 50 ? 'green' : playerLifePercentage > 20 ? 'yellow' : 'red';
    computerLifeBar.style.backgroundColor = computerLifePercentage > 50 ? 'green' : computerLifePercentage > 20 ? 'yellow' : 'red';
    
    if(state.life.computerLife <= 0){
        alert("Parabéns\nVocê ganhou o duelo!!")
        endGame();
    }
    else if(state.life.playerLife <= 0){
        alert("Que pena\nVocê perdeu o duelo!!")
        endGame();
    }
}

function endGame() {
    window.location.replace("/Jogo/");
}


function processDuelResult(playerCardId, computerCardId) {
    const playerCard = cardData.find(card => card.id === playerCardId);
    const computerCard = cardData.find(card => card.id === computerCardId);

    if (!playerCard || !computerCard) {
        console.error("Cartas inválidas fornecidas.");
        return { duelResult: 'error', winnerCard: null, loserCard: null };
    }

    let duelResult = '';
    let winnerCard = null;
    let loserCard = null;

    if (playerCard.attributes.attack > computerCard.attributes.defense) {
        duelResult = 'win';
        winnerCard = playerCard;
        loserCard = computerCard;
        state.life.computerLife -= 17;
        playAudio("win")
    } else if (computerCard.attributes.attack > playerCard.attributes.defense) {
        duelResult = 'lose';
        winnerCard = computerCard;
        loserCard = playerCard;
        state.life.playerLife -= 17;
        playAudio("lose")
    } else {
        duelResult = 'draw';
    }

    updatePlayerLifeBar();

    return { duelResult, winnerCard, loserCard };
}

function showDuelResult(winnerCard, loserCard, duelResult) {

    if (!winnerCard || !loserCard || duelResult === 'draw') {
        console.warn('Empate ou cartas inválidas no duelo.');
        return;
    }

    const loserElement = document.querySelector(`[data-id="${loserCard.id}"]`);
    if (!loserElement) {
        console.error("Elemento da carta perdedora não encontrado no DOM.");
        return;
    }

    loserElement.style.transition = 'transform 0.5s ease, opacity 0.5s ease';
    loserElement.style.transform = 'translateY(100px)';
    loserElement.style.opacity = '0';

    setTimeout(() => {
        const parent = loserElement.parentNode;
        loserElement.remove();

        if (parent) {
            const loserPlaceholder = document.createElement('div');
            loserPlaceholder.classList.add('loser-placeholder');
            loserPlaceholder.innerText = 'Vencedor';
            loserPlaceholder.style.color = 'red';
            loserPlaceholder.style.fontSize = '16px';
            loserPlaceholder.style.fontWeight = 'bold';
            loserPlaceholder.style.textAlign = 'center';
            loserPlaceholder.style.marginTop = '20px';
            loserPlaceholder.style.position = 'relative';

            parent.appendChild(loserPlaceholder);
        }
    }, 500);
}


async function setCardsField(cardId) {
    const dimmedBackground = document.createElement('div');
    dimmedBackground.classList.add('dimmed-background');
    dimmedBackground.innerText = "Hora do Duelo";
    document.body.appendChild(dimmedBackground);
    dimmedBackground.style.display = 'flex';

    await new Promise(resolve => setTimeout(resolve, 2000));

    dimmedBackground.innerText = "";

    const duelStage = document.createElement('div');
    duelStage.classList.add('duel-stage');

    const playerCardContainer = document.createElement('div');
    playerCardContainer.classList.add('duel-card-container');
    playerCardContainer.setAttribute('data-id', cardId); 

    const playerCardImage = document.createElement('img');
    playerCardImage.classList.add('duel-card-image');
    playerCardImage.src = cardData[cardId].img;

    const playerCardText = document.createElement('div');
    playerCardText.classList.add('duel-card-text');
    playerCardText.innerHTML = `
        <p><strong>${cardData[cardId].name}</strong></p>
        <p>ATK: ${cardData[cardId].attributes.attack} DEF: ${cardData[cardId].attributes.defense}</p>
        <p>${cardData[cardId].description}</p>
    `;

    playerCardContainer.appendChild(playerCardImage);
    playerCardContainer.appendChild(playerCardText);

    const computerCardId = await getRandomCardId();
    const computerCardContainer = document.createElement('div');
    computerCardContainer.classList.add('duel-card-container');
    computerCardContainer.setAttribute('data-id', computerCardId);

    const computerCardImage = document.createElement('img');
    computerCardImage.classList.add('duel-card-image');
    computerCardImage.src = cardData[computerCardId].img;

    const computerCardText = document.createElement('div');
    computerCardText.classList.add('duel-card-text');
    computerCardText.innerHTML = `
        <p><strong>${cardData[computerCardId].name}</strong></p>
        <p>ATK: ${cardData[computerCardId].attributes.attack} DEF: ${cardData[computerCardId].attributes.defense}</p>
        <p>${cardData[computerCardId].description}</p>
    `;

    computerCardContainer.appendChild(computerCardImage);
    computerCardContainer.appendChild(computerCardText);

    const duelX = document.createElement('div');
    duelX.classList.add('duel-x');
    duelX.innerText = 'X';

    duelStage.appendChild(playerCardContainer);
    duelStage.appendChild(duelX);
    duelStage.appendChild(computerCardContainer);
    document.body.appendChild(duelStage);
    duelStage.style.display = 'flex';

    await new Promise(resolve => setTimeout(resolve, 3000));

    const { duelResult, winnerCard, loserCard } = processDuelResult(cardId, computerCardId);
    showDuelResult(winnerCard, loserCard, duelResult);
    await new Promise(resolve => setTimeout(resolve, 5000));
    duelStage.remove();
    dimmedBackground.remove();
}


async function drawCardsInField(cardId, computerCardId) {
    state.fieldCards.player.src = cardData[cardId].img
    state.fieldCards.computer.src = cardData[computerCardId].img
}

async function createCardImage(IdCard, fieldSide) {
    const cardImage = document.createElement('img');
    cardImage.setAttribute('height', "150px");
    cardImage.setAttribute('src', cardData[IdCard].img);
    cardImage.setAttribute('data-id', IdCard);
    cardImage.classList.add('card');

    if (fieldSide === state.playerSide.player1) {        
        cardImage.addEventListener('mouseover', () => {
            cardImage.style.transform = 'scale(1.2)';
        });

        cardImage.addEventListener('mouseout', () => {
            cardImage.style.transform = 'scale(1)';
        });

        cardImage.addEventListener('click', () => {
            setCardsField(IdCard);
        });
    }

    return cardImage;
}

async function drawCards(cardNumbers, fieldSide) {
    const drawnCards = new Set();
  
    for (let i = 0; i < cardNumbers; i++) {
        let randomIdCard;
        do {
            randomIdCard = await getRandomCardId();
        } while (drawnCards.has(randomIdCard));
        drawnCards.add(randomIdCard); 

        const cardDisplay = document.createElement('div');
        cardDisplay.classList.add('card-display');

        const cardImage = document.createElement('img');
        cardImage.classList.add('card-image');
        cardImage.src = cardData[randomIdCard].img;

        const cardText = document.createElement('div');
        cardText.classList.add('card-text');
        cardText.innerHTML = `
            <br><br>
            <p><strong>${cardData[randomIdCard].name}</strong></p>
            <br><br>
            <p>ATK: ${cardData[randomIdCard].attributes.attack} </p>
            <p>DEF: ${cardData[randomIdCard].attributes.defense}</p>
            <br><br>
            <p>${cardData[randomIdCard].description}</p>
        `;

        cardDisplay.appendChild(cardImage);
        cardDisplay.appendChild(cardText);

        cardDisplay.addEventListener('click', () => {
            setCardsField(randomIdCard);
        });

        document.getElementById(fieldSide).appendChild(cardDisplay);
    }
}

async function playAudio(status) {
    const audio = new Audio(`./src/assets/audios/${status}.wav`)
    const soundPreference = localStorage.getItem('soundEnabled');
    if (soundPreference === 'true') {
        try {
            audio.play()
        } catch {}
    } 
}

function init() {
    drawCards(6, state.playerSide.player1)
    drawCards(6, state.playerSide.computer)
    
    updatePlayerLifeBar();

    const bgm = document.getElementById('bgm')
    const soundPreference = localStorage.getItem('soundEnabled');
    if (soundPreference === 'true') {
        bgm.play();
    } else {
        bgm.pause();
    }
}

init()