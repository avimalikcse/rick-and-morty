import React, { useEffect, useState } from 'react'
import { getEpisodesDetails } from '../../services/EpisodeCacheWrapper';

const Episodes = ({ url }) => {
    const [episode, setEpisode] = useState({})
    const [showDetails, setShowDetails] = useState(false)
    useEffect(() => {
        getEpisodesDetails(url).then(data => {
            setEpisode(data)
        });
    }, [url])
    return (
        <div className='row' data-testid="episodeComp">
            <div onClick={(e) => setShowDetails(!showDetails)}
                className="col-center"
            >  {episode.name}
            </div>
        </div>
    )
}

export default Episodes