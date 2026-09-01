(function () {
  const content = window.SITE_CONTENT || { publications: [], talks: [], posts: [] };
  const data = {
    author: {
      name: "Romain Piron",
      role: "Postdoctoral Researcher",
      location: "Tokyo, Japan",
      employer: "National Institute of Informatics",
      email: "piron@nii.ac.jp",
      avatar: "asset/profile_color.jpg",
      links: [
        {
          label: "Email",
          href: "mailto:piron@nii.ac.jp",
          icon: "asset/icons/email.png"
        },
        {
          label: "Google Scholar",
          href: "https://scholar.google.co.jp/citations?user=VKrzm1cAAAAJ",
          icon: "asset/icons/scholar.png"
        },
        {
          label: "ORCID",
          href: "https://orcid.org/0009-0001-1984-9659",
          icon: "asset/icons/orcid.png"
        },
        {
          label: "GitHub",
          href: "https://github.com/rpiron",
          icon: "asset/icons/github.png"
        }
      ]
    },
    nav: [
      { label: "Home", href: "index.html", page: "home" },
      { label: "Publications", href: "publications.html", page: "publications" },
      { label: "Talks", href: "talks.html", page: "talks" },
      { label: "Research Notes", href: "blog.html", page: "blog" },
      { label: "CV", href: "cv.html", page: "cv" }
    ],
    home: {
      title: "Romain Piron",
      sections: [
        {
          title: "Current research interests",
          items: [
            {
              title: "Numerical simulation of quantum platforms",
              text: "I develop analytical techniques to enable scalable numerical simulations of light-matter Hamiltonians, with particular emphasis on waveguide QED platforms."
            },
            {
              title: "Quantum benchmarking and certification",
              text: "I work on scalable protocols for the certification of quantum operations, with a particular focus on randomized benchmarking approaches for distributed gates."
            }
          ]
        },
        {
          title: "Previous research",
          text: "During my PhD, I worked on quantum algorithms for Bayesian inference, with applications to signal detection and resource allocation in communication networks.",
          items: [
            {
              title: "Hamiltonian formulations",
              text: "I explored Hamiltonian formulations of inference problems."
            },
            {
              title: "Execution strategies",
              text: "I designed execution strategies based on averaging over hyperparameters to reduce algorithmic overhead."
            },
            {
              title: "Quantum annealing constraints",
              text: "I studied how to mitigate connectivity constraints in quantum annealers, given the hardware limitations at the time."
            }
          ]
        }
      ]
    },
    publications: content.publications || [],
    talks: content.talks || [],
    posts: content.posts || [],
    cv: {
      pdf: "asset/resume_piron.pdf",
      education: [
        {
          institution: "INSA Lyon, France",
          area: "Ph.D in Signal Processing",
          period: "2025"
        },
        {
          institution: "EPFL, Lausanne, Switzerland",
          area: "M.Sc in Theoretical Particle Physics",
          period: "2023"
        },
        {
          institution: "CentraleSupelec, Gif-sur-Yvette, France",
          area: "M.Sc in Engineering",
          period: "2023"
        }
      ],
      work: [
        {
          role: "Postdoctoral researcher - Quantum system simulations and algorithmic scalability",
          place: "National Institute of Informatics, Tokyo, Japan",
          period: "Oct 2025 - Present",
          highlights: [
            "Develops dimensionality reduction for scalable simulation frameworks of high-dimensional quantum interacting models.",
            "Studies benchmarking procedures for quantum operations."
          ]
        },
        {
          role: "Ph.D Researcher - Quantum optimization and signal processing",
          place: "CITI Laboratory - MARACAS Team, INSA Lyon and Inria Lyon, France",
          period: "Oct 2023 - Oct 2025",
          highlights: [
            "Designed and implemented quantum optimization algorithms for data inference in large-scale wireless networks.",
            "Validated approaches through Python simulations and experiments on quantum devices.",
            "Collaborated at the intersection of quantum information and signal processing."
          ]
        },
        {
          role: "Research Intern - Master's thesis in mathematical physics",
          place: "CERN, Geneva, Switzerland",
          period: "Feb 2023 - Jul 2023",
          highlights: [
            "Investigated consistency conditions in conformal field theory using bootstrap methods.",
            "Explored implications for the AdS/CFT correspondence."
          ]
        }
      ]
    }
  };

  const page = document.body.dataset.page || "home";
  const shell = document.querySelector("#site-shell");

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function formatDate(value) {
    if (!value) return "";
    const date = new Date(`${value}T00:00:00`);
    return date.toLocaleDateString("en", {
      year: "numeric",
      month: "short",
      day: "numeric"
    });
  }

  function link(label, href, className) {
    const target = href.startsWith("http") ? ' target="_blank" rel="noreferrer"' : "";
    return `<a class="${className || ""}" href="${href}"${target}>${escapeHtml(label)}</a>`;
  }

  function icon(path, label) {
    const alt = label ? ` alt="${escapeHtml(label)}"` : ' alt="" aria-hidden="true"';
    return `<img class="icon" src="${path}"${alt}>`;
  }

  function publicationUrl(item) {
    return `publication.html?id=${encodeURIComponent(item.slug)}`;
  }

  function talkUrl(item) {
    return `talk.html?id=${encodeURIComponent(item.slug)}`;
  }

  function backLink(label, href) {
    return `<a class="back-link" href="${href}">${icon("asset/icons/arrow-back.png")}<span>${escapeHtml(label)}</span></a>`;
  }

  function renderNav() {
    return data.nav.map((item) => {
      const active = item.page === page ||
        (page === "publication" && item.page === "publications") ||
        (page === "talk" && item.page === "talks") ? " is-active" : "";

      return `<li><a class="nav-link${active}" href="${item.href}">${escapeHtml(item.label)}</a></li>`;
    }).join("");
  }

  function renderSidebar() {
    const author = data.author;
    const contactLinks = author.links.map((item) => (
      `<li><a href="${item.href}"${item.href.startsWith("http") ? ' target="_blank" rel="noreferrer"' : ""}>${icon(item.icon)}<span>${escapeHtml(item.label)}</span></a></li>`
    )).join("");

    return `
      <aside class="sidebar">
        <div class="author">
          <img class="author-avatar" src="${author.avatar}" alt="${escapeHtml(author.name)}">
          <div class="author-copy">
            <h2>${escapeHtml(author.name)}</h2>
            <p>${escapeHtml(author.role)}</p>
          </div>
          <ul class="author-meta">
            <li>${icon("asset/icons/location.png")}<span>${escapeHtml(author.location)}</span></li>
            <li>${icon("asset/icons/institution.png")}<span>${escapeHtml(author.employer)}</span></li>
          </ul>
          <h3 class="sidebar-title">Links</h3>
          <ul class="author-links">${contactLinks}</ul>
        </div>
      </aside>
    `;
  }

  function renderHome() {
    const intro = [
      `I am a postdoctoral researcher at the ${link("Global Research Center for Quantum Information Science", "https://quantum.nii.ac.jp", "inline-link")}, hosted in the ${link("National Institute of Informatics", "https://www.nii.ac.jp/en/", "inline-link")}, Tokyo, Japan.`,
      escapeHtml("My work lies at the interface of quantum information and analytical description of interacting quantum systems, with a focus on scalable methods for quantum technologies.")
    ].map((paragraph) => `<p>${paragraph}</p>`).join("");

    const sections = data.home.sections.map((section) => {
      const text = section.text ? `<p>${escapeHtml(section.text)}</p>` : "";
      const items = section.items.map((item) => `
        <li>
          <strong>${escapeHtml(item.title)}</strong>
          <span>${escapeHtml(item.text)}</span>
        </li>
      `).join("");

      return `
        <section class="content-section">
          <h2>${escapeHtml(section.title)}</h2>
          ${text}
          <ul class="plain-list">${items}</ul>
        </section>
      `;
    }).join("");

    return `
      <article class="page-content">
        <h1 class="sr-only">${escapeHtml(data.home.title)}</h1>
        <div class="lead">${intro}</div>
        ${sections}
      </article>
    `;
  }

  function groupedPublications() {
    const order = ["Preprints", "Journal Articles", "Proceedings"];
    return order.map((category) => ({
      category,
      items: data.publications
        .filter((item) => item.category === category)
        .sort((a, b) => b.date.localeCompare(a.date))
    })).filter((group) => group.items.length);
  }

  function publicationCategoryIcon(category) {
    const icons = {
      "Preprints": "asset/icons/preprint.png",
      "Journal Articles": "asset/icons/journal.png",
      "Proceedings": "asset/icons/proceedings.png"
    };

    return icons[category] || "asset/icons/document.png";
  }

  function renderAuthors(authors) {
    if (!authors || !authors.length) return "";

    return `<p class="entry-authors">${authors.map((author) => escapeHtml(author)).join(", ")}</p>`;
  }

  function renderAward(award) {
    if (!award) return "";

    return `
      <aside class="award-note" aria-label="Publication award">
        <span class="award-label">Award</span>
        <span>${escapeHtml(award)}</span>
      </aside>
    `;
  }

  function renderPublicationFilters() {
    const categories = ["Preprints", "Journal Articles", "Proceedings"];
    const buttons = categories.map((category) => `
      <button class="filter-chip" type="button" data-filter="${escapeHtml(category)}" aria-pressed="false">
        <span>${escapeHtml(category)}</span>
        <span class="filter-chip-x" aria-hidden="true">&times;</span>
      </button>
    `).join("");

    return `
      <div class="filter-panel" data-filter-panel>
        <span class="filter-label">Filter by</span>
        <div class="filter-chip-list">
          ${buttons}
          <button class="filter-clear" type="button" data-clear-filters hidden>Clear filters</button>
        </div>
      </div>
    `;
  }

  function renderPublications() {
    const groups = groupedPublications().map((group) => {
      const items = group.items.map((item) => `
        <article class="entry">
          <h3>${link(item.title, publicationUrl(item), "entry-title")}</h3>
          ${renderAuthors(item.authors)}
          <p class="entry-meta">${escapeHtml(formatDate(item.date))} &middot; ${escapeHtml(item.venue)}</p>
          <p>${escapeHtml(item.note || item.abstract)}</p>
          <p class="entry-actions">
            ${link("Paper", item.url, "text-link")}
          </p>
        </article>
      `).join("");

      return `
        <section class="content-section" data-publication-category="${escapeHtml(group.category)}">
          <h2 class="section-title">${icon(publicationCategoryIcon(group.category))}<span>${escapeHtml(group.category)}</span></h2>
          <div class="entry-list">${items}</div>
        </section>
      `;
    }).join("");

    return `
      <article class="page-content">
        <h1>Publications</h1>
        <p>You can also find my articles on ${link("my Google Scholar profile", "https://scholar.google.co.jp/citations?user=VKrzm1cAAAAJ", "inline-link")}.</p>
        ${renderPublicationFilters()}
        ${groups || '<p class="empty-state">Publications will be added here.</p>'}
      </article>
    `;
  }

  function renderPublicationDetail() {
    const id = new URLSearchParams(window.location.search).get("id");
    const item = data.publications.find((publication) => publication.slug === id);

    if (!item) {
      return `
        <article class="page-content">
          <h1>Publication not found</h1>
          <p>${backLink("Back to publications", "publications.html")}</p>
        </article>
      `;
    }

    return `
      <article class="page-content">
        <p class="breadcrumb-link">${backLink("Back to publications", "publications.html")}</p>
        <h1>${escapeHtml(item.title)}</h1>
        ${renderAuthors(item.authors)}
        <p class="entry-meta">${escapeHtml(formatDate(item.date))} &middot; ${escapeHtml(item.venue)}</p>
        <p class="entry-actions">
          ${link("Paper", item.url, "button-link")}
        </p>
        ${renderAward(item.award)}
        <section class="content-section">
          <h2>Abstract</h2>
          <p>${escapeHtml(item.abstract || item.note)}</p>
        </section>
      </article>
    `;
  }

  function renderTalks() {
    const sortedTalks = data.talks.slice().sort((a, b) => b.date.localeCompare(a.date));
    const talks = sortedTalks.length
      ? sortedTalks.map((item) => `
          <article class="entry">
            <h3>${link(item.title, talkUrl(item), "entry-title")}</h3>
            <p class="entry-meta">${escapeHtml(formatDate(item.date))} &middot; ${escapeHtml(item.venue || "")}${item.location ? ` &middot; ${escapeHtml(item.location)}` : ""}</p>
          </article>
        `).join("")
      : `<p class="empty-state">Talks will be added here.</p>`;

    return `
      <article class="page-content">
        <h1>Talks</h1>
        <div class="entry-list">${talks}</div>
      </article>
    `;
  }

  function renderTalkDetail() {
    const id = new URLSearchParams(window.location.search).get("id");
    const item = data.talks.find((talk) => talk.slug === id);

    if (!item) {
      return `
        <article class="page-content">
          <h1>Talk not found</h1>
          <p>${backLink("Back to talks", "talks.html")}</p>
        </article>
      `;
    }

    return `
      <article class="page-content">
        <p class="breadcrumb-link">${backLink("Back to talks", "talks.html")}</p>
        <h1>${escapeHtml(item.title)}</h1>
        <p class="entry-meta">${escapeHtml(formatDate(item.date))} &middot; ${escapeHtml(item.venue || "")}${item.location ? ` &middot; ${escapeHtml(item.location)}` : ""}</p>
        ${item.slides ? `<p class="entry-actions">${link("Slides", item.slides, "button-link")}</p>` : ""}
        <section class="content-section">
          <h2>Summary</h2>
          <p>${escapeHtml(item.summary || "")}</p>
        </section>
      </article>
    `;
  }

  function renderBlog() {
    const posts = data.posts.length
      ? data.posts.map((item) => `
          <article class="entry">
            <h3>${link(item.title, item.url || "#", "entry-title")}</h3>
            <p class="entry-meta">${escapeHtml(formatDate(item.date))}</p>
            <p>${escapeHtml(item.summary || "")}</p>
          </article>
        `).join("")
      : `<p class="empty-state">Research notes will be added here.</p>`;

    return `
      <article class="page-content">
        <h1>Research Notes</h1>
        <div class="entry-list">${posts}</div>
      </article>
    `;
  }

  function renderCvList(items, iconPath) {
    return items.map((item) => `
      <article class="entry timeline-entry">
        <span class="timeline-icon">${icon(iconPath)}</span>
        <div>
          <h3>${escapeHtml(item.role || item.area)}</h3>
          <p class="entry-meta">${escapeHtml(item.period)} &middot; ${escapeHtml(item.place || item.institution)}</p>
          ${item.highlights ? `<ul>${item.highlights.map((text) => `<li>${escapeHtml(text)}</li>`).join("")}</ul>` : ""}
        </div>
      </article>
    `).join("");
  }

  function renderCv() {
    return `
      <article class="page-content">
        <h1>CV</h1>
        <p>${link("Download my full CV (PDF)", data.cv.pdf, "button-link")}</p>
        <section class="content-section">
          <h2>Research experience</h2>
          <div class="entry-list">${renderCvList(data.cv.work, "asset/icons/work.png")}</div>
        </section>
        <section class="content-section">
          <h2>Education</h2>
          <div class="entry-list">${renderCvList(data.cv.education, "asset/icons/graduation.png")}</div>
        </section>
      </article>
    `;
  }

  function setupPublicationFilters() {
    const panel = document.querySelector("[data-filter-panel]");
    if (!panel) return;

    const chips = Array.from(panel.querySelectorAll("[data-filter]"));
    const clear = panel.querySelector("[data-clear-filters]");
    const groups = Array.from(document.querySelectorAll("[data-publication-category]"));
    const activeFilters = new Set();

    function updateFilters() {
      chips.forEach((chip) => {
        const active = activeFilters.has(chip.dataset.filter);
        chip.classList.toggle("is-active", active);
        chip.setAttribute("aria-pressed", String(active));
      });

      groups.forEach((group) => {
        const visible = !activeFilters.size || activeFilters.has(group.dataset.publicationCategory);
        group.hidden = !visible;
      });

      clear.hidden = activeFilters.size === 0;
    }

    chips.forEach((chip) => {
      chip.addEventListener("click", () => {
        const category = chip.dataset.filter;
        if (activeFilters.has(category)) {
          activeFilters.delete(category);
        } else {
          activeFilters.add(category);
        }
        updateFilters();
      });
    });

    clear.addEventListener("click", () => {
      activeFilters.clear();
      updateFilters();
    });

    updateFilters();
  }

  function renderPage() {
    if (page === "publications") return renderPublications();
    if (page === "publication") return renderPublicationDetail();
    if (page === "talks") return renderTalks();
    if (page === "talk") return renderTalkDetail();
    if (page === "cv") return renderCv();
    if (page === "blog") return renderBlog();
    return renderHome();
  }

  shell.innerHTML = `
    <header class="masthead">
      <nav class="masthead-inner" aria-label="Main navigation">
        <a class="site-title" href="index.html">Romain Piron</a>
        <ul class="nav-list">${renderNav()}</ul>
      </nav>
    </header>
    <main id="main">
      ${renderSidebar()}
      ${renderPage()}
    </main>
    <footer class="footer">
      <p>
        &copy; 2026 Romain Piron.
        Design inspired by <a href="https://github.com/academicpages/academicpages.github.io" target="_blank" rel="noreferrer">AcademicPages</a>,
        a fork of <a href="https://mademistakes.com/work/minimal-mistakes-jekyll-theme/" target="_blank" rel="noreferrer">Minimal Mistakes</a>.
      </p>
    </footer>
  `;

  setupPublicationFilters();
})();
