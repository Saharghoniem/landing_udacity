let nav = document.querySelector("#navbar__list");
let sections = document.querySelectorAll("section");
let fragment = document.createDocumentFragment();
//fragment helpful in code(reduce repaint &reflow)
//build 
function makeNav() {
  // looping in sections
  for (let section of sections) {
    let linkName = section.getAttribute("data-nav");
    let sectionName = section.getAttribute("id");
    let listItem = document.createElement("li");
    let link = document.createElement("a");
    // add class
    link.classList.add("menu__link");
    // href
    link.href = `#${sectionName}`
    link.textContent =linkName
    //smooth__scrolling
    link.addEventListener("click",event=> {
      event.preventDefault();
      section.scrollIntoView({
        behavior: "smooth"
      });
    });
    listItem.appendChild(link);
    fragment.appendChild(listItem);
  }
  
  nav.appendChild(fragment);
}
// function here
window.addEventListener("load", makeNav);


//  add active , remove active
let links=document.querySelectorAll("a.menu__link")
function addCircle(){
// looping
sections.forEach(section =>{
  let sectionTop =section.getBoundingClientRect().top
  let sectionTitle =section.getAttribute("data-nav");
  if(sectionTop> 0 && sectionTop<280){
    // active class
    section.classList.add("your-active-class")
  // class link active
     for(let link of links ){
      link.textContent === sectionTitle ? link.classList.add("active-link")
      :link.classList.remove("active-link")
     }
}})}
window.addEventListener("scroll",addCircle)

  
// button up(show  = add and remove)
const span= document.querySelector(".up");
window.onscroll= function(){
  this.scrollY >=500 ? span.classList.add("show"): span.classList.remove("show")
};
span.onclick =function(){
  window.scrollTo({
    top:0,
    behavior:"smooth"
  })}

