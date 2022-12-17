function checkCreds() {
  console.log("checkCreds() function started");
  var firstName = document.getElementById("fName");
  var lastName = document.getElementById("lName");
  var badgeNum = document.getElementById("badgeID");
  var loginStatus = document.getElementById("loginStatus");

  if (!firstName || !lastName || !badgeNum || !loginStatus) {
    console.error("One or more elements with the required IDs were not found on the page");
    return;
  }

  firstName = firstName.value;
  lastName = lastName.value;
  badgeNum = badgeNum.value;
  var fullName = firstName + " " + lastName;

  console.log("FullName is: " + fullName + ", and Badge ID is: " + badgeNum);

  if (fullName.length >= 2 && fullName.length <= 20) {
    // check if badgeNum is a valid badge number
    if (isValidBadgeNumber(badgeNum)) {
      alert("Access granted. Welcome " + fullName);
      window.location.assign("Final week 5.html");
    } else {
      loginStatus.innerHTML = "Invalid badge number. Please try again.";
    }
  } else {
    loginStatus.innerHTML = "Invalid full name. Please try again.";
  }
}

function isValidBadgeNumber(badgeNum) {
  // Check if badgeNum is a number and is between 0 and 900
  if (!isNaN(badgeNum) && badgeNum >= 0 && badgeNum <= 900) {
    return true;
  }
  return false;
}