// libs
import * as React from 'react';

interface P {
    name: string | number;
    age: number;
}
interface S {
    name: number | string;
    grade: number;
}

let obj: P&S;
obj.name = 123;
obj.age = 1;
obj.grade = 2;
let obj1: P|S;
obj1.name = 123;
class Panel extends React.Component<P, S> {
    constructor(props: P) {
        super(props);
    }

    render () {
        return (
            <div>
                <div>panel</div>
            </div>
        )
    }
}

export default Panel;