/**
 * Created by Harambe on 09-Mar-17.
 */
var imageLinks = ["images/chance.jpg", "images/Dancing Girl.jpg", "images/Frank Ocean.jpg", "images/Indie Girl 1.jpg", "images/Indie Girl 2.jpg", "images/La La Land.jpg", "images/Leia.jpg",
    "images/Logan.jpg", "images/luna.jpg", "images/Moonlight.jpg", "images/Neon Demon.jpg", "images/paul rudd.jpg", "images/Rey.jpg", "images/ricky baker.jpg", "images/Summer.jpg",
    "images/tom holland.jpg", "images/trainspotting.jpg", "images/wonderwoman.jpg" ];

var videoLinks = ["https://www.youtube.com/embed/iTTMr2z_NUo", "https://www.youtube.com/embed/wE93N9GzAXU",
    "https://www.youtube.com/embed/mEog9niV24w", "https://www.youtube.com/embed/euxmBAHqfPE", "https://www.youtube.com/embed/yrJV_pNsLuU"];


var img1 = document.querySelector("#one");
var video = document.getElementsByTagName("iframe")[0];
var counter = 0;
var figcaption = document.querySelector("figcaption");
var embedDiv = document.getElementById("embedDiv");
img1.setAttribute("src", imageLinks[0]);
figcaption.textContent = imageLinks[0];
var prevImg = document.querySelector(".prev-img");
var nextImg = document.querySelector(".next-img");
var portfolioLinkDrawings = document.getElementsByTagName("a")[0];
var portfolioLinkFilms = document.getElementsByTagName("a")[1];
var test1 = document.getElementById("test1");
var test2 = document.getElementById("test2");

figcaption.textContent = figcaption.textContent.slice(7)
figcaption.textContent = figcaption.textContent.slice(0, -4)
figcaption.classList.add("captitalize");

prevImg.addEventListener("click", imageSlider2);

nextImg.addEventListener("click", imageSlider);

portfolioLinkDrawings.addEventListener("click", function() {
    portfolioLinkDrawings.classList.add("active")
    portfolioLinkFilms.classList.remove("active")
    img1.classList.remove("display-none")
    video.classList.add("display-none");
    embedDiv.classList.add("display-none")
    figcaption.classList.remove("display-none")
})
portfolioLinkFilms.addEventListener("click", function() {
    console.log("clicked")
    portfolioLinkFilms.classList.add("active")
    portfolioLinkDrawings.classList.remove("active")
    img1.classList.add("display-none");
    video.classList.remove("display-none");
    embedDiv.classList.remove("display-none")
    figcaption.classList.add("display-none")

})
setInterval(setIntervalTestimonial, 5000);
function imageSlider(){
    if(portfolioLinkDrawings.classList.contains("active")){
        if(counter !== imageLinks.length - 1){
            counter++
            img1.setAttribute("src", imageLinks[counter])
            figcaption.textContent = imageLinks[counter];
            figcaption.textContent = figcaption.textContent.slice(7)
            figcaption.textContent = figcaption.textContent.slice(0, -4)
        }
        else{
            counter = 0;
            img1.setAttribute("src", imageLinks[counter])
            figcaption.textContent = imageLinks[counter];
            figcaption.textContent = figcaption.textContent.slice(7)
            figcaption.textContent = figcaption.textContent.slice(0, -4)
        }
    }
    if(portfolioLinkFilms.classList.contains("active")){
        if(counter !== videoLinks.length - 1){
            counter++
            video.setAttribute("src", videoLinks[counter])
        }
        else{
            counter = 0;
            video.setAttribute("src", videoLinks[counter])
        }
    }


}
function imageSlider2(){
    if(portfolioLinkDrawings.classList.contains("active")) {
        if (counter <= imageLinks.length) {
            counter--
            img1.setAttribute("src", imageLinks[counter])
            figcaption.textContent = imageLinks[counter];
            figcaption.textContent = figcaption.textContent.slice(7)
            figcaption.textContent = figcaption.textContent.slice(0, -4)

        }
        if (counter < 0) {
            counter = imageLinks.length - 1;
            img1.setAttribute("src", imageLinks[counter])
            figcaption.textContent = imageLinks[counter];
            figcaption.textContent = figcaption.textContent.slice(7)
            figcaption.textContent = figcaption.textContent.slice(0, -4)
        }
    }
    if(portfolioLinkFilms.classList.contains("active")){
        if(counter <= videoLinks.length){
            counter--
            video.setAttribute("src", videoLinks[counter])
        }
        if (counter < 0){
            counter = videoLinks.length - 1;
            video.setAttribute("src", videoLinks[counter])
        }
    }
}
/*function setIntervalTestimonial() {
    test1.classList.toggle("display-none")
    test2.classList.toggle("display-none");

}*/
