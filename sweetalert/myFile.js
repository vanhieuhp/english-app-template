function checkEmail(check) {
    var email = $("#email").val();
    var checkEmail = typeof email.checkValidity === 'function' ? email.checkValidity() : /\S+@\S+\.\S+/.test(email);
    if (!checkEmail) {
        alertMessage("your email is not match format!", "warning");
        check = false;
    }
    return check;
}

function checkPassword(check) {
    var password = $("#password").val();
    var repeatPassword = $("#repeatPassword").val();
    if (password.length < 6) {
        alertMessage("Your password must be have at least 6 characters", "warning");
        check = false;
    }
    else if (password !== repeatPassword) {
        alertMessage("your password is not match format!", "warning");
        check = false;
    }
    return check;
}

function getFormData() {
    var data = {};
    var formData = $("#formSubmit").serializeArray();
    $.each(formData, function (i, v) {
        data[""+v.name+""] = v.value;
    })
    return data;
}

function checkInputFilled(id) {
    var check = true;
    var elementId = "#" + id;
    var formData = $(elementId).serializeArray();
    $.each(formData, function(i, v) {
        if (v.value === "") {
            alertElementMessage("You must enter all the fields", "warning");
            check = false;
        }
    });
    return check;
}

function heartOnClick(id) {
    var heartIcon = document.getElementById(id);
    if (heartIcon.classList.contains("active")) {
        console.log("remove");
        $("#"+id).css('background', '');
        heartIcon.classList.remove("active");
    } else {
        console.log("add");
        $("#"+id).css('background', '#faa7a7');
        heartIcon.classList.add("active");
    }
}

function socialLogin() {
    Swal.fire({
        title: 'Sorry! Social Login is not active',
        icon: 'warning',
        showCancelButton: true,
        showConfirmButton: false,
        cancelButtonColor: '#ddb822',
        cancelButtonText: 'Ok'
    })
}

function checkLogin() {
    Swal.fire({
        title: 'You have to login to buy',
        text: 'Login right now',
        icon: 'warning',
        showCancelButton: true,
        showConfirmButton: true,
        confirmButtonColor: '#28a745e0',
        cancelButtonColor: '#dd2222',
        confirmButtonText: 'Right Now',
        cancelButtonText: 'Not Now'
    }).then((result) => {
        if (result.isConfirmed) {
            window.location.href = "/login"
        }
    })
}


function alertElementMessage(errorMessage, type) {
    var product = $("#alert");
    var alert = '<div id="alert" class="alert alert-' + type + '">' + '\n' + errorMessage + '\n' + '</div>'
    product.replaceWith(alert);
}

function alertRegisterSuccessfully() {
    Swal.fire({
        title: 'Register Successfully!',
        icon: 'success',
        confirmButtonColor: '#28a745e0',
        confirmButtonText: 'Login'
    }).then((result) => {
        if (result.isConfirmed) {
            window.location.href = "/webapp/auth/login"
        }
    })
}


function alertSwalMessage(title, text, type) {
    Swal.fire({
        title: title,
        text: text,
        icon: type,
        showConfirmButton: true,
        confirmButtonColor: '#fbda3a',
        confirmButtonText: 'Ok',
    });
} 

function getSelectedVal(id) {
    var elementId = '#' + id + " option:selected";
    var value = $(elementId).val();
    if(!value) {
        value = "none";
    }
    
    return value;
}

function getRadioVal(name) {
    var elementId = "input[type='radio'][name='" + name + "']:checked";
    var value = $(elementId).val();
    if(!value) {
        value = "none";
    }
    return value;
}


