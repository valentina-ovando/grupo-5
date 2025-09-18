//Navegador-Bruno
//Carrusel-Ramiro
//Tarjetas-Conny
//Footer-Valentina

//CREACION FOOTER
let footer = document.querySelector("#footer")
//Creacion LISTA 1
let ul = document.createElement("ul")
let lista1 = document.createElement("li")

// Creacion LISTA 2
let ul2 = document.createElement("ul")
let lista2= document.createElement("li")


//LISTADO1
let li1 = document.createElement("li")
li1.textContent = "holi1"

let li2 = document.createElement("li")
li2.textContent = "holi2"

let li3 = document.createElement("li")
li3.textContent = "holi3"

let li4 = document.createElement("li")
li4.textContent = "holi4"

let li5 = document.createElement("li")
li5.textContent = "holi5"


//LISTADO2
let liA = document.createElement("li")
liA.textContent = "MJ"

let liB = document.createElement("li")
liB.textContent = "JM"

let liC = document.createElement("li")
liC.textContent = "HL"

let liD = document.createElement("li")
liD.textContent = "LH"

//Creacion LISTA3
let ul3 = document.createElement("ul")
let lista3= document.createElement("li")


//LISTADO3
let liE = document.createElement("li")
li1.textContent = "KHLG"

let liF = document.createElement("li")
li2.textContent = "JFKD"

let liG = document.createElement("li")
li3.textContent = "JKGF"

let liH = document.createElement("li")
li4.textContent = "JFKDL"

let liJ = document.createElement("li")
li5.textContent = "JGKILXD"




ul.append(lista1, li1, li2, li3, li4, li5);
footer.appendChild(ul)

ul2.append(lista2,liA,liB,liC,liD)
footer.appendChild(ul2)

ul3.append(lista3,liE,liF,liG,liH,liJ)
footer.appendChild(ul3)