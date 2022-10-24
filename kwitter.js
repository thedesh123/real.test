function adduser() {
    username=document.getElementById("user_name").ariaValueMax;
    localStorage.setItem("user_name", username);
    window.location="kwitter_room.html";
}