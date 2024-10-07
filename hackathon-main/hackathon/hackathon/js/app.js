const [btnSignin, btnSignup, body] = [document.querySelector("#signin"), document.querySelector("#signup"), document.body];
btnSignin.addEventListener("click", () => body.className = "sign-in-js");
btnSignup.addEventListener("click", () => body.className = "sign-up-js");
