import React, { Component } from "react";
class Counter extends Component {
    constructor(props) {
        super(props);

        this.state = {
        count: 0,
        };
    }
    render() {
        const { count } = this.state;
        return (
        <div>
            <h2>현재 Count : {count}</h2>
            <button
            onClick={() => {
                this.setState({ count: count + 1 });
            }}
            >
            카운트 +1
            </button>
        </div>
        );
    }
}
export default Counter;