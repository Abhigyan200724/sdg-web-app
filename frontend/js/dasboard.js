const token = localStorage.getItem("token");

if (!token) {
    window.location.href = "../login.html";
}

new Chart(document.getElementById('barChart'),{
type:'bar',
data:{
labels:['Goal1','Goal2','Goal3','Goal4','Goal5'],
datasets:[{
label:'Progress %',
data:[75,60,90,80,70]
}]
}
});

new Chart(document.getElementById('pieChart'),{
type:'pie',
data:{
labels:['Completed','Ongoing','Active'],
datasets:[{
data:[35,40,25]
}]
}
});

document.getElementById("logoutBtn")
.addEventListener("click", () => {

    // Remove JWT token
    localStorage.removeItem("token");

    // Remove user data if stored
    localStorage.removeItem("user");

    // Redirect to login page
    window.location.href = "../login.html";
});