// Toggle Admin Panel
document.getElementById('hamburger-menu').addEventListener('click', function() {
  const adminPanel = document.getElementById('admin-panel');
  adminPanel.style.display = adminPanel.style.display === 'block' ? 'none' : 'block';
});

// Username submit functionality
document.getElementById('username-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const username = document.getElementById('username').value.trim();
  if (username) {
    // Store username in localStorage
    let usernames = JSON.parse(localStorage.getItem('usernames')) || [];
    usernames.push(username);
    localStorage.setItem('usernames', JSON.stringify(usernames));
    
    console.log('Username submitted:', username);
    document.getElementById('username').value = '';
  }
});

// Admin password check
document.getElementById('admin-password').addEventListener('keypress', function(e) {
  if (e.key === 'Enter') {
    checkAdminPassword();
  }
});

function checkAdminPassword() {
  const password = document.getElementById('admin-password').value;
  const adminPanel = document.getElementById('admin-panel');

  if (password === 'toppers123') {
    adminPanel.style.display = 'block';
    showUsernames();
  } else {
    alert('Incorrect Password');
  }
}

// Display stored usernames in Admin Panel
function showUsernames() {
  const usernames = JSON.parse(localStorage.getItem('usernames')) || [];
  const userList = document.getElementById('user-list');
  userList.innerHTML = '';

  if (usernames.length === 0) {
    userList.innerHTML = '<li>No users have entered yet.</li>';
  } else {
    usernames.forEach(user => {
      const li = document.createElement('li');
      li.textContent = user;
      userList.appendChild(li);
    });
  }
}