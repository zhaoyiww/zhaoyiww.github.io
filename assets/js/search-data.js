// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-teaching",
          title: "Teaching",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "dropdown-blog",
              title: "Blog",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/blog/";
              },
            },{id: "dropdown-repositories",
              title: "Repositories",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/repositories/";
              },
            },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-i-participated-in-igp-doctoral-day-with-a-poster-presentation",
          title: 'I participated in IGP Doctoral Day with a poster presentation.',
          description: "",
          section: "News",},{id: "news-our-paper-assessing-the-alignment-between-geometry-and-colors-in-tls-colored-point-clouds-was-accepted-at-the-isprs-geospatial-week-2023-laser-scanning-workshop-and-published-in-the-isprs-annals",
          title: 'Our paper Assessing the alignment between geometry and colors in TLS colored point...',
          description: "",
          section: "News",},{id: "news-i-presented-at-the-isprs-geospatial-week-2023-in-cairo-egypt-best-presentation-award",
          title: 'I presented at the ISPRS Geospatial Week 2023 in Cairo, Egypt — Best...',
          description: "",
          section: "News",},{id: "news-i-gave-a-talk-at-the-doctoral-seminar-data-science-and-machine-learning-d-baug",
          title: 'I gave a talk at the Doctoral Seminar Data Science and Machine Learning,...',
          description: "",
          section: "News",},{id: "news-i-attended-the-dgk-doctoral-student-seminar-2023-in-zurich-switzerland",
          title: 'I attended the DGK Doctoral Student Seminar 2023 in Zurich, Switzerland.',
          description: "",
          section: "News",},{id: "news-i-participated-in-igp-doctoral-day-with-a-poster-presentation",
          title: 'I participated in IGP Doctoral Day with a poster presentation.',
          description: "",
          section: "News",},{id: "news-i-gave-a-presentation-at-the-dgk-doctoral-student-seminar-2024-in-graz-austria",
          title: 'I gave a presentation at the DGK Doctoral Student Seminar 2024 in Graz,...',
          description: "",
          section: "News",},{id: "news-i-participated-in-igp-doctoral-day-with-a-poster-presentation",
          title: 'I participated in IGP Doctoral Day with a poster presentation.',
          description: "",
          section: "News",},{id: "news-our-paper-an-approach-for-rgb-guided-dense-3d-displacement-estimation-in-tls-based-geomonitoring-was-accepted-at-the-isprs-geospatial-week-2025-laser-scanning-workshop-and-will-be-published-in-the-isprs-annals",
          title: 'Our paper An Approach for RGB-Guided Dense 3D Displacement Estimation in TLS-Based Geomonitoring...',
          description: "",
          section: "News",},{id: "news-i-joined-our-gseg-group-visit-to-cern-geneva-switzerland",
          title: 'I joined our GSEG group visit to CERN, Geneva, Switzerland.',
          description: "",
          section: "News",},{id: "news-i-attended-the-isprs-geospatial-week-2025-in-dubai-uae-and-presented-our-latest-work",
          title: 'I attended the ISPRS Geospatial Week 2025 in Dubai, UAE, and presented our...',
          description: "",
          section: "News",},{id: "news-our-paper-cross-modal-feature-fusion-for-robust-point-cloud-registration-with-ambiguous-geometry-was-accepted-by-the-isprs-journal-of-photogrammetry-and-remote-sensing",
          title: 'Our paper Cross-modal feature fusion for robust point cloud registration with ambiguous geometry...',
          description: "",
          section: "News",},{id: "news-i-joined-geosummit-2025-in-budapest-hungary",
          title: 'I joined GeoSummit 2025 in Budapest, Hungary.',
          description: "",
          section: "News",},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%7A%68%61%6F%79%69.%77%61%6E%67@%67%65%6F%64.%62%61%75%67.%65%74%68%7A.%63%68", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/zhaoyiww", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/zhaoyi-wang-68a0b219b", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0009-0008-6169-9915", "_blank");
        },
      },{
        id: 'social-researchgate',
        title: 'ResearchGate',
        section: 'Socials',
        handler: () => {
          window.open("https://www.researchgate.net/profile/Zhaoyi-Wang-3?ev=hdr_xprf/", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=EVgHWQIAAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
