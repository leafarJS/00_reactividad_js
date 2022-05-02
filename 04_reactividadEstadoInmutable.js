"use strict";
const d = document;

//variable para el estado
const state = {
  todoList: [],
  nombre: "",
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
//actualizar el state de forma reactivativa
const setState = (obj) => {
  for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
      state[key] = obj[key];
    }
  }
  render();
};
//obtenemos una copia inmutable del state
const getState = () => JSON.parse(JSON.stringify(state));
//const getState = () => state;

d.addEventListener("DOMContentLoaded", render);

//estableciendo valores por defecto al state
setState({
  todoList: ["tarea 1", "tarea 2", "tarea 3", "tarea 4"],
  nombre: "jon",
});

const _item = getState();
//_item.push("tarea 5");
_item.todoList.push("tarea 5");
//console.log("estado mutable", state);
console.log("estado inmutable", state);

// porque permite modificar el estado directamente creando una copia del objeto  agregando otro elemento.
d.addEventListener("submit", (e) => {
  if (!e.target.matches("#todo-form")) return false;
  e.preventDefault();

  const _item = d.getElementById("todo-item");
  if (!_item) return;

  //Actualizar el state de forma reactivativa
  const lastState = getState();
  lastState.todoList.push(_item.value);
  setState({ todoList: lastState.todoList });

  //limpiar input value
  _item.value = "";
  _item.focus();
});
