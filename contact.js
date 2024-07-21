document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    if (name && email && subject && message) {
//not sending the form anywhere
        document.getElementById('form-feedback').innerText = 'Thank you for your message, we will get back to you soon!';
        document.getElementById('contact-form').reset();
    } else {
        document.getElementById('form-feedback').innerText = 'Please fill out all fields.';
    }
});
