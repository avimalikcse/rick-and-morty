import React, { useEffect, useState } from 'react'
import { getLocationDetails } from '../../services/locationCacheWrapper';

const Location = ({ url }) => {
    const [location, setLocation] = useState({})
    const [showDetails, setShowDetails] = useState(false)
    useEffect(() => { // get the details of location using URL
        getLocationDetails(url).then(data => {
            setLocation(data)
        });
    }, [url])
    return (
        <div className='row'>
            <div onClick={(e) => setShowDetails(!showDetails)}
                className="col-center pointer"
            >  {location.name}
                {showDetails && <dl>
                    <dt>Name</dt>
                    <dd>{location.name}</dd>
                    <dt>Type</dt>
                    <dd>{location.type}</dd>
                    <dt>Dimension</dt>
                    <dd>{location.dimension}</dd>
                    <dt>Residents Population</dt>
                    <dd>{location.residents.length}</dd>
                </dl>}
            </div>
        </div>
    )
}

export default Location