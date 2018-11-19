class ToDo {
    constructor() {
        this.tasks = [] || JSON.parse(localStorage.getItem('toDo'))
        this.render()
    }

    addTask(text) {
        this.tasks.push(new Task(text))
        this.dateInLocalStorage()
        this.render()
    }

    render(arrayToFind) {
        document.body.innerHTML = ''
        const array = arrayToFind || this.tasks
        this.makeUI()


        const ul = document.createElement('ul')

        array.forEach((task, taskIndex) => {
            const li = document.createElement('li')
            const button = document.createElement('button')
            li.innerText = task.text
            button.innerText = 'X'

            li.addEventListener('click', (e) => this.toggleComplete(task, li))
            button.addEventListener('click', (e) => this.taskDeleteClickHandler(e, taskIndex))


            this.style(task, li)


            li.appendChild(button)
            ul.appendChild(li)

        })

        document.body.appendChild(ul)

    }

    taskDeleteClickHandler(e, taskIndex) {
        e.stopPropagation()
        this.tasks = this.tasks.slice(0, taskIndex).concat(this.tasks.slice(taskIndex + 1))
        this.dateInLocalStorage
        this.render()
    }

    makeUI() {
        const h1 = document.createElement('h1')
        h1.innerText = 'to do list'
        document.body.appendChild(h1)
    
        const inputAddTask = document.createElement('input')
        const buttonAddTask = document.createElement('button')
        buttonAddTask.innerText = 'Add task'

        buttonAddTask.addEventListener(
            'click',
            () => this.addTask(inputAddTask.value)
        )


        const inputFindTask = document.createElement('input')
        const buttonFindTask = document.createElement('button')
        buttonFindTask.innerText = 'Find Task'
        buttonFindTask.addEventListener(
            'click',
            () => this.findTask(inputFindTask.value)
        )


        const boxForButtons = document.createElement('div')


        const buttonAllTasks = document.createElement('button')
        buttonAllTasks.innerText = 'All'
        buttonAllTasks.style.marginBottom = '10px'
        buttonAllTasks.addEventListener('click', () => this.render())


        const buttonDoneTasks = document.createElement('button')
        buttonDoneTasks.innerText = 'Done'
        buttonDoneTasks.style.marginBottom = '10px'
        buttonDoneTasks.addEventListener('click', ()=>this.findDoneTask())

        const buttonTasksToDo = document.createElement('button')
        buttonTasksToDo.innerText = 'To Do'
        buttonTasksToDo.style.marginBottom = '10px'
        buttonTasksToDo.addEventListener('click',()=>this.findToDoTask() )


        boxForButtons.appendChild(buttonAllTasks)
        boxForButtons.appendChild(buttonDoneTasks)
        boxForButtons.appendChild(buttonTasksToDo)
        document.body.appendChild(boxForButtons)
        document.body.appendChild(inputAddTask)
        document.body.appendChild(buttonAddTask)
        document.body.appendChild(inputFindTask)
        document.body.appendChild(buttonFindTask)

    }

    findTask(input) {
        const filtering = this.tasks.filter(task =>
            task.text.toLowerCase().trim().includes(input.toLowerCase().trim()))
        this.render(filtering)
    }
    findDoneTask(){
        const doneTask=this.tasks.filter(task=>task.completed===true)
        this.render(doneTask)
    }

    findToDoTask(){
        const toDoTask=this.tasks.filter(task=>task.completed===false)
        this.render(toDoTask)
    }


    toggleComplete(task) {
        task.completed ? (task.completed = false) : (task.completed = true)

        this.dateInLocalStorage()
        this.render()

    }

    style(task, taskBox) {
        task.completed ? (taskBox.style.textDecoration = "line-through") : (taskBox.style.textDecoration = "none")
    }
    dateInLocalStorage() {
        localStorage.setItem('toDo', `${JSON.stringify(this.tasks)}`)
    }
}




class Task {
    constructor(text) {
        this.text = text
        this.completed = false

    }
}



