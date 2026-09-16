// Login System
// 1. Suppose a company has: Username : admin, Password : Pwd123, If both are correct, Show Login Successful
// Otherwise Invalid Username or Password

// let Username = "admin";
// let Password = "Pwd123";

// if (Username === "admin" && Password === "Pwd123") {
//     console.log("Login Successful");
// } else {
//     console.log("Invalid Username or Password");
// } // output: condation - true : Login Successful

// ===================================================================================================

// 2. Challenge 1: Predict theabove program output that output Don't run it. Tell me
// Username condition, Password condition, Final Result, Output

// Ans: 1. Username condition: true
// 2. Password condition: true
// 3. Final Result: true
// 4. Output: Login Successful

// ===================================================================================================

// ⭐ Challenge 2 : let username = "admin"; let password = "Pwd123"; let isBlocked = false;
// Requirement: If Username is correct, Password is correct, User is NOT blocked
// then Login Successful Otherwise Login Failed

// let username = "admin";
// let password = "Pwd123";
// let isBlocked = false;

// if (username === "admin" && password === "Pwd123" && !isBlocked) {
//     console.log("Login Successful");
// } else {
//     console.log("Login Failed");
// } // output: condation - true : Login Successful

// ===================================================================================================

// ⭐ Challenge 3 : (Real Company Interview)
// A company has three roles.admin, manager, employee Write JavaScript code.
// If role is admin output Welcome Admin
// If role is manager output Welcome Manager
// Otherwise Welcome Employee

// let result = prompt("Enter Your Company Role");
// if (result === "admin") {
//     console.log("Welcome Admin");
// } else if (result === "manager") {
//     console.log("Welcome Manager");
// } else {
//     console.log("Welcome Employee");
// }
// ===================================================================================================

// ⭐ Bonus Challenge(Very Important) : Suppose username = ""; password = "";
// If username is empty Please Enter Username
// Else if password is empty Please Enter Password
// Else if both are correct Login Successful
// other wise Invalid Username or Password

let userName = document.getElementById('uName');
let password = document.getElementById('pwd');

let reqName = document.getElementById("reqname");
let reqPwd = document.getElementById('reqpwd');

let loginButton = document.getElementById('loginBtn')
// =========================First - modal============================
//  click event
loginButton.addEventListener('click', login);
// enter key support
password.addEventListener('keypress', function (e) {
    if (e.key === "Enter") {
        login();
    }
});

// Login Function
function login() {
    // clear old msgs
    reqName.textContent = "";
    reqPwd.textContent = "";

    // read the values
    const user = userName.value.trim();
    const pwd = password.value.trim();
    let isValid = true;

    // Username validation
    if (user === "") {
        reqName.textContent = "Please enter username.";
        isValid = false;
    }

    // Password Validaion
    if (pwd === "") {
        reqPwd.textContent = "Please Enter Password";
        isValid = false;
    }

    // Stop if validation fails
    if (!isValid) {
        return;
    }

    // Login Success
    if (user === 'admin' && pwd === '12345') {
        alert("Login Successful");
        userName.value = "";
        password.value = "";
        userName.focus();
    }
    // Invalid Login
    else {
        alert("Invalid username or password");
        if (user !== 'admin' && pwd !== '12345') {
            userName.value = "";
            password.value = "";
            userName.focus();
        }
        else if (user === 'admin' && pwd !== '12345') {
            password.value = "";
            password.focus();
        }
        else if (user !== 'admin' && pwd === '12345') {
            userName.value = "";
            userName.focus();
        }
    }
}


// =======================Second -modal=================================
// function login() {

//     if (userName.value.trim() == "") {
//         document.getElementById('reqname').innerHTML = " Please Enter Username";
//     }

//     else if (pwd.value.trim() == "") {
//         document.getElementById('reqpwd').innerHTML = "Please Enter Password";
//         document.getElementById('reqname').innerHTML = "";
//     }

//     else if (userName.value == "admin" && pwd.value == "12345") {
//         alert(" Login Successful");
//         document.getElementById('reqpwd').innerHTML = "";
//     }

//     else {
//         alert(" Invalid Username or Password ");
//         userName.value = "";
//         pwd.value = ""
//         document.getElementById('reqpwd').innerHTML = "";
//     }

// }


// Ans: 1. Username condition:Tthen empty it is  true, it is not empty condation false
// 2. Password condition: Then empty condation true, It is not empty condation false
// 3. username admin and paswword 12345 then condation true other wise false
// 4. Final Result: based on user drtails will condation true
// 4. Output: Login Successful

