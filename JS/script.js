let r = document.getElementById("res");
function idato() {
    let n1 = parseInt(document.getElementById("num1").value);
    let n2 = parseInt(document.getElementById("num2").value);
    return { n1, n2 };
}

function opera(tipo) {
    let { n1, n2 } = idato();
    let res
    switch (tipo) {
        case "sumar": res = n1 + n2; break;
        case "restar": res = n1 - n2; break;
        case "multiplica": res = n1 * n2; break;
        case "divide": res = (n2 != 0 && n1 != 0) ? res = n1 / n2 : "que pones bobo acaso no sabes dividir xd"; break;
        default: res = "invalido pelotudo";
    }

    r.textContent = res;
}