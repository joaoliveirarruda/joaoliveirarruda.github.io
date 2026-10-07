function App() {
  return (
    <main>
      <header>
        <h1>
          João Arruda
          <svg className="signature-smile" viewBox="0 0 48 48" fill="none" aria-hidden="true">
            <path d="M25 4C12 2 4 12 5 25C6 38 16 44 28 43C40 42 46 30 43 18C41 9 34 5 25 4Z" />
            <path d="M17 16L16 21M31 15L30 20M14 28C19 36 30 36 35 26" />
          </svg>
        </h1>
        <p className="intro">Usually building something or cracking a joke. Happiest when the people around me are smiling.</p>
      </header>
      <section aria-labelledby="work-heading">
        <h2 id="work-heading">Work</h2>
        <article>
          <div className="entry-heading">
            <h3>COLLA <span>Software Engineer</span></h3>
            <p className="period">Jul 2026 — present</p>
          </div>
          <p>Building a mobile app that connects content creators with brands and local businesses through barter partnerships.</p>
        </article>
        <article>
          <div className="entry-heading">
            <h3>SEFAZ-PB <span>Data Engineer Intern</span></h3>
            <p className="period">2025 — present</p>
          </div>
          <p>Working on fiscal intelligence systems used by tax auditors in Paraíba. Cut a 70-million-record processing job from <strong>10 hours to 23 minutes.</strong></p>
        </article>
        <article>
          <div className="entry-heading">
            <h3>CEBRASPE <span>Software Engineering Intern</span></h3>
            <p className="period">Oct 2025 — Jan 2026</p>
          </div>
          <p>Built backend systems and AI workflows for a platform that helps authors create and review university entrance exam questions.</p>
        </article>
      </section>
      <section aria-labelledby="volunteer-heading">
        <h2 id="volunteer-heading">Volunteer</h2>
        <article>
          <div className="entry-heading">
            <h3><a href="https://otrilha.com/">Trilha</a> <span>Instructor &amp; Logistics Lead</span></h3>
            <p className="period">2025 — present</p>
          </div>
          <p>Teach Python and data structures, and handle the behind-the-scenes work that keeps the program running. 50+ students across two cohorts.</p>
        </article>
        <article>
          <div className="entry-heading">
            <h3><a href="https://www.momento.sh/">Momento</a> <span>Organizing Team</span></h3>
            <p className="period">Feb 2026 — present</p>
          </div>
          <p>Help run a mentorship program for people starting out in tech; 40+ mentees matched. Built the program’s website.</p>
        </article>
        <article>
          <div className="entry-heading">
            <h3><a href="https://tail-tech.com/">TAIL</a> <span>Project Developer</span></h3>
            <p className="period">Feb 2026 — present</p>
          </div>
          <p>Joined as a trainee; now developing projects with TAIL’s student-led AI and technology team at UFPB.</p>
        </article>
      </section>
      <section aria-labelledby="projects-heading">
        <h2 id="projects-heading">Projects</h2>
        <article>
          <h3>Pauta</h3>
          <p>Created a civic platform where people report urban issues and find local politicians aligned with their concerns.</p>
        </article>
      </section>
      <footer>
        <nav aria-label="Contact">
          <a href="https://github.com/joaoliveirarruda">GitHub</a>
          <a href="https://www.linkedin.com/in/joao-arrudaa/">LinkedIn</a>
          <a href="mailto:joaoliveirarruda@gmail.com">Email</a>
        </nav>
      </footer>
    </main>
  )
}

export default App
