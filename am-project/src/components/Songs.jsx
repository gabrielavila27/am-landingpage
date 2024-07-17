import styles from './Songs.module.css'

function Songs(){

    return(
        <section id={styles.sectionSongs}>

            <div id={styles.divSongs}>

                <div id={styles.divTextSongs}>

                    <h2> Cuidado para não viciar! </h2>

                    <h3>Aqui estão mais algumas sugestões de músicas do Arctic monkeys para você conhecer!</h3>

                    <ul id={styles.listSongs}>
                        <li><a href='https://www.youtube.com/watch?v=z0DcAAFsGHU' rel='external' target='_blank' title='Música Arctic Monkeys'>Brianstorm</a></li>
                        <li><a href='https://www.youtube.com/watch?v=ma9I9VBKPiw' rel='external' target='_blank' title='Música Arctic Monkeys'>Fluorescent Adolescent</a></li>
                        <li><a href='https://www.youtube.com/watch?v=JYO1qEnNSkI&t=157s' rel='external' target='_blank' title='Música Arctic Monkeys'>Do I Wanna Know?</a></li>
                        <li><a href='https://www.youtube.com/watch?v=6QxDItQF2ps' rel='external' target='_blank' title='Música Arctic Monkeys'>No. 1 Party Anthem</a></li>
                        <li><a href='https://www.youtube.com/watch?v=w_1Gy4Dquec' rel='external' target='_blank' title='Música Arctic Monkeys'> The View From The Afternoon</a></li>
                        <li><a href='https://www.youtube.com/watch?v=ifFJ84F4N6I' rel='external' target='_blank' title='Música Arctic Monkeys'>Four Out Of Five</a></li>
                        <li><a href='https://www.youtube.com/watch?v=y1N8ob9FtKY' rel='external' target='_blank' title='Música Arctic Monkeys'>Who The F*ck Are Arctic Monkeys?</a></li>

                
                    </ul>
                </div>
                
                <div id={styles.divVideo}>
                
                    <iframe id={styles.video} width="560" height="315" src="https://www.youtube.com/embed/VPmLadF3ydI?si=WyWNn-kP5cbhWuy3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
                
            </div>

        </section>
    )
}

export default Songs