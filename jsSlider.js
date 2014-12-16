function open_panel() {
    slideIt();
    var a = document.getElementById("sidebar");
    a.setAttribute("id", "sidebar1");
    a.setAttribute("onclick", "close_panel()");
}

function slideIt() {
    var slidingDiv = document.getElementById("slider");
    var stopPosition = 0;

    if (parseInt(slidingDiv.style.right) < stopPosition) {
        slidingDiv.style.right = parseInt(slidingDiv.style.right) + 2 + "px";
        setTimeout(slideIt, 1);
    }
}

function close_panel() {
    slideIn();
    a = document.getElementById("sidebar1");
    a.setAttribute("id", "sidebar");
    a.setAttribute("onclick", "open_panel()");
}

function slideIn() {
    var slidingDiv = document.getElementById("slider");
    var stopPosition = -342;

    if (parseInt(slidingDiv.style.right) > stopPosition) {
        slidingDiv.style.right = parseInt(slidingDiv.style.right) - 2 + "px";
        setTimeout(slideIn, 1);
    }
}
function validateData() {
    validateName();
    ValidateEmail();
    
}
function ValidateEmail() {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    a = document.getElementById("demail");
    if (a.value.match(mailformat)) {
       
    }
    else {
        alert("You have entered an invalid email address!");
        a.focus();
        return false;
    }
}

function validateName() {
    var nameformat = /^[$A-Z_][0-9A-Z_$]*$/i;
    a = document.getElementById("dname");
    if (a.value.match(nameformat)) {
       
    }
    else {
        alert("You have entered an invalid character on Name!");
        a.focus();
        return false;
    }
}