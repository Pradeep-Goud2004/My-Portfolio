import React, { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Download, Github, Linkedin, Mail, Menu, X, ExternalLink, Sparkles, MapPin } from "lucide-react";

function GoogleIcon({ size = 15 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <path fill="none" stroke="currentColor" strokeWidth="2" d="M21.35 12.27c0-.73-.07-1.45-.22-2.12H12v4.01h5.24a4.48 4.48 0 0 1-1.94 2.94v2.43h3.14c1.84-1.7 2.91-4.2 2.91-7.26Z"/>
      <path fill="none" stroke="currentColor" strokeWidth="2" d="M12 21.5c2.63 0 4.84-.87 6.45-2.36l-3.14-2.43c-.87.58-1.97.92-3.31.92-2.55 0-4.71-1.72-5.49-4.03H3.27v2.51A9.73 9.73 0 0 0 12 21.5Z"/>
      <path fill="none" stroke="currentColor" strokeWidth="2" d="M6.51 13.6a5.83 5.83 0 0 1 0-3.7V7.39H3.27a9.75 9.75 0 0 0 0 8.72l3.24-2.51Z"/>
      <path fill="none" stroke="currentColor" strokeWidth="2" d="M12 5.87c1.43 0 2.71.49 3.73 1.46l2.8-2.8C16.83 2.9 14.62 2 12 2a9.73 9.73 0 0 0-8.73 5.39l3.24 2.51C7.29 7.59 9.45 5.87 12 5.87Z"/>
    </svg>
  );
}
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const PROFILE = {
  displayName: "Pradeep",
  fullName: "Pradeep Kumar",
  title: "Java Full-Stack Developer",
  location: "Kurnool, AP, India",
  email: "pk9621535@gmail.com",
  linkedin: "https://www.linkedin.com/in/pradeep-kumar-mukkannappagari-6547b828a",
  github: "https://github.com/Pradeep-Goud2004",
  google: "https://g.dev/pk9621535",
  resume: "/Pradeep-Resume.pdf",
  intro:
    "I’m a B.Tech Computer Science graduate and aspiring Java Full-Stack Developer and AI builder with a strong foundation in Core Java, Spring Boot, REST APIs, MySQL, HTML, CSS, JavaScript, and React. As a fresher, I’m passionate about building scalable web applications, solving real-world problems, and continuously improving my development skills.",
  tagline: "Code. Create. Solve. Grow."
};

const projects = [
  {
    number: "01",
    title: "SkillBridge",
    type: "JAVA FULL-STACK",
    description:
      "A Java Full Stack web application designed to connect learners with mentors based on their skills and career interests.",
    stack: ["Java", "Spring Boot", "React", "MySQL", "Spring Security"],
    github: "https://github.com/Pradeep-Goud2004/SkillBridge",
    demo: "https://skillbridge-frontend-production.up.railway.app",
    featured: true
  },
  {
    number: "02",
    title: "ShopSphere",
    type: "E-COMMERCE PLATFORM",
    description:
      "A full-stack e-commerce application with separate customer and administrator functionality, including product browsing, authentication, cart and wishlist management, order processing, and product administration.",
    stack: ["Java", "Spring Boot", "React", "MySQL", "REST API"],
    github: "https://github.com/Pradeep-Goud2004/shopsphere-ecommerce",
    demo: "https://delightful-enchantment-production-518e.up.railway.app",
    featured: true
  },
  {
    number: "03",
    title: "Realtime Collaborative Digital Whiteboard",
    type: "MERN + REAL-TIME",
    description:
      "A collaborative digital whiteboard where multiple users can draw simultaneously on a shared canvas and create or join whiteboard rooms using unique room IDs.",
    stack: ["MongoDB", "Express.js", "React", "Node.js"],
    github: "https://github.com/Pradeep-Goud2004/Realtime-Collaborative-Digital-Whiteboard-in-MERN-Stack",
    demo: "",
    featured: false
  },
  {
    number: "04",
    title: "Physical Fitness & Wellness Tracking System",
    type: "MERN FULL-STACK",
    description:
      "A comprehensive fitness tracking application with role-based access for Gym Freaks (Users) and Trainers/Admins.",
    stack: ["MongoDB", "Express.js", "React", "Node.js"],
    github: "https://github.com/Pradeep-Goud2004/Physical-fittness-and-wellness-tracking-system-in-MERN-Stack",
    demo: "",
    featured: false
  }
];

const skills = [
  "Java", "Spring Boot", "Spring Security", "REST APIs", "React",
  "JavaScript", "HTML5", "CSS3", "MySQL", "MongoDB", "Git", "GitHub", "AI"
];

const expertise = [
  ["01", "Java & Spring Boot", "Core Java, Spring Boot, REST APIs and Spring Security."],
  ["02", "React & Frontend", "Responsive UI with React, JavaScript, HTML5 and CSS3."],
  ["03", "Database & APIs", "MySQL, MongoDB, persistence, API integration and real workflows."],
  ["04", "AI & Learning", "Generative AI exploration with a practical, continuous-learning mindset."]
];

