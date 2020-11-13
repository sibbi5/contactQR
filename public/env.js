$(document).ready(function(){
  console.log('Ready')
  

  
})

let url_val="";

function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  let data = {
    id : profile.getId(),
    name : profile.getName(),
    email : profile.getEmail()
  }
  console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
  console.log('Name: ' + profile.getName());
  console.log('Image URL: ' + profile.getImageUrl());
  console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
  if(profile){
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
    console.log('User signed out.');
    data = appendURL(data);
    console.log('after appending the url data', data.url)
    $.get('/auth/google/callback',data,function(){
      console.log("Success");
      document.getElementById("status").textContent = "Check in Complete";
      document.getElementById("googleSignin").style.display = 'none';
    });
  })
  }
}

function appendURL(data){
  console.log("Inside appendURL func" + url_val)
  data.url = url_val;

  return data;
}
function gettingURL(url){
  console.log("Inside gettingURL func");
  console.log(url)
  url_val+= url;
  document.getElementById("googleSignin").style.display = 'block';
  document.getElementById("btn-open-qrcode-scanner").style.display = 'none';
}