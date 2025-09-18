// Crear elementos principales
const nav = document.createElement('nav');
nav.className = 'navbar navbar-expand-lg navegacion';


const container = document.createElement('div');
container.className = 'container-fluid';

// marca
const brand = document.createElement('a');
brand.className = 'navbar-brand marca-titulo';
brand.href = '#';
brand.textContent = 'MiniMundo';

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
  { text: 'Inicio', href: '#', class: 'nav-link active link-nav', aria: 'page' },
  { text: 'Niños', href: '#', class: 'nav-link link-nav' },
  { text: 'Niñas', href: '#', class: 'nav-link disabled link-nav', ariaDisabled: true }
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
dropdownToggle.textContent = 'Categorias';

const dropdownMenu = document.createElement('ul');
dropdownMenu.className = 'dropdown-menu';

['Verano', 'invierno', null, 'Rebajas'].forEach(text => {
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
form.className = 'd-flex ';
form.role = 'search';

const input = document.createElement('input');
input.className = 'form-control me-2';
input.type = 'search';
input.placeholder = 'Buscar';
input.setAttribute('aria-label', 'Search');

const button = document.createElement('button');
button.className = 'btn btn-outline-success link-nav-serch search';
button.type = 'submit';
button.textContent = 'Buscar';

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