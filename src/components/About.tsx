"use client";

import { cn } from "@/lib/utils";
import { ABOUT_TECHS } from "@/constants";

export const AboutSection = () => {
  return (
    <section id="about" className="w-full min-h-screen flex items-center py-18">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 flex items-center gap-4">
              <span className="font-mono text-xl text-accent">01.</span>
              <span className="text-foreground">Sobre Mim</span>
              <div className="flex-1 h-px bg-border ml-4 max-w-xs"></div>
            </h2>

            <div className="space-y-4 text-secondary text-base leading-relaxed">
              <p>
                Olá! Meu nome é Leonardo e sou desenvolvedor de software com
                foco em aplicações web. Minha trajetória começou durante a
                graduação, quando passei a explorar o desenvolvimento de
                sistemas e interfaces, aprofundando meus conhecimentos em HTML,
                CSS e JavaScript e entendendo na prática como transformar ideias
                em soluções funcionais.
              </p>

              <p>
                Atualmente, atuo como{" "}
                <span className="text-accent">Desenvolvedor Full Stack</span>,
                com experiência em{" "}
                <span className="text-accent">
                  aplicações web e microsserviços
                </span>
                , passando por{" "}
                <span className="text-accent">ambientes corporativos</span>,{" "}
                <span className="text-accent">projetos educacionais</span> e{" "}
                <span className="text-accent">trabalhos freelancers</span>. Já
                atuei no desenvolvimento de sistemas para monitoramento
                industrial, plataformas web e APIs, sempre buscando código
                limpo, performance e boa experiência de uso.
              </p>

              <p>
                Além disso, trabalho como{" "}
                <span className="text-accent">desenvolvedor freelancer</span>,
                criando sites e aplicações com foco em performance,
                responsividade e SEO.
              </p>

              <p className="text-sm">
                Aqui estão algumas tecnologias com as quais tenho trabalhado
                recentemente:
              </p>

              <ul className="grid grid-cols-2 gap-2 text-sm font-mono">
                {ABOUT_TECHS.map((tech) => (
                  <li key={tech} className="flex items-start gap-2">
                    <span className="text-accent mt-1">▹</span>
                    <span>{tech}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-87.5 lg:max-w-100 group">
              <div className="relative">
                <div
                  className={cn(
                    "absolute inset-0 w-full h-full border-2 border-accent rounded",
                    "translate-x-5 translate-y-5 z-0",
                    "transition-transform duration-300 ease-out",
                    "group-hover:translate-x-6 group-hover:translate-y-6"
                  )}
                ></div>

                <div
                  className={cn(
                    "relative w-full aspect-square rounded overflow-hidden z-10",
                    "transition-transform duration-300 ease-out",
                    "group-hover:-translate-x-1 group-hover:-translate-y-1"
                  )}
                >
                  <div
                    className={cn(
                      "absolute inset-0 bg-accent/30 mix-blend-multiply z-20",
                      "transition-opacity duration-300",
                      "group-hover:opacity-0"
                    )}
                  ></div>

                  {/* Placeholder da Imagem */}
                  <div className="w-full h-full bg-muted flex items-center justify-center relative">
                    {/* Aqui será colocada a imagem posteriormente */}
                    <svg
                      className="w-24 h-24 text-muted-foreground opacity-50"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>

                    {/* Quando adicionar a imagem, use: */}
                    {/* <Image
                      src="/caminho-da-sua-imagem.jpg"
                      alt="Foto de perfil"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 350px, 400px"
                    /> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
