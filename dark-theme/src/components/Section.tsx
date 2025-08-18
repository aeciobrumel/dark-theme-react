import { useTheme } from "../contexts/ThemeContext";


const Section = () => {

    const themeCtx = useTheme();


    return (
        <div className=" flex flex-col text-center justify-center items-center  ">
            <h1 className="flex items-center justify-center mb-4 text-6xl font-bold  flex-row" >
                {themeCtx?.theme === 'dark' && ' Dark Mode'}
                {themeCtx?.theme === 'light' && 'Light Mode'}
            </h1>
            {themeCtx?.theme === 'dark' &&
                <>
                    <p className="max-w-md">
                        O modo escuro ajuda a reduzir o cansaço visual em locais com pouca luz.
                        Ele dá destaque ao conteúdo e cria uma atmosfera mais elegante e moderna.
                        Pode economizar bateria em telas OLED e deixar a experiência mais confortável à noite
                    </p>
                </>
            }
            {themeCtx?.theme === 'light' &&
                <>
                    <p className="max-w-md">
                        O modo claro é perfeito para ambientes bem iluminados.
                        Ele transmite leveza, simplicidade e uma sensação de limpeza visual.
                        Ideal para quando você quer cores mais vivas e uma leitura mais tradicional, como em papéis ou livros.
                    </p>
                </>

            }

        </div>



    );

}
export default Section;