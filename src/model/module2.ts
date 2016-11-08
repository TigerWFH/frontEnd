export class Type2 {
    name: string
    age: number
    constructor(data: Object) {
        Object.assign(this, data)
    }
}