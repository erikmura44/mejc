function volunteerMap (volunteer){

address = volunteer.city + "," + volunteer.state

  var map = new google.maps.Map(document.getElementById('map'), {
      mapTypeId: google.maps.MapTypeId.TERRAIN,
      zoom: 13
  });

  var geocoder = new google.maps.Geocoder();

  geocoder.geocode({
     'address': address
  },
  function(results, status) {
     if(status == google.maps.GeocoderStatus.OK) {
        new google.maps.Marker({
           position: results[0].geometry.location,
           map: map
        });
        map.setCenter(results[0].geometry.location);
     }
   });
  }

/**************/
function organizationMap(organization){


var addressOrg = organization.street + "," + organization.city + "," + organization.state + "," + organization.zip

  var map = new google.maps.Map(document.getElementById('map'), {
      mapTypeId: google.maps.MapTypeId.TERRAIN,
      zoom: 13
  });

  var geocoder = new google.maps.Geocoder();

  geocoder.geocode({
     'address': addressOrg
  },
  function(results, status) {
     if(status == google.maps.GeocoderStatus.OK) {
        new google.maps.Marker({
           position: results[0].geometry.location,
           map: map
        });
        map.setCenter(results[0].geometry.location);
     }
   })
  }


function eventMap(events){

addressEvent = events.street + "," + events.city + "," + events.state + "," + events.zip

  var map = new google.maps.Map(document.getElementById('map'), {
      mapTypeId: google.maps.MapTypeId.TERRAIN,
      zoom: 13
  });

  var geocoder = new google.maps.Geocoder();

  geocoder.geocode({
     'address': addressEvent
  },
  function(results, status) {
     if(status == google.maps.GeocoderStatus.OK) {
        new google.maps.Marker({
           position: results[0].geometry.location,
           map: map
        });
        map.setCenter(results[0].geometry.location);
     }
  })
}



// var password = document.getElementById("password")
//   , confirm_password = document.getElementById("confirm_password");
//
// function validatePassword(){
//   if(password.value != confirm_password.value) {
//     confirm_password.setCustomValidity("Passwords Don't Match");
//   } else {
//     confirm_password.setCustomValidity('');
//   }
// }
//
// password.onchange = validatePassword;
// confirm_password.onkeyup = validatePassword;

function confirmPass() {
  var pass = document.getElementById("password").value
  var confPass = document.getElementById("confirm_password").value
  if(pass !== confPass) {
     alert('Wrong confirm password !');
  }
}

$(document).ready(() =>{

  $('#event-register').click(() => {
    // $('#event-register').css('display','none')
    $("#event-register").css("display","none")
    $("#event-unregister").css("display","inline-block")
  })

  $('#event-unregister').click(() => {
    // $('#event-register').css('display','none')
    $("#event-unregister").css("display","none")
    $("#event-register").css("display","inline-block")
  })
})
