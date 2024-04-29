export default {
    logo: <span>🗣️👥 Awesome Social Agents</span>,
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
    edit: {
        content: null,
    },
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
      <a href="https://cmu-agent-workshop.github.io/social_agent" target="_blank">
        🎉 Join our seminar at CMU Agent Workshop (10-12, May 3rd, CMU) →
      </a>
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