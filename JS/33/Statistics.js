class Statistics {
    constructor() {
        this.gameResults = [];
    }

    addGameToStatistics(win, bid) {
        let gameResult = {
            //if KEY name is same as VALUE nam (key:value) then we can make a shortcut instead of:
            //                   win: win,
            //                   bid: bid,
            win,
            bid,
        }
        console.log(gameResult);
        this.gameResults.push(gameResult)
    };

    showGameStatistics() {
        let games = this.gameResults.length;
        let wins = this.gameResults.filter(result => result.win).length;
        let loses = this.gameResults.filter(result => !result.win).length;
        console.log(wins, loses);
        return [games, wins, loses]
    }

}

// const stats = new Statistics()