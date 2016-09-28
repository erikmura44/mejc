var address = volunteer.city + "," + volunteer.state

  var map = new google.maps.Map(document.getElementById('map'), {
      mapTypeId: google.maps.MapTypeId.TERRAIN,
      zoom: 6
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

/**************/

var addressOrg = organization.city + "," + organization.state

  var map = new google.maps.Map(document.getElementById('map'), {
      mapTypeId: google.maps.MapTypeId.TERRAIN,
      zoom: 6
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
  });

/*********************/


var addressEvent = events.city + "," + events.state

  var map = new google.maps.Map(document.getElementById('map'), {
      mapTypeId: google.maps.MapTypeId.TERRAIN,
      zoom: 6
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
  });

/***************************/


var password = document.getElementById("password")
  , confirm_password = document.getElementById("confirm_password");

function validatePassword(){
  if(password.value != confirm_password.value) {
    confirm_password.setCustomValidity("Passwords Don't Match");
  } else {
    confirm_password.setCustomValidity('');
  }
}

password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;
