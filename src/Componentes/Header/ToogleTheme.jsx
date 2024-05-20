import {MoonIcon} from '@heroicons/react/24/solid';
import {SunIcon} from '@heroicons/react/24/solid'
import { useEffect } from 'react';

const ToggleTheme = () => {
    const SystemPreference = window.matchMedia('(prefers-color-scheme: dark)').matches
    const PageClasses = document.documentElement.classList

    useEffect(() => {
        !SystemPreference && PageClasses.add('dark')
    })

    const toggle = () => {
        document.documentElement.classList.toggle('dark')
    }

    return(
    <div className="hidden sm:block">
        <MoonIcon className='lg:h-8 text-blue-500 cursor-pointer block dark:hidden sm:h-6'onClick={toggle}/>
        <SunIcon className='lg:h-9 text-yellow-500 cursor-pointer hidden dark:block sm:h-7' onClick={toggle}/>
    </div>

    )
}

export default ToggleTheme