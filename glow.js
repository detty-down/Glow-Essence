
// glow.js - Enhance user interaction for Glow Essence website

// Toggle visibility of product details
document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('click', () => {
        const details = card.querySelector('.product-details');
        if (details) {
            details.classList.toggle('visible');
        }
    });
});

// Validate contact form
document.querySelector('#contact-form').addEventListener('submit', function (e) {
    const emailInput = document.querySelector('#email').value.trim();
    if (!emailInput.includes('@')) {
        e.preventDefault();
        alert('Please enter a valid email address.');
    }
});

// Add to cart functionality
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        alert('Product added to cart!');
    });
});
