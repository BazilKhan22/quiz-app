alert('Signup successful!');
window.location.href = 'login.html';

alert('Login successful!');
window.location.href = 'home.html';


function startQuiz(topic) {
    window.location.href = topic + '_quiz.html';
  }

localStorage.setItem('isLoggedIn', 'true');
if (localStorage.getItem('isLoggedIn') !== 'true') {
    alert('Please log in first!');
    window.location.href = 'login.html';
  }

  if (localStorage.getItem('isLoggedIn') !== 'true') {
    window.location.href = 'login.html';
  }
  