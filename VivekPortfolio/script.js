function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
function toggleContactCard() {
    const contactCard = document.getElementById("contactCard");
    if (contactCard.classList.contains("hidden")) {
        contactCard.classList.remove("hidden");
    } else {
        contactCard.classList.add("hidden");
    }
}
