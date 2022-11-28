function openTab(tabName) {
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
    
    document.getElementById(`${tabName}-btn-top`).style.backgroundColor = "#006AD7";
    document.getElementById(`${tabName}-btn-btm`).style.backgroundColor = "#006AD7";
    document.getElementById(`${tabName}-btn-top`).style.color = "white";
    document.getElementById(`${tabName}-btn-btm`).style.color = "white";
    // element.style.backgroundColor = "#006AD7";
    // element.style.color = "white";
    
}

// Set Work tab as default selected
document.getElementById("work-btn-top").click();
