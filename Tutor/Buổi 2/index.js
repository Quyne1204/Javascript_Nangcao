/*
  DOM
  1, Dom la gi ? cac thanh phan trong DOM
  2, Tim kiem truy cap cac phan tu HTML 
  3, style, Attributes, class
  4, Tao moi phan tu trong HTML va xoa phan tu trong HTML
*/
// const maintitle = document.getElementById("main-title");
// const title1 = document.getElementsByClassName("title1");
// const title1 = document.getElementsByTagName("h1");
// const title1 = document.querySelector("h1");
// console.log(title1);
const producttitle = document.createElement("h2");
producttitle.innerHTML = "tieu de san pham";
producttitle.classList.add("pro");

const productdiv = document.querySelector("div");
productdiv.prepend(producttitle); //or addend ,before,after
// console.log(producttitle);
productdiv.remove();

const maintitle = document.querySelector;

const addPro = () => console.log();
