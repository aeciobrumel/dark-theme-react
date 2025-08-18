import { Button } from "./components/Button";
import { Container } from "./components/container";
import Header from "./components/Header";
import Section from "./components/Section";
import { ThemeProvider } from "./contexts/ThemeContext"


const Page = () => {
    return (
        <ThemeProvider>
            <Container>
                <Header></Header>
                <Section />
                <div className="flex items-center justify-center p-6">
                    <Button label="exemplo de botão"
                        onClick={() => { }}
                    />
                </div>

            </Container>
        </ThemeProvider>
    );
}
export default Page;