export function App() {
  const appRef = useRef(null);
  const heroRef = useRef(null);
  const portraitRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray("[data-reveal]").forEach((el) => {
        gsap.fromTo(
          el,
          { y: 42, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 82%", once: true }
          }
        );
      });

      gsap.fromTo(".hero-word", { y: 90, opacity: 0 }, {
        y: 0, opacity: 1, stagger: 0.07, duration: 1, ease: "power4.out", delay: 0.1
      });

      gsap.to(".hero-orbit.a", {
        rotate: 360, duration: 24, repeat: -1, ease: "none"
      });
      gsap.to(".hero-orbit.b", {
        rotate: -360, duration: 32, repeat: -1, ease: "none"
      });

      gsap.to(".hero-photo-wrap", {
        y: 16,
        scrollTrigger: {
          trigger: "#home",
          start: "top top",
          end: "bottom top",
          scrub: 1.2
        }
      });
    }, appRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const frame = heroRef.current;
    const portrait = portraitRef.current;
    if (!frame || !portrait) return;

    let hoverTween = null;

    const onEnter = () => {
      if (hoverTween) hoverTween.kill();

      // Start a smooth, continuous 360° rotation while hovering.
      hoverTween = gsap.to(portrait, {
        rotateY: "+=360",
        duration: 3.8,
        repeat: -1,
        ease: "none"
      });
    };

    const onMove = (e) => {
      const rect = frame.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;

      gsap.to(portrait, {
        rotateX: y * -10,
        rotateZ: x * 4,
        x: x * 10,
        y: y * 8,
        duration: 0.55,
        ease: "power3.out"
      });
    };

    const onLeave = () => {
      if (hoverTween) hoverTween.kill();

      gsap.to(portrait, {
        rotateX: 0,
        rotateZ: 0,
        rotateY: 0,
        x: 0,
        y: 0,
        duration: 1.1,
        ease: "elastic.out(1, .48)"
      });
    };

    frame.addEventListener("pointerenter", onEnter);
    frame.addEventListener("pointermove", onMove);
    frame.addEventListener("pointerleave", onLeave);

    return () => {
      if (hoverTween) hoverTween.kill();
      frame.removeEventListener("pointerenter", onEnter);
      frame.removeEventListener("pointermove", onMove);
      frame.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <div ref={appRef} className="site-shell">
      <div className="noise" />
      <header className="topbar">
        <a href="#home" className="brand">PRADEEP KUMAR<span>.</span></a>

        <nav className={menuOpen ? "nav open" : "nav"}>
          {[
            ["about", "About"],
            ["skills", "Skills"],
            ["projects", "Projects"],
            ["contact", "Contact"]
          ].map(([id, label]) => (
            <a href={`#${id}`} key={id} onClick={() => setMenuOpen(false)}>{label}</a>
          ))}
          <a href={PROFILE.resume} className="nav-resume">Resume <ArrowUpRight size={14}/></a>
        </nav>

        <button className="menu" aria-label="Toggle navigation" onClick={() => setMenuOpen((v) => !v)}>
          {menuOpen ? <X size={22}/> : <Menu size={22}/>}
        </button>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="hero-main">
            <div className="hero-intro" data-reveal>
              <div className="tiny-line"><span /> AVAILABLE FOR OPPORTUNITIES</div>
              <div className="eyebrow"><MapPin size={12}/> {PROFILE.location}</div>
            </div>

            <div className="hero-layout">
              <div className="hero-title">
                <h1 aria-label={PROFILE.title}>
                  {["JAVA", "FULL-STACK", "DEVELOPER"].map((word) => (
                    <span
                      key={word}
                      className={word === "DEVELOPER" ? "hero-word outline" : "hero-word"}
                    >
                      {word}
                    </span>
                  ))}
                </h1>
                <p className="hero-description">{PROFILE.intro}</p>
                <div className="hero-buttons">
                  <a className="button light" href="#projects">Explore my work <ArrowUpRight size={16}/></a>
                  <a className="button dark" href={`mailto:${PROFILE.email}`}>Let's connect <Mail size={15}/></a>
                </div>
              </div>

              <div ref={heroRef} className="hero-portrait" data-reveal>
                <div className="hero-orbit a" />
                <div className="hero-orbit b" />
                <div className="hero-photo-wrap">
                  <div ref={portraitRef} className="hero-photo">
                    <div className="face front">
                      <img src="/pradeep-photo.jpg" alt="Pradeep" />
                      <div className="photo-shade" />
                      <span className="photo-stamp">PRADEEP · 2026</span>
                    </div>
                    <div className="face back">
                      <img src="/pradeep-photo.jpg" alt="" />
                      <div className="photo-shade back-shade" />
                      <span className="photo-back-label">JAVA · REACT · AI</span>
                    </div>
                  </div>
                </div>
                <div className="chip chip-left">JAVA + SPRING</div>
                <div className="chip chip-right">REACT + MERN</div>
                <div className="drag-note">MOVE YOUR CURSOR <span>↔</span></div>
              </div>

              <aside className="hero-aside" data-reveal>
                <span>BUILDING</span>
                <h2>USEFUL<br/>DIGITAL<br/><em>WEBSITES.</em></h2>
                <p>Looking for Java Full-Stack Developer / Software Developer roles.</p>
                <div className="aside-rule" />
                <small>Code. Create. Solve. Grow.</small>
              </aside>
            </div>

            <div className="hero-meta">
              <span>PORTFOLIO / 2026</span>
              <span>JAVA · SPRING · REACT · MYSQL · AI</span>
              <span>SCROLL ↓</span>
            </div>
          </div>
        </section>

        <div className="marquee">
          <div className="marquee-track">
            <span>CODE. CREATE. SOLVE. GROW.</span><b>✦</b>
            <span>JAVA FULL-STACK DEVELOPER</span><b>✦</b>
            <span>BUILDING REAL-WORLD APPLICATIONS</span><b>✦</b>
            <span>GENERATIVE AI</span><b>✦</b>
            <span>CODE. CREATE. SOLVE. GROW.</span><b>✦</b>
          </div>
        </div>

        <section id="about" className="section" data-reveal>
          <div className="section-label">01 / ABOUT</div>
          <div className="two-col">
            <h2 className="display-title">A developer<br/>with <em>builder energy.</em></h2>
            <div className="rich-copy">
              <p>{PROFILE.intro}</p>
              <p>I enjoy taking an idea from database and API design through to responsive frontend experiences, while learning from every project I build.</p>
              <div className="quote">“{PROFILE.tagline}”</div>
            </div>
          </div>
        </section>

        <section id="skills" className="section skills-section" data-reveal>
          <div className="section-label">02 / SKILLS</div>
          <div className="skills-head">
            <h2 className="display-title">Tools I use to<br/><em>build end-to-end.</em></h2>
            <p>Core technologies from the profile you provided, presented as a focused developer toolkit.</p>
          </div>
          <div className="skill-cloud">
            {skills.map((skill, i) => <span key={skill} className={i < 4 ? "hot" : ""}>{skill}</span>)}
          </div>
        </section>

        <section className="section" data-reveal>
          <div className="section-label">03 / EXPERTISE</div>
          <div className="expertise">
            {expertise.map(([no, title, desc]) => (
              <div className="expertise-row" key={no}>
                <span className="no">{no}</span>
                <div><h3>{title}</h3><p>{desc}</p></div>
                <ArrowUpRight size={22}/>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="section projects-section" data-reveal>
          <div className="projects-heading">
            <div>
              <div className="section-label">04 / SELECTED PROJECTS</div>
              <h2 className="display-title">Real work.<br/><em>Real learning.</em></h2>
            </div>
            <p>Four hands-on projects across Java/Spring Boot and MERN, presented as your main proof of practical development experience.</p>
          </div>

          <div className="project-list">
            {projects.map((project) => (
              <article key={project.number} className={project.featured ? "project featured" : "project"}>
                <div className="project-number">{project.number}</div>
                <div className="project-content">
                  <span className="project-type">{project.type}</span>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="tag-row">{project.stack.map(tag => <span key={tag}>{tag}</span>)}</div>
                </div>
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noreferrer">GitHub <Github size={14}/></a>
                  {project.demo
                    ? <a href={project.demo} target="_blank" rel="noreferrer">Live Demo <ExternalLink size={14}/></a>
                    : <span>Live Demo —</span>}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section credentials" data-reveal>
          <div className="section-label">05 / EDUCATION + CREDENTIALS</div>
          <div className="credential-grid">
            <article>
              <span>EDUCATION</span>
              <h3>B.Tech</h3>
              <p>Computer Science</p>
              <strong>Newton's Institute of Engineering</strong>
              <small>JNTU Kakinada · 2026</small>
            </article>
            <article>
              <span>CERTIFICATION</span>
              <h3>Generative AI at IIT Hyderabad</h3>
              <p>Yaicess Solutions</p>
              <small>2025</small>
            </article>
            <article>
              <span>ACHIEVEMENT</span>
              <h3>Google Skills Gen AI Academy APAC</h3>
              <p>{PROFILE.achievement}</p>
            </article>
          </div>
        </section>

        <section id="contact" className="contact" data-reveal>
          <div className="contact-inner">
            <span className="section-label">06 / CONTACT</span>
            <h2>LET'S BUILD<br/><em>SOMETHING USEFUL.</em></h2>
            <p>Currently looking for Java Full-Stack Developer / Software Developer roles.</p>
            <div className="contact-links">
              <a className="button light" href={`mailto:${PROFILE.email}`}><Mail size={15}/> {PROFILE.email}</a>
              <a className="button dark" href={PROFILE.linkedin} target="_blank" rel="noreferrer"><Linkedin size={15}/> LinkedIn</a>
              <a className="button dark" href={PROFILE.github} target="_blank" rel="noreferrer"><Github size={15}/> GitHub</a>
              <a className="button dark" href={PROFILE.google} target="_blank" rel="noreferrer"><GoogleIcon size={15}/> Google Developer</a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <span>© 2026 PRADEEP</span>
        <span>{PROFILE.tagline}</span>
        <span>REACT · GSAP · TAILWIND</span>
      </footer>
    </div>
  );
}

export default App;
