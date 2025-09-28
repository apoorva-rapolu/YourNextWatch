var form = document.getElementById("contactForm");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var subject = document.getElementById("subject").value;
  var message = document.getElementById("message").value;

  if (name === "" || email === "" || subject === "" || message === "") {
    alert("Please fill in all fields.");
    return;
  }

  var mailtoLink = "mailto:you@example.com"
      + "?subject=" + encodeURIComponent(subject)
      + "&body=" + encodeURIComponent("From: " + name + " <" + email + ">\n\n" + message);

  window.location.href = mailtoLink;
});

