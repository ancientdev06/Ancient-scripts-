document.getElementById('hamburger-menu').addEventListener('click', function () {
    const menuPanel = document.getElementById('menu-panel');
    menuPanel.classList.toggle('show-menu');
});

// Username submission
document.getElementById('username-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const username = document.getElementById('username').value.trim();
    if (username) {
        let usernames = JSON.parse(localStorage.getItem('usernames')) || [];
        usernames.push(username);
        localStorage.setItem('usernames', JSON.stringify(usernames));
        window.location.href = `chat.html?username=${encodeURIComponent(username)}`;
    }
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
