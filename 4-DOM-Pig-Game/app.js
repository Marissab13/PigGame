/*
Pork It over - The fun, gambling Piggy Game
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he wishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game
*/

var scores, roundScore, activePlayer, 

scores = [0,0];
roundScore = 0;
activePlayer = 0;



 document.querySelector('.dice').style.display = 'none';

 document.getElementById('score-0').textContent = '0';
 document.getElementById('score-1').textContent = '0';
 document.getElementById('current-0').textContent = '0';
 document.getElementById('current-1').textContent = '0';

 document.querySelector('.btn-roll').addEventListener('click', function(){
 	// need a random number
	  var dice = Math.floor(Math.random() * 6) + 1;
	 
	 	//display the result
	 	var diceDOM = 	document.querySelector('.dice');
	 	diceDOM.style.display = 'block';
	 	diceDOM.src = 'dice-' + dice + '.png';
	 
	 	//update the round score only if the rolled number is not 1

	 	if (dice !== 1) {
	 		//add score
	 		roundScore += dice;
	 		document.querySelector('#current-' + activePlayer).textContent = roundScore;
	 	} else {
	 		//next player
	 		nextPlayer();
	 	}

 });

//event listener for button hold

document.querySelector('.btn-hold').addEventListener('click', function() {
	//add current score to global score
	scores[activePlayer] += roundScore;

	//update UI 
	document.querySelector('#score' + activePlayer).textContent = scores[activePlayer];

	//check if player won the game 

	//next player
	nextPlayer();


});

function nextPlayer() {
		activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
 		roundScore = 0;

 		document.getElementById('current-0').textContent = '0';
 		document.getElementById('current-1').textContent = '0';

 		document.querySelector('.player-0-panel').classList.toggle('active');
 		document.querySelector('.player-1-panel').classList.toggle('active');


 		//document.querySelector('.player-0-panel').classList.remove('active');
 		//document.querySelector('.player-1-panel').classList.add('active');

 		document.querySelector('.dice').style.display = 'none';
}




// var x = document.querySelector('#score-0').textContent;
//document.querySelector('#current-' + activePlayer).innerHTML = dice;
