const list = [ 
    { name: 'create a post', status: 'in progress', priority: 'low'  }, 
    { name: 'test', status: 'done', priority: 'high'  },
] 

function addTask(task, status, priority) {
    let newTask = {};

    newTask.name = task;
    newTask.status = status;
    newTask.priority = priority;

    list.push(newTask);
}

function showList() {
    console.log(list);
}

addTask('drink coffee', 'in progress', 'high');
showList();

// let toDoList = {};

// function addTask(list, task, status) {
//     return list[task] = status;
// }

// function changeStatus(list, task, status) {
//     return list[task] = status;
// }

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