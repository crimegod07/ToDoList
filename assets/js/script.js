const description = document.getElementsByClassName('form-control');
const Task = document.getElementById('Task');
const addButton = document.getElementById('add');
const category = document.getElementById('floatingSelectGrid');

addButton.onclick = function(){
    //console.log("hellp");
  
    
   let value1 = description[0].value;
    console.log(value1);
    let taskDetails = document.createElement('p');
    taskDetails.append(value1);
    Task.appendChild(taskDetails);


    let categoryValue  = category.options[category.selectedIndex].text;
    console.log(categoryValue); 
    Task.append(categoryValue);
}

