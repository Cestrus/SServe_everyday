export const manStillStanding = (cards) => {
	const team_A = initTeam('A');
	const team_B = initTeam('B');

	team_A.map(playerCards => checkPlayer(playerCards, cards));
	team_B.map(playerCards => checkPlayer(playerCards, cards));

	let A = team_A.filter(playerCards => playerCards.length !== 0);
	let B = team_B.filter(playerCards => playerCards.length !== 0);

	return [A.length, B.length];
}

function initTeam(teamName){
	const team = [];
	const quantityPlayers = 11;
	for (let i = 1; i <= quantityPlayers; i++){
		team.push(initPlayer(teamName, i));
	}
	return team;
}

function initPlayer(teamName, number){
	return [`${teamName}${number}R`, `${teamName}${number}Y`, `${teamName}${number}Y`]
}

function checkPlayer(playerCards, cards){
	cards.forEach(card => {
		let index = playerCards.findIndex(playCard => playCard === card);
		if (index !== -1){
			if (index === 0) {
				playerCards.length = 0;
			} else {
				playerCards.splice(index, 1);
			}
		}
	});
	if(playerCards.length < 2){
		playerCards.length = 0
	}
}



