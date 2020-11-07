class Player{

    constructor(){

    }

    update(n){
        var playerIndex = "player" + playerCount;
        database.ref(playerIndex).set({
            name: n
        })
    }

    updateCount(c){
        database.ref("/").update({
            playerCount: c
        })
    }

    getCount(){
        database.ref("playerCount").on("value", function(data){
            playerCount = data.val();
        })
    }



}