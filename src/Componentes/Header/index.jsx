import ToggleTheme from "./ToogleTheme"

const Header = () => {
    
    return(
        <header className=" fixed z-50 top-0 right-0 py-3 px-3 bg-blue-800 dark:bg-yellow-900 rounded-xl mx-1 my-1">
            <ToggleTheme/>  
        </header>
    )
}

export default Header