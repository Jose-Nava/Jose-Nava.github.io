function hideButton() {
  document.querySelector('.container').classList.add('hidden');
  document.querySelector('.content').style.display = 'block';
}
function redirectToInterface() {
  document.querySelector('.container').classList.add('hidden');
  setTimeout(() => {
      window.location.href = "Inicio.html";
  }, 100); 
}
//Tema oscuro o claro
const themeToggle = document.querySelector('.theme-toggle');
const sunIcon = document.querySelector('.sun-icon');
const moonIcon = document.querySelector('.moon-icon');
// Agregar evento de clic al selector
themeToggle.addEventListener('click', toggleTheme);
// Función para cambiar el tema
function toggleTheme() {
const isDarkTheme = document.body.classList.contains('dark-theme');

if (isDarkTheme) {
    document.body.classList.remove('dark-theme');
    sunIcon.style.display = 'inline-block';
    moonIcon.style.display = 'none';
    document.querySelector('.footer1').classList.remove('dark');
    document.querySelector('.footer1').classList.add('light');
    document.getElementById('footer-text').innerText = '© Taller de Artes Gráficas Tekuani';
} else {
    document.body.classList.add('dark-theme');
    sunIcon.style.display = 'none';
    moonIcon.style.display = 'inline-block';
    document.querySelector('.footer1').classList.remove('light');
    document.querySelector('.footer1').classList.add('dark');
    document.getElementById('footer-text').innerText = '© Taller de Artes Gráficas Tekuani';
}

// Guardar la preferencia de tema en localStorage
localStorage.setItem('theme', isDarkTheme ? 'light' : 'dark');
}
// Cargar la preferencia de tema desde localStorage al cargar la página
document.addEventListener('DOMContentLoaded', () => {
  const theme = localStorage.getItem('theme');
  if (theme === 'dark') {
      document.body.classList.add('dark-theme');
      sunIcon.style.display = 'none';
      moonIcon.style.display = 'inline-block';
  }
});
// Desplazamoento rapido
function scrollToSection(sectionId) {
const section = document.getElementById(sectionId);
section.scrollIntoView({ behavior: 'smooth' });
}
// Función para desplazarse hacia arriba
function scrollToTop() {
window.scrollTo({
  top: 0,
  behavior: 'smooth'
});
}
// Función para cambiar la imagen automáticamente
function startCarrusel() {
  let index = 0;
  const images = document.querySelectorAll(".carrusel-img");
  const totalImages = images.length;

  setInterval(() => {
      images[index].classList.remove("visible");
      index = (index + 1) % totalImages;
      images[index].classList.add("visible");
  }, 3000); // Cambiar la imagen en milisegundos
}
// Inicia el carrusel una vez que la página esté completamente cargada
window.addEventListener("load", () => {
  startCarrusel();
});
//Botones superiores
function scrollToSection(GId) {
  const element = document.getElementById(GId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth'});
  }
}
// Función para abrir el modal con los detalles del producto
function openModal(imageSrc, name, description, price) {
  const modal = document.getElementById('productModal');
  const imageElement = document.getElementById('productImage');
  const nameElement = document.getElementById('productName');
  const descriptionElement = document.getElementById('productDescription');
  const priceElement = document.getElementById('productPrice');

  imageElement.src = imageSrc;
  nameElement.textContent = name;
  descriptionElement.textContent = description;
  priceElement.textContent = price;

  modal.style.display = 'block';
}
// Función para cerrar el modal
function closeModal() {
  const modal = document.getElementById('productModal');
  modal.style.display = 'none';
}
// Agregar el evento de clic a cada imagen para abrir el modal con los detalles del producto
const productImages = document.querySelectorAll('.image-grid img');
productImages.forEach((image) => {
  image.addEventListener('click', () => {
      // Obtener información del producto asociada a la imagen
      const parentDiv = image.parentNode;
      const name = parentDiv.querySelector('h3').textContent;
      const description = parentDiv.querySelector('p:nth-of-type(1)').textContent;
      const price = parentDiv.querySelector('p:nth-of-type(2)').textContent;
      
      openModal(image.src, name, description, price);
  });
});
document.addEventListener('DOMContentLoaded', function () {
  const viewMoreButtons = document.querySelectorAll('.view-more-button');
  const modals = document.querySelectorAll('.modal');

  viewMoreButtons.forEach((button) => {
      button.addEventListener('click', function () {
          const modalId = this.getAttribute('data-modal');
          const modal = document.getElementById(modalId);

          if (modal) {
              modal.style.display = 'block';
          }
      });
  });

  modals.forEach((modal) => {
      modal.addEventListener('click', function (event) {
          if (event.target === this || event.target.classList.contains('close-button')) {
              this.style.display = 'none';
          }
      });
  });
});
