import Image from "next/image";
import about from '../../assets/images/image_section_about.webp'

export default function About(){
    return(

        <section className="h-screen flex items-center justify-center text-center text-[var(--btn-text)] bg-[var(--tertiary)]" id="about">
            <div className="animate-slideUp w-1/2 h-1/2 flex flex-col items-center justify-center image_about">
                <Image className="img w-[70%] rounded-lg" src={about} alt="image"/>
            </div>
            <div className="animate-slideUp info w-1/2 h-full flex flex-col justify-center text-left">
                <p className="text-[var(--primary)] text-5xl font-medium uppercase title_section_about">Dr. João Silva</p>
                <p className="text-xl text-[var(--primary)] font-normal text-left py-4 px-0 mr-20 description_two">É Advogado criminal com 25 anos de experiência, doutorando em Direito Penal
                    pela Universidade de Salamanca. Mestre e pós-graduado em Direito Penal, formou-se pela Universidade
                    Federal Fluminense. Atuou no Sindicato da Polícia Federal do RJ e na operação Lava Jato. Autor de um
                    livro sobre gestão penitenciária, tem escritório no Centro do Rio de Janeiro, especializado em
                    defesa criminal em inquéritos, ações penais e procedimentos em todas as instâncias, incluindo STJ e
                    STF.</p>
                <a href="#contact" className="mt-8 bg-[var(--btn-bg)] py-4 px-8 text-[var(--tertiary)] font-bold rounded-lg text-base flex justify-center items-center w-[30%] btn_about">Entrar em contato</a>
            </div>
        </section>
    )
}
