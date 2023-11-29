const eenheden = ['mm', 'cm', 'dm', 'm', 'dam', 'hm', 'km'];
let unit_left = document.getElementById("eenh_left");
let unit_right = document.getElementById("eenh_right");

let selected_dim = document.getElementById("dim-select");

let index_left = 0;
let index_right = 0;

let problem_nmbr = 3.14;
let correct_answer = 3.14;

function makeProblem() {
    //alert("knop doet het");
    let dimension = selected_dim.value;
    // index_left = 0;
    // index_right = 6;
    index_left = Math.floor ( Math.random() * 7 );
    index_right = Math.floor ( Math.random() * 7 );

    problem_nmbr = new Decimal(Math.random() * 100).toDP(3);

    document.getElementById("inp_left").value = problem_nmbr;

    if (dimension > 1) {
        unit_left.innerHTML = eenheden[index_left] + "<sup>" + dimension + "</sup>";
        unit_right.innerHTML = eenheden[index_right] + "<sup>" + dimension + "</sup>";
    } else {
        unit_left.innerHTML = eenheden[index_left];
        unit_right.innerHTML = eenheden[index_right];
    }
}

function checkSolution() {
    let aantal_komma_verschuivingen = selected_dim.value * Math.abs((index_right - index_left));

    //we moeten bepalen of de komma naar links of naar rechts moet;
    //als index_left kleiner is dan index_right, dan moet de komma naar links
    //als index_left groter is dan index_right, dan moet de komma naar rechts
    if (index_left < index_right) {
        correct_answer = problem_nmbr.div(new Decimal(10).pow(aantal_komma_verschuivingen))
        // correct_answer = problem_nmbr * Math.pow(10, aantal_komma_verschuivingen);
    } else {
        correct_answer = problem_nmbr.mul(new Decimal(10).pow(aantal_komma_verschuivingen))
        // correct_answer = problem_nmbr / Math.pow(10, aantal_komma_verschuivingen);
    }

    correct_answer = toPlainString(correct_answer)
    //alert("het aantal komma verschuivingen is: " + aantal_komma_verschuivingen + " en het goede antwoord is " + correct_answer);
    let given_answer = document.getElementById("inp_right").value;
    if(given_answer == correct_answer){
        alert("Antwoord is goed!");
    }
    else
    {
        alert("Antwoord is fout!");
    }

}

function toPlainString(num) {
    return ('' + num).replace(/(-?)(\d*)\.?(\d*)e([+-]\d+)/,
        function (a, b, c, d, e) {
            return e < 0
                ? b + '0.' + Array(1 - e - c.length).join(0) + c + d
                : b + c + d + Array(e - d.length + 1).join(0)
        });
}