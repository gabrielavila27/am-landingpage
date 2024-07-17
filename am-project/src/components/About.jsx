import imageAbout from '../assets/beginnin.jpg'
import styles from './About.module.css'

function Introduction(){
    return(
        <section id={styles.sectionAbout}>

            <div id={styles.divAbout}>
    
                <div id= {styles.divImageAbout}>

                    <img src={imageAbout} alt='Imagem da banda Arctic Monkeys' title='Arctic Monkeys'></img>

                </div>
    
                <div id={styles.divTextAbout}>
    
                    <p className={styles.textAbout}>
                    Arctic Monkeys é uma banda britânica de rock formada em 2002 nos subúrbios da cidade de Sheffield, na Inglaterra. O grupo é formado por Alex Turner (vocal, guitarra),
                     Matt Helders (bateria, backing vocal), Jamie Cook (guitarra) e Nick O&apos;Malley (baixo, backing vocal).
                    </p>
    
                    <br/>
    
                    <p className={styles.textAbout}>Seu primeiro álbum, Whatever People Say I Am, That's What I'm Not foi lançado em 2006 e foi aclamado pela critica e se tronou o disco
                        de estreia que vendeu mais rápido na história das paradas de sucesso britânicas e, em 2013, a revista Rolling Stone o nomeou como o 30º melhor álbum de todos os tempos.</p>
    
                   <br/>
    
                   <p className={styles.textAbout}>
                       Em 2007, lançou o segundo álbum de estúdio Favourite Worst Nightmare , também aclamado pela critica e vencedor do prêmio de Melhor Álbum Britânico no Brit Awards de 2008.
                       Em 2009, lançaram seu terceiro álbum, Humbug e em 2011 o quarto álbum, Suck It and See. Em 2013, alcançaram a popularidade mundial com o lançamento do álbum AM, que se tornou
                        certificado de platina também nos Estados Unidos, emplacando hits como Do I Wanna Know? e R U Mine? e marcando o terceiro prêmio de Álbum do Ano no Brit Awards de 2014.
                   </p>
    
                   <br/>
    
                    <p className={styles.textAbout}>
                        Após turnês de grande sucesso mundial e um breve hiato, a banda lançou em 2018 o álbum com maior mudança sonora e criativa da carreira, o Tranquility Base Hotel & Casino. Em 2022, a banda
                        lançou seu sétimo album, The Car.
                    </p>
    
                    <br/>
    
                    <p className={styles.textAbout}>
                        Ao todo, o grupo venceu sete prêmios Brit Awards incluindo a categoria "Melhor Grupo Britânico" e três de "Melhor Álbum Britânico" e foram também nomeados para três Grammy
                        Awards. Eles ainda venceram um Mercury Prize em 2006 com seu disco de estreia. A banda já foi headliner de vários festivais pelo mundo, incluindo o de Glastonbury, em 2007 e
                        2013.
                    </p>
    
                </div>
            </div>
        </section>
    )
}

export default Introduction