var submitBtn = document.getElementById('submit');

submitBtn.addEventListener('click', function(e) {
    e.preventDefault();
    var email = document.getElementById('email').value;
    var subject = document.getElementById('subject').value;
    var message = document.getElementById('message').value;

    Email.send({
        Host: "smtp.gmail.com",
        Username: "gobaindzondzobila@gmail.com",
        Password: "Andilegoba@22",
        To: "andile.goba@younglings.africa",
        From: `${email}`,
        Subject: `${subject}`,
        Body: `${message}`
    }).then( message => alert('message sent through succefully :)'));
});