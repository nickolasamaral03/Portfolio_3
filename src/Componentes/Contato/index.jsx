import Linkedin from '../../assets/linkedin.png'
import Email from '../../assets/gmail.png'
import Github from '../../assets/github.png'

const Contato = () => {
    return(
        <>
        <div className='m-auto text-center justify-center bg-gray-200 dark:bg-gray-800 m-24 mt-24 rounded-md mb-20 border-gray-100'>

            <h2 className='lg:text-3xl dark:text-zinc-100 font-extrabold italic my-4 text-center pt-8 mb-10 animate-pulse sm:text-2xl'>Para Contato:</h2>
            <a href="https://www.linkedin.com/in/nickolas-amaral-688984248/" target='blank'><div className="flex text-center justify-center border-b-2 border-blue-700 hover:bg-blue-300">
                <h2 className='dark:text-blue-500 font-bold lg:text-xl m-5 mb-5 sm:text-md '>Linkedin</h2>
                <img src={Linkedin} alt="" className='h-8 m-4 cursor-pointer'/>
            </div></a>

            <a href="https://mail.google.com/mail/u/0/?to=nickolas.amaral08@gmail.com&fs=1&tf=cm" target='blank'><div className="flex text-center justify-center border-b-2 border-red-700 hover:bg-red-300">
                <h2 className='dark:text-red-500 font-bold lg:text-xl m-5 mb-5 sm:text-md'>Email</h2>
                <img src={Email} alt="" className='h-8 m-4 cursor-pointer'/>
            </div></a>

           <a href="https://github.com/nickolasamaral03" target='blank'><div className="flex text-center justify-center border-b-2 border-black hover:bg-gray-500">
                <h2 className='dark:text-white font-bold lg:text-xl m-5 sm:text-md'>GitHub</h2>
                <img src={Github} alt="" className='h-8 m-4 cursor-pointer'/>
            </div></a>
        </div>
        <footer className='bg-slate-600 p-3'>
            <h2 className='text-xl text-white font-medium text-center animate-pulse sm:text-xl'>Criado 2024 by Nickolas Amaral</h2>
        </footer>
        </>
    )
}

export default Contato