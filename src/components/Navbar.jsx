function Navbar({ isDarkMode, toggleMode }) {

    return (
        <nav className={ isDarkMode ? 'nav--dark' : '' }>
            <div className="logo--container">
                <img src="../public/images/react-icon-small.png" alt="React logo" className="nav--logo"/>
                <h2>ReactFacts</h2>
            </div>
            <div className="switch--container">
                <span 
                    className={ isDarkMode ? 'switch-lightText--dark' : 'switch-lightText--light' }>
                    Light
                </span>
                <div 
                    className= { isDarkMode ? 'switch-dark switch' : 'switch'}
                    onClick={ toggleMode }    
                >
                    <div 
                        className={ isDarkMode ? 'dark-circle inner-circle' : 'inner-circle' }>
                    </div>
                </div>
                <span 
                    className={ isDarkMode ? 'switch-darkText--dark' : 'switch-darkText--light' }>
                    Dark
                </span>
            </div>
        </nav>
    )
}

export default Navbar