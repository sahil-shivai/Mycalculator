function display(val){
    document.getElementById('digits').innerHTML += val;
}
function clearer(){
    document.getElementById('digits').innerHTML = "";
}
function calculateit(){
    var x = document.getElementById('digits').innerHTML;
    var ans = math.evaluate(x);
    document.getElementById('digits').innerHTML = ans;
}