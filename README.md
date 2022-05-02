# REACTIVIDAD:

Para comprender el paradigma de la programación reactiva en JavaScript y entender cómo es que funcionan internamente librerías y frameworks como React, Angular, Vue, Svelte, Polymer, etc; es necesario comprender algunos conceptos importantes:

## Reactividad

La reactividad de los datos, simplemente es que la interfaz de usuario de un sitio o aplicación se modifica a los cambios en los datos de la misma.
Cada vez que se actualizan los datos, la interfaz de usuario lo hace automáticamente para que coincida con la lógica de programación de la aplicación.

## Estado

El estado son los datos de tu aplicación.
Entonces, ¿por qué se le llama estado en lugar de datos?
Porque tiene una duración determinada, el estado son datos en un momento particular de la aplicación, por ello decimos: el estado actual de los datos de la aplicación.

## Interfaz basada en el estado

Una interfaz basada en el estado, es aquella que usa los datos de la aplicación en todo momento para pintar su elementos visuales.
Los elementos visuales de la interfaz suelen llamarse componentes.

## Componentes

Para definir el término componente citaré la definición de Nicole Sullivan que dice:
“It's a repeating visual pattern, that can be abstracted into an independent snippet of HTML, CSS and possibly JavaScript.” Nicole Sullivan.
Traduciendo:
Es un patrón visual repetido, que se puede resumir en un fragmento independiente de HTML, CSS y posiblemente JavaScript.

## Los componentes:

Son un fragmento de la interfaz que cumple una única función.
Son reutilizables ( principio DRY - Don´t Repeat Yourself ).
Son independientes, tanto de su contexto como del resto de componentes.
Son autocontenidos, no filtran estilos o funcionalidad a otros componentes.
Programación Reactiva orientada a Componentes
Con lo descrito anteriormente podemos decir que una aplicación reactiva y basada en componentes nos permiten separar el código y los elementos de la interfaz en pequeñas piezas independientes y reutilizables que estarán aisladas una de otras, y en lugar de intentar apuntar y manipular directamente los elementos del DOM cuando la aplicación reaccioné a las acciones del usuario, ésta actualizará su estado y luego la interfaz se repintará con los cambios en el estado.

## Entendiendo la Reactividad

A continuación encontrarás una lista de videos donde te enseño a implementar reactividad con Vanilla JavaScript, es decir, sin usar frameworks o librerías externas, lo haremos únicamente con todo el poder que nos brinda nuestro querido y poderoso lenguaje de programación: JavaScript.

### Reactividad en JavaScript.

1. Manipulación NO Reactiva del DOM.
2. Interfaz de Usuario (UI) basada en el Estado.
3. Estado Reactivo.
4. Estado Inmutable.
5. componentes con Estado.
6. Programando una Librería para crear Componentes con Estado.
