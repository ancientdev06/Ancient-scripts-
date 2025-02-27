// Toggle Admin Panel
document.getElementById('hamburger-menu').addEventListener('click', function() {
  const adminPanel = document.getElementById('admin-panel');
  adminPanel.style.display = adminPanel.style.display === 'block' ? 'none' : 'block';
});

// Username submit functionality
document.getElementById('username-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const username = document.getElementById('username').value;
  if (username) {
    console.log('Username submitted:', username);
    document.getElementById('username').value = '';
  }
});
