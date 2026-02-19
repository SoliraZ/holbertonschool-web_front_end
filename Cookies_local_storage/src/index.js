window.setCookies = function () {
    const firstname = document.getElementById('firstname').value;
    const email = document.getElementById('email').value;

    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + 10);

    document.cookie = `firstname=${firstname}; expires=${expirationDate.toUTCString()}; path=/`;
    document.cookie = `email=${email}; expires=${expirationDate.toUTCString()}; path=/`;
}

window.showCookies = function () {
    const p = document.createElement('p');
    p.innerHTML = `Cookies: ${document.cookie}`;
    document.body.appendChild(p);
}
