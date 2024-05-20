import Foto from '../../assets/bomAvatar.jpg'
import Linkedin from '../../assets/linkedin.png'
import Email from '../../assets/gmail.png'
import Github from '../../assets/github.png'


const Home = () => {
    return(
    <div className=' lg:mt-14 lg:ml-24 sm:grid-cols-1 sm:w-100 sm:mt-14'>
        <div className='grid'>
            <h3 className='dark:text-zinc-500 text-black text-2xl ml-28 font-thin animate-pulse'> I am Nickolas Amaral</h3>
            <h1 className='text-4xl dark:text-zinc-100 font-extrabold italic my-4 animate-pulse sm:text-3xl sm:ml-6'>Desenvolvedor Front-End</h1>
            <div className='flex'>
            <img src={Foto} alt="Minha Foto" className='lg:h-36 lg:w-36 ml-10 mt-5 rounded border-gray-600 border-2 sm:h-32 sm:w-32'/>
            <div className=' flex mt-16 pl-7'>
                <a href="https://www.linkedin.com/in/nickolas-amaral-688984248/" target='blank'><img src={Linkedin} alt="" className='h-8 m-4 cursor-pointer'/></a>

                <a href="https://mail.google.com/mail/u/0/?to=nickolas.amaral08@gmail.com&fs=1&tf=cm" target='blank'><img src={Email} alt="" className='h-8 m-4 cursor-pointer'/></a> 
               
                <a href="https://github.com/nickolasamaral03" target='blank'><img src={Github} alt="" className='h-8 m-4 bg-gray-200 rounded-full p-1 cursor-pointer'/></a>
            </div>
        </div>
            </div>
            <div className='lg:flex sm:grid'>
                <div className='lg:w-80 lg:-mt-10 lg:-ml-1 sm:m-auto sm:p-4'>
                    <h3 className='lg:mt-9 font-thin dark:text-zinc-400 text-gray-500 lg:text-2xl sm:text-2xl sm:m-5 md:m-5'>&quot;Transformando complexidade em elegância, experiências digitais que cativam e inspiram&quot;</h3>
                    <h3 className='lg:mt-10 font-thin dark:text-zinc-400 text-gray-500 lg:text-2xl sm:text-2xl sm:m-5 md:m-5'>&quot;Na interseção entre tecnologia e design, criando experiências que transcendem o esperado&quot;</h3>
                </div>
                <div className='lg:ml-36 lg:-mt-20 border-solid border-gray-200 dark:border-gray-500 border-2 p-5 bg-gray-200 dark:bg-gray-950 rounded-lg drop-shadow-md sm:m-auto sm:m-12 sm:mt-10 '>
                    <h4>
                    <p className='dark:text-yellow-400 text-yellow-700 font-mono mb-10 text-2xl animate-bounce'>“Olá, galera”</p>

                    <p className='dark:text-gray-300 text-gray-800 font-mono mb-10 text-xl'>“Me chamo Nickolas, tenho 21 anos e sou apaixonado por <span className=' dark:text-yellow-400 text-yellow-600'>Front-End</span>”</p>

                    <p className='dark:text-gray-300 text-gray-800 font-mono mb-10 text-xl'>“Faço <span className='dark:text-orange-400 text-orange-700'>Ciências da Computação</span> na UNISINOS”</p>

                    <p className='dark:text-gray-300 text-gray-800 font-mono mb-10 text-xl'>“Possuo diversos  <span className='dark:text-pink-400 text-pink-700'>certificados</span> em Front-End, principalmente pela Alura”</p>

                    <p className='dark:text-gray-300 text-gray-800 font-mono mb-10 text-xl'>“Pretendo futuramente me tornar <span className='dark:text-blue-400 text-blue-700'>Full-Stack</span>”</p>

                    <p className='dark:text-gray-300 text-gray-800 font-mono text-xl'>“Nível avançado em <span className='dark:text-green-400 text-green-700'>inglês”</span></p>
                    </h4>

                </div>
            </div>

    </div>
    )
}

export default Home