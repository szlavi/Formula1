import './drivers.css'
import React from 'react'

class Drivers extends React.Component {
    constructor() {
		super()
        this.state = {
            drivers: []
        }

        this.handleOvertake = this.handleOvertake.bind(this)
	}

	componentDidMount() {
		fetch('/api/drivers')
			.then(res => res.json())
			.then(drivers => this.setState({drivers}, () => console.log('Drivers fetched...')))
    }

    handleOvertake(id, _) {
        fetch(`api/drivers/${id}/overtake`, { method: 'POST' })
            .then(res => res.json())
            .then(drivers => this.setState({drivers}, () => console.log('Driver overtaken...')))
    }

    render() {
        console.log(this.state.drivers)
        console.log(this.state.firstDriver)

        return (
            <div className='drivers'>
                {this.state.drivers.map(driver => {
                    return (
                        <div key={driver.id} className='driver'>
                            <h2>{driver.firstname} {driver.lastname} - {driver.code}</h2>
                            <p>Team <span className='italic'>{driver.team}</span></p>
                            <p>Place <span className='bold'>{driver.place}</span></p>
                            <button onClick={(e) => this.handleOvertake(driver.id, e)}>OVERTAKE</button>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default Drivers
