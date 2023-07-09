import React from 'react'
import { Link } from 'react-router-dom';
import '../components/links.css'

export default function Links() {
    return (
        <div>
            <ul className="lista-de-links">
                <a className='item-link'><Link to={'/games/shooter'}>Shooter</Link></a>
                <a className='item-link'><Link to={'/games/mmoarpg'}>Mmorpg</Link></a>
                <a className='item-link'><Link to={'/games/fighting'}>Fighting</Link></a>
                <a className='item-link'><Link to={'/games/moba'}>Moba</Link></a>
                <a className='item-link'><Link to={'/games/sports'}>Sports</Link></a>
                <a className='item-link'><Link to={'/games/racing'}>Racing</Link></a>
                <a className='item-link'><Link to={'/games/card-Games'}>CardGames</Link></a>
                <a className='item-link'><Link to={'/games/battle-royale'}>BattleRoyale</Link></a>
                <a className='item-link'><Link to={'/games/strategy'}>Strategy</Link></a>
                <a className='item-link'><Link to={'/games/action-rpg'}>ActionRpg</Link></a>
                <a className='item-link'><Link to={'/games'}>All Games </Link></a>
              {/*   <a className='item-link'><Link to={'/games'}>Em breve !!</Link></a>
                <a className='item-link'><Link to={'/games'}>Em breve !!</Link></a>
                <a className='item-link'><Link to={'/games'}>Em breve !!</Link></a>
 */}
            </ul>
        </div>
    )
}
