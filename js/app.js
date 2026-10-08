(function () {
  "use strict";

  const STRINGS = {
    "common": {
      "mainNav": "Main navigation",
      "homeAria": "Home",
      "skipOverview": "Skip to overview",
      "backOverview": "← Overview",
      "all": "All"
    },
    "nav": {
      "portal": "Portal",
      "overview": "Overview",
      "catalog": "Open-Source Applications",
      "benchmarks": "Research Datasets",
      "tools": "Web Security Tools",
      "webgym": "WebGym",
      "about": "Contact Us",
      "contact": "Contact Us",
      "crafterTitle": "WebCrafter Runtime Repository",
      "crafterReadyTag": "Ready-to-Use",
      "gymSoonTag": "Coming Soon",
      "gymTitle": "WebGym Security Gym",
      "gymPreviewTag": "PREVIEW",
      "dropdownGymArch": "3-Tier Evaluation Architecture",
      "dropdownGymArchDesc": "Target sandbox isolation, engine, and agent interface",
      "dropdownGymAgent": "Agent Gym Benchmarks & API",
      "dropdownGymAgentDesc": "Standardized decision benchmarks for LLM Security Agents",
      "dropdownGymCollab": "Request Preview & Collaboration",
      "dropdownGymCollabDesc": "Collaborate on arena building and agent evaluation"
    },
    "portal": {
      "pageTitle": "WebAxis",
      "metaDescription": "WebAxis: Application runtime environments and security evaluation tools for web security research.",
      "skipLink": "Skip to core platforms",
      "homeAria": "WebAxis Home",
      "brandTitle": "WebAxis",
      "navHome": "Home",
      "navPlatforms": "Platforms",
      "navCrafter": "WebCrafter",
      "navWebgym": "WebGym",
      "navAbout": "Contact Us",
      "navContact": "Contact Us",
      "heroBadge": "Fudan University SecSys Lab",
      "heroTitle": "Web Security Research & <span class=\"hero-accent\">Evaluation Platform</span>",
      "contextOne": "<strong>Bitrot Elimination & Reproducibility.</strong> Systematically pinning and reproducing experimental environments from 46 web security papers across the Big Four security conferences (IEEE S&amp;P, USENIX Security, ACM CCS, NDSS, 2016–2025), preserving databases and dependencies for verifiable academic research.",
      "contextTwo": "<strong>Comprehensive Multi-Stack Coverage.</strong> Curating 2,920 real-world open-source web applications (GitHub Stars ≥ 100) across PHP, Java, Python, Node.js, Go, and Ruby, serving as large-scale empirical testbeds for security analyzers, fuzzers, and verification tools.",
      "contextThree": "<strong>Turn-Key Dual Ecosystem.</strong> Powered by real-world application runtime repositories (WebCrafter) and dynamic attack/defense evaluation testbeds (WebGym), delivered via 100% standardized Docker containers for automated tooling and LLM security agents.",
      "btnExplore": "Explore Platforms <span aria-hidden=\"true\">↓</span>",
      "btnCrafter": "Enter WebCrafter (Runtimes) <span aria-hidden=\"true\">→</span>",
      "btnWebgym": "Explore WebGym (Arena) <span aria-hidden=\"true\">→</span>",
      "btnCatalog": "Application Catalog (2,920+) <span aria-hidden=\"true\">→</span>",
      "btnAboutTeam": "Contact the team <span aria-hidden=\"true\">→</span>",
      "pillarsKicker": "CORE PLATFORMS",
      "pillarsHeading": "Platform Matrix & Research Pillars",
      "pillarsSubtitle": "Standardized Runtime Delivery · Academic Reproducibility · Dynamic Benchmarking",
      "crafterTag": "Runtime Repository",
      "crafterKicker": "2,920+ Apps · 46 Top-Tier Security Paper Benchmarks",
      "crafterTagBadge": "Ready to use",
      "crafterDesc": "Preconfigured Docker environments for real-world web applications, with dependencies, services, and databases ready for security testing.",
      "metricApps": "Open-source applications",
      "metricPapers": "Top-Tier Papers",
      "metricPapersFull": "Top-Tier Papers (S&P, USENIX, CCS, NDSS)",
      "metricDocker": "Docker Delivery",
      "btnCrafterDetail": "Enter WebCrafter Overview & Catalog <i aria-hidden=\"true\">→</i>",
      "gymTag": "In Development · Empty",
      "gymKicker": "Web vulnerability evaluation for security tools",
      "gymTagBadge": "In development",
      "gymComingSoonPill": "In Development · Empty ⏳",
      "webgymDesc": "Web applications with known vulnerabilities and verifiable PoCs for reproducible evaluation of security tools, including scanners, fuzzers, and AI agents.",
      "gymStat1Num": "--",
      "gymStat1Label": "Known Vulnerabilities (Planned)",
      "gymStat2Num": "--",
      "gymStat2Label": "Verifiable PoCs (Planned)",
      "gymStat3Num": "--",
      "gymStat3Label": "Reproducible Evaluation (Planned)",
      "gymComingSoon": "In Development · Empty",
      "btnGymDetail": "In Development · Empty <i aria-hidden=\"true\">⏳</i>",
      "directoryAria": "Research platforms",
      "crafterSub": "RUNTIME REGISTRY",
      "gymSub": "SECURITY ARENA",
      "btnCrafterAction": "Enter WebCrafter <i aria-hidden=\"true\">→</i>",
      "crafterKind": "Application environments",
      "gymKind": "Security tool evaluation",
      "researchCoverage": "Includes <strong>282</strong> applications used in <strong>46</strong> security papers.",
      "keyFeatures": "Key Features",
      "capabilityRuntime": "Runtime Environments",
      "capabilityTargets": "Known Vulnerabilities",
      "capabilityVerification": "Verifiable PoCs",
      "capabilityEvaluation": "Reproducible Evaluation",
      "exploreCrafter": "Explore WebCrafter",
      "cardComingSoon": "Coming soon"
    },
    "gym": {
      "pageTitle": "WebGym · In Development (Empty) · WebAxis",
      "metaDescription": "WebGym builds on WebVulnBench with known web vulnerabilities and verifiable PoCs for reproducible evaluation of security tools. Currently in development.",
      "skipLink": "Skip to main content",
      "kickerBadge": "COMING SOON · IN DEVELOPMENT",
      "heroTitle": "WebGym · <span class=\"hero-accent gym-accent\">Security Tool Evaluation</span>",
      "emptyTitle": "This module is in development and temporarily empty",
      "emptyDesc": "WebGym builds on WebVulnBench with web applications containing known vulnerabilities and verifiable PoCs for reproducible evaluation of security tools, including scanners, fuzzers, and AI agents. Currently in development.",
      "btnCrafter": "Go to WebCrafter Runtime Repository (2,920+) →",
      "btnHome": "Back to Home →"
    },
    "about": {
      "title": "Contact Us",
      "skip": "Skip to team members",
      "professor": "Professor",
      "jockeyClub": "Jockey Club",
      "earlyCareerFellow": "STEM Early Career Research Fellow",
      "phdStudent": "PhD Student",
      "mastersStudent": "Master’s Student",
      "fudan": "Fudan University",
      "polyu": "The Hong Kong Polytechnic University",
      "homepage": "Personal homepage",
      "email": "Email"
    },
    "title": {
      "home": "WebCrafter · Web Application Runtime Environment Repository",
      "catalog": "Open-Source Applications · WebCrafter",
      "benchmarks": "Research Datasets · WebCrafter",
      "workflow": "How to Use · WebCrafter",
      "tools": "Web Security Tools · WebCrafter",
      "about": "Contact Us · WebAxis"
    },
    "meta": {
      "homeDescription": "WebCrafter: A platform of runtime environments, versions, and reproducibility material for real-world web applications.",
      "catalogDescription": "WebCrafter Open-Source Applications: explore the distribution and runtime information of 2,920 full-stack web applications.",
      "benchmarkDescription": "WebCrafter Research Datasets: 282 applications and 468 versions used in 46 security research papers.",
      "workflowDescription": "How to use WebCrafter: browse applications, select an environment, and deploy it with Docker.",
      "toolsDescription": "WebCrafter web security tools: automated security assessment and vulnerability analysis runtime environments.",
      "aboutDescription": "Contact the team building and maintaining WebAxis."
    },
    "home": {
      "heroBadge": "<span class=\"hero-badge-dot\"></span><span>Standardized Web Runtime Benchmark Repository · 1,700+ Runnable Targets</span>",
      "heroTitle": "Ready-to-Use Web Application <span class=\"hero-accent\">Runtime Environments</span>",
      "heroLead": "Delivering ready-to-run real web application environments via Docker images—eliminating tedious setup and environment bitrot.",
      "contextOne": "<strong>Build Once, Reuse Anywhere.</strong> WebCrafter packages application versions and dependencies into standardized runtime environments that can be reused across experiments and deployment settings. This reduces repeated setup and the impact of environment bitrot, giving researchers and automated tools consistent targets for reproducible evaluation.",
      "contextTwo": "<strong>Large Scale, Broad Coverage.</strong> WebCrafter brings together 2,920 full-stack open-source web applications, including 282 applications used in 46 research papers published at leading security conferences such as USENIX Security, IEEE S&amp;P, ACM CCS, and NDSS. The collection spans diverse languages, application types, and software versions.",
      "contextThree": "<strong>Ready to Run, Ready to Test.</strong> WebCrafter provides Docker environments with preconfigured service orchestration, packaged dependencies, and initialized databases. Researchers can launch the services and run authenticated tests with minimal configuration, spending less time on setup and more on evaluation.",
      "btnCatalog": "Browse Open-Source Applications (2,920+) <span aria-hidden=\"true\">→</span>",
      "btnBenchmarks": "Top-Tier Paper Benchmarks (46 Papers) <span aria-hidden=\"true\">→</span>",
      "btnWebgym": "WebGym Benchmark &amp; Gym <span aria-hidden=\"true\">↓</span>",
      "btnAbout": "About Team &amp; Citation <span aria-hidden=\"true\">→</span>",
      "openSourceBadge": "CATALOG REGISTRY",
      "openSourceTag": "Full Catalog",
      "benchmarkBadge": "PAPER BENCHMARKS",
      "benchmarkTag": "Top 4 Security Confs",
      "browseCollections": "Explore Environments <span aria-hidden=\"true\">→</span>",
      "learnHow": "How to Use <span aria-hidden=\"true\">↓</span>",
      "scopeKicker": "EXPLORE RUNTIMES",
      "scopeHeading": "Web Application Runtime Environments",
      "scopeSubtitle": "Browse the full application catalog or explore environments used in published security research.",
      "scopeAria": "Environment catalogs",
      "openSourceLabel": "Open-Source Applications",
      "openSourceTitle": "Open-Source Applications",
      "openSourceDescription": "Browse web applications with at least 100 GitHub stars across PHP, Java, Python, Node.js, Go, and more. Review each project's technology stack and runtime information to select suitable environments for security evaluation.",
      "openSourceFactsAria": "Application catalog statistics",
      "openSourceAppsCount": "applications",
      "starThreshold": "GitHub stars",
      "catalogEntries": "applications",
      "languagesCovered": "languages",
      "browseCatalog": "Browse applications <i aria-hidden=\"true\">→</i>",
      "benchmarkLabel": "Research Datasets",
      "benchmarkTitle": "Research Datasets",
      "benchmarkDescription": "Explore applications evaluated in papers published at USENIX Security, IEEE S&P, ACM CCS, and NDSS. Browse this subset of the catalog by paper and application version to support experiment reproduction.",
      "benchmarkFactsAria": "Research dataset statistics",
      "topPapers": "Top Papers",
      "researchAppsCount": "Research Apps",
      "versionEnvironments": "Fixed Versions",
      "browseBenchmarks": "Browse datasets <i aria-hidden=\"true\">→</i>"
    },
    "catalog": {
      "skip": "Skip to application catalog",
      "heroTitle": "Open-Source Applications",
      "heroLead": "Browse 2,920 full-stack open-source web applications. Explore their technologies, source repositories, and runtime information to select targets for security testing.",
      "searchPlaceholder": "Search applications or repositories",
      "toolbarAria": "Catalog filters and sorting",
      "status": "Status",
      "type": "Type",
      "runtimeSignals": "Technology and category",
      "aiApplication": "AI applications",
      "language": "Language",
      "languageTitle": "Programming language",
      "popularity": "GitHub stars",
      "popularityTitle": "Star count",
      "sort": "Sort",
      "sortRank": "Catalog rank",
      "sortStars": "GitHub stars",
      "sortStarsDesc": "Stars: high to low",
      "sortStarsAsc": "Stars: low to high",
      "sortName": "Application name",
      "selected": "Selected",
      "clear": "Clear",
      "all": "All",
      "chipMegaStars": "★ ≥10k",
      "chipStars50k": "★ ≥50k",
      "chipStars10k": "★ 10k–<50k",
      "chipStars5k": "★ 5k–<10k",
      "chipStars1k": "★ 1k–<5k",
      "chipStarsSub1k": "★ <1k",
      "project": "Application",
      "quickFilterAria": "Application quick filters",
      "stars50kBadge": "≥50k stars",
      "stars10kBadge": "10k–<50k stars",
      "stars5kBadge": "5k–<10k stars",
      "stars1kBadge": "1k–<5k stars",
      "starsSub1kBadge": "<1k stars",
      "monitoring": "Monitoring and operations",
      "cms": "CMS",
      "devTools": "Developer tools",
      "security": "Security tools",
      "ecommerce": "E-commerce",
      "staticIndex": "APPLICATION CATALOG",
      "loadMore": "Load more applications <span>↓</span>",
      "allShown": "All applications shown",
      "noMatch": "No matching applications found.",
      "noMatchTargets": "No matching applications",
      "resultSummary": "Applications: {{shown}} / {{total}}",
      "emptyClear": "Clear filters",
      "closeDetails": "Close details",
      "environmentBrief": "ENVIRONMENT DETAILS (JSON METADATA)",
      "deployCommand": "Docker Launch Command",
      "copyCmd": "Copy Command <span>⧉</span>",
      "copyDeployCommand": "Copy Launch Command <span>⧉</span>",
      "entrypoint": "Entrypoint",
      "adminCredentials": "Default Credentials",
      "openGitHub": "View on GitHub <span>↗</span>",
      "copyBrief": "Copy environment details <span>⧉</span>",
      "copied": "Copied <span>✓</span>",
      "drawerFootnote": "Review the application version and deployment instructions before testing.",
      "viewDetails": "View details for {{name}}",
      "repository": "Repository",
      "githubStars": "GitHub stars",
      "primaryLanguage": "Primary language",
      "environmentRecord": "Environment details",
      "topRegistry": "Application catalog",
      "infographicsAria": "Open-source application statistics",
      "impactTitle": "Open-Source Applications",
      "impactSubtitle": "2,920 full-stack open-source web applications, spanning diverse languages and application types.",
      "statCard1": "applications",
      "statCard2": "apps with ≥10k stars",
      "statCard3": "Docker environments",
      "statCard4": "languages",
      "para1": "<strong>Large Scale, Broad Coverage.</strong> WebCrafter spans 80 applications with at least 10,000 GitHub stars, 477 with 1,000–9,999 stars, and 2,363 with 100–999 stars. The catalog covers PHP, Java, Python, Node.js, Go, and more, from widely adopted platforms to specialized web applications. Docker environments package service orchestration, application dependencies, and initialized databases, reducing setup work for reproducible security testing.",
      "para2": "",
      "para3": "",
      "registryKicker": "EXPLORE",
      "registryTitle": "Browse Applications",
      "registryCount": "2,920 open-source web applications",
      "popularPrefix": "POPULAR:"
    },
    "batch": {
      "selected": "Selected",
      "items": "items",
      "selectAllVisible": "Select all visible",
      "selectAllInPaper": "Select all in this paper",
      "deselectAll": "Deselect all",
      "exportGitHub": "Export deployment files",
      "exportBenchmark": "Export deployment files",
      "clear": "Clear",
      "selectProject": "Select application",
      "selectTarget": "Select application",
      "exportRunbook": "Deployment guide (Markdown)",
      "exportRunbookDesc": "Setup steps for researchers and automated tools",
      "exportScript": "Deployment script (deploy.sh)",
      "exportScriptDesc": "Pull images, start containers, and check readiness",
      "exportJson": "Runtime configuration (JSON)",
      "exportJsonDesc": "Repositories, images, ports, and credentials",
      "exportJsonBenchmarkDesc": "Application versions, images, ports, and credentials",
      "exportCsv": "Deployment details (CSV)",
      "exportCsvDesc": "Images, ports, and administrator credentials",
      "exportCsvBenchmarkDesc": "Applications, images, ports, and credentials",
      "exportMarkdown": "Application table (Markdown)",
      "exportMarkdownDesc": "Application details for documents and reports",
      "exportMarkdownBenchmarkDesc": "Setup steps and application versions by paper",
      "copyUrls": "Copy repository links",
      "copyUrlsDesc": "Copy the selected repository URLs",
      "copyUrlsBenchmarkDesc": "Copy the selected repository URLs",
      "copiedToast": "Copied {{count}} repository links.",
      "noSelectionToast": "Select at least one application."
    },
    "paper": {
      "skip": "Skip to research datasets",
      "heroTitle": "Research Datasets",
      "heroLead": "Explore applications used in 46 security research papers, with 282 applications and 468 versions organized by paper for experiment reproduction.",
      "scopeKicker": "RESEARCH DATASETS",
      "heading": "Dataset Coverage",
      "summaryAria": "Research dataset statistics",
      "summary": "282 applications and 468 versions used in 46 security research papers.",
      "registryKicker": "EXPLORE",
      "registryTitle": "Browse by Paper",
      "registryCount": "46 papers · 282 applications · 468 versions",
      "filterVenue": "Conference",
      "filterVenueTitle": "Security conferences",
      "filterYear": "Year",
      "filterYearTitle": "Publication year",
      "filterStatus": "Status",
      "filterStatusTitle": "Environment status",
      "statusReady": "Environment ready",
      "statusAll": "All papers",
      "toolbarAria": "Paper filters",
      "quickFilterAria": "Quick paper filters",
      "matchedPapersCount": "{{count}} papers matched",
      "popularPrefix": "FILTERS:",
      "clearFilters": "Reset",
      "chooserAria": "Choose a paper",
      "chooserKicker": "PAPER FILTER",
      "chooseTitle": "Choose a paper",
      "chooserHelp": "Select a paper to view its applications and versions, or search to find another paper.",
      "browseOther": "Browse all papers",
      "searchPrompt": "Search by paper, application, conference, or year.",
      "searchOtherAria": "Search other papers",
      "searchPlaceholder": "Search papers or applications",
      "searchResultsAria": "Paper search results",
      "searchClear": "Clear search",
      "currentDisplay": "Selected · {{paper}}",
      "choosePaper": "Choose a paper",
      "searchResultStatus": "{{count}} matching papers",
      "browseAllStatus": "{{count}} papers available · type to filter",
      "selectPaper": "Choose {{paper}}",
      "noMatchingPapers": "No matching papers",
      "paperBenchmark": "Research Dataset",
      "empty": "No applications are recorded for this paper.",
      "paperVersion": "Paper version",
      "currentVersion": "Current version",
      "notMaintained": "Not maintained",
      "upstreamUnavailable": "Source repository not listed",
      "environmentReady": "Environment ready",
      "environmentUnavailable": "Environment not ready",
      "reproducibleEnvironment": "Reproducible experiment environment",
      "openEnvironment": "Open environment ↗",
      "targetCount": "Application entries: {{count}}",
      "readyEnvironmentCount": "Ready environments: {{count}}",
      "targetAndReady": "{{targets}} · {{ready}}",
      "infographicsAria": "Research dataset statistics",
      "impactTitle": "Research Datasets",
      "impactSubtitle": "282 applications and 468 versions used in 46 security research papers, organized for experiment reproduction.",
      "statCard1": "papers",
      "statCard2": "applications",
      "statCard3": "versions",
      "statCard4": "2016–2025",
      "statCard4Value": "10 years",
      "chipAll": "All",
      "chipYear2025": "2025",
      "chipYear2024": "2024",
      "chipYear2023": "2023",
      "chipStatusReady": "Environment ready",
      "statusReadyShort": "Ready",
      "unitPapers": "papers",
      "filteredPrefix": "Filtered",
      "filterCountReady": "6 papers",
      "filterCountAll": "46 papers",
      "emptyTitle": "No matching papers",
      "emptyDesc": "Adjust the conference, year, or environment status filters, or reset them to view all papers.",
      "emptyReset": "Reset filters",
      "hitApp": "Matched application",
      "selectedPaperTag": "Selected paper",
      "para1": "<strong>Published Research, Traceable Sources.</strong> WebCrafter draws on 46 papers identified in a survey of 191 web security papers published from 2016 to 2025: 20 from USENIX Security, 10 from IEEE S&amp;P, 11 from ACM CCS, and 5 from NDSS. The 282 applications form a subset of the full application catalog, with 468 versions organized by paper for experiment reproduction.",
      "para2": "<strong>Versioned Environments, Repeatable Experiments.</strong> The datasets cover <strong>vulnerability discovery</strong>, <strong>validation</strong>, <strong>impact assessment</strong>, and <strong>repair</strong>. Each record links an application to its source paper and compares the version used in the paper with the current version, helping researchers select consistent targets for reproducing experiments and evaluating security tools.",
      "para3": ""
    },
    "workflow": {
      "skip": "Skip to how-to guide",
      "heroTitle": "How to Use WebCrafter",
      "heroLead": "Choose a research entry point, locate a target, and open a prepared environment in three steps.",
      "kicker": "GET STARTED",
      "heading": "How to Use",
      "intro": "Browse applications, select an environment, and deploy it with Docker.",
      "stepsAria": "How to use WebCrafter",
      "entriesAria": "Environment links",
      "stepOneTitle": "Browse Applications",
      "stepOneDescription": "Browse Open-Source Applications for real-world targets, or explore Research Datasets for applications used in published security research.",
      "openCatalog": "Open-Source Applications <span aria-hidden=\"true\">→</span>",
      "openBenchmarks": "Research Datasets <span aria-hidden=\"true\">→</span>",
      "stepTwoTitle": "Select an Environment",
      "stepTwoDescription": "Search by application name, paper, conference, or year. Review the source repository and application version to find an environment that fits your experiment.",
      "stepTwoNote": "Search · source · version",
      "stepThreeTitle": "Deploy and Test",
      "stepThreeDescription": "Open an entry marked Environment ready, then follow the Docker instructions to deploy and test the application.",
      "ready": "Environment ready",
      "legendTitle": "Reading the records",
      "upstreamRepository": "Upstream repository",
      "upstreamRepositoryDescription": "The original project and release source.",
      "paperVersion": "Paper version",
      "paperVersionDescription": "The version used by a paper or benchmark.",
      "environmentStatus": "Environment status",
      "environmentStatusDescription": "Whether a WebCrafter environment is ready to open.",
      "videoCaption": "End-to-End Walkthrough · Catalog Search → Terminal Run → App Login",
      "videoTime": "31s · 1080P",
      "liveBadge": "DEMO"
    },
    "tools": {
      "eyebrow": "SECURITY TOOLS",
      "title": "Web Security Tools",
      "lead": "Curating mainstream open-source web automated vulnerability scanners, fuzzers, and runtime environments.",
      "todoTitle": "Work in Progress",
      "todoDesc": "This module will curate automated evaluation tools and runtime environments commonly used in security research and vulnerability reproduction. Content is being prepared."
    },
    "status": {
      "validated": "Validated",
      "review": "Needs review",
      "queued": "Queued",
      "running": "Running"
    },
    "dynamic": {
      "unknownTarget": "Unknown target",
      "noDescription": "No project description available.",
      "paperFocus": "",
      "blackWidowFocus": "Real web-application targets for vulnerability discovery and reproduction, with paper versions aligned to current runtime environments.",
      "yuraScannerFocus": "Targets for automated web security assessment, with paper versions and reviewable runtime environments recorded together."
    }
  };

  const projects = Array.isArray(window.crafterHubProjects) ? window.crafterHubProjects : [];
  const summary = window.crafterHubSummary || {};
  const benchmarkEntries = Array.isArray(window.crafterBenchmarks) ? window.crafterBenchmarks : [];
  const benchmarkSummary = window.crafterBenchmarkSummary || {};
  const statusClasses = { validated: "", review: "review", queued: "queued", running: "" };
  const state = {
    query: "",
    sort: "rank",
    pageSize: 12,
    filters: {
      status: new Set(),
      topic: new Set(),
      language: new Set(),
      stars: new Set(),
    },
    selectedCatalog: new Set(),
    selectedBenchmarks: new Set(),
  };

  const $ = (selector) => document.querySelector(selector);
  const $$ = (selector) => [...document.querySelectorAll(selector)];
  const t = (key, values = {}) => {
    const value = key.split(".").reduce((node, part) => node?.[part], STRINGS);
    const text = typeof value === "string" ? value : key;
    return text.replace(/{{(\w+)}}/g, (_, name) => String(values[name] ?? ""));
  };
  const esc = (value) => String(value ?? "").replace(/[&<>"']/g, (char) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
  }[char]));
  const formatNumber = (value) => new Intl.NumberFormat("en-US").format(Number(value) || 0);
  const displayVenue = (value) => String(value ?? "")
    .replace(/'(\d{2})$/, " 20$1")
    .replace(/^(?:USENIX(?: Security)?|Security)(?=\s|$)/, "USENIX Security")
    .replace(/^(?:IEEE )?S&P(?=\s|$)/, "IEEE S&P")
    .replace(/^(?:ACM )?CCS(?=\s|$)/, "ACM CCS");
  const getTopics = (project) => [...new Set([...(project.topics || []), ...(project.categories || [])].map((topic) => String(topic).toLowerCase()))];
  const displayName = (project) => project.target || project.projectName || project.name || t("dynamic.unknownTarget");
  const projectDescription = (project) => project.description || project.summary || t("dynamic.noDescription");
  const projectRepo = (project) => project.repoUrl || (displayName(project).includes("/") ? `https://github.com/${displayName(project)}` : "https://github.com");
  const normalizedStatus = (project) => project.status === "running" ? "validated" : (project.status || "queued");

  function matchStarsTier(count, tier) {
    if (tier === "50k+") return count >= 50000;
    if (tier === "10k-50k") return count >= 10000 && count < 50000;
    if (tier === "5k-10k") return count >= 5000 && count < 10000;
    if (tier === "1k-5k") return count >= 1000 && count < 5000;
    if (tier === "<1k") return count < 1000;
    return false;
  }

  function downloadFile(content, filename, mimeType) {
    const blob = new Blob([content], { type: mimeType });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    setTimeout(() => {
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }, 200);
  }

  const KNOWN_DEPLOY_PROFILES = {
    "memos": {
      image: "neosmemo/memos:stable",
      port: 5230,
      deployCommand: "docker run -d --name memos -p 5230:5230 -v ~/.memos:/var/opt/memos neosmemo/memos:stable",
      repoPath: "usememos/memos",
      adminPath: "/",
      user: "admin",
      pass: "AdminPassword123!",
      version: "stable",
      ready: true,
    },
    "wordpress": {
      image: "nnin/sop-wordpress:4.7.4",
      port: 18084,
      repoPath: "applications/wordpress_4.7.4",
      adminPath: "/wp-login.php",
      user: "admin",
      pass: "benchmark-only",
      version: "4.7.4",
      ready: true,
    },
    "espocrm": {
      image: "nnin/sop-espocrm:8.2.5",
      port: 18092,
      repoPath: "applications/espocrm_8.2.5",
      adminPath: "/#login",
      user: "admin",
      pass: "benchmark-only",
      version: "8.2.5",
      ready: true,
    },
    "atropim": {
      image: "nnin/sop-atropim:489afea",
      port: 18083,
      repoPath: "applications/atropim_489afea",
      adminPath: "/",
      user: "admin",
      pass: "benchmark-only",
      version: "489afea",
      ready: true,
    },
    "drupal": {
      image: "nnin/sop-drupal:8.6.15",
      port: 18088,
      repoPath: "applications/drupal_8.6.15",
      adminPath: "/user/login",
      user: "admin",
      pass: "benchmark-only",
      version: "8.6.15",
      ready: true,
    },
    "mall": {
      image: "nnin/sop-mall:1.0.3",
      port: 18085,
      repoPath: "applications/mall_1.0.3",
      adminPath: "/",
      user: "admin",
      pass: "benchmark-only",
      version: "1.0.3",
      ready: true,
    },
    "monica": {
      image: "nnin/sop-monica:4.1.2",
      port: 18089,
      repoPath: "applications/monica_4.1.2",
      adminPath: "/login",
      user: "admin",
      pass: "benchmark-only",
      version: "4.1.2",
      ready: true,
    },
    "ruoyi-vue-pro": {
      image: "yorem/sop-ruoyi-vue-pro:2026.06-jdk8",
      port: 18087,
      repoPath: "applications/ruoyi-vue-pro_2026.06-jdk8",
      adminPath: "/login",
      user: "admin",
      pass: "benchmark-only",
      version: "2026.06-jdk8",
      ready: true,
    },
    "dolibarr": {
      image: "nnin/sop-dolibarr:19.0.2",
      port: 18091,
      repoPath: "applications/dolibarr/19.0.2",
      adminPath: "/",
      user: "admin",
      pass: "benchmark-only",
      version: "19.0.2",
      ready: true,
    },
    "hotcrp": {
      image: "nnin/sop-hotcrp:3.3.1",
      port: 18094,
      repoPath: "applications/hotcrp_3.3.1",
      adminPath: "/",
      user: "admin",
      pass: "benchmark-only",
      version: "3.3.1",
      ready: true,
    },
    "joomla": {
      image: "nnin/sop-joomla:5.1.1",
      port: 18095,
      repoPath: "applications/joomla_5.1.1",
      adminPath: "/administrator",
      user: "admin",
      pass: "benchmark-only",
      version: "5.1.1",
      ready: true,
    },
    "oscommerce": {
      image: "nnin/sop-oscommerce:2.4.2",
      port: 18096,
      repoPath: "applications/oscommerce_2.4.2",
      adminPath: "/admin",
      user: "admin",
      pass: "benchmark-only",
      version: "2.4.2",
      ready: true,
    },
    "prestashop": {
      image: "nnin/sop-prestashop:9.1.4",
      port: 18097,
      repoPath: "applications/prestashop_9.1.4",
      adminPath: "/admin",
      user: "admin",
      pass: "benchmark-only",
      version: "9.1.4",
      ready: true,
    },
  };

  function hashString(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = ((hash << 5) - hash) + str.charCodeAt(i);
      hash |= 0;
    }
    return hash;
  }

  function resolveTargetSpec(item, type, index) {
    const isBenchmark = type === "benchmark";
    const rawName = isBenchmark ? item.application : (item.name || displayName(item));
    const normKey = (rawName || "").toLowerCase().replace(/[^a-z0-9]/g, "");
    let profile = null;
    for (const [k, p] of Object.entries(KNOWN_DEPLOY_PROFILES)) {
      if (normKey.includes(k.replace(/[^a-z0-9]/g, ""))) {
        profile = p;
        break;
      }
    }

    const name = rawName || "Web Application";
    const version = isBenchmark
      ? (item.paperVersion || item.currentVersion || profile?.version || "1.0")
      : (item.versionRef || profile?.version || "latest");
    const cleanVersion = String(version).replace(/[^a-zA-Z0-9._-]/g, "");
    const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
    const containerName = `crafter-${slug}-${cleanVersion || "latest"}`.toLowerCase();
    const port = profile ? profile.port : (18100 + (Math.abs(hashString(item.id || slug)) % 800));
    const image = profile ? profile.image : `docker.io/webcrafter/${slug}:${cleanVersion || "latest"}`;
    const repoPath = profile ? profile.repoPath : `applications/${slug}_${cleanVersion || "latest"}`;
    const adminPath = profile ? profile.adminPath : "/admin";
    const user = profile ? profile.user : "admin";
    const pass = profile ? profile.pass : "benchmark-only";
    const role = "administrator";
    const isReady = isBenchmark ? Boolean(item.environmentReady) : (item.status === "validated" || Boolean(profile));

    const entrypointUrl = `http://localhost:${port}`;
    const adminUrl = adminPath.startsWith("http") ? adminPath : `${entrypointUrl}${adminPath.startsWith("/") ? "" : "/"}${adminPath}`;
    const deployCommand = profile?.deployCommand || `docker run -d --platform linux/amd64 --name ${containerName} -p ${port}:80 ${image}`;
    const healthcheckCommand = `until curl -s -f ${entrypointUrl} > /dev/null; do sleep 2; done`;
    const stopCommand = `docker rm -f ${containerName}`;

    let paperTitle = "";
    if (isBenchmark) {
      const paperInfo = (benchmarkSummary.papers || []).find((p) => p.id === item.paper);
      paperTitle = paperInfo ? `${paperInfo.name} (${displayVenue(paperInfo.venue)})` : (item.paper || "");
    }

    return {
      id: item.id,
      name,
      version: cleanVersion,
      slug,
      containerName,
      port,
      image,
      repoPath,
      entrypointUrl,
      adminUrl,
      user,
      pass,
      role,
      isReady,
      deployCommand,
      healthcheckCommand,
      stopCommand,
      repoUrl: isBenchmark ? item.repoUrl : projectRepo(item),
      paperTitle,
      description: isBenchmark ? "" : projectDescription(item),
    };
  }

  function generateAgentRunbook(specs, type) {
    const isBenchmark = type === "benchmark";
    const collectionName = isBenchmark
      ? "Frontier Research Benchmark Targets"
      : "Curated Open-Source Web Applications";

    return `# WebCrafter Agent Runbook: Target Deployment & Authenticated Access Guide

> **Automated Execution Guide for Autonomous LLM Agents & Benchmark Runners**  
> **Source Hub**: WebCrafter Standardized Web Application Runtime Environment Repository  
> **Target Scope**: ${collectionName} (${specs.length} application(s))  
> **Export Timestamp**: ${new Date().toISOString()}  

---

## 1. Quick Target & Credential Matrix

| # | Application | Version | Repository Path | Docker Image | Port | Web Entrypoint | Admin Credentials | Status |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
${specs.map((s, idx) => `| ${idx + 1} | **${s.name}** | \`${s.version}\` | \`${s.repoPath}\` | \`${s.image}\` | \`${s.port}\` | [${s.entrypointUrl}](${s.entrypointUrl}) | \`${s.user}\` / \`${s.pass}\` | ${s.isReady ? '✅ Ready' : '⏳ Queued'} |`).join('\n')}

