document.addEventListener('DOMContentLoaded', () => {
    const cardContainer = document.getElementById('cardContainer').querySelector('.row');
    
    // Obtén los productos guardados del Local Storage
    const savedProducts = JSON.parse(localStorage.getItem('products')) || [];
    
    // Función para renderizar las tarjetas
    function renderCards() {
        cardContainer.innerHTML = ''; // Limpia el contenedor
        savedProducts.forEach((product, index) => {
            const productCard = document.createElement('div');
            productCard.className = 'col-md-4 mb-4';
            productCard.innerHTML = `
                <div class="card h-100">
                    <img src="${product.image}" class="card-img-top" alt="${product.title}">
                    <div class="card-body d-flex flex-column">
                        <h5 class="card-title">${product.title}</h5>
                        <p class="card-text">${product.description}</p>
                        <button class="btn btn-danger mt-2" data-index="${index}">Eliminar</button>
                    </div>
                </div>
            `;
            cardContainer.appendChild(productCard);
        });
    }

    // Renderiza las tarjetas 
    renderCards();

    // Botón de eliminar
    cardContainer.addEventListener('click', (event) => {
        if (event.target.classList.contains('btn-danger')) {
            const index = event.target.getAttribute('data-index');
            savedProducts.splice(index, 1); 
            localStorage.setItem('products', JSON.stringify(savedProducts)); 
            renderCards(); 
        }
    });

    document.getElementById('finalizarCompra').addEventListener('click', () => {
        alert('Gracias por tu compra.');
        
        // Limpiar los productos guardados del Local Storage
        localStorage.removeItem('products');
        
        // Opcional: Redirigir a otra página o recargar la página
        window.location.reload();
    });
});

