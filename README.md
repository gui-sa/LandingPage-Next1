# [LandingPage-Next1](https://www.youtube.com/watch?v=hJTPDo8JlMc&t=4024s)
   Gerar uma pagina LANDING PAGE com captação de *LEADS* (potenciais clientes) e salvá-los em um banco de dado BaaS (*Backend-as-a-Service*)

# FERRAMENTAS E SUAS FUNÇÕES NO PROJETO:
 - [NEXT.JS](https://nextjs.org/): Framework FullStack que oferece ferramentas para otimização tanto em Single Page Application, Server Rendered Application ou Static Rendered Application. Ele possui ferramentas para otimização de imagens, minificação de JS e CSS, gestão de rotas, controle de WebVitals, Lazy Loading, componentização, teste e muito mais. Ele também trabalha em arquitetura SERVERLESS (que faz com que a applicação seja STATELESS e tenha cold start). Em outras palavras, como servidor, voce quer que ele resolva problemas de baixo custo de processamento (e ele vai ser mais barato para manter). Atualmente (em 13/11/2023) a Vercel permite Deploy de forma gratuita na nuvem. No Next a diretiva 'use-client' diz para o renderizador enviar para client-side da applicação
    - [TYPESCRIPT](https://www.typescriptlang.org/): Insere uma camada de abstração extra que torna o JS fortemente tipado: evitando bugs e problemas co-relacionados.
 - [TAILWIND](https://tailwindcss.com/): Insere no projeto estilização inline por classes customizaveis
   - TAILWIND-TYPOGRAPHY : um submodule instalado aparte para deixar os titulos mais "chamativos".
 - [SHADCN](https://ui.shadcn.com/docs): É uma coleção de componentes prontos.
    - O Shadcn (instalador) é um configurador automatico do tailwind que permite utilizar componentes e estilos prontos da internet. Sua licensa é MIT então voce pode usar sem medo para agilizar as coisas.
    - Exige que voce esteja trabalhando com Tailwind
 - Pacote [NEXT-THEMES](https://github.com/pacocoursey/next-themes): Modulo que oferece uma UI PRONTA para lidar com DARK/LIGHT/AUTOMATIC.
 - [LUCIDE-REACT](https://lucide.dev/): Pacote de icones com licensa aberta para uso ISC... similar ao MIT.
 - [REAC-INPUT-MASK](https://github.com/sanniassin/react-input-mask): Ferramenta usada para criar mascaras de input em formularios sem precisar hard-code
 - [REACT-HOOK-FORM](https://react-hook-form.com/): Formulario simples e otimizado... É um componente rapido e ja otimizado para usar.
 - [ZOD](https://zod.dev/): Ele ajuda a settar formularios (seus limites e restrições)
   - [@HOOKFORM/RESOLVERS](https://www.npmjs.com/package/@hookform/resolvers):Para usar o zod junto com o hook form.
 - [REACT-DOM-CONFETTI](https://daniel-lundin.github.io/react-dom-confetti/): Adiciona a animação de confetti.. A ideia é promover UX.
 - Ecossistema da Vercel.. Para usa-lo voce precisa ser premium... Mas ele oferece: vincular com dominio de maneira facilitada, ele permite instalar analisador de tags e usar mais de um banco de dados
   - [@vercel/postgres](https://vercel.com/docs/storage/vercel-postgres): A propria Vercel deixa voce publicar um banco de dados postgres (uma instancia em um servidor) gratuitamente.
   - [@vercel/analytics](https://vercel.com/docs/analytics): O numero de visitantes, quais tags foram interagidas, qual o browser, localização, quantidade, etc..