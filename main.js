const carousel = document.querySelector(".project-image");
const displayIcons = document.querySelectorAll(".projects i")
let firstImg = carousel.querySelectorAll("img")[0]
let firstImgWidth = firstImg.clientWidth + 30;
console.log(firstImgWidth)
console.log(firstImg) 
let isDragstart = false, prevPageX, prevScrollLeft;
const dragging = (e)=>{
    e.preventDefault();
    carousel.classList.add("dragging");
    if (!isDragstart) return;
    let scrollDiff = e.pageX - prevPageX
    carousel.scrollLeft = prevScrollLeft - scrollDiff;
}
const dragStart = (e)=>{
 
    isDragstart =  true;
    prevScrollLeft = carousel.scrollLeft;
    prevPageX = e.pageX;

}
const dragStop = ()=>{
    isDragstart = false;
     carousel.classList.remove("dragging")
}
displayIcons.forEach((icon)=>{
    icon.addEventListener("click", ()=>{
        carousel.scrollLeft += icon.id=="left" ? -firstImgWidth : firstImgWidth;
    })
})


carousel.addEventListener("mousemove", dragging)
carousel.addEventListener("mousedown", dragStart)
carousel.addEventListener("mouseup", dragStop);

