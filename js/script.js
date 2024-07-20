function calcular(button_id) {

    const x = document.getElementById(button_id);
    xValue = x.innerHTML;

    if (xValue == "DEL" || xValue === "RESETAR") {
        document.getElementById("result").value = ""
    } else if (xValue === "=") {
        var valorFinal = eval(document.getElementById("result").value)
        document.getElementById("result").value = valorFinal
    } else if (xValue == "x") {
        document.getElementById("result").value += "*"
    } else {
        document.getElementById("result").value += xValue
    }
}
