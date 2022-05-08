
function clr(){
    document.getElementById("screen").value="";
    }
    
function remove(){
    var carry=document.getElementById("screen").value
    var c= Math.floor(carry/ 10)
    // var c=carry/10;
    document.getElementById("screen").value=c;
}
    function display(val){
     document.getElementById("screen").value+=val;
    }
    
    
    function equate(){
    var x=document.getElementById("screen").value;
    var y=eval(x);
    document.getElementById("screen").value=y;
    }
    