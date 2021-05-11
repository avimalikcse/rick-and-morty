import React, { useState } from 'react'
import Episodes from './Episodes'
import Location from './Location'

/**
 * Main Component to display Character card
 * 
 * @param {*} props character object
 */

const Card = (props) => {
    const { character } = props
    const [showEpisodes, setShowEpisodes] = useState(false) // to toggle episode details
    return (
        <div className="card" data-testid={`charCard${character.id}`}>

            <img src={character.image} alt="Avatar" />
            <div className="container">
                <h4><b>{character.name}</b></h4>

                <div className='row dlRow'>
                    <div className='col'>
                        <dl>
                            <dt>Status</dt>
                            <dd>{character.status}</dd>
                            <dt>Species</dt>
                            <dd>{character.species}</dd>
                        </dl>
                    </div>
                    <div className='col'>
                        <dl>
                            <dt>Gender</dt>
                            <dd>{character.gender}</dd>
                            <dt>Type</dt>
                            <dd>{character.type}</dd>
                        </dl>
                    </div>
                </div>
                <div className='row dlRow'>
                    <div className='col'>
                        <dl>
                            <dt>Origin</dt>
                            <dd>{character.origin.url !== '' ? <Location url={character.origin.url}></Location> : 'N/A'}</dd>
                            <dt>Location</dt>
                            <dd>{character.location.url !== '' ? <Location url={character.location.url}></Location> : 'N/A'}</dd>
                        </dl>
                    </div>
                    <div className='col'>
                        <dl>
                            <dt className="pointer" onClick={()=>setShowEpisodes(!showEpisodes)} >{`${showEpisodes? 'Hide' :'Show Episode'}` }</dt>
                            <dd className='episodeList'>{showEpisodes && character.episode.map((episode) => <Episodes url={episode} key={episode}></Episodes>)}</dd>
                        </dl>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Card