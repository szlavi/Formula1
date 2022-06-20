import React from 'react'
import Driver from '../driver/driver'

class Drivers extends React.Component {
    render() {
        return (
            <div className='drivers'>
                <Driver />
                <Driver />
                <Driver />
            </div>
        )
    }
}

export default Drivers
