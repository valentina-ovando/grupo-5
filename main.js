// NAVEGADOR - BRUNO

// Crear elementos principales
const nav = document.createElement('nav');
nav.className = 'navbar navbar-expand-lg bg-body-tertiary';

const container = document.createElement('div');
container.className = 'container-fluid';

// marca
const brand = document.createElement('a');
brand.className = 'navbar-brand';
brand.href = '#';
brand.textContent = 'Navbar';

// boton toggler
const toggler = document.createElement('button');
toggler.className = 'navbar-toggler';
toggler.type = 'button';
toggler.setAttribute('data-bs-toggle', 'collapse');
toggler.setAttribute('data-bs-target', '#navbarSupportedContent');
toggler.setAttribute('aria-controls', 'navbarSupportedContent');
toggler.setAttribute('aria-expanded', 'false');
toggler.setAttribute('aria-label', 'Toggle navigation');

const togglerIcon = document.createElement('span');
togglerIcon.className = 'navbar-toggler-icon';
toggler.appendChild(togglerIcon);

// Contenido
const collapse = document.createElement('div');
collapse.className = 'collapse navbar-collapse';
collapse.id = 'navbarSupportedContent';

// lista de navegación
const navList = document.createElement('ul');
navList.className = 'navbar-nav me-auto mb-2 mb-lg-0';

// objetos del menú
const items = [
  { text: 'Home', href: '#', class: 'nav-link active', aria: 'page' },
  { text: 'Link', href: '#', class: 'nav-link' },
  { text: 'Disabled', href: '#', class: 'nav-link disabled', ariaDisabled: true }
];

// agregar ítems
items.forEach(item => {
  const li = document.createElement('li');
  li.className = 'nav-item';

  const a = document.createElement('a');
  a.className = item.class;
  a.href = item.href;
  a.textContent = item.text;
  if (item.aria) a.setAttribute('aria-current', item.aria);
  if (item.ariaDisabled) a.setAttribute('aria-disabled', 'true');

  li.appendChild(a);
  navList.appendChild(li);
});

// despegable
const dropdownLi = document.createElement('li');
dropdownLi.className = 'nav-item dropdown';

const dropdownToggle = document.createElement('a');
dropdownToggle.className = 'nav-link dropdown-toggle';
dropdownToggle.href = '#';
dropdownToggle.role = 'button';
dropdownToggle.setAttribute('data-bs-toggle', 'dropdown');
dropdownToggle.setAttribute('aria-expanded', 'false');
dropdownToggle.textContent = 'Dropdown';

const dropdownMenu = document.createElement('ul');
dropdownMenu.className = 'dropdown-menu';

['Action', 'Another action', null, 'Something else here'].forEach(text => {
  if (text === null) {
    const divider = document.createElement('hr');
    divider.className = 'dropdown-divider';
    const li = document.createElement('li');
    li.appendChild(divider);
    dropdownMenu.appendChild(li);
  } else {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.className = 'dropdown-item';
    a.href = '#';
    a.textContent = text;
    li.appendChild(a);
    dropdownMenu.appendChild(li);
  }
});

dropdownLi.appendChild(dropdownToggle);
dropdownLi.appendChild(dropdownMenu);
navList.appendChild(dropdownLi);

// formulario
const form = document.createElement('form');
form.className = 'd-flex';
form.role = 'search';

const input = document.createElement('input');
input.className = 'form-control me-2';
input.type = 'search';
input.placeholder = 'Search';
input.setAttribute('aria-label', 'Search');

const button = document.createElement('button');
button.className = 'btn btn-outline-success';
button.type = 'submit';
button.textContent = 'Search';

form.appendChild(input);
form.appendChild(button);

// armo todo
collapse.appendChild(navList);
collapse.appendChild(form);
container.appendChild(brand);
container.appendChild(toggler);
container.appendChild(collapse);
nav.appendChild(container);

// entra en el documento
document.body.prepend(nav);

// CARRUSEL - RAMIRO 



// TARJETAS - CONNY

class Persona {
  constructor(nombre, apellido, dni, edad) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.dni = dni;
    this.edad = edad;
    this.productos = [];
  }

  subTotal() {
    let acum = 0;
    this.productos.forEach(x => {
      acum += x.precio;
    });
    // Se agrega IVA (21%)
    return (acum * 1.21).toFixed(2);
  }

  agregarProducto(prod) {
    this.productos.push(prod);
  }

  eliminarProducto(prod1) {
    this.productos = this.productos.filter(p => p !== prod1);
  }

  reset() {
    this.productos = [];
  }

  mostrarInfo() {
    return `Nombre: ${this.nombre}\nApellido: ${this.apellido}\nDNI: ${this.dni}\nEdad: ${this.edad}`;
  }
}

const persona1 = new Persona("Josefina", "Sanchez", 48392379, 23);

