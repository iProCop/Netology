const { v4: uuidv4 } = require('uuid')

let map = new Map()
const myUuid = uuidv4()

map.set('Один', myUuid)

const key = map.get('Один')

if (key) {
    console.log(`Ваш ключ: ${key}`)
} else {
    console.log(`Ключ не найден`)
}