// const sunIcon = document.querySelectorAll(".sun");
// const moonIcon = document.querySelectorAll(".moon");

// const userTheme = localStorage.getItem("theme");
// const systemTheme = window.matchMedia("(prefers-color-schema: dark)").matches;

// const iconToggle = () => {
//   moonIcon.classList.toggle("display-none");
//   sunIcon.classList.toggle("display-none");
// };

// const themeCheck = () => {
//   if (userTheme === "dark" || (!userTheme && systemTheme)) {
//     document.documentElement.classList.add("dark");
//     moonIcon.classList.add("display-none");
//     return;
//   }
//   sunIcon.classList.add("displau-none")
// };

// const themeSwitch = () =>{
//     if (document.documentElement.classList.contains("dark")) {
//     document.documentElement.classList.remove("dark")
//     localStorage.setItem("theme", "light")
//     iconToggle()
//     return
//     }

//     document.documentElement.classList.add("dark")
//     localStorage.setItem("theme", "dark")
//     iconToggle()
// }

// sunIcon.addEventListiner("click", () =>{
//     themeSwitch();
// })

// moonIcon.addEventListiner("click", () =>{
//     themeSwitch();
// })

// themeCheck()
