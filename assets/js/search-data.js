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
        },{id: "nav-teaching-amp-reviewing",
          title: "Teaching &amp; Reviewing",
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
            },{id: "post-3d-gaussian-splatting",
        
          title: "3D Gaussian Splatting",
        
        description: "Overview and resources on 3D Gaussian Splatting for reconstruction and geospatial applications.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/3dgs/";
          
        },
      },{id: "post-investigation-of-tls-scanners",
        
          title: "Investigation of TLS Scanners",
        
        description: "This notebook summarizes technical configurations and practical insights into various terrestrial laser scanning (TLS) scanners and their built-in imaging systems, with a focus on point cloud colorization techniques.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2022/scanners/";
          
        },
      },{id: "news-i-participated-in-igp-doctoral-day-with-a-poster-presentation-poster",
          title: 'I participated in IGP Doctoral Day with a poster presentation. 👉 Poster',
          description: "",
          section: "News",},{id: "news-our-paper-assessing-the-alignment-between-geometry-and-colors-in-tls-colored-point-clouds-was-accepted-at-the-isprs-geospatial-week-2023-laser-scanning-workshop-and-published-in-the-isprs-annals-code",
          title: '📄 Our paper Assessing the Alignment Between Geometry and Colors in TLS Colored...',
          description: "",
          section: "News",},{id: "news-i-presented-at-the-isprs-geospatial-week-2023-in-cairo-egypt-best-presentation-award-️",
          title: '🎤 I presented at the ISPRS Geospatial Week 2023 in Cairo, Egypt —...',
          description: "",
          section: "News",},{id: "news-i-attended-the-dgk-doctoral-student-seminar-2023-in-zurich-switzerland",
          title: 'I attended the DGK Doctoral Student Seminar 2023 in Zurich, Switzerland.',
          description: "",
          section: "News",},{id: "news-i-gave-a-talk-at-the-doctoral-seminar-data-science-and-machine-learning-d-baug",
          title: '🎤 I gave a talk at the Doctoral Seminar Data Science and Machine...',
          description: "",
          section: "News",},{id: "news-i-participated-in-igp-doctoral-day-with-a-poster-presentation-poster",
          title: 'I participated in IGP Doctoral Day with a poster presentation. 👉 Poster',
          description: "",
          section: "News",},{id: "news-i-gave-a-presentation-at-the-dgk-doctoral-student-seminar-2024-in-graz-austria-slides",
          title: '🎤 I gave a presentation at the DGK Doctoral Student Seminar 2024 in...',
          description: "",
          section: "News",},{id: "news-i-participated-in-igp-doctoral-day-with-a-poster-presentation-poster",
          title: 'I participated in IGP Doctoral Day with a poster presentation. 👉 Poster',
          description: "",
          section: "News",},{id: "news-our-paper-an-approach-for-rgb-guided-dense-3d-displacement-estimation-in-tls-based-geomonitoring-was-accepted-at-the-isprs-geospatial-week-2025-laser-scanning-workshop-to-be-published-in-the-isprs-annals-code",
          title: '📄 Our paper An Approach for RGB-Guided Dense 3D Displacement Estimation in TLS-Based...',
          description: "",
          section: "News",},{id: "news-i-joined-our-gseg-group-visit-to-cern-geneva-switzerland",
          title: 'I joined our GSEG group visit to CERN, Geneva, Switzerland.',
          description: "",
          section: "News",},{id: "news-i-attended-the-isprs-geospatial-week-2025-in-dubai-uae-and-gave-an-oral-presentation-slides",
          title: '🎤 I attended the ISPRS Geospatial Week 2025 in Dubai, UAE, and gave...',
          description: "",
          section: "News",},{id: "news-our-paper-cross-modal-feature-fusion-for-robust-point-cloud-registration-with-ambiguous-geometry-was-accepted-in-the-isprs-journal-of-photogrammetry-and-remote-sensing-code",
          title: '📄 Our paper Cross-Modal Feature Fusion for Robust Point Cloud Registration with Ambiguous...',
          description: "",
          section: "News",},{id: "news-i-joined-geosummit-2025-in-budapest-hungary",
          title: 'I joined GeoSummit 2025 in Budapest, Hungary.',
          description: "",
          section: "News",},{id: "news-i-started-a-three-month-research-visit-at-the-3dom-unit-of-fbk-led-by-prof-dr-fabio-remondino-working-on-multi-scene-multi-sensor-3d-change-detection-and-uav-based-reconstruction",
          title: 'I started a three-month research visit at the 3DOM unit of FBK, led...',
          description: "",
          section: "News",},{id: "news-i-successfully-completed-my-doctoral-examination-i-sincerely-thank-the-examination-committee-prof-dr-andreas-wieser-prof-dr-rongjun-qin-prof-dr-konrad-schindler-and-dr-jemil-avers-butt",
          title: 'I successfully completed my doctoral examination. I sincerely thank the examination committee: Prof....',
          description: "",
          section: "News",},{id: "news-our-paper-dense-3d-displacement-estimation-for-landslide-monitoring-via-fusion-of-tls-point-clouds-and-embedded-rgb-images-was-accepted-in-the-international-journal-of-applied-earth-observation-and-geoinformation-code",
          title: '📄 Our paper Dense 3D displacement estimation for landslide monitoring via fusion of...',
          description: "",
          section: "News",},{id: "news-our-paper-multichange3d-a-multi-scene-multi-sensor-dataset-for-benchmarking-3d-geometric-change-detection-was-accepted-at-the-isprs-congress-2026",
          title: '📄 Our paper MultiChange3D: A Multi-Scene, Multi-Sensor Dataset for Benchmarking 3D Geometric Change...',
          description: "",
          section: "News",},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%7A%68%61%6F%79%69%77%77%61%6E%67@%67%6D%61%69%6C.%63%6F%6D", "_blank");
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
