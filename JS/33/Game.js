class Game {
    constructor(start) {
        this.stats = new Statistics();
        this.wallet = new Wallet(start);
        document.getElementById('start').addEventListener('click', this.startGame.bind(this));
        this.spanWallet = document.querySelector('span.wallet');
        this.boards = document.querySelectorAll('div.color');
        this.inputBid = document.getElementById('bid');
        this.spanResult = document.querySelector('span.result');
        this.spanGames = document.querySelector('span.number');
        this.spanWins = document.querySelector('span.win');
        this.spanLoses = document.querySelector('span.loss');

        this.render()
    }

    render(colors = ['grey', 'grey', 'grey'], money = this.wallet.getWalletValue(), result = "", stats = [0, 0, 0], bid = 0, wonMoney = 0) {
        // console.log('lets play');
        this.boards.forEach((board, index) => {
            board.style.backgroundColor = colors[index]
        })
        this.spanWallet.textContent = money;
        if (result) {
            result = `You won ${wonMoney}$.`;
        } else if (!result && result !== '') result = `You lost ${bid}$.`
        this.spanResult.textContent = result;
        this.spanGames.textContent = stats[0];
        this.spanWins.textContent = stats[1];
        this.spanLoses.textContent = stats[2];

        this.inputBid.value = "";
    }

    startGame() {
        //Check input if value is lower then 0
        if (this.inputBid.value < 1) return alert('Wrong value')

        //Compare value in input (money we wany to give) with our wallet
        const bid = Math.floor(this.inputBid.value);
        if (!this.wallet.checkCanPlay(bid)) {
            return alert('Not enough money or wrong value')
        }

        //Change value in wallet. Minus the value in input.
        this.wallet.changeWallet(bid, '-');

        //Every SPIN creates new Draw() having different colors everytime.
        this.draw = new Draw();

        //Getting result from method insine Draw.
        const colors = this.draw.getDrawResult();

        //Getting result with method inside Result.
        const win = Result.checkIfWon(colors);

        //Getting information about how much money we won.
        const wonMoney = Result.moneyWonInGame(win, bid);

        //Inscreasing wallet value by wonMoney
        this.wallet.changeWallet(wonMoney);

        this.stats.addGameToStatistics(win, bid)

        this.render(colors, this.wallet.getWalletValue(), win, this.stats.showGameStatistics(), bid, wonMoney)
    }
}