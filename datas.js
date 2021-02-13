

let button = document.getElementById("subButton");

  if(button){

    button.addEventListener("click", function (e){

      e.preventDefault();  // prevent default


    // getting values from input fields

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let location = document.getElementById("location").value;
    let purpose = document.getElementById("purpose").value;
    //let dateAndTime = document.getElementById("dateAndTime").value;


    var data = {
        name: name,
        email: email,
        phone: phone,
        location: location,
        purpose: purpose
        //dateAndTime: dateAndTime
    }

       //clear form after submit
       document.getElementById("logForm").reset();
       
       //show alert
    document.querySelector('.alert').style.display = 'block';

    //hide alert after 2 seconds
    setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';

},2000);
// save data to firebase

var database = firebase.database();

var ref = database.ref("records");

ref.push(data);

ref.once("value", function(snapshot){
  snapshot.forEach(function(childSnapshot){
     var ref = childSnapshot.val();



      })
    })
  });
}





   