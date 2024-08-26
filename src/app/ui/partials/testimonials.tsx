import Image from "next/image";
import Slide from "../components/slide";
import img1 from '../../assets/images/1.png'
import img2 from '../../assets/images/2.png'
import img3 from '../../assets/images/3.png'
import img4 from '../../assets/images/4.png'
import img5 from '../../assets/images/5.png'
import img6 from '../../assets/images/6.png'

export default function Testimonials(){
    return(

        <section id="testimonials" className="flex items-center justify-center bg-[var(--tertiary)] relative overflow-hidden w-full testimonials mySwiper">
            <div className="animate-slideUp max-w-[36rem] py-7 px-5 flex relative testimonials_box swiper-wrapper">

                <Slide imgPath={img1} personCity="Paraná" personName="Letícia" text="Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Perspiciatis
                dignissimos consectetur non fugit quasi."/>
                <Slide imgPath={img2} personCity="São Paulo" personName="André" text="Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Perspiciatis
                dignissimos consectetur non fugit quasi."/>
                <Slide imgPath={img3} personCity="Minas Gerais" personName="Bárbara" text="Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Perspiciatis
                dignissimos consectetur non fugit quasi."/>
                <Slide imgPath={img4} personCity="Fortaleza" personName="Joana" text="Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Perspiciatis
                dignissimos consectetur non fugit quasi."/>
                <Slide imgPath={img5} personCity="Rio de Janeiro" personName="Thiago" text="Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Perspiciatis
                dignissimos consectetur non fugit quasi."/>
                <Slide imgPath={img6} personCity="Santa Catarina" personName="Mariana" text="Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Perspiciatis
                dignissimos consectetur non fugit quasi."/>

            </div>


  
            <div className="animate-slideUp mr-80 text-[var(--primary) !important] swiper-button-next"></div>
            <div className="animate-slideUp ml-80 text-[var(--primary) !important] swiper-button-prev"></div>
            <div className="animate-slideUp swiper-pagination"></div>
        </section>
    )
}
