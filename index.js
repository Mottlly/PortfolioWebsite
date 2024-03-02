function showDiv(divname) {
  if (document.getElementById(divname).style.display === "block") {
    document.getElementById(divname).style.display = "none";
  } else {
    document.getElementById("rebelalliance").style.display = "none";
    document.getElementById("kruleboyz").style.display = "none";
    document.getElementById("kharadron").style.display = "none";
    document.getElementById("tauempire").style.display = "none";
    document.getElementById(divname).style.display = "block";
  }
}
