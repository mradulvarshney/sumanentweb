var btn = document.querySelector("#bulk-form-submit");
        console.log(btn);
        btn.addEventListener("click", (e) => {
            e.preventDefault();
        var name = document.getElementById("bulkname").value;
        var email = document.getElementById("bulkemail").value;
        var phone = document.getElementById("bulknumber").value;
        var company = document.getElementById("bulkcompany").value;
        var product = document.getElementById("bulkproduct");
        var productValue = product.options[product.selectedIndex].text;
        var packaging = document.getElementById("bulkpackaging").value;
        var quantity = document.getElementById("bulkquantity").value;
        var place = document.getElementById("bulkplace").value;
        var message = document.getElementById("bulkmessage").value;
        if (name != "" && email != ""  && phone != "" && company != "" && productValue != "Select Your Product" && packaging != "" && quantity != "" && place != "" && message != "") {
            var body = '<p>Requesting new bulk order enquiry with following details:<br><br>Name: ' + name + '<br>Email: ' + email + '<br>Phone: ' + phone + '<br>Company: ' + company + '<br>Product: ' + productValue + '<br>Packaging: ' + packaging + '<br>Quantity: ' + quantity + '<br>Place: ' + place + '<br>Message: ' + message + '<br><br>' + 'Thank You';
        Email.send({
        Host: "smtp.elasticemail.com",
        Username: "sumanaromas@gmail.com",
        Password: "BBFFF9B0F0282C49E525FDD8790299EC38F5",
        To: "sumanaromas@gmail.com",
        From: "sumanaromas@gmail.com",
        Subject: "Bulk Order Enquiry",
        Body:body
    }).then(
        message => {
            if (message == "OK") {
                alert('Thank you for enquiring. Your response has been submitted. We will get back to you shortly.');
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