var btn = document.querySelector("#subscribe-submit");
        console.log(btn);
        btn.addEventListener("click", (e) => {
            e.preventDefault();
        var email = document.getElementById("subscribeemail").value;
        if (email != "") {
            var body = 'Kindly subscribe me for your weekly newsletter:<br><br>Email: ' + email + '<br><br>' + 'Thank You';

        Email.send({
        Host: "smtp.elasticemail.com",
        Username: "sumanaromas@gmail.com",
        Password: "BBFFF9B0F0282C49E525FDD8790299EC38F5",
        To: "sumanaromas@gmail.com",
        From: "sumanaromas@gmail.com",
        Subject: "Newsletter Subscription",
        Body:body
    }).then(
        message => {
            if (message == 'OK') {
                alert('Thank You for subscribing to our newsletter.');
                location.reload();
            }
            else {
                console.error(message);
                alert('There is error at sending message. ')
            }
        }
        );
        }
        else {
            alert('Please provide your e-mail address.');
        }
        });