// var outputScreen = document.getElementById(`screen`);
//     document.getElementById() = outputScreen.value
    
// function display(Number){
//     outputScreen.value += Number;
// }

// function calculate(){
//     outputScreen.value = eval(outputScreen.value);
// } 

// function Clear(){
//     outputScreen.value ="";
// }

// function del(){
//     outputScreen.value = outputScreen.value.slice(0,-1)
// }

function Display(value) {
    document.getElementById('screen').value +=value;
}


function Del(){
    document.getElementById('screen').value = document.getElementById('screen').value.slice(0, -1);
}

function Clear(){
    document.getElementById('screen').value = "";
}


function calculate(){
    document.getElementById('screen').value = eval(document.getElementById('screen').value);
}


function log() {
    var hen = Math.log(document.getElementById('screen').value);
    document.getElementById('screen').value = hen;
}

function sin() {
    var he = Math.sin(document.getElementById('screen').value);
    document.getElementById('screen').value = he;
}

function cos() {
    var h = Math.cos(document.getElementById('screen').value);
    document.getElementById('screen').value = h;
} 

function tan() {
    var h = Math.tan(document.getElementById('screen').value);
    document.getElementById('screen').value = h;
} 



