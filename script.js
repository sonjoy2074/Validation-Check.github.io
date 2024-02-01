function validateExpression() {
    var option = document.getElementById("option").value;
    var input = document.getElementById("input").value;
    var regex;
    var message;

    switch (option) {
        case "email":
            regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
            message = "Email";
            break;
        case "phone":
            regex = /^\d{11}$/;
            message = "Phone Number";
            break;
        case "postcode":
            regex = /^\d{4}$/;
            message = "Post Code";
            break;
        default:
            break;
    }

    var isValid = regex.test(input);
    var result = document.getElementById("result");

    if (isValid) {
        result.innerHTML = message + " is valid.";
        result.style.color = "green";
    } else {
        result.innerHTML = message + " is invalid.";
        result.style.color = "red";
    }
}
