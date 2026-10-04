const adminLogin = document.querySelector("#adminLoginForm");
adminLogin?.addEventListener("submit", event => {
  event.preventDefault();
  const username = document.querySelector("#adminUsername").value;
  const password = document.querySelector("#adminPassword").value;
  const message = document.querySelector("#adminLoginMessage");
  const accepted = username === "Al Hidayah" && password === "2026";
  message.textContent = localizedText(accepted
    ? "লগইন সফল হয়েছে।"
    : "ইউজারনেম অথবা পাসওয়ার্ড সঠিক নয়।");
  message.classList.toggle("form-message-success", accepted);
  message.classList.toggle("form-message-error", !accepted);
  if (accepted) {
    sessionStorage.setItem("admin-authenticated", "true");
    location.assign("admin-dashboard.html");
  }
});

const adminDashboard = document.querySelector("#adminDashboard");
if (adminDashboard && sessionStorage.getItem("admin-authenticated") !== "true") {
  location.replace("admin.html");
} else {
  document.querySelector("#adminLogout")?.addEventListener("click", event => {
    event.preventDefault();
    sessionStorage.removeItem("admin-authenticated");
    location.assign("admin.html");
  });
}
