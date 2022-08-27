const list = [ 
    { name: 'create a post', status: 'in progress', priority: 'low' }, 
    { name: 'test', status: 'done', priority: 'high' },
];
const STATUS = {
    TO_DO: 'to do',
    IN_PROGRESS: 'in progress',
    DONE: 'done',
}
const PRIORITY = {
    HIGH: 'high',
    LOW: 'low',
}
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

addTask('drink coffee', STATUS.IN_PROGRESS, PRIORITY.HIGH);
addTask('have a walk', STATUS.IN_PROGRESS, PRIORITY.HIGH);
addTask('to run', STATUS.TO_DO, PRIORITY.LOW);
addTask('to make a bed', STATUS.TO_DO, PRIORITY.LOW);
changeStatus('drink coffee', STATUS.DONE);
changePriority('have a walk', PRIORITY.LOW);
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


// addTask(toDoList, 'to run', 'in progress');
// addTask(toDoList, 'to buy a bread', 'in progress');
// addTask(toDoList, 'to drink a cup of coffee', 'done');
// addTask(toDoList, 'to make a bed', 'in progress');
// changeStatus(toDoList, 'to run', 'done');
// deleteTask(toDoList, 'to drink a cup of coffee');
// showList(toDoList);