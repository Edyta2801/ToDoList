class ToDo {
    constructor() {
        this.tasks = []

        this.render()
    }

    addTask(text) {
        this.tasks.push(new Task(text))

        this.render()
    }





    render() {
        document.body.innerHTML = ''

        this.makeUI()

        const ul = document.createElement('ul')

        this.tasks.forEach((task, taskIndex) => {
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

    // // completed? do zmiany
    // taskClickHandler(task) {
    //     alert("completed")
    // }

    taskDeleteClickHandler(e, taskIndex) {
        e.stopPropagation()
        this.tasks = this.tasks.slice(0, taskIndex).concat(this.tasks.slice(taskIndex + 1))
        this.render()
    }



    makeUI() {
        const inputAddTask = document.createElement('input')
        const buttonAddTask = document.createElement('button')
        buttonAddTask.innerText = 'Add task'

        buttonAddTask.addEventListener(
            'click',
            () => this.addTask(inputAddTask.value)
        )

        document.body.appendChild(inputAddTask)
        document.body.appendChild(buttonAddTask)



    }




    toggleComplete(task) {
        task.completed ? (task.completed = false) : (task.completed = true)


        this.render()

    }

    style(task, taskBox) { 
        task.completed ? (taskBox.style.textDecoration = "line-through") : (taskBox.style.textDecoration = "none")
    }

}




class Task {
    constructor(text) {
        this.text = text
        this.completed = false

    }
}

// const toDo1 = new ToDo()

