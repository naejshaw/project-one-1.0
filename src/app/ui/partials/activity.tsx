import Card from "../components/card"

export default function Activity(){
    return(
        <section className="w-full h-screen flex flex-col items-center justify-center text-center text-[var(--btn-text)] bg-[var(--tertiary)]" id="activity">
            <h1 className="animate-slideUp text-[var(--primary)] px-8 pt-8 pb-12 text-3xl title_section">Conheça nossas especialidades</h1>

            <div className="animate-slideUp flex my-0 mx-24 gap-12 p-2 container">
                <Card text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis error est sequi. Ab et
                            ipsam aut, debitis repellat dolorum consequuntur rerum modi, molestias praesentium
                            dignissimos quisquam, neque tenetur? Pariatur, cum?" title="Defesa Criminal"/>

                <Card text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis error est sequi. Ab et
                            ipsam aut, debitis repellat dolorum consequuntur rerum modi, molestias praesentium
                            dignissimos quisquam, neque tenetur? Pariatur, cum?" title="Atuação Defensiva"/>

                <Card text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis error est sequi. Ab et
                            ipsam aut, debitis repellat dolorum consequuntur rerum modi, molestias praesentium
                            dignissimos quisquam, neque tenetur? Pariatur, cum?" title="Prisões em flagrante"/>

                <Card text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis error est sequi. Ab et
                            ipsam aut, debitis repellat dolorum consequuntur rerum modi, molestias praesentium
                            dignissimos quisquam, neque tenetur? Pariatur, cum?" title="Interposição de Recursos"/>
            </div>
  
            <a className="animate-slideUp my-4 mx-0 py-4 px-8 bg-[var(--secondary)] text-[var(--tertiary)] font-bold rounded-lg text-base flex justify-center items-center w-1/5  btn_activity" href="">Falar com Especialista</a>
        </section>
    )
}