export default function Contact(){
    return(

        <section className="mb-2 w-full h-screen flex items-center justify-center text-[var(--btn-text)] bg-[var(--primary)]" id="contact">
            <div className="animate-slideUp w-1/2 mb-2 flex items-center justify-center text-3xl font-medium info_div_left">
                <h2 className="font-medium w-7/12 info_div_left title_div_left">Como podemos lhe ajudar? Entre em contato!</h2>
            </div>
            <div className="animate-slideUp w-1/2 flex items-center justify-start div_form">
                <form className="mr-2 flex flex-col items-center gap-1.5 w-4/5 text-[var(--tertiary)] rounded-2xl" action="submit">
                    <div className="w-full flex justify-between items-center">
                        <label className="flex-1 my-3 mx-0 font-medium p-0 text-[var(--tertiary)] text-xl description_two">Nome:</label>
                        <input className="w-3/4 p-4 rounded-lg" id="name" type="text" placeholder="Nome"/>
                    </div>
                    <div className="w-full flex justify-between items-center">
                        <label className="flex-1 my-3 mx-0 font-medium p-0 text-[var(--tertiary)] text-xl description_two">Email:</label>
                        <input className="w-3/4 p-4 rounded-lg" id="email" type="email" placeholder="E-mail"/>
                    </div>
                    <div className="w-full flex justify-between items-center">
                        <label className="flex-1 my-3 mx-0 font-medium p-0 text-[var(--tertiary)] text-xl description_two">Telefone:</label>
                        <input className="w-3/4 p-4 rounded-lg" id="phone" type="text" placeholder="Telefone"/>
                    </div>
                    <div className="w-full flex justify-between items-center">
                        <label className="flex-1 my-3 mx-0 font-medium p-0 text-[var(--tertiary)] text-xl description_two">Mensagem:</label>
                        <textarea className="w-3/4 p-4 rounded-lg h-52 mt-1" id="message" placeholder="Mensagem"></textarea>
                    </div>
                    <button className="w-2/5 mt-4 bg-[var(--btn-bg)] py-3.5 px-4 mr-10 text-[var(--tertiary)] font-bold rounded-lg border-none cursor-pointer text-base justify-center flex btn_general" type="submit">Enviar</button>
                </form>
            </div>
        </section>
    )
}