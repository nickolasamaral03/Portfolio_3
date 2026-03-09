import html from '../../assets/html-5.png'
import js from '../../assets/js.png'
import css from '../../assets/css-3.png'
import design from '../../assets/web-design.png'
import english from '../../assets/eng.png'
import react from '../../assets/biblioteca.png'

const Skills = () => {
    return(
        <>

       {/* <div className='lg:mt-24 pb-8 dark:bg-gray-800 bg-blue-100 m-20 rounded-lg sm:w-full sm:m-auto sm:my-10 '>
            <h1 className='lg:text-4xl dark:text-zinc-100 font-extrabold italic my-4 text-center pt-8 mb-10 animate-pulse sm:text-3xl'>My Skills</h1>
            <div className='items-center justify-between flex lg:px-20 sm:px-0 sm:ml-4 lg:mr-10'>
            <div className='sm:hidden md:block lg:block'>
                <img src={html} alt="imagem do icone" className='lg:h-16 lg:w-14 lg:ml-9 cursor-pointer sm:h-8 sm:w-6 sm:ml-5 md:ml-6'/>
                <p className='dark:text-white font-mono mt-5 lg:ml-12 sm:text-xs lg:text-base sm:ml-6'>HTML</p>
            </div>
            <div>
                <img src={css} alt="imagem do icone" className='lg:h-16 lg:w-14 cursor-pointer sm:h-8 sm:w-6 sm:ml-7' />
                <p className='dark:text-white font-mono mt-5 lg:ml-5 animate-pulse lg:text-base sm:text-xs sm:ml-4'>TAILWIND</p>
            </div>
            <div>
            <img src={js} alt="imagem do icone" className='lg:h-16 lg:w-14 cursor-pointer sm:h-8 sm:w-6 sm:ml-5'/>
                <p className='dark:text-white font-mono mt-5 lg:ml-1 lg:text-base sm:text-xs'>JAVASCRIPT</p>
            </div>
            <div>
                <img src={react} alt="imagem do icone" className='lg:h-16 lg:w-14 lg:-mr-4 cursor-pointer sm:h-8 sm:w-7 sm:-mr-10'/>
                <p className='dark:text-white font-mono mt-5 lg:ml-2 lg:text-base sm:text-xs'>REACT</p>
            </div>
            <div>
                <img src={design} alt="imagem do icone" className='lg:h-16 lg:w-14 cursor-pointer sm:h-8 sm:w-6'/>
                <p className='dark:text-white font-mono mt-5 lg:ml-2 lg:text-base sm:text-xs sm:-ml-1'>UX/UI</p>
            </div>
            <div>
                <img src={english} alt="imagem do icone" className='lg:h-16 lg:w-14 lg:mr-10 cursor-pointer sm:mr-5 sm:h-8 sm:w-6 sm:ml-3' />
                <p className='dark:text-white font-mono mt-5 lg:ml-3 lg:text-base sm:text-xs sm:mr-6'>ENGLISH</p>
            </div>
            </div>
       </div>  */}

       <div className='lg:mt-24 pb-8 dark:bg-gray-800 bg-blue-100 rounded-lg mx-4 sm:mx-6 md:mx-10 lg:mx-20 my-20'>
            <h1 className='lg:text-4xl dark:text-zinc-100 font-extrabold italic my-4 text-center pt-8 mb-10 animate-pulse sm:text-3xl'>
                My Skills
            </h1>
            
            <div className='flex items-center justify-between gap-2 px-4 sm:px-6 md:px-8 lg:px-16'>
                {/* HTML */}
                <div className='flex flex-col items-center'>
                <img src={html} alt="HTML" 
                    className='h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 cursor-pointer hover:scale-110 transition-transform'/>
                <p className='dark:text-white font-mono mt-2 text-sm sm:text-base'>HTML</p>
                </div>

                {/* CSS/TAILWIND */}
                <div className='flex flex-col items-center'>
                <img src={css} alt="Tailwind" 
                    className='h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 cursor-pointer hover:scale-110 transition-transform'/>
                <p className='dark:text-white font-mono mt-2 text-sm sm:text-base'>TAILWIND</p>
                </div>

                {/* JavaScript */}
                <div className='flex flex-col items-center'>
                <img src={js} alt="JavaScript" 
                    className='h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 cursor-pointer hover:scale-110 transition-transform'/>
                <p className='dark:text-white font-mono mt-2 text-sm sm:text-base'>JAVASCRIPT</p>
                </div>

                {/* React */}
                <div className='flex flex-col items-center'>
                <img src={react} alt="React" 
                    className='h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 cursor-pointer hover:scale-110 transition-transform'/>
                <p className='dark:text-white font-mono mt-2 text-sm sm:text-base'>REACT</p>
                </div>

                {/* UX/UI */}
                <div className='flex flex-col items-center'>
                <img src={design} alt="UX/UI" 
                    className='h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 cursor-pointer hover:scale-110 transition-transform'/>
                <p className='dark:text-white font-mono mt-2 text-sm sm:text-base'>UX/UI</p>
                </div>

                {/* English */}
                <div className='flex flex-col items-center'>
                <img src={english} alt="English" 
                    className='h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 cursor-pointer hover:scale-110 transition-transform'/>
                <p className='dark:text-white font-mono mt-2 text-sm sm:text-base'>ENGLISH</p>
                </div>
            </div>
            </div>
       <div>

        <div className=' px-7 border-solid border-2 dark:border-green-700 border-gray-200 bg-green-600 dark:bg-green-950 mx-8 my-2 rounded-md'>
            <h2 className='text-center text-xl text-green-400 font-bold my-3 animate-pulse'>Evolução do meu estudo:</h2>
            <div className='lg:flex dark:text-gray-300 text-gray-200 sm:grid'>
                <div className='m-3 border-r-4 border-blue-100 pr-2'>
                    <h3 className='font-bold'>- HTML/CSS</h3>
                    <p>Com intuito de aprender Desenvolvimento-Web comecei a aprender o &quot;básico&quot;.</p>
                </div>
                <div className='m-3 border-r-4 border-blue-200 pr-2'>
                    <h3 className='font-bold'>- JavaScript</h3>
                    <p>Busquei então aprender como tornar mais dinâmico as páginas web então fui para o conhecido &quot;JS&quot;.</p>
                </div>
                <div className='m-3 border-r-4 border-blue-300 pr-2'>
                    <h3 className='font-bold'>- React.js</h3>
                    <p>Com uma base de JavaScript fui para o framework e conhecer os famosos &quot;hooks&quot;.</p>
                </div>
                <div className='m-3 border-r-4 border-blue-400 pr-2'>
                    <h3 className='font-bold'>- UX/UI</h3>
                    <p>Aprendi muito na prática e de forma teórica, tanto por cursos como fiz uma cadeira na faculdade.</p>
                </div>
                <div className='m-3 border-r-4 border-blue-500 pr-2'>
                    <h3 className='font-bold'>- Inglês</h3>
                    <p>Em 2019 fiz um curso de inglês, porém de lá pra cá sempre busquei evoluir no idioma para se tornar um bom diferencial.</p>
                </div>
                <div className='m-3 border-r-4 border-blue-600 pr-2'>
                    <h3 className='font-bold'>- GitHub e Git</h3>
                    <p>Buscando postar meus projetos aprendi sobre versionamento com Git e eventualmente o GitHub para publicar os códigos.</p>
                </div>
                <div className='m-3 border-r-4 border-blue-700 pr-2'>
                    <h3 className='font-bold'>- Presente e Futuro</h3>
                    <p>Objetivo agora é me aprofundar nas linguagens como JS e seu framework React e aprender Node.js para o BackEnd, juntamente com banco de dados.</p>
                </div>
            </div>
        </div>
    </div>
    
       </>
    )
}

export default Skills