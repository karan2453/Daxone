$(function(){
    $("i").click(function(){
        $("ul").slideToggle();
    });
});
    
const scrool= document.querySelector(".scrool");

window.addEventListener("scroll", () => {
    if(window.PageYOffset>100){
        scrool.classList.add("active");
    }else{
        scrool.classList.remove("active");
    }
})



