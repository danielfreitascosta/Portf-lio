import { projects, skills, timeline } from './data/portfolio'
import './portfolio.css'

function ArrowIcon({ diagonal = false }: { diagonal?: boolean }) {
  return (
    <svg
      aria-hidden="true"
      className={diagonal ? 'arrow-icon arrow-icon--diagonal' : 'arrow-icon'}
      viewBox="0 0 20 20"
      fill="none"
    >
      <path d="M4.5 10h10.75M10 4.75 15.25 10 10 15.25" />
    </svg>
  )
}

function SectionHeading({
  eyebrow,
  title,
  number,
}: {
  eyebrow: string
  title: string
  number: string
}) {
  return (
    <div className="section-heading">
      <span className="section-number">{number}</span>
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
      </div>
    </div>
  )
}

function Header() {
  return (
    <header className="site-header">
      <a className="wordmark" href="#inicio" aria-label="Daniel Costa, início">
        <span>Daniel Costa<span className="wordmark-period">.</span></span>
      </a>
      <nav className="main-nav" aria-label="Navegação principal">
        <a href="#sobre">Sobre</a>
        <a href="#projetos">Projetos</a>
        <a href="#experiencia">Experiência</a>
      </nav>
      <a className="header-contact" href="#contato">
        Vamos conversar <ArrowIcon diagonal />
      </a>
    </header>
  )
}

function Hero() {
  return (
    <section className="hero page-width" id="inicio">
      <div className="hero-copy">
        <div className="availability">
          Estudante de DSM <span className="availability-divider">·</span> Desenvolvedor web
        </div>
        <p className="hero-intro">Oi, meu nome é Daniel.</p>
        <h1>
          Gosto de entender
          <br />
          como as coisas
          <br />
          <span className="highlight">funcionam.</span>
        </h1>
        <p className="hero-description">
          Estudo Desenvolvimento de Software Multiplataforma na Fatec e trabalho
          em projetos web com React, TypeScript e PHP.
        </p>
        <div className="hero-actions">
          <a className="button button--primary" href="#projetos">
            Ver projetos <ArrowIcon />
          </a>
          <a className="text-link" href="mailto:freitas.costa207@gmail.com">
            Entre em contato
          </a>
        </div>
        <div className="hero-location">
          <span aria-hidden="true">⌖</span> Votorantim, SP
          <span className="location-divider">·</span> Disponível para Sorocaba
        </div>
      </div>
      <aside className="hero-aside" aria-label="Um pouco sobre Daniel">
        <p className="aside-label">UM POUCO SOBRE MIM</p>
        <p className="aside-note">
          Entre a faculdade e os projetos, estou sempre aprendendo alguma coisa nova.
        </p>
        <div className="aside-facts">
          <div><span>01</span><p>Votorantim, SP</p></div>
          <div><span>02</span><p>Fatec Votorantim</p></div>
          <div><span>03</span><p>Web e desenvolvimento</p></div>
        </div>
      </aside>
      <a className="scroll-cue" href="#sobre">
        <span className="scroll-line" /> Mais sobre mim
      </a>
    </section>
  )
}

function About() {
  return (
    <section className="about section-shell" id="sobre">
      <SectionHeading number="01" eyebrow="sobre mim" title="De onde eu venho." />
      <div className="about-content">
        <p className="about-lead">
          Sou Daniel de Freitas Esteves da Costa, estudante de{' '}
          <span>Desenvolvimento de Software Multiplataforma</span> na Fatec
          Votorantim, com formação técnica em Informática para Internet.
        </p>
        <div className="about-details">
          <p>
            No curso e nos trabalhos freelance, já cuidei de interfaces,
            integrações com APIs e dados. Gosto de acompanhar como cada parte do
            projeto se conecta.
          </p>
          <p>
            Antes da Fatec, fiz o técnico em Informática para Internet na Etec
            Elias Miguel Junior. Também trabalhei na área administrativa, onde
            aprendi a cuidar dos detalhes e manter as coisas organizadas.
          </p>
          <div className="education-chip">
            <span className="education-icon">↗</span>
            <span><strong>Fatec Votorantim</strong><small>DSM · 2026–2028 · período noturno</small></span>
          </div>
        </div>
      </div>
    </section>
  )
}

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[number]
  index: number
}) {
  return (
    <article className="project-card">
      <div className="project-card-top">
        <span className="project-index">0{index + 1}</span>
        <span className="project-status">{project.status}</span>
      </div>
      <div className="project-info">
        <div className="project-title-row">
          <h3>{project.name}</h3>
          {project.url ? (
            <a href={project.url} target="_blank" rel="noreferrer" aria-label={`Ver ${project.name} no GitHub`}>
              <ArrowIcon diagonal />
            </a>
          ) : (
            <span className="project-private" aria-label="Projeto sem link público">↗</span>
          )}
        </div>
        <p>{project.description}</p>
        <div className="tag-list">
          {project.technologies.map((technology) => <span className="tag" key={technology}>{technology}</span>)}
        </div>
      </div>
    </article>
  )
}

