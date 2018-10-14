var collapseBttn1 = document.getElementById('bttn1');
var collapseBttn2 = document.getElementById('bttn2');
var collapseBttn3 = document.getElementById('bttn3');
var collapseBttn4 = document.getElementById('bttn4');
var collapseBttn5 = document.getElementById('bttn5');
var collapseBttn6 = document.getElementById('bttn6');

var linkTxt1 = document.getElementById('txt1');
var linkTxt2 = document.getElementById('txt2');
var linkTxt3 = document.getElementById('txt3');
var linkTxt4 = document.getElementById('txt4');
var linkTxt5 = document.getElementById('txt5');
var linkTxt6 = document.getElementById('txt6');
//when not open -> border radius will be 18 below
if (collapseBttn1.getAttribute("aria-expanded") === "false") {
  // console.log("ja");
  document.getElementById("cardHeader1").style.borderRadius = "0 0 18px 18px";
  }
if (collapseBttn2.getAttribute("aria-expanded") === "false") {
  // console.log("ja");
  document.getElementById("cardHeader2").style.borderRadius = "0 0 18px 18px";
  }
if (collapseBttn3.getAttribute("aria-expanded") === "false") {
  // console.log("ja");
  document.getElementById("cardHeader3").style.borderRadius = "0 0 18px 18px";
  }
if (collapseBttn4.getAttribute("aria-expanded") === "false") {
  // console.log("ja");
  document.getElementById("cardHeader4").style.borderRadius = "0 0 18px 18px";
  }
if (collapseBttn5.getAttribute("aria-expanded") === "false") {
  // console.log("ja");
  document.getElementById("cardHeader5").style.borderRadius = "0 0 18px 18px";
  }
if (collapseBttn6.getAttribute("aria-expanded") === "false") {
  // console.log("ja");
  document.getElementById("cardHeader6").style.borderRadius = "0 0 18px 18px";
  }

//when you click the button and it opens the border radius of the header will become 0
//and the text will change to view less or view more
collapseBttn1.onclick = function(){
  if (collapseBttn1.getAttribute("aria-expanded") === "false") {
    // console.log("ja");
    linkTxt1.innerHTML = "View less";
    document.getElementById("cardHeader1").style.borderRadius = "0px";
    }
    else {
      linkTxt1.innerHTML = "View more";
      document.getElementById("cardHeader1").style.borderRadius = "0 0 18px 18px";
    }
  };
collapseBttn2.onclick = function(){
  if (collapseBttn2.getAttribute("aria-expanded") === "false") {
    // console.log("ja");
    linkTxt2.innerHTML = "View less";
    document.getElementById("cardHeader2").style.borderRadius = "0px";
    }
    else {
      linkTxt2.innerHTML = "View more";
      document.getElementById("cardHeader2").style.borderRadius = "0 0 18px 18px";
    }
  };
collapseBttn3.onclick = function(){
  if (collapseBttn3.getAttribute("aria-expanded") === "false") {
    // console.log("ja");
    linkTxt3.innerHTML = "View less";
    document.getElementById("cardHeader3").style.borderRadius = "0px";
    }
    else {
      linkTxt3.innerHTML = "View more";
      document.getElementById("cardHeader3").style.borderRadius = "0 0 18px 18px";
    }
  };
collapseBttn4.onclick = function(){
  if (collapseBttn4.getAttribute("aria-expanded") === "false") {
    // console.log("ja");
    linkTxt4.innerHTML = "View less";
    document.getElementById("cardHeader4").style.borderRadius = "0px";
    }
    else {
      linkTxt4.innerHTML = "View more";
      document.getElementById("cardHeader4").style.borderRadius = "0 0 18px 18px";
    }
  };
collapseBttn5.onclick = function(){
  if (collapseBttn5.getAttribute("aria-expanded") === "false") {
    // console.log("ja");
    linkTxt5.innerHTML = "View less";
    document.getElementById("cardHeader5").style.borderRadius = "0px";
    }
    else {
      linkTxt5.innerHTML = "View more";
      document.getElementById("cardHeader5").style.borderRadius = "0 0 18px 18px";
    }
  };
collapseBttn6.onclick = function(){
  if (collapseBttn6.getAttribute("aria-expanded") === "false") {
    // console.log("ja");
    linkTxt6.innerHTML = "View less";
    document.getElementById("cardHeader6").style.borderRadius = "0px";
    }
    else {
      linkTxt6.innerHTML = "View more";
      document.getElementById("cardHeader6").style.borderRadius = "0 0 18px 18px";
    }
  };