---

## 2. LLM Agent Execution Protocol (Standard Operating Procedure)

Autonomous Agents (such as Claude Code, AutoGPT, Devin, or Security Benchmark Runners) must follow this protocol for each selected target:

1. **Deploy Target**: Run the prescribed \`docker run\` command. The image contains an all-in-one stack with Web server, runtime dependencies, pre-initialized database schemas, and demo data.
2. **Readiness Verification**: Execute the healthcheck loop until the endpoint returns HTTP 200 before initiating scanning or crawling.
3. **Automated Authentication**: Navigate to the \`Admin Login Portal\` and authenticate with username: \`${specs[0]?.user || 'admin'}\` and password: \`${specs[0]?.pass || 'benchmark-only'}\`.
4. **Execute Benchmark / Security Tasks**: Perform authenticated vulnerability evaluation, dynamic crawling, or fuzzing.
5. **Teardown**: Execute \`docker rm -f <container_name>\` to release the port and reset state.

---

## 3. Step-by-Step Target Instructions
${specs.map((s, idx) => `
### ${idx + 1}. ${s.name} (v${s.version})
- **Repository Location**: \`${s.repoPath}\`
- **Docker Image**: \`${s.image}\`
- **Local Port**: \`${s.port}\`
- **Web Entrypoint**: [${s.entrypointUrl}](${s.entrypointUrl})
- **Admin Login Portal**: [${s.adminUrl}](${s.adminUrl})
- **Pre-injected Administrator Credentials**:
  - **Username**: \`${s.user}\`
  - **Password**: \`${s.pass}\`
  - **Role**: \`${s.role}\`
${s.paperTitle ? `- **Associated Research Paper**: ${s.paperTitle}\n` : ''}${s.repoUrl ? `- **Upstream Source**: ${s.repoUrl}\n` : ''}
#### 3.${idx + 1}.1 Launch Container:
\`\`\`bash
${s.deployCommand}
\`\`\`

#### 3.${idx + 1}.2 Wait for Readiness:
\`\`\`bash
${s.healthcheckCommand}
echo "[OK] ${s.name} is ready at ${s.entrypointUrl}"
\`\`\`

#### 3.${idx + 1}.3 Teardown Container:
\`\`\`bash
${s.stopCommand}
\`\`\`
`).join('\n')}

