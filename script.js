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
            button.innerText = 'x'

            li.addEventListener('click', (e) => this.taskClickHandler(task))
            button.addEventListener('click', (e) => this.taskDeleteClickHandler(e, taskIndex))

            li.appendChild(button)
            ul.appendChild(li)
        })



        document.body.appendChild(ul)



    }

    // completed? do zmiany
    taskClickHandler(task) {
        alert("completed")
    }

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
}





class Task {
    constructor(text) {
        this.text = text
    }
}

// const toDo1 = new ToDo()

