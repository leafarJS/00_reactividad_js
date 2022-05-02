"use strict";
import Component from "./06_libreriaConComponentes.js";
const d = document;

const app = new Component({
  el: "#todo-list",
  data: {
    todoList: [],
  },
  template: function (props) {
    if (props.todoList.length < 1) {
      return `<p><em>Listas y tareas por hacer<em></p>`;
    }
    let todos = props.todoList.map((item) => `<li>${item}</li>`).join("");
    return todos;
  },
});

d.addEventListener("DOMContentLoaded", app.render);

app.setState({ todoList: ["tarea 1", "tarea 2", "tarea 3"] });

d.addEventListener("submit", (e) => {
  if (!e.target.matches("#todo-form")) return false;
  e.preventDefault();

  const _item = d.getElementById("todo-item");
  if (!_item) return;

  //Actualizar el state de forma reactivativa
  const lastState = app.getState();
  lastState.todoList.push(_item.value);
  app.setState({ todoList: lastState.todoList });

  //limpiar input value
  _item.value = "";
  _item.focus();
});
