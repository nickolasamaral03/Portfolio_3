import Netflix from './images/netflix.png'
import Mario from './images/mario.png'
import Watch from './images/watch.png'
import Gallery from './images/gallery.png'
import Weather from './images/weather.png'
import Search from './images/searchengine.png'
import react from '../../assets/biblioteca.png'
import js from '../../assets/js.png'

const Projects2 = () => {
    return(
        <>
        <div className='bg-gray-200 dark:bg-transparent mt-10 lg:pb-6'>
            <h1 className='text-center lg:text-4xl sm:text-3xl md:text-4xl animate-pulse font-serif dark:text-white pt-16 pb-8'>PROJETOS</h1>
        <div>
            <div className='lg:flex lg:mx-10 m-auto justify-center dark:text-white sm:grid sm:ml-5'>
                <img src={Netflix} alt="imagem da tela representando" className='lg:h-72 sm:h-44 mr-10 rounded-md'/>
                <div className='w-96'>
                    <h2 className='lg:m-2 sm:mb- lg:text-3xl sm:text-xl font-bold'>Netflix Clone</h2>
                    <p className='lg:m-2 lg:text-xl sm:text-sm sm:mb-2'>Nesse projeto busquei testar meus conhecimentos em React e no consumo de API externa de filmes, então busquei o streaming mais famoso do mundo para tentar replicar, não ficou idêntico, mas deu pra aprende muita coisa</p>
                    <img src={react} alt="icone de react0" className='h-7 w-7 bg-blue-400 pr-1 rounded-full m-2 lg:block md:block sm:hidden' />
                    <button className='mt-2 animate-pulse mx-4 border-gray-300 bg-gray-700 px-3 rounded-full text-white sm:mx-1 sm:mt-2 sm:text-sm sm:mr-8'><a href="https://netflix-xi-nine.vercel.app/" target='blank'>Ver Site</a></button>
                </div>
            </div>

            <div className='lg:flex lg:mx-10 m-auto justify-center dark:text-white sm:grid sm:ml-5 my-16'>
                <img src={Mario} alt="imagem da tela representando" className='lg:h-72 sm:h-44 mr-10 rounded-md'/>
                <div className='w-96'>
                    <h2 className='lg:m-2 sm:mb- lg:text-3xl sm:text-xl font-bold'>Super Mario</h2>
                    <p className='lg:m-2 lg:text-xl sm:text-sm sm:mb-2'>Um dos meus projetos mais divertidos, fiz através de um vídeo no Youtube usando JS, mas depois de finalizado busquei colocar algumas funcionalidades, como som e um botão de reiniciar.</p>
                    <img src={js} alt="icone de react0" className='h-7 w-7 rounded-full m-2 lg:block md:block sm:hidden' />
                    <button className='mt-2 animate-pulse mx-4 border-gray-300 bg-gray-700 px-3 rounded-full text-white sm:mx-1 sm:mt-2 sm:text-sm sm:mr-8'><a href="https://mario-jump-blue.vercel.app/" target='blank'>Ver Site</a></button>
                </div>
            </div>

            <div className='lg:flex lg:mx-10 m-auto justify-center dark:text-white sm:grid sm:ml-5'>
                <img src={Gallery} alt="imagem da tela representando" className='lg:h-72 sm:h-44 mr-10 rounded-md cursor-pointer'/>
                <div className='w-96'>
                    <h2 className='lg:m-2 sm:mb- lg:text-3xl sm:text-xl font-bold'>I.A Gallery</h2>
                    <p className='lg:m-2 lg:text-xl sm:text-sm sm:mb-2'>Projeto feito em JS, tive como objetivo fazer estilo e-commerce como, por exemplo, colocar o item no carrinho, fiz inspirado em um vídeo no Youtube e os produtos disponibilzados na Gallery são imagens geradas por inteligência artificial.</p>
                    <img src={js} alt="icone de react0" className='h-7 w-7  rounded-full m-2 lg:block md:block sm:hidden' />
                    <button className='mt-2 animate-pulse mx-4 border-gray-300 bg-gray-700 px-3 rounded-full text-white sm:mx-1 sm:mt-2 sm:text-sm sm:mr-8'><a href="https://i-a-gallery.vercel.app/" target='blank'>Ver Site</a></button>
                </div>
            </div>

            <div className='lg:flex lg:mx-10 m-auto justify-center dark:text-white sm:grid sm:ml-5 my-16'>
                <img src={Weather} alt="imagem da tela representando" className='lg:h-72 sm:h-44 mr-10 rounded-md cursor-pointer'/>
                <div className='w-96'>
                    <h2 className='lg:m-2 sm:mb- lg:text-3xl sm:text-xl font-bold'>Weather</h2>
                    <p className='lg:m-2 lg:text-xl sm:text-sm sm:mb-2'>Feito com JavaScript e com bastante animação para o movimento dos itens, como por exemplo o planeta e usei uma API externa de tempo que é atualizada em tempo real.</p>
                    <img src={js} alt="icone de react0" className='h-7 w-7 rounded-full m-2 lg:block md:block sm:hidden' />
                    <button className='mt-2 animate-pulse mx-4 border-gray-300 bg-gray-700 px-3 rounded-full text-white sm:mx-1 sm:mt-2 sm:text-sm sm:mr-8'><a href="https://weather-site-rouge.vercel.app/" target='blank'>Ver Site</a></button>
                </div>
            </div>

            <div className='lg:flex lg:mx-10 m-auto justify-center dark:text-white sm:grid sm:ml-5'>
                <img src={Watch} alt="imagem da tela representando" className='lg:h-72 sm:h-44 mr-10 rounded-md cursor-pointer'/>
                <div className='w-96'>
                    <h2 className='lg:m-2 sm:mb- lg:text-3xl sm:text-xl font-bold'>Watch</h2>
                    <p className='lg:m-2 lg:text-xl sm:text-sm sm:mb-2'>Projeto feito em React, com componentes dinâmicos busquei fazer estilo um app de treino no qual coloca o treino e aciona o cronometro depois.</p>
                    <img src={react} alt="icone de react0" className='h-7 w-7 bg-blue-400 pr-1 rounded-full m-2 lg:block md:block sm:hidden' />
                    <button className='mt-2 animate-pulse mx-4 border-gray-300 bg-gray-700 px-3 rounded-full text-white sm:mx-1 sm:mt-2 sm:text-sm sm:mr-8'><a href="https://watch-training-nick.vercel.app/" target='blank'>Ver Site</a></button>
                </div>
            </div>

            <div className='lg:flex lg:mx-10 m-auto justify-center dark:text-white sm:grid sm:ml-5 my-16'>
                <img src={Search} alt="imagem da tela representando" className='lg:h-72 sm:h-44 mr-10 rounded-md cursor-pointer'/>
                <div className='w-96'>
                    <h2 className='lg:m-2 sm:mb- lg:text-3xl sm:text-xl font-bold'>Search Engine</h2>
                    <p className='lg:m-2 lg:text-xl sm:text-sm sm:mb-2'>Mais um projeto usando JS e buscando imagens através de uma API através do campo de texto e então serão mostradas diversas imagens de acordo com a palavra.</p>
                    <img src={js} alt="icone de react0" className='h-7 w-7  rounded-full m-2 lg:block md:block sm:hidden' />
                    <button className='mt-2 animate-pulse mx-4 border-gray-300 bg-gray-700 px-3 rounded-full text-white sm:mx-1 sm:mt-2 sm:text-sm sm:mr-8'><a href="https://image-generate-jade.vercel.app/" target='blank'>Ver Site</a></button>
                </div>
            </div>


            {/* <div className='flex m-auto justify-center'>
            <img src={Mario} alt="imagem da tela representando"className='cursor-pointer h-60 mr-16 my-12'/>
            <div className='w-72'>
            <h2 className=''>Super Mario</h2>
                    <p className=''>Um dos meus projetos mais divertidos, fiz através de um vídeo no Youtube usando JS, mas depois de finalizado busquei colocar algumas funcionalidades, como som e um botão de reiniciar.</p>
                    <img src={js} alt="icone de react" className='h-7 w-7' />
                    <button className=''><a href=" https://mario-jump-blue.vercel.app/" target='blank'>Ver Site</a></button>
                   
            </div>
            </div>

            <div className='flex m-auto justify-center'>
            <img src={Gallery} alt="imagem da tela representando" className='cursor-pointer h-60'/>
            <div className='w-72'>
            <h2 className=''>I.A Gallery</h2>
                    <p className=''>Projeto feito em JS, tive como objetivo fazer estilo e-commerce como, por exemplo, colocar o item no carrinho, fiz inspirado em um vídeo no Youtube e os produtos disponibilzados na Gallery são imagens geradas por inteligência artificial.</p>
                    <img src={js} alt="icone de react" className='h-7 w-7' />
                    <button className=''><a href="https://i-a-gallery.vercel.app/" target='blank'>Ver Site</a></button>
            </div>
            </div>

            <div className='flex m-auto justify-center'>
            <img src={Weather} alt="imagem da tela representando" className='cursor-pointer h-60'/>
            <div className='w-72'>
            <h2 className=''>Weather</h2>
                    <p className=''>Feito com JavaScript e com bastante animação para o movimento dos itens, como por exemplo o planeta e usei uma API externa de tempo que é atualizada em tempo real.</p>
                    <img src={js} alt="icone de react" className='h-7 w-7' />
                    <button className=''><a href="https://weather-site-rouge.vercel.app/" target='blank'>Ver Site</a></button>
            </div>
            </div>

            <div className='flex m-auto justify-center'>
                <img src={Watch} alt="imagem da tela representando" className='cursor-pointer h-60'/>
            <div className='w-72' >
            <h2 className=''>Watch</h2>
                    <p className=''>Projeto feito em React, com componentes dinâmicos busquei fazer estilo um app de treino no qual coloca o treino e aciona o cronometro depois.</p>
                    <img src={react} alt="icone de react" className='h-7 w-7' />
                    <button className=''><a href="https://watch-training-nick.vercel.app/" target='blank'>Ver Site</a></button>
                    </div>
            </div>

            <div className='flex m-auto justify-center'>
            <img src={Search} alt="imagem da tela representando" className='cursor-pointer h-60'/>
            <div className='w-72'>
            <h2 className=''>Search Engine</h2>
                    <p className=''>Mais um projeto usando JS e buscando imagens através de uma API através do campo de texto e então serão mostradas diversas imagens de acordo com a palavra.</p>
                    <img src={js} alt="icone de react" className='h-7 w-7' />
                    <button className=''><a href="https://image-generate-jade.vercel.app/" target='blank'>Ver Site</a></button>
            </div>
            </div> */}
        </div>
        </div>
        </>
    )
}

export default Projects2