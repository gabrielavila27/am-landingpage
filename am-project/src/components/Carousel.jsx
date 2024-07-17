import amMain from '../assets/am_main.png'
import amLiveTbhc from '../assets/am_live_two.jpg'
import amLiveam from '../assets/am_live_three.jpg'
import styles from './Carousel.module.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import {register} from 'swiper/element/bundle'
register();
import 'swiper/css';
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'
import 'swiper/css/scrollbar'

function Carousel(){

    const data = [
        {id: '1', src: amMain },
        {id: '2', src: amLiveTbhc },
        {id: '3', src: amLiveam }
    ]

    return(
        <main id={styles.main}>

            <Swiper pagination={{clickable: true}} autoplay={{delay: 3000, disableOnInteraction: true}}>

                {
                    data.map( (item) =>  (
                        <SwiperSlide key={data.id}>

                        <img src={item.src} alt='Imagem Arctic Monkeys' className={styles.image}></img>
    
                    </SwiperSlide>
                    ))
                }


            </Swiper>

        </main>
    )
}

export default Carousel