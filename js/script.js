const formAddTask = document.getElementById("form-add-task")//форма создания новой задачи
const inputTask = document.getElementById("name") //элемент, куда пользователь вводит название новой задачи
const container = document.querySelector(".tasks") //контейнер со списком задач
let tasks = [] // массив задач


//функционал добовления задачи
formAddTask.addEventListener('submit', function (event) {
    event.preventDefault() //отменяется событие по умолчанию: перезагрузка страницы
    let nameTask = inputTask.value; //считываем, что пользователь ввел в название задачи
    let newTask = document.createElement("div"); //создаем пустой тег div для задачи
    newTask.innerHTML = `<span>${nameTask}</span>` //добавляем текст задачи в div
    newTask.classList.add('task') //добовляем у div класс task
    container.append(newTask) //добовляем задачу в конетйнер задач

    tasks.push(nameTask) //добавляем задачу в массив
})


//функционал - перевести все задачи в нижний регистр
const btnLowCase = document.getElementById("lowCase")
btnLowCase.addEventListener('click', function () {
    let newTasks = [...tasks]; //создаю новый массив на базе основного

    for (let i = 0; i < newTasks.length; i++) { //перебираем все элементы массива
        newTasks[i] = newTasks[i].toLowerCase() //переводим каждую задачу в нижний регистр
    }
    container.innerHTML = '' //очищаем контейнер

    for (let i in newTasks) { //перебираем масив и для каждого элемента создаем запись в контейнере
        let newTask = document.createElement("div"); //создаем пустой тег div для задачи
        newTask.innerHTML = `<span>${newTasks[i]}</span>` //добавляем текст задачи в div
        newTask.classList.add('task') //добовляем у div класс task
        container.append(newTask) //добовляем задачу в конетйнер задач
    }
})