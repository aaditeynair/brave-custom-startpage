const today = new Date();
const time = today.toLocaleString("en-US", {
  hour: "numeric",
  minute: "numeric",
  hour12: true,
});
const date = today.toLocaleString("en-US", {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
});

document.getElementById("time").innerHTML = time;
document.getElementById("date").innerHTML = date;

const hour = today.getHours();
if (hour < 12) {
  document.getElementById("greeting").innerHTML = "Good Morning Aadi";
} else if (hour < 17) {
  document.getElementById("greeting").innerHTML = "Good Afternoon Aadi";
} else {
  document.getElementById("greeting").innerHTML = "Good Evening Aadi";
}
