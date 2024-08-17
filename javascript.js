function nav_btn() {
    let nav_item = document.getElementById("navber");
    if (nav_item.style.display === "block") {
        nav_item.style.display = "none";
    } else {
        nav_item.style.display = "block";
    }
}

function my_age() {
    let res = document.getElementById('my_age');
    let birthDate = new Date(2003, 4, 31); // Month is 0-indexed, so May is 4
    let currentDate = new Date();
    let timeDifference = currentDate - birthDate;
    let ageDate = new Date(timeDifference); 
    let age = Math.abs(ageDate.getUTCFullYear() - 1970);
    res.innerHTML = age;
}

my_age();
