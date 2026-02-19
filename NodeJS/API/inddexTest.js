const express = require('express')
const { v4: uuid} = require('uuid')

class todo {
    constructor(title = '', desc = '', id = uuid()){
        this.title = title
        this.desc = desc
        this.id = id
    }
}

const stor = {
    todo:[]
}

const app = express()
app.use(express.json())

app.get('/app/todo', (req, res) => {
    const {todo} = stor
    res.json(todo)
})

app.get('/app/todo/:id', (req, res) => {
    const {todo} = stor
    const {id} = req.params
    const idx = todo.findIndex(el => el.id === id)

    if(idx !== -1) {
        res.json(todo[id])
    } else {
        res.status = 404
        res.jason('Нет такой страницы | 404')
    }
})
