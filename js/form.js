class Form{

    constructor(){
        
    }

    display(){
        var title = createElement("h2");
        title.html("Car Racing Game");
        title.position(120, 20);
        
        var input = createInput("name");
        var button = createButton("PLAY");
        var greeting = createElement("h4");

        input.position(120, 120);
        button.position(180, 150);

        button.mousePressed(function(){
            input.hide();
            button.hide();

            var name = input.value();
            playerCount+= 1;
            player.update(name);
            player.updateCount(playerCount);

            greeting.html("Hello" + name + "We are waiting for others to join");
            greeting.position(20, 200);
        })

        


    }




}