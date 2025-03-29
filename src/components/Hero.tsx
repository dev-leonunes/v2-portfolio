import Image from 'next/image';
import { TechsBadge } from './techs-badge';
import { Button } from './button';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { TbBrandGithub, TbBrandLinkedin, TbBrandWhatsapp } from 'react-icons/tb';

const CONTACT = {
    Github: {
        url: 'https://github.com/dev-leonunes/',
        icon: <TbBrandGithub size={24} />,
    },
    Linkedin: {
        url: 'https://www.linkedin.com/in/leonardo-nunes-dev/',
        icon: <TbBrandLinkedin size={24} />,
    },
    Whatsapp: {
        url: 'https://wa.me/557391225081',
        icon: <TbBrandWhatsapp size={24} />,
    },
};

const TECHS = [
    'Node.js',
    'JavaScript',
    'TypeScript',
    'HTML',
    'CSS',
    'PostgreSQL',
    'WordPress',
]

export const HeroSection = () => {
    return (
        <section className="w-full lg:h-[655px] flex flex-col justify-end pb-10 sm:pb-32 py-32 lg:pg-[110px]">
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

                    <div className='flex flex-wrap gap-x-2 gap-y-3'>
                        {TECHS.map((tech, i) => (
                            <TechsBadge tech={tech} key={`tech-${i}`} />
                        ))}
                    </div>

                    <div className='flex items-center flex-col sm:flex-row gap-4 mt-10'>
                        <Button className='button-hero w-max'>
                            Vamos conversar?
                            <HiArrowNarrowRight size={18} />
                        </Button>

                        <div className='techs flex items-center text-2xl gap-4'>
                            <a
                                href={CONTACT.Github.url}
                                target="_blank"
                                rel="noreferrer"
                                className='tech-icon'
                            >
                                {CONTACT.Github.icon}
                            </a>

                            <a
                                href={CONTACT.Linkedin.url}
                                target="_blank"
                                rel="noreferrer"
                                className='tech-icon'
                            >
                                {CONTACT.Linkedin.icon}
                            </a>

                            <a
                                href={CONTACT.Whatsapp.url}
                                target="_blank"
                                rel="noreferrer"
                                className='tech-icon'
                            >
                                {CONTACT.Whatsapp.icon}
                            </a>
                        </div>
                    </div>
                </div>

                {/* <Image
                    width={420}
                    height={400}
                    src="/public/hero.png"
                    alt="Foto de perfil do dev Leonardo Nunes"
                /> */}

            </div>
        </section >
    );
}