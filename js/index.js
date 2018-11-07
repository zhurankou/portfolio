document.getElementById("defaultOpenOne").click();
document.getElementById("defaultOpenTwo").click();
document.getElementById("defaultOpenThree").click();

function nextTabOne(evt, onTab) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent-one");
    console.log(tabcontent);
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks-one");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(onTab).style.display = "block";
    evt.currentTarget.className += " active";
}

function nextTabTwo(evt, onTab) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent-two");
    console.log(tabcontent);
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks-two");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(onTab).style.display = "block";
    evt.currentTarget.className += " active";
}

function nextTabThree(evt, onTab) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent-three");
    console.log(tabcontent);
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks-three");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(onTab).style.display = "block";
    evt.currentTarget.className += " active";
}
