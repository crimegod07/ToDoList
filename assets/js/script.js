const description = document.getElementsByClassName('form-control');
const Task = document.getElementById('Task');
const addButton = document.getElementById('add');
const category = document.getElementById('floatingSelectGrid');
const date1 = document.getElementById('example');

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

    let date2 =  date1.value;
    console.log(date2);
    Task.append(date2);
}

