const game = () => {
    let pScore = 0;
    let cScore = 0;

    const startGame = () => {
        const playButton = document.querySelector(".intro button");
        const introScreen = document.querySelector(".intro");
        const match = document.querySelector(".match");

        playButton.addEventListener("click", () => {
            introScreen.classList.add("fadeOut");
            match.classList.add("fadeIn");
        });
    };

    const playMatch = () => {
        const options = document.querySelectorAll(".options button");
        const playerHand = document.querySelector(".player-hand");
        const cpuHand = document.querySelector(".cpu-hand");
        const hands = document.querySelectorAll('.hands img');

        hands.forEach(hand => {
            hand.addEventListener('animationend', function(){
                this.style.animation = '';
            });
        });

        const cpuOptions = ["rock", "paper", "scissors"];
        
        options.forEach(option => {
            option.addEventListener("click", function() {
                const cpuChoice = Math.floor(Math.random() * 3);
                const cpuPlay = cpuOptions[cpuChoice];

                setTimeout(() => {
                    compareHands(this.textContent, cpuPlay);
                    //update images
                    playerHand.src = `./assets/${this.textContent}.png`;
                    cpuHand.src = `./assets/${cpuPlay}.png`;
                }, 2000);

                playerHand.style.animation = "shakePlayer 2s ease";
                cpuHand.style.animation = "shakeComputer 2s ease";

                //reset hands to rock position for next round
                playerHand.src = './assets/rock.png';
                cpuHand.src = './assets/rock.png';
            });
        });
    };

    const updateScore = () => {
        const playerScore = document.querySelector('.player-score p');
        const cpuScore = document.querySelector('.cpu-score p');
        playerScore.textContent = pScore;
        cpuScore.textContent = cScore;
    }

    const compareHands = (playerChoice, cpuChoice) => {
        const winner = document.querySelector('.winner');
        //Victory Conditions
        //Tie
        if(playerChoice === cpuChoice){
            winner.textContent = 'Tie game!';
            return;
        }
        //Rock 
        if(playerChoice === 'rock'){
            if(cpuChoice === 'scissors'){
                winner.textContent = 'You Win!';
                pScore ++;
                updateScore();
                return;
            }else{
                winner.textContent = 'Computer Wins!';
                cScore ++;
                updateScore();
                return;
            }
        }
        //Paper
        if(playerChoice === 'paper'){
            if(cpuChoice === 'rock'){
                winner.textContent = 'You Win!';
                pScore ++;
                updateScore();
                return;
            }else{
                winner.textContent = 'Computer Wins!';
                cScore ++;
                updateScore();
                return;
            }
        }
        //Scissors
        if(playerChoice === 'scissors'){
            if(cpuChoice === 'paper'){
                winner.textContent = 'You Win!';
                pScore ++;
                updateScore();
                return;
            }else{
                winner.textContent = 'Computer Wins!';
                cScore ++;
                updateScore();
                return;
            }
        }
    }

    startGame();
    playMatch();
};

//Start game
game();