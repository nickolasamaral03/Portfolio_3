import Linkedin from '../../assets/linkedin.png'
import Email from '../../assets/gmail.png'
import Github from '../../assets/github.png'

const Contato = () => {
    return(
        <>
        <div className='bg-gray-200 dark:bg-gray-800 rounded-md border-gray-100 mx-4 sm:mx-6 md:mx-10 lg:mx-auto lg:max-w-4xl my-24 p-8'>
            {/* <h2 className='lg:text-3xl dark:text-zinc-100 font-extrabold italic py-8 text-center animate-pulse sm:text-2xl'>
            Para Contato:
            </h2>
             */}
            <a href="https://www.linkedin.com/in/nickolas-amaral-688984248/" target='blank'>
            <div className="flex items-center justify-between px-6 sm:px-8 md:px-12 lg:px-16 border-b-2 border-blue-700 hover:bg-blue-300 dark:hover:bg-blue-900 transition-colors">
                <h2 className='dark:text-blue-500 font-bold lg:text-xl py-4 sm:text-md'>Linkedin</h2>
                <img src={Linkedin} alt="LinkedIn" className='h-8 w-8 cursor-pointer filter dark:invert-0 invert'/>
            </div>
            </a>

            <a href="https://mail.google.com/mail/u/0/?to=nickolas.amaral08@gmail.com&fs=1&tf=cm" target='blank'>
            <div className="flex items-center justify-between px-6 sm:px-8 md:px-12 lg:px-16 border-b-2 border-red-700 hover:bg-red-300 dark:hover:bg-red-900 transition-colors">
                <h2 className='dark:text-red-500 font-bold lg:text-xl py-4 sm:text-md'>Email</h2>
                <img src={Email} alt="Email" className='h-8 w-8 cursor-pointer filter dark:invert-0 invert'/>
            </div>
            </a>

            <a href="https://github.com/nickolasamaral03" target='blank'>
            <div className="flex items-center justify-between px-6 sm:px-8 md:px-12 lg:px-16 border-b-2 border-black hover:bg-gray-500 dark:hover:bg-gray-600 transition-colors rounded-b-md">
                <h2 className='dark:text-white font-bold lg:text-xl py-4 sm:text-md'>GitHub</h2>
                <img src={Github} alt="GitHub" className='h-8 w-8 cursor-pointer bg-gray-800 dark:bg-white rounded-full p-1.5 filter dark:invert-0 invert'/>
            </div>
            </a>
        </div>
        
        <footer className='bg-slate-600 p-3'>
            <h2 className='text-xl text-white font-medium text-center animate-pulse sm:text-sm'>
            Criado 2024 by Nickolas Amaral
            </h2>
        </footer>
        </>
    )
}

export default Contato