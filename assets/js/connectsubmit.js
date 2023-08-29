var btn = document.querySelector("#connect-submit");
        console.log(btn);
        btn.addEventListener("click", (e) => {
            e.preventDefault();
        var name = document.getElementById("connectname").value;
        var email = document.getElementById("connectemail").value;
        var phone = document.getElementById("connectnumber").value;
        var company = document.getElementById("connectcompany").value;
        var message = document.getElementById("connectmessage").value;
        if (name != "" && email != "" && phone != "" && company != "" && message != "") {
            var body = 'Connecting with you:<br><br>Name: ' + name + '<br>Email: ' + email + '<br>Phone: ' + phone + '<br>Company: ' + company + '<br>Message: ' + message + '<br><br>' + 'Thank You';

        Email.send({
        Host: "smtp.elasticemail.com",
        Username: "sumanaromas@gmail.com",
        Password: "BBFFF9B0F0282C49E525FDD8790299EC38F5",
        To: "sumanaromas@gmail.com",
        From: "sumanaromas@gmail.com",
        Subject: "Contact Enquiry",
        Body:body
    }).then(
        message => {
            if (message == 'OK') {
                alert('Thank you for contacting. We will connect with you shortly.');
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
            alert('Please fill all the required fields.');
        }
    })