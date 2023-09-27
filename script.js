var elem1=document.querySelector("#elem1")
var elemimg=document.querySelector("#elem1 img")

elem1.addEventListener("mousemove", function(dets){
    elemimg.style.left=dets.x+"px"
    elemimg.style.top=dets.y+"px"
}) 
elem1.addEventListener("mouseenter", function(dets){
    elemimg.style.opacity=1   
}) 
elem1.addEventListener("mouseleave", function(dets){
    elemimg.style.opacity=0   
}) 


var elem2=document.querySelector("#elem2")
var elemimg2=document.querySelector("#elem2 img")

elem2.addEventListener("mousemove", function(dets){
    elemimg2.style.left=dets.x+"px"
    elemimg2.style.top= (dets.y-120)+"px"
    
}) 
elem2.addEventListener("mouseenter", function(dets){
    elemimg2.style.opacity=1   
}) 
elem2.addEventListener("mouseleave", function(){
    elemimg2.style.opacity=0   
}) 

var elem3=document.querySelector("#elem3")
var elemimg3=document.querySelector("#elem3 img")

elem3.addEventListener("mousemove", function(dets){
    elemimg3.style.left=dets.x+"px"
    elemimg3.style.top= (dets.y-240)+"px"
    
}) 
elem3.addEventListener("mouseenter", function(dets){
    elemimg3.style.opacity=1   
}) 
elem3.addEventListener("mouseleave", function(){
    elemimg3.style.opacity=0   
}) 

var elem4=document.querySelector("#elem4")
var elemimg4=document.querySelector("#elem4 img")

elem4.addEventListener("mousemove", function(dets){
    elemimg4.style.left=dets.x+"px"
    elemimg4.style.top= (dets.y-360)+"px"
    
}) 
elem4.addEventListener("mouseenter", function(dets){
    elemimg4.style.opacity=1   
}) 
elem4.addEventListener("mouseleave", function(){
    elemimg4.style.opacity=0   
}) 


// or

// var elem=document.querySelectorAll(".elem");

// elem.forEach(function(val){
    
    
//     val.addEventListener("mouseenter",function(){
//         val.childNodes[3].style.opacity=1      
//     })
//     val.addEventListener("mouseleave",function(){
//         val.childNodes[3].style.opacity=0  
//     })
//     val.addEventListener("mousemove", function(dets){
//         console.log(dets)
//     val.childNodes[3].style.left=dets.x+"px"
//     val.childNodes[3].style.top=dets.y-MouseEvent[clientY]+"px"
//     }) 
// })