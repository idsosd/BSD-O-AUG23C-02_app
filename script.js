const eenheden = ['mm', 'cm', 'dm', 'm', 'dam', 'hm', 'km'];
let unit_left = document.getElementById("eenh_left");

function makeProblem()
{
    //alert("knop doet het");
    let index_left = Math.floor ( Math.random() * 7 );
    unit_left.innerText = eenheden[index_left];
}

function checkSolution()
{
    alert("deze doet het ook");
}