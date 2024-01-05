import logoFooter from '../assets/logoFooter.svg'

function Footer() {
    return (
        <div className='Footer'>
            <img src={logoFooter} alt="Logo" id='logoFooter' />
            <p>© 2020 Kasa. All rights reserved</p>
        </div>
        
    )
}

export default Footer