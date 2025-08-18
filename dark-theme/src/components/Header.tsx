// import { useTheme } from "../contexts/ThemeContext";
import { ThemeSwitch } from "./ThemeSwitch";

const Header = () => {
    // const themeCtx = useTheme();

    return (
        <header className=" p-5 fixed top-0 left-0 right-0 ">
            {/* <div className="max-w-6xl mx-auto flex h-16 items-center px-6" > */}
            <div className=" mx-auto flex  items-center justify-center" >

                {/* <h1 className="text-2xl font-bold">
                    {themeCtx?.theme === 'dark' ? "Dark Mode" : "Light Mode"}
                </h1> */}
                {/* <nav className="ml-auto ">
                    <ul className="text-1xl flex gap-3 ">
                        <li className="cursor-pointer hover:text-gray-400">Início</li>
                        <li className="cursor-pointer hover:text-gray-400">Sobre</li>
                        <li className="cursor-pointer hover:text-gray-400">Serviços</li>
                        <li className="cursor-pointer hover:text-gray-400">Contato</li>
                    </ul>
                </nav> */}
                <div className=" ml-6">
                    <ThemeSwitch />

                </div>
            </div>


        </header>
    );

}
export default Header;