

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













/*
let button = document.getElementById("subButton");

    button.addEventListener("click", function (e){

      e.preventDefault();  // prevent default

    // getting values from input fields

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

       //clear form after submit
       document.getElementById("logForm").reset();

       //show alert
    document.querySelector('.alert').style.display = 'block';

    //hide alert after 3 seconds
    setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';

},2000);
 
    // save data to firebase

    var database = firebase.database();

    var ref = database.ref("records");

    ref.push(data);

    ref.on("value", function(snapshot){
      snapshot.forEach(function(childSnapshot){
          var ref = childSnapshot.val();

          var myArray = [
            {'name': document.getElementById("data-1").innerHTML = ref.name, 'email': document.getElementById("data-1").innerHTML = ref.email, 'phone': document.getElementById("data-1").innerHTML = ref.phone, 'location': document.getElementById("data-1").innerHTML = ref.location, 'purpose': document.getElementById("data-1").innerHTML = ref.purpose, 'dateAndTime': document.getElementById("data-1").innerHTML = ref.dateAndTime}
          ];
     
          buildTable(myArray);
     
          function buildTable(data){
            var table = document.getElementById('myTable');
     
            for (var i = 0; i < data.length; i++){
                var row = `<tr>
                              <td>${data[i].name}</td>
                              <td>${data[i].email}</td>
                              <td>${data[i].phone}</td>
                              <td>${data[i].location}</td>
                              <td>${data[i].purpose}</td>
                              <td>${data[i].dateAndTime}</td>
                           </tr>`
     
                   table.innerHTML += row;
            }
          }
  
          //document.getElementById("data-1").innerHTML = ref.name + " --- " + ref.email + " --- " + ref.phone;
        //console.log(ref);
    });
  })
})


*/
   










   