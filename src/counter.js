import QndReact from "./qnd-react";

export default class Counter extends QndReact.Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0
        }

        // update the count every second
        // setInterval(() => {
        //     this.setState({
        //         count: this.state.count + 1
        //     })
        // }, 1000);
    }

    componentDidMount() {
        console.log('Component mounted');
    }

    render() {
        return (
            <div>
                <p>Count: {this.state.count}</p>
                <button onClick={() => this.setState({
                    count: this.state.count + 1
                })}>Increment</button>
            </div>
        )
    }
}