window.onload = function() {
  document.getElementById('loginBtn').onclick = function() {
    window.location.href = '/home';
  }
  document.getElementById('signupBtn').onclick = function() {
    window.location.href = '/view-applications';
  }
  document.getElementById('appName').onclick = function() {
    window.location.href = '/add-application';
  }
}
