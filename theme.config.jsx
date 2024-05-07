import Link from "next/link"

export default {
    logo: <div className="flex items-center"> 
    <svg className="h-8 mx-2 dark:text-sky-300 dark:drop-shadow-[0_3px_10px_#bae6fd]"
        viewBox="0 0 300 300"
        fill="primary"
        xmlns="http://www.w3.org/2000/svg"
      href="https://sotopia.world"
    >
        <path d="M250,200c-55.23,0-100-44.77-100-100S194.77,0,250,0"/>
        <path d="M50,100c55.23,0,100,44.77,100,100S105.23,300,50,300"/>
        <path d="M50,0l100,0c0,55.23-44.77,100-100,100"/>
        <path d="M250,300l-100,0c0-55.23,44.77-100,100-100"/>
    </svg>
    <span className="text-2xl font-bold">Sotopia</span></div>,
    project: {
      link: 'https://github.com/sotopia-lab/awesome-social-agents',
    },
    toc: {
      backToTop: true,
    },
    sidebar: {
      toggleButton: true,
    },
    search: {
      placeholder: 'Search contents',
    },
    feedback: {
        content: null,
    },
    head: (
      <>
        <link rel="icon" href="/awesome-social-agents/favicon.ico" type="image/ico" />
        <link rel="icon" href="/awesome-social-agents/favicon.svg" type="image/svg" />
      </>
    ),
    footer: {
      text: (
        <span>
          MIT {new Date().getFullYear()} ©{' '}
          <a href="https://sotopia.world" target="_blank">
            Sotopia Lab
          </a>
          .
        </span>
      )
  },
  banner: {
    key: 'cmu-agent-workshop-1',
    text: (
      <Link href="/contribution" target="_blank">
        Want to contribute to this project? ✨ Click here to learn more.
      </Link>
    )
  },
    useNextSeoProps() {
      return {
        titleTemplate: '%s – Awesome Social Agents',
        description: '',
        // openGraph: {
        //     type: 'website',
        //     images: [
        //       {
        //         url: '',
        //       }
        //     ],
        //     locale: 'en_US',
        //     url: 'https://cmu-agent-workshop.github.io/',
        //     siteName: 'LLM Agents workshop at CMU May 2-3',
        //     description: 'We are hosting LLM Agents workshop at Carnegie Mellon University, Pittsburgh, PA, USA on May 2-3.',
        // },
        // twitter: {
        //     cardType: 'summary_large_image',
        //     image: 'https://cmu-agent-workshop.github.io/cover.jpg',
        // },
      }
      
  },
    // ... other theme options
  }