function toggleContent(button) {
    const content = button.previousElementSibling;
    content.style.display = content.style.display === "block" ? "none" : "block";
}function openLoginModal() {
    document.getElementById("loginModal").style.display = "block";
}

document.getElementById("closeBtn").onclick = function() {
    document.getElementById("loginModal").style.display = "none";
}

window.onclick = function(event) {
    const modal = document.getElementById("loginModal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
}

function toggleMenu() {
    const navLinks = document.getElementById("navLinks");
    navLinks.style.display = navLinks.style.display === "flex" ? "none" : "flex";
}

function changeColor(link) {
    const links = document.querySelectorAll('.nav-link');
    links.forEach(l => l.classList.remove('active'));
    link.classList.add('active');
}