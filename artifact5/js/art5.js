var myImages =['images/Business.jpg','images/Health.jpg','images/HumComm.jpg','images/SSPSCE.jpg','images/STEM.jpg','images/TechData.jpg'];


var captionImages =["Business","Health Sciences","Humanities & Communication","Social Science, Public Service & Community Engagement","STEM","Technology and Data"];

 var index=0; 

 function updateImage(){
 document.getElementById("slideshow").src = myImages[index];
 document.getElementById("slideshow").alt= captionImages[index];
 document.getElementById("caption").textContent = captionImages[index]; 
} 

function next(){
 if (myImages.length == index+1)
 index=0;
 else
 index++;
 updateImage();
} 
 

function back(){
 if (index===0)
 index=myImages.length-1;
 else
 index--;
 
 updateImage();
} 

var nextButton = document.getElementById("next"); 
var previousButton = document.getElementById("previous"); 

previousButton.addEventListener("click",back,false);
nextButton.addEventListener("click",next,false); 

function autoSlide(){
    if (document.getElementById("auto").checked)
     next(); 
    }
    
    

        setInterval(autoSlide,2000); // Next
