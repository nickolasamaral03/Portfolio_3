import ToggleTheme from "./ToogleTheme"

const Header = () => {
    
    return(
        <header className=" fixed z-50 top-0 right-0 py-2 px-2 bg-blue-800 dark:bg-yellow-900 rounded-3xl mx-4 my-4">
            <ToggleTheme/>  
        </header>
    )
}

export default Header