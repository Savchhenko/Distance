const menuBtn = document.querySelector(".m-menu");
const menu = document.querySelector(".menu-sidebar");

//оформили всплывающее меню при нажатии на кнопку
//функция toggle добавляет или убирает класс в зависимости от его наличия или присутствия
menuBtn.addEventListener("click", function () {
	menu.classList.toggle("active");
});
