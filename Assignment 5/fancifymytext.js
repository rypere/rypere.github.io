function textSize() {
    //alert("Text Size!");
    document.getElementById("usertext").style.fontSize = "24px";
}

function textFancy() {
    //alert("Text Fancy!");
    document.getElementById("usertext").style.fontWeight = "bold";
    document.getElementById("usertext").style.color = "blue";
    document.getElementById("usertext").style.textDecoration = "underline";

}

function textBoring() {
    //alert("Text Boring!");
    document.getElementById("usertext").style.fontWeight = "normal";
    document.getElementById("usertext").style.color = "";
    document.getElementById("usertext").style.textDecoration = "";

}

function textMoo(){
    //alert("Text Moo!");
    document.getElementById("usertext").style.textTransform = "uppercase";

    var str = document.getElementById("usertext").value;

    //var str = "test";

    str = str.replace(".", "-Moo.");
    str = str.replace("!", "-Moo!");
    str = str.replace("?", "-Moo?");

    document.getElementById("usertext").value = str;
}
