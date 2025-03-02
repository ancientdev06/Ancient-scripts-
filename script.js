document.getElementById('hamburger-menu').addEventListener('click', function () {
    const menuPanel = document.getElementById('menu-panel');
    menuPanel.style.display = menuPanel.style.display === 'block' ? 'none' : 'block';
});

// Admin password check
document.getElementById('admin-password').addEventListener('keypress', function (e) {
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

// Display stored usernames
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
