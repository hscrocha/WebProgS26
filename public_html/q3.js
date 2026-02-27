function checkForm(){
    let fname = document.getElementById("txt_name");
    let fplate = document.getElementById("txt_plate");

    if(fname.value === "" && fplate.value=="" ){
        window.alert("Name and Plate cannot be empty");
        return false;
    } else if(fname.value === ""){
        window.alert("Name cannot be empty.");
        return false;
    } else if(fplate.value === ""){
        window.alert("Plate cannot be empty");
        return false;
    }
    return true;
}


function checkForm(){
    let fname = document.getElementById("txt_name");
    let fplate = document.getElementById("txt_plate");
    let message = "";

    if(fname.value === "") 
        message = message + "\n - Name cannot be empty";
    if(fplate.value ==="")
        message = message + "\n - Plate cannot be empty";

    if(message !== ""){
        window.alert(message);
        return false;
    }

    return true;
}