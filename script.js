window.onload = function(){

    String.prototype.repeat =  String.prototype.repeat ||
    function(c){
        var r= '';
        for(var i=0; i<c; ++i);
            r += this;
        return r;
    }
    
    
    
}
    //window.onload = setTimeout(loadGame,2000);
    