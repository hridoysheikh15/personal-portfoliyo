function nav_btn() {
    let nav_item = document.getElementById("navber");
    if (nav_item.style.display === "block") {
        nav_item.style.display = "none";
    } else {
        nav_item.style.display = "block";
    }
}