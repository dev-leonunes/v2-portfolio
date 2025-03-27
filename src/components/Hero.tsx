import Image from 'next/image';

export const HeroSection = () => {
    return (
        <section className="w-full h-[655px] flex flex-col justify-end pb-10 sm:pb-32 py-32 lg:pg-[110px]">
            <div className="container-hero flex item-start justify-between flex-col-reverse lg:flex-row">
                <div className='w-full lg:max-w-[1000px]'>
                    <p className='hello'>
                        Olá, meu nome é
                    </p>

                    <div className='big-heading'>
                        <h1>
                            Leonardo Nunes.
                        </h1>

                        <h2>
                            Desenvolvedor de software.
                        </h2>
                    </div>

                    <div className='description'>
                        <p>
                            Sou um Desenvolvedor de Software apaixonado por tecnologia e inovação
                            e especializado em construir experiências digitais.
                            Atualmente trabalho com tecnologias como:
                        </p>
                    </div>

                    <div>
                        techs
                    </div>

                    <div>
                        <button>
                            Vamos conversar?
                        </button>
                    </div>
                </div>

                {/* <Image
                    width={420}
                    height={400}
                    src="/public/hero.png"
                    alt="Foto de perfil do dev Leonardo Nunes"
                /> */}

            </div>
        </section>
    );
}