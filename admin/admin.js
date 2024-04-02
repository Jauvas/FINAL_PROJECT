const ToDoList = [{
    Name: 'Galaxy S10+',
    Date: '1'
    }
];

renderToDoList();

function renderToDoList() {
    let ToDoListHTMl = '';

    for (let i = 0; i < ToDoList.length; i+=1) {
        const toDoObject = ToDoList[i];

        /*---object destructuring;
            this takes the name of the name property out of the object,
            and puts it in the variable also called name. as shown in 
            the shortcut.
        */
        const name = toDoObject.name; //the code below is same
        //const {name} = toDoObject;
        const date = toDoObject.date; //the code below is same
        //const {date} = toDoObject;
        const html = `
            <div>${name}</div>
            <div>${date}</div> 
            <button onclick="
                ToDoList.splice(${i}, 1); 
                renderToDoList();   
            " class="delete-button">Delete</button>
        `;
        ToDoListHTMl += html;
    }

    document.querySelector('.js-toDoList').innerHTML = ToDoListHTMl;

}

document.querySelector('.js-add')
    .addEventListener('click', () => {
        addToDo();
    })

 
function addToDo()  {
    const inputElement = document.querySelector('.js-nameInput');
    const name = inputElement.value;

    const dateInputElement = document.querySelector('.date-input'); 
    const duedate = dateInputElement.value;

    ToDoList.push({
        name: name,
        date: duedate
    });
    
    //inputElement.value = '';

    renderToDoList();
}