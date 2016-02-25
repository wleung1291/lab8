function checkLoginState() {
  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });
}

function statusChangeCallback(response) {
  console.log('Facebook login status changed.');
  console.log(response);
  // The response object is returned with a status field that lets the
  // app know the current login status of the person.
  // Full docs on the response object can be found in the documentation
  // for FB.getLoginStatus().
  if (response.status === 'connected') {
    // Logged into your app and Facebook.
    FB.api('/me?fields=name,first_name,picture.width(480)', changeUser);
  }
}

function changeUser(response){
  $(".facebookLogin").hide();
  $("#name").text(response.first_name); 
  console.log(response);
  $(this).attr("src", 'scontent.xx.fbcdn.net/hprofile-xfa1/v/t1.0-1/s480x480/10354686_10150004552801856_220367501106153455_n.jpg?oh=9d9de13652795aa3e92ea3190d0e99e4&oe=5764D4BC');
}