// Optional: Add JavaScript for additional interactivity
document.addEventListener('DOMContentLoaded', function() {
    const button = document.querySelector('button');
    button.addEventListener('mouseover', function() {
        button.style.animation = 'buttonPulse 1s infinite';
    });
    button.addEventListener('mouseout', function() {
        button.style.animation = '';
    });
});
