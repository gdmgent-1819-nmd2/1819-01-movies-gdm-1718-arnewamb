var collapseBttn1=document.getElementById("bttn1"),collapseBttn2=document.getElementById("bttn2"),collapseBttn3=document.getElementById("bttn3"),collapseBttn4=document.getElementById("bttn4"),collapseBttn5=document.getElementById("bttn5"),collapseBttn6=document.getElementById("bttn6"),linkTxt1=document.getElementById("txt1"),linkTxt2=document.getElementById("txt2"),linkTxt3=document.getElementById("txt3"),linkTxt4=document.getElementById("txt4"),linkTxt5=document.getElementById("txt5"),linkTxt6=document.getElementById("txt6");"false"===collapseBttn1.getAttribute("aria-expanded")&&(document.getElementById("cardHeader1").style.borderRadius="0 0 18px 18px"),"false"===collapseBttn2.getAttribute("aria-expanded")&&(document.getElementById("cardHeader2").style.borderRadius="0 0 18px 18px"),"false"===collapseBttn3.getAttribute("aria-expanded")&&(document.getElementById("cardHeader3").style.borderRadius="0 0 18px 18px"),"false"===collapseBttn4.getAttribute("aria-expanded")&&(document.getElementById("cardHeader4").style.borderRadius="0 0 18px 18px"),"false"===collapseBttn5.getAttribute("aria-expanded")&&(document.getElementById("cardHeader5").style.borderRadius="0 0 18px 18px"),"false"===collapseBttn6.getAttribute("aria-expanded")&&(document.getElementById("cardHeader6").style.borderRadius="0 0 18px 18px"),collapseBttn1.onclick=function(){"false"===collapseBttn1.getAttribute("aria-expanded")?(linkTxt1.innerHTML="View less",document.getElementById("cardHeader1").style.borderRadius="0px"):(linkTxt1.innerHTML="View more",document.getElementById("cardHeader1").style.borderRadius="0 0 18px 18px")},collapseBttn2.onclick=function(){"false"===collapseBttn2.getAttribute("aria-expanded")?(linkTxt2.innerHTML="View less",document.getElementById("cardHeader2").style.borderRadius="0px"):(linkTxt2.innerHTML="View more",document.getElementById("cardHeader2").style.borderRadius="0 0 18px 18px")},collapseBttn3.onclick=function(){"false"===collapseBttn3.getAttribute("aria-expanded")?(linkTxt3.innerHTML="View less",document.getElementById("cardHeader3").style.borderRadius="0px"):(linkTxt3.innerHTML="View more",document.getElementById("cardHeader3").style.borderRadius="0 0 18px 18px")},collapseBttn4.onclick=function(){"false"===collapseBttn4.getAttribute("aria-expanded")?(linkTxt4.innerHTML="View less",document.getElementById("cardHeader4").style.borderRadius="0px"):(linkTxt4.innerHTML="View more",document.getElementById("cardHeader4").style.borderRadius="0 0 18px 18px")},collapseBttn5.onclick=function(){"false"===collapseBttn5.getAttribute("aria-expanded")?(linkTxt5.innerHTML="View less",document.getElementById("cardHeader5").style.borderRadius="0px"):(linkTxt5.innerHTML="View more",document.getElementById("cardHeader5").style.borderRadius="0 0 18px 18px")},collapseBttn6.onclick=function(){"false"===collapseBttn6.getAttribute("aria-expanded")?(linkTxt6.innerHTML="View less",document.getElementById("cardHeader6").style.borderRadius="0px"):(linkTxt6.innerHTML="View more",document.getElementById("cardHeader6").style.borderRadius="0 0 18px 18px")};