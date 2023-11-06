let taskList = [];

addTask = function(){
    const task = document.getElementById("add_task").value;
    if(task == ""){
        alert("No task entered");
    }
    else{
        taskList.push(task);
        document.getElementById("add_task").value = "";
        displayTaskList(); 
    }   
}
displayTaskList = function(){
    let data = ``;
    for(let tasks of taskList){
        data += `<tr><td>${tasks}</td><td><button onclick='removeTask("${tasks}")'>X</button></td></tr>`;
    }
    document.getElementById("display_task").innerHTML = data;
    console.log(taskList);
    console.log(data);
}
removeTask = function(task){
    const index = taskList.findIndex((value) => value == task);
    taskList.splice(index,1);
    displayTaskList();
}