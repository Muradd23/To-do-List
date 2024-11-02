let idCounter =0;

const input = document.querySelector('input[type="text"]');


userInput.addEventListener('submit',(event)=>{
   event.preventDefault();
   addTask();
});


let addTask = ()=>{

   idCounter++;
   let newvalue = input.value;


     list.innerHTML += `<div class="task-container" id="${idCounter}">
            <label>
                <input type="checkbox" name="" id="">
                ${newvalue}
                
            </label>
            <img src="/icons/trash-can-regular.svg" alt="" id="deleteButton">
        </div>`;
   input.value='';
   updateStats();
}


list.addEventListener('click',(event)=>{
   if(event.srcElement.nodeName =="INPUT"){
      updateStats(); 
      idCounter--;
   }else if(event.srcElement.nodeName =="IMG"){
      deleteTask(event.srcElement.parentNode.id);
      
   }
});

let updateStats = ()=>{
   let task = list.querySelectorAll('div');
   let checkbox = list.querySelectorAll('input[type="checkbox"]:checked');
   stats.innerHTML = `<p>To Do: ${task.length} | Completed Tasks: ${checkbox.length}</p>`;
};

let deleteTask = (id)=>{
   let taskToDelete = document.getElementById(id);
   list.removeChild(taskToDelete);
   updateStats();
};