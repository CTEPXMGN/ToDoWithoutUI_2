const list = [ 
    { name: 'create a post', status: 'in progress', priority: 'low' }, 
    { name: 'test', status: 'done', priority: 'high' },
] 
// Добавляем задачу
function addTask(task, status, priority) {
    let newTask = {};

    newTask.name = task;
    newTask.status = status;
    newTask.priority = priority;

    list.push(newTask);
}
// Меняем статус задачи
function changeStatus(task, status) {
    let result = list.map(function(item) {
        if (item.name === task) {
            item.status = status;
        }
    })

    return result;
}
// Меняем приоритетность задачи
function changePriority(task, priority) {
    let result = list.map(function(item) {
        if (item.name === task) {
            item.priority = priority;
        }
    })

    return result;
}
// Удаляем задачу
function deleteTask(task) {
    
    let resultIndex = list.findIndex(item => item.name == task)

    return list.splice(resultIndex, 1);
}

// Выводим список задач в консоль
function showList() {
    console.log(list);
}

addTask('drink coffee', 'in progress', 'high');
addTask('have a walk', 'in progress', 'high');
changeStatus('drink coffee', 'done');
changePriority('have a walk', 'low');
deleteTask('create a post');
showList();

// function showList(list) {
//     let inProgress = 'In progress: \n';
//     let done = 'Done: \n';

//     for (let key in list) {
//         if (list[key] == 'in progress') {
//             inProgress = inProgress + '  ' + key + '\n';
//         }
//         if (list[key] == 'done') {
//             done = done + '  ' + key + '\n';
//         }
//     }
//     let result = inProgress + done;
    
//     return console.log(result);;
// }

// function deleteTask(list ,task) {
//     delete list[task];
// }

// addTask(toDoList, 'to run', 'in progress');
// addTask(toDoList, 'to buy a bread', 'in progress');
// addTask(toDoList, 'to drink a cup of coffee', 'done');
// addTask(toDoList, 'to make a bed', 'in progress');
// changeStatus(toDoList, 'to run', 'done');
// deleteTask(toDoList, 'to drink a cup of coffee');
// showList(toDoList);