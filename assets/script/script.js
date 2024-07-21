"use strict"

const header = document.querySelector(".header"),
questionsArr = document.querySelectorAll('.questions-content'),
answersArr =  document.querySelectorAll('.questions-answer'),
plusArr =  document.querySelectorAll('.answer-open'),
nameInput = document.getElementById("name_input"),
emailInput = document.getElementById("email_input"),
ageInput = document.getElementById("age_input"),
passwordInput = document.getElementById("password_input"),
repeatInput = document.getElementById("repeat_input"),
checkboxInput = document.getElementById("checkbox_input"),
validateButton = document.getElementById("validate"),
myModal = document.getElementById("my-modal"),
openModal = document.querySelectorAll(".open_modal");

// меняющий цвет header
let lastScroll = 0
const defaultOffset = 100
const scrollPosition = () => window.scrollY
const containHide = () => header.classList.contains("header-color")
window.addEventListener("scroll", () => {
  if (
    scrollPosition() > lastScroll &&
    !containHide() &&
    scrollPosition() > defaultOffset
  ) {
    header.classList.add("header-color")
  } else if (scrollPosition() < defaultOffset) {
    header.classList.remove("header-color")
  }
  lastScroll = scrollPosition()
})

//показ ответов на вопросы
questionsArr.forEach((item, index) => {
	item.addEventListener('click', function () {
		answersArr[index].classList.toggle('questions-answer-open')
		plusArr[index].classList.toggle('pass')
	})
  })

//валидация модального окна
function submitModal() {
	let nameValue = nameInput.value;
	if (nameValue.length < 2) {
		passwordInput.value = "";
		repeatInput.value = "";
		alert("Enter your name please, at least 2 characters");
		return;
	} else {
	}
	let emailValue = emailInput.value;
	const regexpEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	if (regexpEmail.test(emailValue)) {
		console.log("it works :)");
	} else {
		passwordInput.value = "";
		repeatInput.value = "";
		alert("Enter a valid e-mail please");
		return;
	}
	let ageValue = ageInput.value;
	if (ageValue.length === 0) {
		passwordInput.value = "";
		repeatInput.value = "";
		alert("Enter your age please");
		return;
	}
	let passwordValue = passwordInput.value;
	let regexpPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
	if (!regexpPassword.test(passwordValue)) {
		console.log("it works too");
		repeatInput.value = "";
		alert("Enter your password please");
		return;
	} else {
	}

	let repeatValue = repeatInput.value;
	if (repeatValue.length === 0) {
		alert("Repeat your password please");
		return;
	} else {
	}

	if (!checkboxInput.checked) {
		alert("Please accept the terms and conditions");
		return;
	}

	if (passwordValue === repeatValue) {
		alert("Welcome!");
	} else {
		alert("Password mismatch");
	}
}
validateButton.addEventListener("click", submitModal);

// модальное окно
openModal.forEach((item) => {
	item.addEventListener('click', function () {
		myModal.classList.add("open");
	})
  })
// Закрыть модальное окно
document
.getElementById("close-my-modal-btn")
.addEventListener("click", function () {
	myModal.classList.remove("open");
});
// Закрыть модальное окно при нажатии на Esc
window.addEventListener("keydown", (e) => {
if (e.key === "Escape") {
	myModal.classList.remove("open");
}
});
// Закрыть модальное окно при клике вне его
document
.querySelector("#my-modal .modal__box")
.addEventListener("click", (event) => {
	event._isClickWithInModal = true;
});
myModal.addEventListener("click", (event) => {
if (event._isClickWithInModal) return;
event.currentTarget.classList.remove("open");
});