class Producto {
  constructor(id, nombre, marca, descrip, precio, stock) {
    this.id = id;
    this.nombre = nombre;
    this.marca = marca;
    this.descrip = descrip;
    this.precio = precio;
    this.stock = stock;
  }

  mostrarInfo() {
    return `ID: ${this.id}\nNombre: ${this.nombre}\nMarca: ${this.marca}\nDescripción: ${this.descrip}\nPrecio: ${this.precio}\nStock: ${this.stock}`;
  }
}

let listaProd = [
  new Producto(1, "Saco", "Cheeky", "Saco de peluche de peluche color beige claro", 25000, 5),
  new Producto(2, "Remera", "Cheeky", "Remera color beige con puntos de color marrón", 10000, 10),
  new Producto(3, "Pantalón", "Cheeky", "Pantalón de jean chupín color azul oscuro", 15000, 8)
];

function filtro(prop, val) {
  let retorno;

  if (prop === "todos") {
    retorno = listaProd;
  } else if (prop == "marca") {
    retorno = listaProd.filter(x => x.marca === val);
  } else if (prop == "nombre") {
    retorno = listaProd.filter(x => x.nombre === val);
  } else if (prop == "precio") {
    val = parseFloat(val);
    retorno = listaProd.filter(x => x.precio >= 0 && x.precio < val);
  } else {
    retorno = [];
  }

  return retorno;
}

// VARIABLES GLOBALES
let contenedor = document.querySelector("#contenedor");
let fila = document.createElement("div");
fila.classList.add("row");
contenedor.appendChild(fila);

let subTotal = document.querySelector("#subtotal");
let filtroDevuelto = listaProd; // Mostrar todos por defecto
let tbody = document.querySelector("#tbody");

// FILTROS
let botonFiltro = document.querySelector("#aplicarFiltro");
botonFiltro.addEventListener("click", function () {
  let propiedad = document.querySelector("#propiedad").value;
  let valor = document.querySelector("#valor").value;
  filtroDevuelto = filtro(propiedad, valor);
  mostrarProductos();
});

// FUNCIÓN PARA MOSTRAR PRODUCTOS (CARDS)
function mostrarProductos() {
  fila.innerHTML = "";

  filtroDevuelto.forEach(x => {
    let columna = document.createElement("div");
    columna.classList.add("col-4");

    let card = document.createElement("div");
    card.classList.add("card", "mb-3");

    // CREACIÓN DE LA IMAGEN PARA LAS TARJETAS
    let img = document.createElement("img");
    img.src = "https://i.pinimg.com/originals/e3/7f/31/e37f31bad059c9439d22782e8d5907bc.jpg";
    img.alt = "Ropa de bebé";
    img.classList.add("card-img-top");
    card.appendChild(img);

    let cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    let titulo = document.createElement("h5");
    titulo.textContent = `${x.nombre} - ${x.marca}`;
    titulo.classList.add("card-title");
    cardBody.appendChild(titulo);

    let p = document.createElement("p");
    p.classList.add("card-text");
    p.textContent = `${x.descrip}`;
    cardBody.appendChild(p);

    let p1 = document.createElement("p");
    p1.classList.add("card-text");
    p1.textContent = `Precio: $${x.precio} | Stock: ${x.stock}`;
    cardBody.appendChild(p1);

    let button = document.createElement("button");
    button.classList.add("btn", "btn-light");
    button.textContent = "Agregar";
    button.addEventListener("click", function () {
      persona1.agregarProducto(x);
      mostrar();
    });

    cardBody.appendChild(button);
    card.appendChild(cardBody);
    columna.appendChild(card);
    fila.appendChild(columna);
  });
}

// FUNCIÓN PARA MOSTRAR TABLA DE PRODUCTOS SELECCIONADOS
function mostrar() {
  tbody.innerHTML = "";
  persona1.productos.forEach(p => {
    let tr = document.createElement("tr");

    tr.innerHTML = `
            <td>${p.id}</td>
            <td>${p.nombre}</td>
            <td>${p.marca}</td>
            <td>${p.descrip}</td>
            <td>$${p.precio}</td>
        `;

    let td6 = document.createElement("td");
    let buttonEliminar = document.createElement("button");
    buttonEliminar.classList.add("btn", "btn-danger");
    buttonEliminar.innerHTML = `<i class="bi bi-x-circle-fill"></i>`;
    buttonEliminar.addEventListener("click", function () {
      persona1.eliminarProducto(p);
      mostrar();
    });

    td6.appendChild(buttonEliminar);
    tr.appendChild(td6);
    tbody.appendChild(tr);
  });

  subTotal.textContent = persona1.subTotal();
}

// BOTÓN RESET
let buttonReset = document.querySelector("#reset");
buttonReset.addEventListener("click", function () {
  persona1.reset();
  mostrar();
});

// MOSTRAR PRODUCTOS AL CARGAR
mostrarProductos();
