const loginButton = document.querySelector("#loginButton");
const logoutButton = document.querySelector("#logoutButton");
const authStatus = document.querySelector("#authStatus");

if (window.netlifyIdentity) {
  window.netlifyIdentity.on("init", (user) => updateAuth(user));
  window.netlifyIdentity.on("login", (user) => {
    updateAuth(user);
    window.netlifyIdentity.close();
  });
  window.netlifyIdentity.on("logout", () => updateAuth(null));
}

loginButton?.addEventListener("click", () => {
  window.netlifyIdentity?.open("login");
});

logoutButton?.addEventListener("click", () => {
  window.netlifyIdentity?.logout();
});

function updateAuth(user) {
  const loggedIn = Boolean(user);
  loginButton.hidden = loggedIn;
  logoutButton.hidden = !loggedIn;
  authStatus.textContent = loggedIn
    ? `Logged in as ${user.email}. Use the cards below to jump into the exact editor you need.`
    : "Log in first, then use the cards below to open the editor sections.";
}
