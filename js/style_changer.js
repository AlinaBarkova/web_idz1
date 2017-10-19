
function changeStyle()  {
    var styleElem = document.getElementById("white_style");
    if (styleElem != null) {
        styleElem.id =  "black_style";
    } else {
        styleElem = document.getElementById("black_style");
        styleElem.id = "white_style";
    }
}