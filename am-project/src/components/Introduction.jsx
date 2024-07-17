import styles from './Introduction.module.css'
import imageWtfam from '../assets/wtfkam.jpg'

function Introduction(){
    return(
        <section id={styles.sectionWtfam}>

            <div id={styles.divWtfam}>

                <h2 id={styles.titleWtfam}>
                    WHO THE F*CK ARE ARCTIC MONKEYS?
                </h2>
                
                <div id= {styles.divImageWtfam}>

                    <img src={imageWtfam} alt='Imagem da banda Arctic Monkeys' title='Arctic Monkeys'></img>

                </div>

            </div>

        </section>
    )
}

export default Introduction