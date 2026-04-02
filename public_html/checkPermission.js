var loggedUser = null;

function adminCheck(){ //returns true if the logged user is an Admin
    return loggedUser && loggedUser!=null && loggedUser.permission === 1;
}

function isLogged(){ // returns true if there is a logged user
    return loggedUser && loggedUser!=null;
}

async function getLoggedUser(){ 
    let response = await fetch('/loggeduser');
    loggedUser = await response.json();
    
    if(isLogged()){ // There is a logged user 
        // Hide Login & Register menus (the user is already logged)
        document.getElementById("menulogin").setAttribute("style","display:none");
        document.getElementById("menuregister").setAttribute("style","display:none");
        // Show logout & profile menu
        document.getElementById("menulogout").setAttribute("style","display:block");
        document.getElementById("menuprofile").setAttribute("style","display:block");

        // Sets the name on the bar (next to the user icon)
        document.getElementById("nameuser").innerHTML = loggedUser.name;

        if(adminCheck()){ // If admin
            //Show the admin menu option
            document.getElementById("menuadmin").setAttribute("style","display:block");
        }
    } else { // Not logged
        // Show Login & Register menus 
        document.getElementById("menulogin").setAttribute("style","display:block");
        document.getElementById("menuregister").setAttribute("style","display:block");
        // Hide the logout menu (user is not logged how could they logout!)
        document.getElementById("menulogout").setAttribute("style","display:none");
        document.getElementById("menuprofile").setAttribute("style","display:none");

    }

    showHideAccessGrantedPanels();
}

async function showHideAccessGrantedPanels(){
    // This works generically for any page (although only admin.html uses it)
    // If you have containers with the ids "access-denied-panel" and "access-granted-panel"
    // They will be toggled based on admin priviledge.
    if(adminCheck()){
        document.getElementById("access-denied-panel").setAttribute("style","display:none");
        document.getElementById("access-granted-panel").setAttribute("style","display:block");                    
    } else { 
        document.getElementById("access-denied-panel").setAttribute("style","display:block");
        document.getElementById("access-granted-panel").setAttribute("style","display:none");
    }
}

// Need to call the function to trigger fetching logged user
getLoggedUser();
