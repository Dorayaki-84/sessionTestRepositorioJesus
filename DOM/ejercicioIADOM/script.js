// Obtener elementos del DOM
const taskInput = document.getElementById('taskInput'); // Obtener el elemento de entrada de texto con el id "taskInput"
const addButton = document.getElementById('addButton'); // Obtener el elemento de botón con el id "addButton"
const taskList = document.getElementById('taskList'); // Obtener el elemento de lista desordenada con el id "taskList"

// Función para agregar una tarea
function addTask() {
  if (taskInput.value !== '') { // Verificar que el valor del campo de entrada no esté vacío
    const taskItem = document.createElement('li'); // Crear un nuevo elemento de lista
    taskItem.textContent = taskInput.value; // Establecer el texto del nuevo elemento de lista con el valor del campo de entrada

    // Marcar tarea como completada al hacer clic en ella
    taskItem.addEventListener('click', function() {
      taskItem.classList.toggle('completed'); // Alternar la clase "completed" en el elemento de lista al hacer clic
    });

    taskList.appendChild(taskItem); // Agregar el nuevo elemento de lista como hijo del elemento de lista desordenada
    taskInput.value = ''; // Limpiar el valor del campo de entrada después de agregar la tarea
  }
}

// Agregar tarea al hacer clic en el botón
addButton.addEventListener('click', addTask); // Asociar la función addTask al evento de clic en el botón "addButton"

// Agregar tarea al presionar Enter en el campo de texto
taskInput.addEventListener('keydown', function(event) {
  if (event.key === 'Enter' && taskInput.value.trim() !== '') { // Verificar si se presiona la tecla Enter y el campo de entrada no está vacío
    addTask(); // Llamar a la función addTask para agregar la tarea
  }
});
