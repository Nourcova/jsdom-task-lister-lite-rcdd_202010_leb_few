document.addEventListener("DOMContentLoaded", () => {
 document.getElementById("create-task-form").addEventListener('submit',function(e){
  let toDoList = document.getElementById("new-task-description").value;
  let ul=document.getElementById("list").createElement('ul');
     ul.innerHTML += `<li> ${toDoList}</li>`;
     document.body.appendChild(ul);
     document.getElementById("new-task-description").value='';
     e.preventDefault();

});

});
