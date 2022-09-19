
$("#createQ_btn").click(function(e) {
    var answerQ, typeQ;
    typeQ = getSelectedVal("createQ_type");
    answerQ = getRadioVal("answer");
    var filledchecking = checkInputFilled("formSubmit");

    
    if(!filledchecking || typeQ == "none" || answerQ == "none") {
        alertSwalMessage("Warning","You need to fill all field", "warning")
        return;
    } 

    console.log("continues");
    var data = getFormData();
    createQuestion(data);
})

function createQuestion(data) {
    $.ajax({
        url: '/api/auth/register',
        type: 'POST',
        contentType: 'application/json; charset=utf-8',
        data: JSON.stringify(data),
        success: function (response) {
            alertElementMessage("You have bean registered an account", "success");
            alertRegisterSuccessfully();
        },
        error: function (response) {
            alertElementMessage(response.responseJSON.ErrorMessage, "danger");
        }
    });
}