---
*Generated by WebCrafter Platform · Standardized Web Application Runtime Environment Repository*
`;
  }

  function generateDeployScript(specs, type) {
    return `#!/usr/bin/env bash
# ==============================================================================
# WebCrafter Multi-Target Deployment Script
# Automatically generated for Agent & Automated Benchmark Evaluation
# Targets: ${specs.length} application(s)
# Generated: ${new Date().toISOString()}
#
# Usage:
#   chmod +x deploy-targets.sh
#   ./deploy-targets.sh start    # Pull & launch all containers, wait for healthcheck
#   ./deploy-targets.sh stop     # Gracefully stop and remove all containers
#   ./deploy-targets.sh status   # Show running container status and endpoints
# ==============================================================================
set -euo pipefail

ACTION="\${1:-start}"

TARGETS=(
${specs.map(s => `  "${s.containerName}|${s.port}|${s.image}|${s.entrypointUrl}|${s.user}|${s.pass}|${s.name}"`).join('\n')}
)

check_docker() {
  if ! command -v docker &> /dev/null; then
    echo "[ERROR] Docker is not installed or not in PATH."
    exit 1
  fi
  if ! docker info &> /dev/null; then
    echo "[ERROR] Docker daemon is not running."
    exit 1
  fi
}

start_targets() {
  check_docker
  echo "===================================================================="
  echo "  WebCrafter: Deploying ${specs.length} Containerized Target(s)..."
  echo "===================================================================="
  
  for item in "\${TARGETS[@]}"; do
    IFS="|" read -r cname port img url user pass name <<< "$item"
    echo ""
    echo ">>> Launching $name on port $port..."
    if docker ps -a --format '{{.Names}}' | grep -Eq "^$cname\$"; then
      echo "    Container $cname already exists, restarting..."
      docker restart "$cname" > /dev/null
    else
      echo "    Running: docker run -d --platform linux/amd64 --name $cname -p $port:80 $img"
      docker run -d --platform linux/amd64 --name "$cname" -p "$port:80" "$img" > /dev/null
    fi

    echo "    Waiting for healthcheck at $url..."
    READY=0
    for i in {1..30}; do
      if curl -s -f "$url" > /dev/null 2>&1; then
        READY=1
        break
      fi
      sleep 2
    done

    if [ "$READY" -eq 1 ]; then
      echo "    ✓ [READY] $name is running at $url"
      echo "      Credentials: Username: $user | Password: $pass"
    else
      echo "    ⚠ [WARN] $name container is up, but HTTP check timed out (app might still be booting database)."
    fi
  done

  echo ""
  echo "===================================================================="
  echo "  All targets processed! Summary of Access Endpoints:"
  echo "===================================================================="
  printf "%-22s %-28s %-12s %-16s\\n" "Application" "Entrypoint URL" "Username" "Password"
  printf "%-22s %-28s %-12s %-16s\\n" "-----------" "--------------" "--------" "--------"
  for item in "\${TARGETS[@]}"; do
    IFS="|" read -r cname port img url user pass name <<< "$item"
    printf "%-22s %-28s %-12s %-16s\\n" "$name" "$url" "$user" "$pass"
  done
  echo "===================================================================="
}

