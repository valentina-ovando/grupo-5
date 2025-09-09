//Navegador-Bruno
let contenedorBruno = document.querySelector("#navbar-bruno")
// Crear elementos principales
const nav = document.createElement('nav');
nav.className = 'navbar navbar-expand-lg bg-body-tertiary';

const container = document.createElement('div');
container.className = 'container-fluid';

// Marca
const brand = document.createElement('a');
brand.className = 'navbar-brand';
brand.href = '#';
brand.textContent = 'Navbar';

// Botón toggler
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

// Contenido colapsable
const collapse = document.createElement('div');
collapse.className = 'collapse navbar-collapse';
collapse.id = 'navbarSupportedContent';

// Lista de navegación
const navList = document.createElement('ul');
navList.className = 'navbar-nav me-auto mb-2 mb-lg-0';

// Ítems del menú
const items = [
  { text: 'Home', href: '#', class: 'nav-link active', aria: 'page' },
  { text: 'Link', href: '#', class: 'nav-link' },
  { text: 'Disabled', href: '#', class: 'nav-link disabled', ariaDisabled: true }
];

// Agregar ítems simples
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

// Dropdown
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

// Formulario de búsqueda
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

// Ensamblar todo
collapse.appendChild(navList);
collapse.appendChild(form);
container.appendChild(brand);
container.appendChild(toggler);
container.appendChild(collapse);
nav.appendChild(container);

// Insertar en el documento
document.body.prepend(nav);

//Carrusel-Ramiro
//Tarjetas-Conny
//Footer-Valentina
