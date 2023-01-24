import React from 'react'
import './Header.css'

class Header extends React.Component {
    render() {
        return (
            <nav className='row' >
                <div className='col' >
                    <p>LOGO</p>
                </div>
                <div className='col' >
                    <a href="./quem-somos">Quem Somos</a>
                    <a href="">Contato</a>
                    <a href="./">Home</a>
                </div>
            </nav>
        )
    }
}

export default Header