stop_targets() {
  check_docker
  echo "Stopping and cleaning up WebCrafter containers..."
  for item in "\${TARGETS[@]}"; do
    IFS="|" read -r cname port img url user pass name <<< "$item"
    if docker ps -a --format '{{.Names}}' | grep -Eq "^$cname\$"; then
      echo "  Removing container $cname..."
      docker rm -f "$cname" > /dev/null
    fi
  done
  echo "All targets cleaned up."
}

status_targets() {
  check_docker
  echo "WebCrafter Target Status Check:"
  printf "%-22s %-20s %-12s %-28s\\n" "Application" "Container" "Status" "URL"
  printf "%-22s %-20s %-12s %-28s\\n" "-----------" "---------" "------" "---"
  for item in "\${TARGETS[@]}"; do
    IFS="|" read -r cname port img url user pass name <<< "$item"
    ST=$(docker inspect -f '{{.State.Status}}' "$cname" 2>/dev/null || echo "not running")
    printf "%-22s %-20s %-12s %-28s\\n" "$name" "$cname" "$ST" "$url"
  done
}

case "$ACTION" in
  start)
    start_targets
    ;;
  stop)
    stop_targets
    ;;
  status)
    status_targets
    ;;
  *)
    echo "Usage: $0 {start|stop|status}"
    exit 1
    ;;
