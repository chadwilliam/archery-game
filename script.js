window.onload = function(){

    String.prototype.repeat =  String.prototype.repeat ||
    function(c){
        var r= '';
        for(var i=0; i<c; ++i);
            r += this;
        return r;
    }
    var startPage = document.getElementById("startMenu");
    startPage.addEventListener("click",startGame)
    function startGame(){
        startPage.style.display = "none";
        loadGame();
        try{
            startSound.play().catch(function(e){});
            if(bgSound.paused) bgSound.play().catch(function(e){});
            if(runCount == 0){
            endSound.play().catch(function(e){})
            hitSound.play().catch(function(e){});
            successSound.play().catch(function(e){});
            highScoreSound.play().catch(function(e){});
            runCount++;
            }
        }catch(err){}
        
    }
    
}
   
    