let happiness=50, hunger=50;
function updateStatus(){
    document.getElementById("status").textContent=`Happiness:${happiness}|Hunger:${hunger}`;
}
    function feed(){
        hunger=Math.max(0,hunger-10);updateStatus();
    }
    function play(){
        happiness=Math.min(100,happiness+10);updateStatus();
    }
