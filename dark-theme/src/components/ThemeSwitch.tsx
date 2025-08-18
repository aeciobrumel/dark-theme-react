import { useTheme } from "../contexts/ThemeContext";
import dark from "../assets/moon-fill.svg"
import light from "../assets/sun.svg"
export const ThemeSwitch = () => {
    const themeCtx = useTheme();

    const handleThemeToggle = () => {
        if (themeCtx) {
            themeCtx.setTheme(themeCtx.theme === 'dark' ? 'light' : 'dark')
        }
    }

    return (
        <button
            onClick={handleThemeToggle}
            className=" relative  inline-flex h-6 w-12 items-center justify-between  rounded-full bg-black dark:bg-white transition-colors duration-300"
        >
            <div className="absolute inset-0 flex items-center justify-between px-1 pointer-events-none">
                <img src={dark} alt="" className="w-3.5 h-3.5 opacity-80" />
                <img src={light} alt="" className="w-3.5 h-3.5 opacity-80" />
            </div>
            <span
                className={`absolute top-1 left-0 h-4 w-4 rounded-full bg-white dark:bg-black transition-transform duration-300
                     ${themeCtx?.theme === 'dark' ? "translate-x-7" : "translate-x-1"}`}>
            </span>

        </button >

    );
}