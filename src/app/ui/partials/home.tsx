import Image from 'next/image'
import background from '../../assets/images/background.jpg.png'
export default function Index(){
    return(<>
        <Image className="relative bg-no-repeat bg-center bg-cover" src={background} alt="background_image"/>
        <section className="h-[calc(100vh - 20px)] flex flex-col items-start justify-center text-left text-[var(--tertiary)] absolute" id="home">
            <h1 className="text-5xl font-normal ml-24">Especialista em direito criminal<br/>defendendo seus direitos com<br/>integridade e profissionalismo</h1>
            <p className="text-2xl font-extralight my-5 mx-24">Com vasta experiência em casos complexos, nossa equipe está<br/>comprometida em oferecer uma defesa sólida
                e estratégica,<br/> garantindo seus direitos em todas as etapas do processo.</p>
            <a className="bg-[var(--btn-bg)] py-4 px-8 ml-24 text-[var(--tertiary)] font-bold text-base rounded-lg flex items-center justify-center w-1/5 btn_home" href="">Falar com Especialista</a>
        </section>
    </>)
}
