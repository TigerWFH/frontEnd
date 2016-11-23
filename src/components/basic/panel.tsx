// libs
import * as React from 'react';

interface P {
}
interface S {
}

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