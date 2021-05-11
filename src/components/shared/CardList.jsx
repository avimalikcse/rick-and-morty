import React from 'react'
import Card from './Card'
/**
 * Component to display list of Chars
 * 
 * @param {*} props characters array 
 */

const CardList = (props) => {
    const { characters } = props
    return (
        <div className="row" key={1}>
            {characters.map((character) => {
                return (
                    <div className='col' key={character.id}>
                        <Card character={character}></Card></div>
                )
            })}

        </div>
    )
}

export default CardList