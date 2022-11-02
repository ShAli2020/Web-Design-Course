// modell for SigIn
document.querySelector(".sign").addEventListener("click",function(){
    document.querySelector(".popup-sigin").classList.add("active");
    console.log("print sigin")
   });
   
   
  
   document.querySelector(".popup-sigin .close-btn").addEventListener("click",function(){
    document.querySelector(".popup-sigin").classList.remove("active");
   });


   
// model for llogin
 
 document.querySelector(".login").addEventListener("click",function(){
  document.querySelector(".popup-overlay1 ").classList.add("active");
  console.log("print")
 });
 
 

 document.querySelector(".popup-overlay1  .close-btn").addEventListener("click",function(){
  document.querySelector(".popup-overlay1").classList.remove("active");
 });

// model for 

// Model for image slide%%%%%%%%%%%%%%%%%
// creat popup with the imag
let ourgallary=document.querySelectorAll(".row img");
ourgallary.forEach(img=>{
    img.addEventListener('click',(e)=>{
    //  creat overlayelement   // 
    let overlay=document.createElement('div');
    // add class to overllay
    overlay.className='popup-overlay';
    //  append overlay to body
document.body.appendChild(overlay);
// creat the popup
let popupbox=document.createElement('div');

popupbox.className='popup-box';
if(img.alt!==null ){
    // creating heading
    let imgheading=document.createElement("h3");
    // creat text for heading
    let imgtext=document.createTextNode(img.alt)
    // append the text to the heading
    imgheading.appendChild(imgtext);
    // append the heading to the poup box
    popupbox.appendChild(imgheading);}



// creat the imag
 let popupimag=document.createElement('img');

//  console.log(img.src);
// set image 
popupimag.src=img.src;
// add imag to  popup box
popupbox.appendChild(popupimag);
// append the popup box to body
document.body.appendChild(popupbox);
// creat the close span
let closebuttom=document.createElement("span");
// creat the close buttom text
let closeButtomText=document.createTextNode("X");
// append text to close button
closebuttom.appendChild(closeButtomText);
// add class to close button
closebuttom.className='close-button';
// add close buttom to the popup box
popupbox.appendChild(closebuttom);




    });
});


// close popup
document.addEventListener('click',function(e){
    if(e.target.className=='close-button'){
        // remove the current popup
        e.target.parentNode.remove();
        // removr overlay
        document.querySelector(".popup-overlay").remove();

    }
});
