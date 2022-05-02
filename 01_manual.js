"use strict";
const d = document;
const _item = d.getElementById("todo-item");
const _list = d.getElementById("todo-list");

d.addEventListener("submit", (e) => {
  if (!e.target.matches("#todo-form")) return false;
  e.preventDefault();
  //agregar un item a la lista
  let li = d.createElement("li");
  li.textContent = _item.value;

  _list.appendChild(li);

  //limpiar value
  _item.value = "";
  _item.focus();
});
