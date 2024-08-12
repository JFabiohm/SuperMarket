document.addEventListener('DOMContentLoaded', () => {
    const btn = document.querySelectorAll('button[id^="guardar-"]');
    
    btn.forEach(button => {
        button.addEventListener('click', () => {
            const card = button.closest('.card');
            const title = card.querySelector('.card-title').textContent;
            const price = button.textContent;

            // Crea un objeto con la información del producto
            const product = {
                title: title,
                price: price,
                image: card.querySelector('.card-img-top').src,
                description: card.querySelector('.card-text').textContent
            };

            let savedProducts = JSON.parse(localStorage.getItem('products')) || [];

            savedProducts.push(product);

            localStorage.setItem('products', JSON.stringify(savedProducts));


        });
    });
});


