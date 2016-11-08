export class Type3 {
    name: string
    age: number
    constructor(data: Object) {
        Object.assign(this, data)
    }
}