import { Button } from "./components/Button";
import { Container } from "./components/container";
import { ThemeSwitch } from "./components/ThemeSwitch";
import { ThemeProvider } from "./contexts/ThemeContext"


const Page = () => {
    return (
        <ThemeProvider>
            <Container>
                <header className="py-5">
                    <h1 className="text-3xl">titulo da pagina</h1>
                </header>
                <section>
                    <p className="my-5">Conteúdo da página</p>
                </section>
                <Button label="clique aqui"
                    onClick={() => { }}
                />
                <ThemeSwitch />
            </Container>
        </ThemeProvider>
    );
}
export default Page;