import React from 'react'
import { Link } from 'react-router-dom';
import '../components/links.css'

export default function Links() {
    return (
        <div>
            <ul className="lista-de-links">
                <button className='item-link'><Link to={'/games/shooter'}>Shooter</Link></button>
                <button className='item-link'><Link to={'/games/mmoarpg'}>Mmorpg</Link></button>
                <button className='item-link'><Link to={'/games/fighting'}>Fighting</Link></button>
                <button className='item-link'><Link to={'/games/moba'}>Moba</Link></button>
                <button className='item-link'><Link to={'/games/sports'}>Sports</Link></button>
                <button className='item-link'><Link to={'/games/racing'}>Racing</Link></button>
                <button className='item-link'><Link to={'/games/card-Games'}>CardGames</Link></button>
                <button className='item-link'><Link to={'/games/battle-royale'}>BattleRoyale</Link></button>
                <button className='item-link'><Link to={'/games/strategy'}>Strategy</Link></button>
                <button className='item-link'><Link to={'/games/action-rpg'}>ActionRpg</Link></button>
                <button className='item-link'><Link to={'/games'}>All Games </Link></button>
                <button className='item-link'><Link to={'/games'}>Em breve !!</Link></button>
                <button className='item-link'><Link to={'/games'}>Em breve !!</Link></button>
                <button className='item-link'><Link to={'/games'}>Em breve !!</Link></button>

            </ul>
        </div>
    )
}
