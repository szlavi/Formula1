import React from 'react'
import Driver from '../driver/driver'

class Drivers extends React.Component {
    constructor() {
		super()

        this.state = {
            drivers: []
        }
	}

	componentDidMount() {
		fetch('/api/drivers')
			.then(res => res.json())
			.then(drivers => this.setState({drivers}, () => console.log('Drivers fetched...')))
	}

    render() {
        console.log(this.state.drivers)

        return (
            <div className='drivers'>
                {this.state.drivers.map(driver => {
                    return <Driver key={driver.id} driver={driver} />
                })}
            </div>
        )
    }
}

export default Drivers
