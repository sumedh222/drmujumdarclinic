document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Booking submitted. We will contact you soon.');
});

document.getElementById('subscribeForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Subscribed successfully.');
});
// Example of using AOS for scroll animations
AOS.init({
    duration: 1200,
    easing: 'ease-in-out',
});
