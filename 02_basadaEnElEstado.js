"use strict";
const d = document;

//variable para el estado
const state = {
  todoList: [],
};
// variable para el template
const template = () => {
  if (state.todoList.length < 1) {
    return `<p><em>Listas y tareas por hacer<em></p>`;
  }
  let todos = state.todoList.map((item) => `<li>${item}</li>`).join("");
  return todos;
};
//render UI elements
const render = () => {
  console.log(state);
  const _list = d.getElementById("todo-list");
  if (!_list) return;
  _list.innerHTML = template();
};

d.addEventListener("DOMContentLoaded", render);

d.addEventListener("submit", (e) => {
  if (!e.target.matches("#todo-form")) return false;
  e.preventDefault();

  const _item = d.getElementById("todo-item");
  if (!_item) return;

  //Actualizar el state y la UI.
  state.todoList.push(_item.value);
  render();

  //limpiar input value
  _item.value = "";
  _item.focus();
});
