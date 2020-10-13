function openTab(tabName, element) {
    var i, tabcontent;
    tabcontent = document.getElementsByClassName("tabContent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
      
    let tablinks = document.getElementsByClassName("tabbed");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.backgroundColor = "#F1F1F1";
        tablinks[i].style.color = "black";
    }
      
    document.getElementById(tabName).style.display = "block";
    element.style.backgroundColor = "#006AD7";
    element.style.color = "white";
    
}

document.getElementById("default").click();
