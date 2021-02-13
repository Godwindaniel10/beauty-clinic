

let newCustomerButton = true;

//slide down function for new customer input fields
function slideDown() {
    if(newCustomerButton){
        $(".toggle-input-field").slideDown(1000);
    }
}


/* if new existing customer button is clicked 
  the search bar will slide down and the new customer 
  input fields will slide back up and will be disabled */
/*
function slideUp() {
     if($(".search-bar-container").slideDown(1000)){
        $(".toggle-input-field").slideUp(1000);
        document.getElementById("newCustomerBtn").style.pointerEvents = "none";
        document.getElementById("notice_message").innerHTML = "Refresh the page to register a new customer...";
        var display_message = document.getElementById("displayMessage");
            var styles = {
                "background": "#ffffff",
                "text-align": "center",
                "margin": "31em 0 0 50em",
                "border-radius": "5px",
                "width": "30em",
                "transition": "all 3s"
            };
            Object.assign(display_message.style, styles);
     }
}

*/


/*
    //Form Validation 
// Wait for the DOM to be ready
$(document).ready(function(){

    $("#logForm").validate({
        rules: {
            name: {
                required: true,
                minlength: 2
            },
            email: {
                required: true,
                email: true
            },
            phone: {
                required: true,
                minlength: 11,
                maxlength: 11
            }
        },
        messages: {
            email: {
                required: "please enter an email address.",
                email: "please enter a <em>valid</em> &nbsp email address."
            },
            name: {
                required: "please enter a Name."
            },
            phone: {
                required: "please enter a phone number.",
            }
         
        }
       
    });
  })
*/


/*
// (Phone number) numeric input only
function validateinput() {
    var inputbox = document.getElementById("phone");
    if (isNaN(parseFloat(inputbox.value))) {
       inputbox.className = "red";
    }
    else {
       inputbox.className = "white";
    }
}*/





/*
let button = document.getElementById("button");

button.addEventListener("click", function (){

    // getting values

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let location = document.getElementById("location").value;
    let purpose = document.getElementById("purpose").value;
    let dateAndTime = document.getElementById("dateAndTime").value;


    var data = {
        name: name,
        email: email,
        phone: phone,
        location: location,
        purpose: purpose,
        dateAndTime: dateAndTime
    }

    // save data to firebase

    var database = firebase.database();

    var ref = database.ref("records");

    ref.push(data);
})

*/


/*


// Firebase - Database log

// reference messages collection
var messsagesRef = firebase.database().ref();

// listen for form submit 
document.getElementById("logForm").addEventListener("submit", submitForm);


// submit form
function submitForm(e){
    e.preventDefault();

    var name = getInputVal('name');
    var email = getInputVal('email');
    var phone = getInputVal('phone');
    var location = getInputVal('location');
    var purpose = getInputVal('purpose');
    var dateAndTime = getInputVal('dateAndTime');
   
    saveMessage(name,email,phone,location,purpose,dateAndTime);

   
    //show alert
    document.querySelector('.alert').style.display = 'block';

    //hide alert after 3 seconds
   setTimeout(function(){
     document.querySelector('.alert').style.display = 'none';
 
   },2000);

   //clear form after submit
   document.getElementById("logForm").reset();
}

// function to get form values
function getInputVal(id){
    return document.getElementById(id).value;
}

// save message to firebase
function saveMessage(name, email,phone,location,purpose,dateAndTime){
    var newMessageRef = messsagesRef.push();
      newMessageRef.set({
        name: name,
        email: email,
        phone: phone,
        Date: dateAndTime,
        location: location,
        purpose: purpose
    });
}
var ref = database.ref("records");

ref.on("value", function(snapshot){
    snapshot.forEach(function(childSnapshot){
        var ref = childSnapshot.val();

        console.log(ref);
    });
})

*/




/*
$(document).ready(function(){
    $(".new-customer").click(function(){
        if ($(".toggle-input-field").slideDown(1000)){
            var existingCustomerBtn = document.getElementById("existingCustomerBtn");
            var styles = {
                "pointerEvents": 'none',
                "background-color": "rgb(107, 209, 107)"
            };
            Object.assign(existingCustomerBtn.style, styles);
        }
    
    })
})


//Toggle existing customer button
$(document).ready(function(){
    $(".existing-customer").click(function(){
        $(".search-bar-container").slideToggle(1000);
    })
})

*/
$('.input-phone').intlInputPhone();


