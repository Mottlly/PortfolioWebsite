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

function darkmodeon() {
  let body = document.body;
  body.classList.toggle("darkmode");
  localStorage.setItem("Darkmodetrack", body.classList.length);
  document.getElementById("darkbutt").classList.toggle("darkdarkbutton");
  console.log(body.classList.length);

  if (body.classList.length === 0) {
    document.getElementById("darkbutt").innerHTML =
      "<img src='Assets/darkmode.webp' class='socialsimg'></img>";
  }
  if (body.classList.length === 1) {
    document.getElementById("darkbutt").innerHTML =
      "<img src='Assets/light.png' class='socialsimg'></img>";
  }
}

function navbardark() {
  let steven = document.getElementsByClassName("navbarlink");
  console.log(steven);
  for (let i = 0; i < steven.length; i++)
    steven[i].classList.toggle("navbarlinkdark");
}

function onLoad() {
  let steven = JSON.parse(window.localStorage.getItem("Darkmodetrack"));
  if (steven === 0 || steven === null) {
    document.getElementById("darkbutt").innerHTML =
      "<img src='Assets/darkmode.webp' class='socialsimg'></img>";
  }
  if (steven === 1) {
    darkmodeon();
    navbardark();
    document.getElementById("darkbutt").innerHTML =
      "<img src='Assets/light.png' class='socialsimg'></img>";
  }
}

window.onload = () => {
  onLoad();
};
