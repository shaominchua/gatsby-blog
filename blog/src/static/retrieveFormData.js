
const url = 'https://api.getform.io/v1/forms/908635e1-4bcd-4b44-a407-418c4ddcb77d?token=yZiuCoE134zNe2jtyQ9Yr38EZofONHiYVekRfGls4AKyHD5VhWL3Mfb6Jje3'

let response = await fetch(url);

if (response.ok) { // if HTTP-status is 200-299
  // get the response body (the method explained below)
  let json = await response.json();
} else {
  alert("HTTP-Error: " + response.status);
}