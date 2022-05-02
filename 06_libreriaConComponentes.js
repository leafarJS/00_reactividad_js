"use strict";
const d = document;
const Component = (function () {
  //crear el constructor del componente
  const Constructor = function (options) {
    this.el = options.el;
    this.data = options.data;
    this.template = options.template;
  };
  // agregaremos los metodos al prototipo del constructor del componente

  //render UI
  Constructor.prototype.render = function () {
    const _el = d.querySelector(this.el);
    if (!_el) return;
    _el.innerHTML = this.template(this.data);
    console.log(this.data);
  };
  //actulizar el state de forma reactiva
  Constructor.prototype.setState = function (obj) {
    for (const key in obj) {
      if (this.data.hasOwnProperty.call(obj, key)) {
        this.data[key] = obj[key];
      }
    }
    this.render();
  };
  //Obtenemos una copia inmutable del state
  Constructor.prototype.getState = function () {
    return JSON.parse(JSON.stringify(this.data));
  };

  return Constructor;
})();

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
