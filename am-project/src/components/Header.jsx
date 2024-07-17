import style from './Header.module.css'

function Header(){
    return(
       

            <header id={style.header}>
                
                <nav id={style.nav}>
                    <ul id={style.navList}>
                        <li className={style.navItem}><a href='sectioWtfam'>Início</a></li>
                        <li className={style.navItem}><a href='#sectionAbout'>Sobre</a></li>
                        <li className={style.navItem}><a href='#sectionSongs'>Músicas</a></li>
                    </ul>
                </nav>
            </header>
        
    )
}

export default Header