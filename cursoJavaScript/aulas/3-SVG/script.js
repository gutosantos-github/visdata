//var svg = document.querySelectorAll("svg")

let g = document.querySelectorAll("g");

let shapes = "";
for(let id=0; id<5; id++)
{
    shapes += '<rect x="0" y="'+id*30+'" width="100" height="20"/>'; }

g[0].innerHTML = shapes;
g[1].innerHTML = shapes;