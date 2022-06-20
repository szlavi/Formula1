import React from 'react';

class Driver extends React.Component {
    constructor(props) {
        super(props)
        this.state = { driver: props.driver }

        this.handleOvertake = this.handleOvertake.bind(this)
    }

    handleOvertake() {
        fetch(`api/drivers/${this.state.driver.id}/overtake`, { method: 'POST' })
            .then(res => res.json())
            .then(drivers => this.setState({drivers}, () => console.log('Driver overtaken...')))
    }

    render() {
        const driver = this.state.driver

        return (
            <div className='driver'>
                <h2>{driver.firstname} {driver.lastname} - {driver.code}</h2>
                <p>Place {driver.place}</p>
                <button onClick={this.handleOvertake}>OVERTAKE</button>
            </div>
        )
    }
}

export default Driver
