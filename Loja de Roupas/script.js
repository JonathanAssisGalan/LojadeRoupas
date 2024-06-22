document.getElementById('loginButton').addEventListener('click', function() {
    document.getElementById('overlay').style.display = 'block';
    document.getElementById('loginModal').style.display = 'block';

    setTimeout(() => {
        document.getElementById('overlay').style.opacity = '1';
        document.getElementById('loginModal').classList.add('show');
    }, 10);
});

document.getElementById('overlay').addEventListener('click', function() {
    document.getElementById('overlay').style.opacity = '0';
    document.getElementById('loginModal').classList.remove('show');

    setTimeout(() => {
        document.getElementById('overlay').style.display = 'none';
        document.getElementById('loginModal').style.display = 'none';
    }, 300);
});

document.getElementById('registerLink').addEventListener('click', function() {
    alert('Registration feature is not implemented yet.');
});

document.querySelectorAll('.social-btn').forEach(button => {
    button.addEventListener('click', function() {
        alert('Social login feature is not implemented yet.');
    });
});
