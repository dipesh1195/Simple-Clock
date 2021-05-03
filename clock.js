let date;
let t;
let d;
function showclock() {
	date = new Date();
	t = date.getHours() + " : "+ date.getMinutes() +" : "+ date.getSeconds();
	document.getElementById("clock").innerHTML = t;

    d = date.toLocaleDateString();
    document.getElementById("date").innerHTML = d;
	
	

} function start(){ 
	var randomColor =Math.floor(Math.random()*16777215).toString(16);
    document.getElementById('dps').style.backgroundColor = "#"+randomColor;

    var rc = Math.floor(Math.random()*16777215).toString(16);
	document.getElementById('clock').style.color = "#"+rc;
	document.getElementById('date').style.color = "#"+rc;
	document.getElementById('btn').style.backgroundColor = "#"+rc;

}
function change(){
	var randomColor =Math.floor(Math.random()*16777215).toString(16);
	document.getElementById('bdy').style.backgroundColor = "#"+randomColor;
	document.getElementById('back').style.backgroundColor = "#"+randomColor;
}