function Projects() {
  return (
    <section className="projects section-shell" id="projetos">
      <SectionHeading number="02" eyebrow="alguns trabalhos" title="Projetos que fiz parte." />
      <p className="section-intro">
        Um projeto da faculdade, trabalhos para clientes e algo que comecei por conta própria.
      </p>
      <div className="project-grid">
        {projects.map((project, index) => <ProjectCard key={project.name} project={project} index={index} />)}
      </div>
    </section>
  )
}

function Experience() {
  return (
    <section className="experience section-shell" id="experiencia">
      <SectionHeading number="03" eyebrow="o que venho fazendo" title="Experiência & formação." />
      <div className="timeline">
        {timeline.map((item) => (
          <article className="timeline-item" key={item.title}>
            <span className="timeline-date">{item.date}</span>
            <div className="timeline-marker"><span /></div>
            <div className="timeline-content">
              <div className="timeline-title-row">
                <h3>{item.title}</h3>
                <span className="timeline-type">{item.type}</span>
              </div>
              <p className="timeline-place">{item.place}</p>
              <p className="timeline-description">{item.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

function Skills() {
  return (
    <section className="skills section-shell" id="habilidades">
      <SectionHeading number="04" eyebrow="ferramentas do dia a dia" title="Tecnologias & habilidades." />
      <div className="skills-grid">
        {skills.map((group) => (
          <div className="skill-group" key={group.category}>
            <h3>{group.category}</h3>
            <div className="tag-list">
              {group.items.map((skill) => <span className="tag" key={skill}>{skill}</span>)}
            </div>
          </div>
        ))}
      </div>
      <div className="soft-skills">
        <span>Também valorizo</span>
        <p>Raciocínio lógico <i>·</i> Organização <i>·</i> Aprendizado rápido <i>·</i> Comunicação <i>·</i> Colaboração <i>·</i> Atenção aos detalhes <i>·</i> Protagonismo</p>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section className="contact section-shell" id="contato">
      <div className="contact-orb" aria-hidden="true" />
      <p className="eyebrow">vamos criar algo legal?</p>
      <h2>Uma boa conversa<br />pode ser o <span>começo.</span></h2>
      <p className="contact-copy">
        Estou procurando uma oportunidade de estágio em TI. Se quiser conversar
        sobre uma vaga ou algum projeto, pode me escrever.
      </p>
      <a className="button button--light" href="mailto:freitas.costa207@gmail.com">
        freitas.costa207@gmail.com <ArrowIcon diagonal />
      </a>
      <p className="contact-phone">
        ou ligue <a href="tel:+5515998443089">+55 15 99844-3089</a>
      </p>
    </section>
  )
}

function Footer() {
  return (
    <footer className="site-footer">
      <a className="wordmark footer-wordmark" href="#inicio">
        <span>Daniel Costa<span className="wordmark-period">.</span></span>
      </a>
      <p>Votorantim, SP</p>
      <div className="social-links">
        <a href="https://github.com/daniel-de-freitas-esteves-da-costa" target="_blank" rel="noreferrer">GitHub <ArrowIcon diagonal /></a>
        <a href="https://www.linkedin.com/in/danielfreitasesteves" target="_blank" rel="noreferrer">LinkedIn <ArrowIcon diagonal /></a>
        <a href="https://www.instagram.com/programmingdaniel/" target="_blank" rel="noreferrer">Instagram <ArrowIcon diagonal /></a>
      </div>
      <span className="copyright">© {new Date().getFullYear()} Daniel Costa</span>
    </footer>
  )
}

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
