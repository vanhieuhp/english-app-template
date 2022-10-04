function create_flc_collection() {
    alert("HEllo")
}

function create_flc_element() {
    var elementId = "#flc-collection-id option:selected";
    var value = $(elementId).val();
    if(!value) {
        value = "none";
    }

    let check = true;
    var formId = "#flash-card-form"
    var formData = $(formId).serializeArray();
    $.each(formData, function(i, v) {
        if (v.value === "") {
            check = false;
        }
    });
    
    if(value==="none" || !check)
    alert("Can not create");

}

function create_collection() {
    var formId = "#collection-form"
    var formData = $(formId).serializeArray();
    let check = true;
    $.each(formData, function(i, v) {
        if (v.value === "") {
            check = false;
        }
    });
    if(!check) {
        alert("Collection could not be blank")
    }
}

