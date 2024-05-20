import Netflix from './images/netflix.png'
import Mario from './images/mario.png'
import Watch from './images/watch.png'
import Gallery from './images/gallery.png'
import Weather from './images/weather.png'
import Search from './images/searchengine.png'
import react from '../../assets/biblioteca.png'
import js from '../../assets/js.png'

const Projects = () => {
    return(
        <>
        <div className='items-center justify-center  mt-10 bg-gray-200 dark:bg-transparent'>
            <h1 className='lg:text-4xl dark:text-zinc-100 font-extrabold italic my-4 text-center pt-8 mb-10 animate-pulse font-serif sm:text-3xl'>PROJETOS</h1>
        <div>
            <div className='flex dark:text-white '>
                <img src={Netflix} alt="imagem da tela representando" className='lg:h-80 lg:w-100 mx-32 rounded-xl cursor-pointer sm:h-60 sm:w-80 sm:mx-10'/>
                <div className='lg:mr-60 lg:-ml-20 sm:ml-0'>
                    <h2 className='m-2 lg:text-3xl sm:text-xl'>Netflix Clone</h2>
                    <p className='lg:m-2 lg:text-xl sm:text-sm sm:w-44'>Nesse projeto busquei testar meus conhecimentos em React e no consumo de API externa de filmes, então busquei o streaming mais famoso do mundo para tentar replicar, não ficou idêntico, mas deu pra aprende muita coisa</p>
                    <img src={react} alt="icone de react0" className='h-7 bg-blue-400 pr-1 rounded-full m-2 sm:hidden' />
                    <button className=' mt-2 animate-pulse mx-4 border-gray-300 bg-gray-700 px-3 rounded-full text-white sm:mx-1 sm:mt-1 sm:text-sm'><a href="https://netflix-xi-nine.vercel.app/" target='blank'>Ver Site</a></button>
                </div>
            </div>

            <div className='flex dark:text-white'>
            <img src={Mario} alt="imagem da tela representando"className='lg:h-80 lg:w-100 lg:mx-32 lg:my-8 rounded-xl cursor-pointer sm:h-60 sm:w-80 sm:mx-10' />
            <div className='mr-60 -ml-20 mt-10 sm:ml-0'>
            <h2 className='m-2 lg:text-3xl sm:text-xl'>Super Mario</h2>
                    <p className='lg:m-2 lg:text-xl sm:text-sm sm:w-44'>Um dos meus projetos mais divertidos, fiz através de um vídeo no Youtube usando JS, mas depois de finalizado busquei colocar algumas funcionalidades, como som e um botão de reiniciar.</p>
                    <img src={js} alt="icone de react" className='h-7 rounded-full m-2 sm:hidden' />
                    <button className=' mt-2 animate-pulse mx-4 border-gray-300 bg-gray-700 px-3 rounded-full text-white sm:mx-1 sm:mt-1 sm:text-sm'><a href=" https://mario-jump-blue.vercel.app/" target='blank'>Ver Site</a></button>
                   
            </div>
            </div>

            <div className='flex dark:text-white'>
            <img src={Gallery} alt="imagem da tela representando" className='lg:h-80 lg:w-100 mx-32 rounded-xl cursor-pointer sm:h-60 sm:w-80 sm:mx-10'/>
            <div className='mr-60 -ml-20 mt-3 sm:ml-0'>
            <h2 className='m-2 text-3xl sm:text-xl'>I.A Gallery</h2>
                    <p className='m-2 text-xl sm:text-sm sm:w-44'>Projeto feito em JS, tive como objetivo fazer estilo e-commerce como, por exemplo, colocar o item no carrinho, fiz inspirado em um vídeo no Youtube e os produtos disponibilzados na Gallery são imagens geradas por inteligência artificial.</p>
                    <img src={js} alt="icone de react" className='h-7 rounded-full m-2 sm:hidden' />
                    <button className=' mt-2 animate-pulse mx-4 border-gray-300 bg-gray-700 px-3 rounded-full text-white sm:mx-1 sm:mt-1 sm:text-sm'><a href="https://i-a-gallery.vercel.app/" target='blank'>Ver Site</a></button>
            </div>
            </div>

            <div className='flex dark:text-white'>
            <img src={Weather} alt="imagem da tela representando" className='lg:h-80 lg:w-100 mx-32 my-8 rounded-xl cursor-pointer sm:h-60 sm:w-80 sm:mx-10'/>
            <div className='mr-60 -ml-20 mt-14 sm:ml-0'>
            <h2 className='m-2 text-3xl sm:text-xl'>Weather</h2>
                    <p className='m-2 text-xl sm:text-sm sm:w-44'>Feito com JavaScript e com bastante animação para o movimento dos itens, como por exemplo o planeta e usei uma API externa de tempo que é atualizada em tempo real.</p>
                    <img src={js} alt="icone de react" className='h-7 rounded-full m-2 sm:hidden' />
                    <button className=' mt-2 animate-pulse mx-4 border-gray-300 bg-gray-700 px-3 rounded-full text-white sm:mx-1 sm:mt-1 sm:text-sm'><a href="https://weather-site-rouge.vercel.app/" target='blank'>Ver Site</a></button>
            </div>
            </div>

            <div className='flex dark:text-white'><img src={Watch} alt="imagem da tela representando" className='lg:h-80 lg:w-100 mx-32 rounded-xl cursor-pointer sm:h-60 sm:w-80 sm:mx-10'/>
            <div className='mr-60 -ml-20 mt-10 sm:ml-0' >
            <h2 className='m-2 text-3xl sm:text-xl'>Watch</h2>
                    <p className='m-2 text-xl sm:text-sm sm:w-44'>Projeto feito em React, com componentes dinâmicos busquei fazer estilo um app de treino no qual coloca o treino e aciona o cronometro depois.</p>
                    <img src={react} alt="icone de react" className='h-7 bg-blue-400 pr-1 rounded-full m-2 sm:hidden' />
                    <button className=' mt-2 animate-pulse mx-4 border-gray-300 bg-gray-700 px-3 rounded-full text-white sm:mx-1 sm:mt-1 sm:text-sm'><a href="https://watch-training-nick.vercel.app/" target='blank'>Ver Site</a></button>
                    </div>
            </div>

            <div className='flex dark:text-white'>
            <img src={Search} alt="imagem da tela representando" className='lg:h-80 lg:w-100 mx-32 my-8 rounded-xl cursor-pointer sm:h-60 sm:w-80 sm:mx-10'/>
            <div className='mr-60 -ml-20 mt-10 sm:ml-0'>
            <h2 className='m-2 text-3xl sm:text-xl'>Search Engine</h2>
                    <p className='m-2 text-xl sm:text-sm sm:w-44'>Mais um projeto usando JS e buscando imagens através de uma API através do campo de texto e então serão mostradas diversas imagens de acordo com a palavra.</p>
                    <img src={js} alt="icone de react" className='h-7 rounded-full m-2 sm:hidden' />
                    <button className=' mt-2 animate-pulse mx-4 border-gray-300 bg-gray-700 px-3 rounded-full text-white sm:mx-1 sm:mt-1 sm:text-sm'><a href="https://image-generate-jade.vercel.app/" target='blank'>Ver Site</a></button>
            </div>
            </div>
        </div>
        </div>
        </>
    )
}

export default Projects