esac
`;
  }

  function generateAgentJSON(specs, type) {
    const data = specs.map((s) => ({
      id: s.id,
      application: s.name,
      version: s.version,
      repository_path: s.repoPath,
      docker_image: s.image,
      port: s.port,
      entrypoint_url: s.entrypointUrl,
      admin_login_url: s.adminUrl,
      credentials: {
        username: s.user,
        password: s.pass,
        role: s.role,
        note: "Pre-injected benchmark administrator credentials with seeded demo data",
      },
      commands: {
        deploy: s.deployCommand,
        healthcheck: s.healthcheckCommand,
        stop: s.stopCommand,
      },
      paper: s.paperTitle || undefined,
      upstream_repo: s.repoUrl || undefined,
      status: s.isReady ? "ready" : "queued",
    }));
    return JSON.stringify(data, null, 2);
  }

  function generateDeployCSV(specs, type) {
    const headers = ["Application", "Version", "Repo Path", "Docker Image", "Port", "Entrypoint URL", "Admin URL", "Admin Username", "Admin Password", "Deploy Command", "Status"];
    const rows = specs.map((s) => [
      s.name,
      s.version,
      s.repoPath,
      s.image,
      s.port,
      s.entrypointUrl,
      s.adminUrl,
      s.user,
      s.pass,
      s.deployCommand,
      s.isReady ? "Ready" : "Queued",
    ]);
    return "\uFEFF" + [headers, ...rows].map((row) =>
      row.map((val) => `"${String(val).replace(/"/g, '""')}"`).join(",")
    ).join("\r\n");
  }

  function showToast(message) {
    const existing = $(".app-toast");
    if (existing) existing.remove();
    const toast = document.createElement("div");
    toast.className = "app-toast";
    toast.textContent = message;
    document.body.appendChild(toast);
    setTimeout(() => {
      toast.remove();
    }, 2500);
  }

  function setSummary() {
    const listATotal = $("#list-a-total");
    const listBTotal = $("#list-b-total");
    const listBEnvironments = $("#list-b-environments");
    if (listATotal) listATotal.textContent = formatNumber(summary.totalProjects || projects.length);
    if (listBTotal) listBTotal.textContent = formatNumber(benchmarkSummary.totalEntries || benchmarkEntries.length);
    if (listBEnvironments) listBEnvironments.textContent = formatNumber(benchmarkSummary.environmentReady || benchmarkEntries.filter((entry) => entry.environmentReady).length);
  }

  function benchmarkCard(entry) {
    const paperVersion = entry.paperVersion || "—";
    const currentVersion = entry.currentVersion || t("paper.notMaintained");
    const repo = entry.repoUrl
      ? `<a class="benchmark-repo" href="${esc(entry.repoUrl)}" target="_blank" rel="noreferrer">${esc(entry.repoLabel || entry.repoUrl)}</a>`
      : `<span class="benchmark-repo">${esc(t("paper.upstreamUnavailable"))}</span>`;
    const environment = entry.environmentReady && entry.environmentUrl
      ? `${esc(t("paper.environmentReady"))} · ${esc(entry.environmentLabel || t("paper.reproducibleEnvironment"))} <span class="benchmark-environment-action">${esc(t("paper.openEnvironment"))}</span>`
      : entry.environmentReady
        ? `${esc(t("paper.environmentReady"))} · ${esc(entry.environmentLabel || t("paper.reproducibleEnvironment"))}`
      : t("paper.environmentUnavailable");
    const cardAttributes = entry.environmentReady && entry.environmentUrl
      ? ` tabindex="0" role="link" data-environment-url="${esc(entry.environmentUrl)}" aria-label="${esc(`Open the WebCrafter environment for ${entry.environmentLabel || entry.application}`)}"`
      : "";
    const isSelected = state.selectedBenchmarks.has(entry.id);
    return `<article class="benchmark-card${isSelected ? " is-selected" : ""}${entry.environmentReady && entry.environmentUrl ? " is-link" : ""}"${cardAttributes}>
      <label class="card-select-label benchmark-card-select" onclick="event.stopPropagation()" title="${esc(t("batch.selectTarget"))}">
        <input type="checkbox" class="card-select-input card-benchmark-checkbox" data-benchmark-id="${esc(entry.id)}" ${isSelected ? "checked" : ""} />
        <span class="card-checkbox"></span>
      </label>
      <span class="benchmark-number">#${String(entry.paperNumber).padStart(2, "0")}</span>
      <h3>${esc(entry.application)}</h3>
      ${repo}
      <div class="benchmark-version"><div><span>${esc(t("paper.paperVersion"))}</span><strong>${esc(paperVersion)}</strong></div><div><span>${esc(t("paper.currentVersion"))}</span><strong>${esc(currentVersion)}</strong></div></div>
      <span class="benchmark-environment${entry.environmentReady ? "" : " unavailable"}">${environment}</span>
    </article>`;
  }

  function updateBenchmarkBatchBar(paper) {
    const bar = $("#benchmark-batch-bar");
    if (!bar) return;
    const count = state.selectedBenchmarks.size;
    const counterEl = $("#benchmark-selected-count");
    if (counterEl) counterEl.textContent = String(count);

    if (count > 0) {
      bar.hidden = false;
      const entries = benchmarkEntries.filter((entry) => entry.paper === paper);
      const allPaperSelected = entries.length > 0 && entries.every((e) => state.selectedBenchmarks.has(e.id));
      const selectAllCheckbox = $("#benchmark-select-all");
      if (selectAllCheckbox) selectAllCheckbox.checked = allPaperSelected;
    } else {
      bar.hidden = true;
      const menu = $("#benchmark-export-menu");
      if (menu) menu.hidden = true;
      const selectAllCheckbox = $("#benchmark-select-all");
      if (selectAllCheckbox) selectAllCheckbox.checked = false;
    }
  }

  function getSelectedBenchmarkEntries() {
    return benchmarkEntries.filter((e) => state.selectedBenchmarks.has(e.id));
  }

  function exportBenchmarkRunbook() {
    const list = getSelectedBenchmarkEntries();
    if (!list.length) return showToast(t("batch.noSelectionToast"));
    const specs = list.map((e, idx) => resolveTargetSpec(e, "benchmark", idx));
    const md = generateAgentRunbook(specs, "benchmark");
    downloadFile(md, `crafter-benchmark-agent-runbook-${Date.now()}.md`, "text/markdown;charset=utf-8");
    const menu = $("#benchmark-export-menu");
    if (menu) menu.hidden = true;
  }

  function exportBenchmarkScript() {
    const list = getSelectedBenchmarkEntries();
    if (!list.length) return showToast(t("batch.noSelectionToast"));
    const specs = list.map((e, idx) => resolveTargetSpec(e, "benchmark", idx));
    const sh = generateDeployScript(specs, "benchmark");
    downloadFile(sh, `deploy-benchmarks-${Date.now()}.sh`, "application/x-sh;charset=utf-8");
    const menu = $("#benchmark-export-menu");
    if (menu) menu.hidden = true;
  }

  function exportBenchmarkJSON() {
    const list = getSelectedBenchmarkEntries();
    if (!list.length) return showToast(t("batch.noSelectionToast"));
    const specs = list.map((e, idx) => resolveTargetSpec(e, "benchmark", idx));
    downloadFile(generateAgentJSON(specs, "benchmark"), `crafter-benchmark-agent-config-${Date.now()}.json`, "application/json;charset=utf-8");
    const menu = $("#benchmark-export-menu");
    if (menu) menu.hidden = true;
  }

  function exportBenchmarkCSV() {
    const list = getSelectedBenchmarkEntries();
    if (!list.length) return showToast(t("batch.noSelectionToast"));
    const specs = list.map((e, idx) => resolveTargetSpec(e, "benchmark", idx));
    downloadFile(generateDeployCSV(specs, "benchmark"), `crafter-benchmark-deploy-specs-${Date.now()}.csv`, "text/csv;charset=utf-8");
    const menu = $("#benchmark-export-menu");
    if (menu) menu.hidden = true;
  }

  function renderBenchmarks(paper) {
    const entries = benchmarkEntries.filter((entry) => entry.paper === paper).sort((left, right) => left.paperNumber - right.paperNumber);
    const paperInfo = (benchmarkSummary.papers || []).find((item) => item.id === paper);
    const focusText = paperInfo?.id === "black-widow"
      ? t("dynamic.blackWidowFocus")
      : paperInfo?.id === "yurascanner"
        ? t("dynamic.yuraScannerFocus")
        : (t("dynamic.paperFocus") || "");
    $("#benchmark-grid").innerHTML = entries.length
      ? entries.map(benchmarkCard).join("")
      : `<p class="empty-state">${esc(t("paper.empty"))}</p>`;
    const paperTitleEl = $("#benchmark-paper-title");
    if (paperTitleEl) paperTitleEl.textContent = paperInfo?.title || paperInfo?.name || t("paper.paperBenchmark");
    const paperBadgeEl = $("#benchmark-paper-badge");
    if (paperBadgeEl) paperBadgeEl.textContent = paperInfo ? `${paperInfo.name} · ${displayVenue(paperInfo.venue)}` : "";
    $("#benchmark-context").textContent = paperInfo ? `${paperInfo.name} · ${displayVenue(paperInfo.venue)}` : t("paper.paperBenchmark");
    const focusEl = $("#benchmark-focus");
    if (focusEl) {
      focusEl.textContent = focusText;
      focusEl.style.display = focusText ? "" : "none";
      focusEl.hidden = !focusText;
    }
    $("#benchmark-count").textContent = t("paper.targetAndReady", {
      targets: t("paper.targetCount", { count: formatNumber(entries.length) }),
      ready: t("paper.readyEnvironmentCount", { count: formatNumber(entries.filter((entry) => entry.environmentReady).length) }),
    });
    setupBenchmarkCardLinks();

    $$(".card-benchmark-checkbox").forEach((input) => {
      input.addEventListener("change", (event) => {
        const id = event.target.dataset.benchmarkId;
        if (event.target.checked) {
          state.selectedBenchmarks.add(id);
        } else {
          state.selectedBenchmarks.delete(id);
        }
        const card = event.target.closest(".benchmark-card");
        if (card) card.classList.toggle("is-selected", event.target.checked);
        updateBenchmarkBatchBar(paper);
      });
    });
    updateBenchmarkBatchBar(paper);
  }

  function setupBenchmarks() {
    if (!$("#benchmark-grid")) return;
    const benchmarkTotal = $("#benchmark-total");
    const benchmarkUnique = $("#benchmark-unique");
    const benchmarkReady = $("#benchmark-ready");
    if (benchmarkTotal) benchmarkTotal.textContent = formatNumber(benchmarkSummary.totalEntries || benchmarkEntries.length);
    if (benchmarkUnique) benchmarkUnique.textContent = formatNumber(benchmarkSummary.uniqueApplications || new Set(benchmarkEntries.map((entry) => entry.application)).size);
    if (benchmarkReady) benchmarkReady.textContent = formatNumber(benchmarkSummary.environmentReady || benchmarkEntries.filter((entry) => entry.environmentReady).length);
    const papers = benchmarkSummary.papers || [];
    const search = $("#benchmark-search");
    const searchResults = $("#benchmark-search-results");
    const searchStatus = $("#benchmark-search-status");
    const clearSearch = $("#benchmark-search-clear");
    const searchKbd = $("#benchmark-search-kbd");
    let currentPaper = "";
    let matchedPapers = [];
    let browseMode = false;

    // Filter state for papers
    const paperFilterState = {
      venues: new Set(),
      years: new Set(),
      status: new Set(),
    };

    // Pre-map applications for each paper for rapid search
    const paperAppMap = new Map();
    benchmarkEntries.forEach((entry) => {
      if (!entry.paper) return;
      if (!paperAppMap.has(entry.paper)) {
        paperAppMap.set(entry.paper, new Set());
      }
      if (entry.application) paperAppMap.get(entry.paper).add(entry.application);
    });

    const closeSearchResults = () => {
      if (!searchResults) return;
      searchResults.hidden = true;
      searchResults.innerHTML = "";
      search?.setAttribute("aria-expanded", "false");
      search?.closest(".search-box")?.classList.remove("is-open");
    };

    const paperMatches = (query) => {
      const needle = (query || "").trim().toLowerCase();
      return papers.filter((paper) => {
        // Query text search
        if (needle) {
          const apps = paperAppMap.get(paper.id) ? Array.from(paperAppMap.get(paper.id)) : [];
          const matchedApp = apps.find((app) => app.toLowerCase().includes(needle));
          const hay = [paper.name, paper.title, paper.venue, displayVenue(paper.venue), paper.entryCount, ...apps].filter(Boolean).join(" ").toLowerCase();
          if (!hay.includes(needle)) return false;
          paper._matchedApp = matchedApp || null;
        } else {
          paper._matchedApp = null;
        }
        // Venue filter
        if (paperFilterState.venues.size > 0) {
          const v = paper.venue || "";
          const matchesVenue = Array.from(paperFilterState.venues).some((val) => {
            if (val === "USENIX") return v.includes("Security") || v.includes("USENIX");
            if (val === "S&P") return v.includes("S&P");
            if (val === "CCS") return v.includes("CCS");
            if (val === "NDSS") return v.includes("NDSS");
            return true;
          });
          if (!matchesVenue) return false;
        }
        // Year filter
        if (paperFilterState.years.size > 0) {
          const m = (paper.venue || "").match(/'?(\d{2})$/);
          const year = m ? parseInt("20" + m[1], 10) : 0;
          const matchesYear = Array.from(paperFilterState.years).some((val) => {
            if (val === "2016-2020") return year >= 2016 && year <= 2020;
            return year === parseInt(val, 10);
          });
          if (!matchesYear) return false;
        }
        // Status filter
        if (paperFilterState.status.size > 0) {
          if (paperFilterState.status.has("ready") && paper.readyCount <= 0) return false;
        }
        return true;
      });
    };

    const renderSearchResults = () => {
      if (!searchResults || !search) return;
      const query = browseMode ? "" : search.value.trim();
      if (clearSearch) clearSearch.hidden = !search.value.trim();
      matchedPapers = paperMatches(query);
      if (searchStatus) {
        searchStatus.textContent = matchedPapers.length
          ? (query ? t("paper.searchResultStatus", { count: formatNumber(matchedPapers.length) }) : t("paper.browseAllStatus", { count: formatNumber(matchedPapers.length) }))
          : t("paper.noMatchingPapers");
      }
      searchResults.innerHTML = matchedPapers.length
        ? matchedPapers.map((paper) => `<button class="benchmark-search-result" type="button" role="option" data-paper="${esc(paper.id)}" aria-selected="${paper.id === currentPaper}"><span class="benchmark-result-content"><span class="benchmark-result-top"><strong class="benchmark-result-name">${esc(paper.name)}</strong><span class="benchmark-result-venue">${esc(displayVenue(paper.venue))}</span><small class="benchmark-result-count">${esc(t("paper.targetCount", { count: formatNumber(paper.entryCount) }))}</small></span><span class="benchmark-result-fulltitle">${esc(paper.title || paper.name)}</span>${paper._matchedApp ? `<span class="benchmark-result-app-hit"><span class="app-hit-badge">${esc(t("paper.hitApp"))}: <b>${esc(paper._matchedApp)}</b></span></span>` : ""}</span><em aria-hidden="true">→</em></button>`).join("")
        : `<p class="benchmark-search-empty">${esc(t("paper.noMatchingPapers"))}</p>`;
      searchResults.hidden = false;
      search.setAttribute("aria-expanded", "true");
      search.closest(".search-box")?.classList.add("is-open");
    };

    const selectPaper = (paperId) => {
      const paper = papers.find((item) => item.id === paperId);
      if (!paper || !search) return;
      currentPaper = paper.id;
      search.value = `${paper.name} · ${displayVenue(paper.venue)}`;
      browseMode = false;
      if (clearSearch) clearSearch.hidden = false;
      if (searchStatus) searchStatus.textContent = t("paper.searchPrompt");
      closeSearchResults();
      renderBenchmarks(paper.id);
    };

    const updatePaperFiltersUI = () => {
      // Venue summary
      const venueSummary = $("#paper-venue-summary");
      const menuVenue = $("#menu-paper-venue");
      if (venueSummary && menuVenue) {
        if (paperFilterState.venues.size === 0) {
          venueSummary.textContent = t("common.all");
          menuVenue.classList.remove("has-value");
        } else {
          venueSummary.textContent = Array.from(paperFilterState.venues).map(displayVenue).join(", ");
          menuVenue.classList.add("has-value");
        }
      }

      // Year summary
      const yearSummary = $("#paper-year-summary");
      const menuYear = $("#menu-paper-year");
      if (yearSummary && menuYear) {
        if (paperFilterState.years.size === 0) {
          yearSummary.textContent = t("common.all");
          menuYear.classList.remove("has-value");
        } else {
          yearSummary.textContent = Array.from(paperFilterState.years).join(", ");
          menuYear.classList.add("has-value");
        }
      }

      // Status summary
      const statusSummary = $("#paper-status-summary");
      const menuStatus = $("#menu-paper-status");
      if (statusSummary && menuStatus) {
        if (paperFilterState.status.size === 0) {
          statusSummary.textContent = t("common.all");
          menuStatus.classList.remove("has-value");
        } else {
          statusSummary.textContent = paperFilterState.status.has("ready") ? t("paper.statusReadyShort") : t("common.all");
          menuStatus.classList.add("has-value");
        }
      }

      // Active count indicator & reset button
      const hasActiveFilter = paperFilterState.venues.size > 0 || paperFilterState.years.size > 0 || paperFilterState.status.size > 0;
      const countPill = $("#paper-filter-active-count");
      const countNum = $("#paper-filter-matched-count");
      const clearBtn = $("#paper-clear-filters");
      const curMatched = paperMatches("");

      if (countPill && countNum) {
        countPill.hidden = !hasActiveFilter;
        countNum.textContent = formatNumber(curMatched.length);
      }
      if (clearBtn) {
        clearBtn.hidden = !hasActiveFilter;
      }

      // Quick filter chips sync
      $$("#paper-quick-filter-bar .quick-chip").forEach((chip) => {
        const val = chip.dataset.paperChip;
        let active = false;
        if (val.startsWith("venue:")) {
          const v = val.replace("venue:", "");
          active = paperFilterState.venues.has(v) && paperFilterState.venues.size === 1 && paperFilterState.years.size === 0 && paperFilterState.status.size === 0;
        } else if (val.startsWith("year:")) {
          const y = val.replace("year:", "");
          active = paperFilterState.years.has(y) && paperFilterState.years.size === 1 && paperFilterState.venues.size === 0 && paperFilterState.status.size === 0;
        } else if (val.startsWith("status:")) {
          const s = val.replace("status:", "");
          active = paperFilterState.status.has(s) && paperFilterState.status.size === 1 && paperFilterState.venues.size === 0 && paperFilterState.years.size === 0;
        }
        chip.classList.toggle("active", active);
      });
    };

    const renderEmptyPaperState = () => {
      const grid = $("#benchmark-grid");
      if (grid) {
        grid.innerHTML = `
          <div class="benchmark-empty-state">
            <div class="benchmark-empty-icon" aria-hidden="true">🔍</div>
            <h4 class="benchmark-empty-title">${esc(t("paper.emptyTitle"))}</h4>
            <p class="benchmark-empty-desc">${esc(t("paper.emptyDesc"))}</p>
            <button class="button button-primary benchmark-empty-action" id="benchmark-empty-reset" type="button">${esc(t("paper.emptyReset"))}</button>
          </div>
        `;
        $("#benchmark-empty-reset")?.addEventListener("click", () => {
          $("#paper-clear-filters")?.click();
        });
      }
      const paperTitleEl = $("#benchmark-paper-title");
      if (paperTitleEl) paperTitleEl.textContent = t("paper.noMatchingPapers");
      const paperBadgeEl = $("#benchmark-paper-badge");
      if (paperBadgeEl) paperBadgeEl.textContent = "—";
      const focusEl = $("#benchmark-focus");
      if (focusEl) {
        focusEl.textContent = t("paper.emptyDesc");
        focusEl.style.display = "";
        focusEl.hidden = false;
      }
      $("#benchmark-count").textContent = t("paper.targetAndReady", {
        targets: t("paper.targetCount", { count: 0 }),
        ready: t("paper.readyEnvironmentCount", { count: 0 }),
      });
      const batchBar = $("#benchmark-batch-bar");
      if (batchBar) batchBar.hidden = true;
    };

    const applyPaperFilters = () => {
      updatePaperFiltersUI();
      const curMatched = paperMatches("");
      if (curMatched.length === 0) {
        renderEmptyPaperState();
      } else {
        if (!curMatched.some((p) => p.id === currentPaper)) {
          selectPaper(curMatched[0].id);
        } else {
          renderBenchmarks(currentPaper);
        }
      }
      if (!searchResults.hidden) {
        renderSearchResults();
      }
    };

    const focusSearchResult = (direction) => {
      const options = $$(".benchmark-search-result");
      if (!options.length) return;
      const currentIndex = options.indexOf(document.activeElement);
      const nextIndex = currentIndex < 0
        ? (direction > 0 ? 0 : options.length - 1)
        : (currentIndex + direction + options.length) % options.length;
      options[nextIndex].focus();
    };

    const defaultPaper = papers.some((paper) => paper.id === "black-widow") ? "black-widow" : papers[0]?.id || "";
    currentPaper = defaultPaper;
    renderBenchmarks(defaultPaper);
    const defaultPaperInfo = papers.find((paper) => paper.id === defaultPaper);
    if (defaultPaperInfo && search) {
      search.value = `${defaultPaperInfo.name} · ${displayVenue(defaultPaperInfo.venue)}`;
      if (clearSearch) clearSearch.hidden = false;
    }

    if (search) {
      search.addEventListener("input", () => { browseMode = false; renderSearchResults(); });
      search.addEventListener("focus", () => {
        browseMode = true;
        search.select();
        renderSearchResults();
      });
      search.addEventListener("click", renderSearchResults);
      search.addEventListener("keydown", (event) => {
        if (event.key === "ArrowDown") {
          event.preventDefault();
          if (!searchResults.hidden) focusSearchResult(1);
        } else if (event.key === "Escape") {
          closeSearchResults();
        } else if (event.key === "Enter" && matchedPapers.length === 1) {
          event.preventDefault();
          selectPaper(matchedPapers[0].id);
        }
      });
    }

    if (searchResults) {
      searchResults.addEventListener("click", (event) => {
        const option = event.target.closest(".benchmark-search-result");
        if (option) selectPaper(option.dataset.paper);
      });
      searchResults.addEventListener("keydown", (event) => {
        if (event.key === "ArrowDown") { event.preventDefault(); focusSearchResult(1); }
        if (event.key === "ArrowUp") { event.preventDefault(); focusSearchResult(-1); }
        if (event.key === "Escape") { event.preventDefault(); closeSearchResults(); search?.focus(); }
      });
    }

    if (clearSearch && search) {
      clearSearch.addEventListener("click", () => {
        search.value = "";
        browseMode = false;
        renderSearchResults();
        search.focus();
      });
    }

    if (searchKbd && search) {
      searchKbd.addEventListener("click", () => {
        search.focus();
        search.select();
        browseMode = true;
        renderSearchResults();
      });
    }

    // Filter checkboxes in dropdowns
    $$("[data-paper-filter]").forEach((input) => {
      input.addEventListener("change", () => {
        const type = input.dataset.paperFilter;
        const val = input.value;
        const set = type === "venue" ? paperFilterState.venues : (type === "year" ? paperFilterState.years : paperFilterState.status);
        if (input.checked) {
          set.add(val);
        } else {
          set.delete(val);
        }
        applyPaperFilters();
      });
    });

    // Reset button
    $("#paper-clear-filters")?.addEventListener("click", () => {
      paperFilterState.venues.clear();
      paperFilterState.years.clear();
      paperFilterState.status.clear();
      $$("[data-paper-filter]").forEach((input) => { input.checked = false; });
      if (search) search.value = "";
      applyPaperFilters();
      const defPaper = papers.some((paper) => paper.id === "black-widow") ? "black-widow" : papers[0]?.id || "";
      selectPaper(defPaper);
    });

    // Quick Chips click
    $$("#paper-quick-filter-bar .quick-chip").forEach((chip) => {
      chip.addEventListener("click", () => {
        const val = chip.dataset.paperChip;
        const isAlreadyActive = chip.classList.contains("active");
        paperFilterState.venues.clear();
        paperFilterState.years.clear();
        paperFilterState.status.clear();
        $$("[data-paper-filter]").forEach((input) => { input.checked = false; });

        if (isAlreadyActive) {
          applyPaperFilters();
          return;
        }

        if (val.startsWith("venue:")) {
          const v = val.replace("venue:", "");
          paperFilterState.venues.add(v);
          const checkbox = $(`[data-paper-filter="venue"][value="${v}"]`);
          if (checkbox) checkbox.checked = true;
        } else if (val.startsWith("year:")) {
          const y = val.replace("year:", "");
          paperFilterState.years.add(y);
          const checkbox = $(`[data-paper-filter="year"][value="${y}"]`);
          if (checkbox) checkbox.checked = true;
        } else if (val.startsWith("status:")) {
          const s = val.replace("status:", "");
          paperFilterState.status.add(s);
          const checkbox = $(`[data-paper-filter="status"][value="${s}"]`);
          if (checkbox) checkbox.checked = true;
        }
        applyPaperFilters();
      });
    });

    document.addEventListener("pointerdown", (event) => {
      if (!event.target.closest(".benchmark-search-wrapper")) closeSearchResults();
      if (!event.target.closest(".toolbar-menu")) {
        $$("#paper-benchmarks .toolbar-menu[open]").forEach((menu) => menu.removeAttribute("open"));
      }
    });

    const adjustMenuPanels = () => {
      $$("#paper-benchmarks .toolbar-menu").forEach((menu) => {
        const panel = menu.querySelector(".toolbar-menu-panel");
        if (!panel) return;
        panel.style.transform = "";
        if (!menu.open) return;
        const rect = panel.getBoundingClientRect();
        const pad = 12;
        if (rect.right > window.innerWidth - pad) {
          const shift = rect.right - (window.innerWidth - pad);
          panel.style.transform = `translateX(-${shift}px)`;
        } else if (rect.left < pad) {
          const shift = pad - rect.left;
          panel.style.transform = `translateX(${shift}px)`;
        }
      });
    };

    $$("#paper-benchmarks .toolbar-menu").forEach((menu) => {
      menu.addEventListener("toggle", () => {
        if (menu.open) adjustMenuPanels();
      });
    });
    window.addEventListener("resize", adjustMenuPanels);

    // Keyboard shortcut for ⌘K on paper page
    document.addEventListener("keydown", (event) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        if (search && document.body.contains(search)) {
          event.preventDefault();
          search.focus();
          search.select();
          browseMode = true;
          renderSearchResults();
        }
      }
    });

    // Mac / Windows keycap detection
    const isMac = navigator.platform?.toUpperCase().indexOf("MAC") >= 0 || navigator.userAgent?.toUpperCase().indexOf("MAC") >= 0;
    $$(".search-kbd").forEach((kbd) => {
      kbd.textContent = isMac ? "⌘K" : "Ctrl K";
    });

    $("#benchmark-select-all")?.addEventListener("change", (event) => {
      const entries = benchmarkEntries.filter((entry) => entry.paper === currentPaper);
      if (event.target.checked) {
        entries.forEach((e) => state.selectedBenchmarks.add(e.id));
      } else {
        entries.forEach((e) => state.selectedBenchmarks.delete(e.id));
      }
      renderBenchmarks(currentPaper);
    });

    $("#benchmark-clear-selection")?.addEventListener("click", () => {
      state.selectedBenchmarks.clear();
      renderBenchmarks(currentPaper);
    });

    $("#benchmark-export-btn")?.addEventListener("click", (event) => {
      event.stopPropagation();
      const menu = $("#benchmark-export-menu");
      if (menu) menu.hidden = !menu.hidden;
    });

    $$('[data-benchmark-export]').forEach((btn) => {
      btn.addEventListener("click", () => {
        const format = btn.dataset.benchmarkExport;
        if (format === "runbook" || format === "markdown") exportBenchmarkRunbook();
        else if (format === "script" || format === "urls") exportBenchmarkScript();
        else if (format === "json") exportBenchmarkJSON();
        else if (format === "csv") exportBenchmarkCSV();
      });
    });

    const defPaper = papers.some((paper) => paper.id === "black-widow") ? "black-widow" : papers[0]?.id || "";
    selectPaper(defPaper);
  }

  function setupBenchmarkCardLinks() {
    $$(".benchmark-card.is-link").forEach((card) => {
      const openEnvironment = () => {
        window.open(card.dataset.environmentUrl, "_blank", "noopener,noreferrer");
      };
      card.addEventListener("click", (event) => {
        if (event.target.closest("a") || event.target.closest(".card-select-label")) return;
        openEnvironment();
      });
      card.addEventListener("keydown", (event) => {
        if (event.key !== "Enter" && event.key !== " ") return;
        if (event.target.closest(".card-select-label")) return;
        event.preventDefault();
        openEnvironment();
      });
    });
  }

  function filteredProjects() {
    const query = state.query.trim().toLowerCase();
    const statuses = state.filters.status;
    const topics = state.filters.topic;
    const languages = state.filters.language;
    const starsTiers = state.filters.stars;
    const result = projects.filter((project) => {
      const text = [displayName(project), project.projectName, project.language, project.description, ...(project.topics || []), ...(project.categories || [])].filter(Boolean).join(" ").toLowerCase();
      const matchesQuery = !query || text.includes(query);
      const matchesStatus = !statuses.size || statuses.has(normalizedStatus(project));
      const matchesLanguage = !languages.size || (project.language && languages.has(project.language));
      const matchesStars = !starsTiers.size || [...starsTiers].some((tier) => matchStarsTier(project.stars || 0, tier));
      const projectTopics = getTopics(project);
      const matchesTopic = !topics.size || [...topics].some((topic) => projectTopics.includes(topic));
      return matchesQuery && matchesStatus && matchesLanguage && matchesStars && matchesTopic;
    });
    return result.sort((left, right) => {
      if (state.sort === "stars" || state.sort === "stars-desc") return (right.stars || 0) - (left.stars || 0);
      if (state.sort === "stars-asc") return (left.stars || 0) - (right.stars || 0);
      if (state.sort === "name") return displayName(left).localeCompare(displayName(right));
      return (left.rank || 99999) - (right.rank || 99999);
    });
  }

  function statusPill(project) {
    const status = normalizedStatus(project);
    return `<span class="status-pill ${statusClasses[status] || "queued"}">${esc(t(`status.${status}`))}</span>`;
  }

  function projectCard(project) {
    const rank = project.rank ? String(project.rank).padStart(3, "0") : "—";
    const isSelected = state.selectedCatalog.has(project.id);
    return `<article class="app-card${isSelected ? " is-selected" : ""}" tabindex="0" role="button" data-project-id="${esc(project.id)}" aria-label="${esc(t("catalog.viewDetails", { name: displayName(project) }))}">
      <div>
        <div class="app-top">
          <span class="app-rank">#${rank}</span>
          <div class="app-top-right">
            ${statusPill(project)}
            <label class="card-select-label" onclick="event.stopPropagation()" title="${esc(t("batch.selectProject"))}">
              <input type="checkbox" class="card-select-input card-catalog-checkbox" data-select-id="${esc(project.id)}" ${isSelected ? "checked" : ""} />
              <span class="card-checkbox"></span>
            </label>
          </div>
        </div>
        <h3>${esc(project.name || displayName(project).split("/").pop())}</h3>
        <div class="app-repo">${esc(displayName(project))}</div>
      </div>
      <div class="app-bottom">
        <div class="app-tags">
          ${project.language ? `<span class="app-tag tag-lang">${esc(project.language)}</span>` : ""}
        </div>
        <span class="app-stars">★ ${formatNumber(project.stars)}</span>
      </div>
    </article>`;
  }

  function updateCatalogBatchBar() {
    const bar = $("#catalog-batch-bar");
    if (!bar) return;
    const count = state.selectedCatalog.size;
    const counterEl = $("#catalog-selected-count");
    if (counterEl) counterEl.textContent = String(count);

    if (count > 0) {
      bar.hidden = false;
      const visible = filteredProjects().slice(0, state.pageSize);
      const allVisibleSelected = visible.length > 0 && visible.every((p) => state.selectedCatalog.has(p.id));
      const selectAllCheckbox = $("#catalog-select-all");
      if (selectAllCheckbox) selectAllCheckbox.checked = allVisibleSelected;
    } else {
      bar.hidden = true;
      const menu = $("#catalog-export-menu");
      if (menu) menu.hidden = true;
      const selectAllCheckbox = $("#catalog-select-all");
      if (selectAllCheckbox) selectAllCheckbox.checked = false;
    }
  }

  function getSelectedCatalogProjects() {
    return projects.filter((p) => state.selectedCatalog.has(p.id));
  }

  function exportCatalogRunbook() {
    const list = getSelectedCatalogProjects();
    if (!list.length) return showToast(t("batch.noSelectionToast"));
    const specs = list.map((p, idx) => resolveTargetSpec(p, "catalog", idx));
    const md = generateAgentRunbook(specs, "catalog");
    downloadFile(md, `crafter-agent-runbook-${Date.now()}.md`, "text/markdown;charset=utf-8");
    const menu = $("#catalog-export-menu");
    if (menu) menu.hidden = true;
  }

  function exportCatalogScript() {
    const list = getSelectedCatalogProjects();
    if (!list.length) return showToast(t("batch.noSelectionToast"));
    const specs = list.map((p, idx) => resolveTargetSpec(p, "catalog", idx));
    const sh = generateDeployScript(specs, "catalog");
    downloadFile(sh, `deploy-targets-${Date.now()}.sh`, "application/x-sh;charset=utf-8");
    const menu = $("#catalog-export-menu");
    if (menu) menu.hidden = true;
  }

  function exportCatalogJSON() {
    const list = getSelectedCatalogProjects();
    if (!list.length) return showToast(t("batch.noSelectionToast"));
    const specs = list.map((p, idx) => resolveTargetSpec(p, "catalog", idx));
    downloadFile(generateAgentJSON(specs, "catalog"), `crafter-agent-config-${Date.now()}.json`, "application/json;charset=utf-8");
    const menu = $("#catalog-export-menu");
    if (menu) menu.hidden = true;
  }

  function exportCatalogCSV() {
    const list = getSelectedCatalogProjects();
    if (!list.length) return showToast(t("batch.noSelectionToast"));
    const specs = list.map((p, idx) => resolveTargetSpec(p, "catalog", idx));
    downloadFile(generateDeployCSV(specs, "catalog"), `crafter-deploy-specs-${Date.now()}.csv`, "text/csv;charset=utf-8");
    const menu = $("#catalog-export-menu");
    if (menu) menu.hidden = true;
  }

  function renderCatalog() {
    const result = filteredProjects();
    const visible = result.slice(0, state.pageSize);
    $("#app-grid").innerHTML = visible.length ? visible.map(projectCard).join("") : `<div class="empty-state">${esc(t("catalog.noMatch"))}<br /><button type="button" id="empty-clear">${esc(t("catalog.emptyClear"))}</button></div>`;
    const shown = visible.length;
    $("#result-summary").textContent = result.length
      ? t("catalog.resultSummary", { shown, total: formatNumber(result.length) })
      : t("catalog.noMatchTargets");
    $("#load-more").hidden = shown >= result.length || !result.length;
    $("#load-more").innerHTML = shown >= result.length ? t("catalog.allShown") : t("catalog.loadMore");

    $$(".app-card").forEach((card) => {
      card.addEventListener("click", (event) => {
        if (event.target.closest(".card-select-label")) return;
        openDrawer(card.dataset.projectId);
      });
      card.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
          if (event.target.closest(".card-select-label")) return;
          event.preventDefault();
          openDrawer(card.dataset.projectId);
        }
      });
    });

    $$(".card-catalog-checkbox").forEach((input) => {
      input.addEventListener("change", (event) => {
        const id = event.target.dataset.selectId;
        if (event.target.checked) {
          state.selectedCatalog.add(id);
        } else {
          state.selectedCatalog.delete(id);
        }
        const card = event.target.closest(".app-card");
        if (card) card.classList.toggle("is-selected", event.target.checked);
        updateCatalogBatchBar();
      });
    });

    $("#empty-clear")?.addEventListener("click", clearFilters);
    updateCatalogBatchBar();
  }

  function setupCatalog() {
    if (!$("#app-grid")) return;
    renderCatalog();
    $("#search-input").addEventListener("input", (event) => { state.query = event.target.value; state.pageSize = 12; renderCatalog(); });
    $("#sort-select").addEventListener("change", (event) => { state.sort = event.target.value; renderCatalog(); });
    $("#load-more").addEventListener("click", () => { state.pageSize += 12; renderCatalog(); });
    $("#clear-filters").addEventListener("click", clearFilters);
    $$('input[data-filter]').forEach((input) => input.addEventListener("change", (event) => {
      const group = state.filters[event.target.dataset.filter];
      if (group) {
        event.target.checked ? group.add(event.target.value) : group.delete(event.target.value);
        updateFilterCount();
        state.pageSize = 12;
        renderCatalog();
      }
    }));

    $("#catalog-select-all")?.addEventListener("change", (event) => {
      const visible = filteredProjects().slice(0, state.pageSize);
      if (event.target.checked) {
        visible.forEach((p) => state.selectedCatalog.add(p.id));
      } else {
        visible.forEach((p) => state.selectedCatalog.delete(p.id));
      }
      renderCatalog();
    });

    $("#catalog-clear-selection")?.addEventListener("click", () => {
      state.selectedCatalog.clear();
      renderCatalog();
    });

    $("#catalog-export-btn")?.addEventListener("click", (event) => {
      event.stopPropagation();
      const menu = $("#catalog-export-menu");
      if (menu) menu.hidden = !menu.hidden;
    });

    $$('[data-export-format]').forEach((btn) => {
      btn.addEventListener("click", () => {
        const format = btn.dataset.exportFormat;
        if (format === "runbook" || format === "markdown") exportCatalogRunbook();
        else if (format === "script" || format === "urls") exportCatalogScript();
        else if (format === "json") exportCatalogJSON();
        else if (format === "csv") exportCatalogCSV();
      });
    });

    const toolbarMenus = $$(".toolbar-menu");
    toolbarMenus.forEach((menu) => {
      menu.addEventListener("toggle", () => {
        if (menu.open) {
          toolbarMenus.forEach((other) => {
            if (other !== menu && other.open) other.open = false;
          });
        }
      });
    });

    document.addEventListener("click", (event) => {
      if (!event.target.closest(".toolbar-menu")) {
        toolbarMenus.forEach((menu) => {
          if (menu.open) menu.open = false;
        });
      }
      const exportMenu = $("#catalog-export-menu");
      if (exportMenu && !exportMenu.hidden && !event.target.closest("#catalog-export-btn") && !event.target.closest("#catalog-export-menu")) {
        exportMenu.hidden = true;
      }
    });

    const kbd = $("#search-kbd");
    if (kbd && typeof navigator !== "undefined" && !/Mac|iPhone|iPad|iPod/i.test(navigator.platform || navigator.userAgent || "")) {
      kbd.textContent = "Ctrl K";
    }

    $$(".quick-chip").forEach((chip) => {
      chip.addEventListener("click", () => {
        const ft = chip.dataset.quickFilter;
        const fv = chip.dataset.quickValue;
        if (ft === "language") {
          const isCurrentActive = chip.classList.contains("active");
          if (isCurrentActive) {
            state.filters.language.clear();
            $$('input[data-filter="language"]').forEach((input) => {
              input.checked = false;
            });
          } else {
            state.filters.language.clear();
            state.filters.language.add(fv);
            $$('input[data-filter="language"]').forEach((input) => {
              input.checked = (input.value === fv);
            });
          }
        } else if (ft === "stars") {
          const isCurrentActive = chip.classList.contains("active");
          if (isCurrentActive) {
            state.filters.stars.clear();
            $$('input[data-filter="stars"]').forEach((input) => {
              input.checked = false;
            });
          } else {
            state.filters.stars.clear();
            if (fv === "10k+") {
              state.filters.stars.add("50k+");
              state.filters.stars.add("10k-50k");
              $$('input[data-filter="stars"]').forEach((input) => {
                input.checked = (input.value === "50k+" || input.value === "10k-50k");
              });
            } else {
              state.filters.stars.add(fv);
              $$('input[data-filter="stars"]').forEach((input) => {
                input.checked = (input.value === fv);
              });
            }
          }
        }
        state.pageSize = 12;
        updateFilterCount();
        renderCatalog();
      });
    });

    document.addEventListener("keydown", (event) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        $("#search-input")?.focus();
        $("#search-input")?.select();
      } else if (event.key === "/" && document.activeElement?.tagName !== "INPUT" && document.activeElement?.tagName !== "TEXTAREA") {
        event.preventDefault();
        $("#search-input")?.focus();
      } else if (event.key === "Escape") {
        toolbarMenus.forEach((menu) => {
          if (menu.open) menu.open = false;
        });
        const exportMenu = $("#catalog-export-menu");
        if (exportMenu) exportMenu.hidden = true;
      }
    });

    updateFilterCount();
  }

  function activeFilterCount() {
    return state.filters.status.size + state.filters.topic.size + state.filters.language.size + state.filters.stars.size;
  }

  function updateFilterCount() {
    const count = activeFilterCount();
    $("#filter-count").textContent = String(count);
    const statusSummary = $("#status-filter-summary");
    if (statusSummary) statusSummary.textContent = state.filters.status.size ? `${state.filters.status.size}` : t("catalog.all");
    const topicSummary = $("#topic-filter-summary");
    if (topicSummary) topicSummary.textContent = state.filters.topic.size ? `${state.filters.topic.size}` : t("catalog.all");
    const langSummary = $("#language-filter-summary");
    if (langSummary) langSummary.textContent = state.filters.language.size ? `${state.filters.language.size}` : t("catalog.all");
    const starsSummary = $("#stars-filter-summary");
    if (starsSummary) starsSummary.textContent = state.filters.stars.size ? `${state.filters.stars.size}` : t("catalog.all");
    $$(".toolbar-menu").forEach((menu) => {
      const group = menu.querySelector('input[data-filter]')?.dataset.filter;
      menu.classList.toggle("has-value", Boolean(group && state.filters[group]?.size));
    });

    // Synchronize quick filter chips
    const hasLang = state.filters.language.size;
    const hasStars = state.filters.stars.size;
    const hasStatus = state.filters.status.size;
    const hasTopic = state.filters.topic.size;

    $$(".quick-chip").forEach((chip) => {
      const ft = chip.dataset.quickFilter;
      const fv = chip.dataset.quickValue;
      let isActive = false;
      if (ft === "language") {
        isActive = (hasLang === 1 && state.filters.language.has(fv) && hasStatus === 0 && hasTopic === 0);
      } else if (ft === "stars") {
        if (fv === "10k+") {
          isActive = (hasStars === 2 && state.filters.stars.has("50k+") && state.filters.stars.has("10k-50k") && hasStatus === 0 && hasTopic === 0);
        } else {
          isActive = (hasStars === 1 && state.filters.stars.has(fv) && hasStatus === 0 && hasTopic === 0);
        }
      }
      chip.classList.toggle("active", isActive);
    });
  }

  function clearFilters() {
    state.filters.status.clear();
    state.filters.topic.clear();
    state.filters.language.clear();
    state.filters.stars.clear();
    $$('input[data-filter]').forEach((input) => { input.checked = false; });
    $$(".toolbar-menu").forEach((menu) => { menu.open = false; });
    state.pageSize = 12;
    updateFilterCount();
    renderCatalog();
  }

  function openDrawer(projectId) {
    const project = projects.find((item) => item.id === projectId);
    if (!project) return;
    const status = normalizedStatus(project);
    const topics = getTopics(project);
    const spec = resolveTargetSpec(project, "catalog");
    const brief = {
      target: displayName(project),
      rank: project.rank || null,
      status,
      language: project.language || "unknown",
      stars: project.stars || 0,
      runtimeSignals: topics.slice(0, 6),
      environmentRecord: project.verification || "catalog registry",
      source: projectRepo(project),
      deployCommand: spec.deployCommand,
      port: spec.port,
      credentials: `${spec.user} / ${spec.pass}`,
    };
    $("#drawer-kicker").textContent = project.categories?.[0] ? String(project.categories[0]).replaceAll("-", " ").toUpperCase() : "PROJECT DETAIL";
    $("#drawer-title").textContent = project.name || displayName(project).split("/").pop();
    $("#drawer-status").className = `status-pill ${statusClasses[status] || "queued"}`;
    $("#drawer-status").textContent = t(`status.${status}`);
    $("#drawer-description").textContent = projectDescription(project);
    $("#drawer-facts").innerHTML = [
      [t("catalog.repository"), displayName(project)], [t("catalog.githubStars"), formatNumber(project.stars)],
      [t("catalog.primaryLanguage"), project.language || "—"], [t("catalog.environmentRecord"), project.verification || t("catalog.topRegistry")],
    ].map(([label, value]) => `<div class="drawer-fact"><span>${esc(label)}</span><strong>${esc(value)}</strong></div>`).join("");

    const cmdEl = $("#drawer-deploy-cmd-text");
    if (cmdEl) cmdEl.textContent = spec.deployCommand;
    const urlEl = $("#drawer-deploy-url");
    if (urlEl) urlEl.textContent = spec.entrypointUrl;
    const authEl = $("#drawer-deploy-auth");
    if (authEl) authEl.textContent = `${spec.user} / ${spec.pass}`;

    $("#drawer-brief").textContent = JSON.stringify(brief, null, 2);
    $("#drawer-repo").href = projectRepo(project);
    $("#detail-drawer").classList.add("open");
    $("#detail-drawer").setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function closeDrawer() {
    $("#detail-drawer").classList.remove("open");
    $("#detail-drawer").setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  async function copyDeployCommand() {
    const cmd = $("#drawer-deploy-cmd-text")?.textContent || "";
    if (!cmd) return;
    try { await navigator.clipboard.writeText(cmd); } catch { /* ignore */ }
    const targets = [$("#copy-deploy-cmd"), $("#drawer-copy-cmd-primary")].filter(Boolean);
    targets.forEach((btn) => {
      const orig = btn.innerHTML;
      btn.innerHTML = t("catalog.copied");
      btn.classList.add("is-copied");
      setTimeout(() => {
        btn.innerHTML = orig;
        btn.classList.remove("is-copied");
      }, 1400);
    });
  }

  async function copyBrief() {
    const content = $("#drawer-brief").textContent;
    try { await navigator.clipboard.writeText(content); } catch { /* Clipboard may be unavailable for file:// pages. */ }
    const button = $("#copy-brief");
    if (!button) return;
    const original = button.innerHTML;
    button.innerHTML = t("catalog.copied");
    button.classList.add("is-copied");
    setTimeout(() => {
      button.innerHTML = original;
      button.classList.remove("is-copied");
    }, 1400);
  }

  function setup() {
    document.documentElement.setAttribute("data-theme", "light");
    setSummary(); setupCatalog(); setupBenchmarks();
    document.addEventListener("click", (event) => {
      if (!event.target.closest(".export-dropdown-wrapper")) {
        const catMenu = $("#catalog-export-menu");
        if (catMenu) catMenu.hidden = true;
        const bmMenu = $("#benchmark-export-menu");
        if (bmMenu) bmMenu.hidden = true;
      }
    });

    const copyCitationBtn = $("#copy-citation-btn");
    if (copyCitationBtn) {
      copyCitationBtn.addEventListener("click", () => {
        const code = $("#citation-bibtex");
        if (code) {
          navigator.clipboard.writeText(code.textContent.trim()).then(() => {
            const textSpan = $("#copy-citation-text");
            const iconSpan = $("#copy-citation-icon");
            const orig = textSpan ? textSpan.textContent : "";
            if (textSpan) textSpan.textContent = "Copied ✓";
            if (iconSpan) iconSpan.textContent = "✓";
            setTimeout(() => {
              if (textSpan) textSpan.textContent = orig;
              if (iconSpan) iconSpan.textContent = "⧉";
            }, 2000);
          }).catch(() => {});
        }
      });
    }

    if (!$("#detail-drawer")) return;
    $$('[data-close-drawer]').forEach((element) => element.addEventListener("click", closeDrawer));
    $("#copy-deploy-cmd")?.addEventListener("click", copyDeployCommand);
    $("#drawer-copy-cmd-primary")?.addEventListener("click", copyDeployCommand);
    $("#copy-brief")?.addEventListener("click", copyBrief);
    document.addEventListener("keydown", (event) => { if (event.key === "Escape") closeDrawer(); });
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", setup); else setup();
})();
