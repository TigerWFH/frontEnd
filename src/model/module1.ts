export class Type1 {
    name: string
    age: number
    constructor(data: Object) {
        Object.assign(this, data)
    }
}