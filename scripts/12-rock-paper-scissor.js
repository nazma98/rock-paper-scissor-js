  /*let score = JSON.parse(localStorage.getItem('score'));

        if(score === null){
            score = {
                wins : 0,
                losses : 0,
                ties : 0
            };
        } */

        // better way to do the above -> given below
        // this is called using the default operator ||

        let score = JSON.parse(localStorage.getItem('score')) || {
            wins : 0,
            losses : 0,
            ties : 0
        };

    function updateScoreElement(){
        document.querySelector('.js-score')
        .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
    }

    updateScoreElement();

    function autoplay(){
        setInterval(function(){
            const playermove = pickComputerMove();
            playGame(playermove);
        }, 1500);
    }

    function playGame(playerMove){
        const computerMove = pickComputerMove();
        let result = '';
        if(playerMove === 'scissors') {
            if(computerMove === 'rock'){
            result = 'You lose!';
            } else if(computerMove === 'paper') {
            result = 'You win!';
            } else {
            result = 'Tie';
            }
            
        } else if( playerMove === 'paper'){
            if(computerMove === 'rock'){
                result = 'You win!';
            } else if(computerMove === 'paper') {
                result = 'Tie';
            } else {
                result = 'You lose!';
            }
            
        } else if( playerMove === 'rock') {
            if(computerMove === 'rock'){
            result = 'Tie';
            } else if(computerMove === 'paper') {
            result = 'You lose!';
            } else {
            result = 'You win!';
            }
        }

        if(result === 'You win!') {
            score.wins++;
        } else if(result === 'You lose!'){
            score.losses++;
        } else if(result === 'Tie'){
            score.ties++;
        }
        
        // Stores the score values in the local storage
        localStorage.setItem('score',JSON.stringify(score));

        updateScoreElement();

        document.querySelector('.js-result').innerHTML = result;

        document.querySelector('.js-moves').innerHTML = `You <img class="move-style" src="images/${playerMove}-emoji.png" alt=""> <img class="move-style" src="images/${computerMove}-emoji.png" alt="">Computer `;

        
    }
   

    function pickComputerMove(){
        const randomNumber = Math.random();
        let computerMove = '';
        if(randomNumber >= 0 && randomNumber < 1 / 3){
            computerMove = 'rock';
        } else if( randomNumber >= 1/3 && randomNumber < 2 / 3){
            computerMove = 'paper';
        } else{
            computerMove = 'scissors';
        }

        console.log(`Computer move: ${computerMove}`);
        return computerMove;
    }