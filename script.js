// Toggle Admin Panel
document.getElementById('hamburger-menu').addEventListener('click', function() {
  const adminPanel = document.getElementById('admin-panel');
  adminPanel.style.display = adminPanel.style.display === 'block' ? 'none' : 'block';
});

// Username submission without form action
document.getElementById('username-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const username = document.getElementById('username').value.trim();
  if (username) {
    // Save username to localStorage
    let usernames = JSON.parse(localStorage.getItem('usernames')) || [];
    usernames.push(username);
    localStorage.setItem('usernames', JSON.stringify(usernames));
    
    // Redirect to chat page
    window.location.href = `chat.html?username=${encodeURIComponent(username)}`;
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
  if (password === 'toppers123') {
    document.getElementById('admin-panel').style.display = 'block';
    showUsernames();
  } else {
    alert('Incorrect Password');
  }
}

// Show stored usernames
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