function toggleMenu() {
    var menu = document.querySelector('.menu');
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
  }

function addToCart() {
    alert('Product added to cart!');
    // You can add more logic here for handling the addToCart functionality
  }

  function submitForm() {
    // Add logic here to handle form submission (e.g., AJAX request)
    alert('Form submitted successfully!');
    document.getElementById('contactForm').reset();
  }

  function checkout() {
    // Add logic here to handle the checkout process
    alert('Checkout button clicked!');
  }

  