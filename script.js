const FILTER_KEY = "athena-psychology-tag-filter";
const PHOTO_PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='1000' viewBox='0 0 800 1000'%3E%3Crect width='800' height='1000' fill='%23eaf4ff'/%3E%3Crect x='36' y='36' width='728' height='928' rx='28' fill='%23fffdf8' stroke='%238fc8ff' stroke-dasharray='14 10' stroke-width='4'/%3E%3Ctext x='400' y='470' text-anchor='middle' font-family='Georgia' font-size='44' fill='%235f4d45'%3EAdd your photo here%3C/text%3E%3Ctext x='400' y='530' text-anchor='middle' font-family='Georgia' font-size='24' fill='%237a96b2'%3Esoft portrait, study desk, or collage%3C/text%3E%3C/svg%3E";

const defaultData = {
  theme: {
    blueMain: "#cfe6ff",
    blueAccent: "#8fc8ff",
    yellowSoft: "#f8e8a9",
    creamBg: "#fffaf1",
    brownText: "#5f4d45",
    pinkShadow: "#f9dbe7",
    fontHeading: '"Bettermilk", "Iowan Old Style", "Palatino Linotype", serif',
    fontBody: '"Milk Choco", "Trebuchet MS", "Gill Sans", sans-serif',
    fontHand: '"LiebeHeide", "Segoe Print", "Bradley Hand", cursive'
  },
  site: {
    title: "Athena's Psychology Pages",
    subtitle:
      "A coquette blue notebook for reflective psychology writing, study notes, and research-minded posts.",
    heroTitle: "Soft study notes, clinical curiosity, and evidence-based reflections.",
    heroIntro:
      "This blog is part diary, part academic portfolio. I use it to turn psychology concepts into clear, thoughtful posts that feel personal without losing rigour.",
    heroImage:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=80",
    aboutImage:
      "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=900&q=80",
    pinnedTitle: "Why I care about accessible psychological writing",
    pinnedExcerpt:
      "A pinned note on translating research into warm, readable language for students, future clients, and wider audiences.",
    currentlyReadingTitle: "The Body Keeps the Score + lecture notes on cognitive bias",
    currentlyReadingBody:
      "I am especially interested in how trauma, memory, and meaning-making shape behaviour and therapeutic outcomes.",
    newsletterText:
      "A gentle monthly round-up of psychology notes, reflections from King's, and useful resources I would actually recommend.",
    aboutTitle: "Athena | Year 2 Psychology at King's College London",
    aboutBody:
      "I am Athena, a second-year psychology student at King's College London with a growing interest in clinical psychology, reflective writing, and research communication. I want this space to show that academic work can be elegant, readable, and genuinely helpful. My long-term direction is entrepreneurial clinical psychology: combining strong evidence, warm communication, and creative public-facing work.",
    aboutHighlights: [
      "Research minded and clinically curious",
      "Reflective but accessible communicator",
      "Interested in student wellbeing and mental health literacy",
      "Building a polished university-facing portfolio"
    ]
  },
  tags: [
    "Attachment theory",
    "Anxiety in students",
    "Social media and self-esteem",
    "Cognitive biases",
    "Trauma",
    "Developmental psychology",
    "Study tips",
    "Book reviews",
    "Dissertation journey",
    "Research communication"
  ],
  featuredTopics: [
    "Clinical psychology",
    "Mental health advocacy",
    "Reflective writing",
    "Student wellbeing",
    "Research communication"
  ],
  posts: [],
  resources: [
    {
      id: "favourite-textbook-chapter",
      title: "Favourite textbook chapter",
      type: "Reading note",
      description:
        "Use this card for chapter summaries, lecture-linked reading, or revision notes that you want easy access to.",
      link: "#"
    },
    {
      id: "podcast-student-anxiety",
      title: "Podcast episode on student anxiety",
      type: "Podcast",
      description:
        "A placeholder slot for public-facing psychology media that feels thoughtful rather than sensational.",
      link: "#"
    },
    {
      id: "journal-article-archive",
      title: "Journal article archive",
      type: "Research",
      description:
        "A section for your saved papers on trauma, attachment, social cognition, or any topic you want to keep visible.",
      link: "#"
    }
  ]
};

let siteData = structuredClone(defaultData);
let activeTag = "All";

init();

async function init() {
  siteData = await loadSiteData();
  rerenderPublic();
  bindEvents();
}

async function loadSiteData() {
  try {
    const [settings, posts, resources] = await Promise.all([
      loadJson("./content/settings.json"),
      loadJson("./content/generated/posts.json"),
      loadJson("./content/generated/resources.json")
    ]);

    return mergeWithDefaults({
      ...settings,
      posts: Array.isArray(posts.items) ? posts.items : [],
      resources: Array.isArray(resources.items) ? resources.items : []
    });
  } catch (error) {
    console.error("Falling back to default content.", error);
    return structuredClone(defaultData);
  }
}

async function loadJson(path) {
  const response = await fetch(path, { cache: "no-store" });
  if (!response.ok) {
    throw new Error(`Could not load ${path}: ${response.status}`);
  }
  return response.json();
}

function mergeWithDefaults(parsed) {
  return {
    ...structuredClone(defaultData),
    ...parsed,
    theme: { ...structuredClone(defaultData.theme), ...parsed.theme },
    site: { ...structuredClone(defaultData.site), ...parsed.site },
    tags: Array.isArray(parsed.tags) ? parsed.tags : structuredClone(defaultData.tags),
    featuredTopics: Array.isArray(parsed.featuredTopics) ? parsed.featuredTopics : structuredClone(defaultData.featuredTopics),
    posts: normalizePosts(parsed.posts),
    resources: normalizeResources(parsed.resources)
  };
}

function normalizePosts(posts) {
  if (!Array.isArray(posts)) return structuredClone(defaultData.posts);

  return posts
    .filter(Boolean)
    .map((post, index) => ({
      ...structuredClone(defaultData.posts[0]),
      ...post,
      id: post.id || `post-${index + 1}`,
      tags: Array.isArray(post.tags) ? post.tags : []
    }))
    .sort((a, b) => new Date(b.date) - new Date(a.date));
}

function normalizeResources(resources) {
  if (!Array.isArray(resources)) return structuredClone(defaultData.resources);

  return resources
    .filter(Boolean)
    .map((resource, index) => ({
      ...structuredClone(defaultData.resources[0]),
      ...resource,
      id: resource.id || `resource-${index + 1}`
    }));
}

function rerenderPublic() {
  applyTheme();
  renderSharedLayout();
  renderCurrentPage();
}

function renderSharedLayout() {
  text("#siteTitle", siteData.site.title);
  text("#siteSubtitle", siteData.site.subtitle);

  document.querySelectorAll("[data-nav]").forEach((link) => {
    link.classList.toggle("is-active", link.dataset.nav === currentPage());
  });

  const topicPills = document.querySelector("#topicPills");
  if (topicPills) {
    topicPills.innerHTML = "";
    siteData.featuredTopics.forEach((topic) => topicPills.appendChild(createTag(topic, "topic-pill")));
  }

  html("#sidebarReading", `
    <strong>${escapeHtml(siteData.site.currentlyReadingTitle)}</strong>
    <p>${escapeHtml(siteData.site.currentlyReadingBody)}</p>
  `);

  html("#sidebarPinned", `
    <strong>${escapeHtml(siteData.site.pinnedTitle)}</strong>
    <p>${escapeHtml(siteData.site.pinnedExcerpt)}</p>
  `);
}

function renderCurrentPage() {
  switch (currentPage()) {
    case "home":
      renderHome();
      break;
    case "about":
      renderAbout();
      break;
    case "threads":
      renderThreads();
      break;
    case "reading-room":
      renderResources();
      break;
    case "post":
      renderPostPage();
      break;
    default:
      break;
  }
}

function renderHome() {
  text("#heroTitle", siteData.site.heroTitle);
  text("#heroIntro", siteData.site.heroIntro);
  setImage("#heroImage", siteData.site.heroImage);

  html("#pinnedThread", `
    <h3>${escapeHtml(siteData.site.pinnedTitle)}</h3>
    <p>${escapeHtml(siteData.site.pinnedExcerpt)}</p>
  `);

  html("#readingCard", `
    <h3>${escapeHtml(siteData.site.currentlyReadingTitle)}</h3>
    <p>${escapeHtml(siteData.site.currentlyReadingBody)}</p>
  `);

  html("#newsletterCard", `<p>${escapeHtml(siteData.site.newsletterText)}</p>`);

  const featuredPosts = document.querySelector("#featuredPosts");
  if (!featuredPosts) return;

  featuredPosts.innerHTML = "";
  const featured = siteData.posts.filter((post) => post.featured).slice(0, 3);
  if (featured.length === 0) {
    featuredPosts.innerHTML = `
      <article class="empty-state empty-state--decorated">
        <strong>Your first featured thread goes here.</strong>
        <p>Add a post in the admin with a banner image, tags, and a featured toggle to pin it on the home page.</p>
      </article>
    `;
    return;
  }

  featured.forEach((post) => featuredPosts.appendChild(createPostCard(post)));
}

function renderAbout() {
  setImage("#aboutImage", siteData.site.aboutImage);
  text("#aboutTitle", siteData.site.aboutTitle);
  text("#aboutBody", siteData.site.aboutBody);

  const aboutHighlights = document.querySelector("#aboutHighlights");
  if (!aboutHighlights) return;

  aboutHighlights.innerHTML = "";
  siteData.site.aboutHighlights.forEach((item) => {
    const chip = document.createElement("div");
    chip.className = "highlight-chip";
    chip.textContent = item;
    aboutHighlights.appendChild(chip);
  });
}

function renderThreads() {
  const tagFilter = document.querySelector("#tagFilter");
  const threadList = document.querySelector("#threadList");
  if (!tagFilter || !threadList) return;

  const params = new URLSearchParams(window.location.search);
  const requestedTag = params.get("tag") || localStorage.getItem(FILTER_KEY) || "All";
  activeTag = ["All", ...siteData.tags].includes(requestedTag) ? requestedTag : "All";

  const tags = ["All", ...siteData.tags];
  tagFilter.innerHTML = tags.map((tag) => `<option value="${escapeAttribute(tag)}">${escapeHtml(tag)}</option>`).join("");
  tagFilter.value = activeTag;

  threadList.innerHTML = "";
  const visiblePosts = siteData.posts.filter((post) => activeTag === "All" || post.tags.includes(activeTag));

  if (visiblePosts.length === 0) {
    threadList.innerHTML = `
      <div class="empty-state empty-state--decorated">
        <strong>No threads yet.</strong>
        <p>Use the admin dashboard to create your first post with a banner image, tags, and your own layout style.</p>
      </div>
    `;
    return;
  }

  visiblePosts.forEach((post) => threadList.appendChild(createPostCard(post)));
}

function renderResources() {
  const resourceList = document.querySelector("#resourceList");
  if (!resourceList) return;

  resourceList.innerHTML = "";
  siteData.resources.forEach((resource) => {
    const card = document.createElement(resource.link && resource.link !== "#" ? "a" : "article");
    card.className = "resource-card";
    if (card.tagName === "A") {
      card.href = resource.link;
      card.target = "_blank";
      card.rel = "noreferrer";
    }
    card.innerHTML = `
      <div class="resource-meta">
        <span class="post-tag">${escapeHtml(resource.type)}</span>
      </div>
      <h3>${escapeHtml(resource.title)}</h3>
      <p>${escapeHtml(resource.description)}</p>
    `;
    resourceList.appendChild(card);
  });
}

function renderPostPage() {
  const postDetail = document.querySelector("#postDetail");
  const relatedPosts = document.querySelector("#relatedPosts");
  if (!postDetail || !relatedPosts) return;

  const params = new URLSearchParams(window.location.search);
  const postId = params.get("id");
  const post = siteData.posts.find((item) => item.id === postId);

  if (!post) {
    document.title = `Post not found | ${siteData.site.title}`;
    postDetail.innerHTML = `
      <p class="eyebrow">Thread not found</p>
      <h1>This post does not exist yet.</h1>
      <p class="post-detail-body">Open the threads page or create a new post in the CMS.</p>
    `;
    relatedPosts.innerHTML = "";
    return;
  }

  document.title = `${post.title} | ${siteData.site.title}`;
  postDetail.className = `scrapbook-card post-detail post-detail--${escapeClass(post.layoutStyle || "essay")}`;
  postDetail.innerHTML = `
    <p class="eyebrow">Thread</p>
    <h1>${escapeHtml(post.title)}</h1>
    <div class="thread-meta">
      <span>${escapeHtml(formatDate(post.date, "long"))}</span>
      <span>${escapeHtml(post.readTime)}</span>
    </div>
    <div class="tag-row">
      <span class="post-tag post-layout-chip">${escapeHtml(labelForLayout(post.layoutStyle))}</span>
      ${post.tags.map((tag) => `<a class="post-tag" href="./threads.html?tag=${encodeURIComponent(tag)}">${escapeHtml(tag)}</a>`).join("")}
    </div>
    ${post.coverImage ? `<div class="post-detail-cover"><img src="${escapeAttribute(post.coverImage)}" alt="${escapeAttribute(post.title)} cover image" /></div>` : ""}
    <div class="post-detail-body">${post.content
      .split("\n\n")
      .map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`)
      .join("")}</div>
  `;

  relatedPosts.innerHTML = "";
  siteData.posts
    .filter((item) => item.id !== post.id)
    .slice(0, 3)
    .forEach((item) => relatedPosts.appendChild(createPostCard(item)));
}

function bindEvents() {
  const tagFilter = document.querySelector("#tagFilter");
  if (!tagFilter) return;

  tagFilter.addEventListener("change", (event) => {
    activeTag = event.target.value;
    localStorage.setItem(FILTER_KEY, activeTag);

    const url = new URL(window.location.href);
    if (activeTag === "All") {
      url.searchParams.delete("tag");
    } else {
      url.searchParams.set("tag", activeTag);
    }

    window.history.replaceState({}, "", url);
    renderThreads();
  });
}

function createPostCard(post) {
  const card = document.createElement("article");
  card.className = "thread-card";
  card.innerHTML = `
    ${post.coverImage ? `<div class="thread-card-media"><img src="${escapeAttribute(post.coverImage)}" alt="${escapeAttribute(post.title)} cover image" /></div>` : ""}
    <div class="thread-meta">
      <span>${escapeHtml(formatDate(post.date, "short"))}</span>
      <span>${escapeHtml(post.readTime)}</span>
    </div>
    <h3>${escapeHtml(post.title)}</h3>
    <p>${escapeHtml(post.excerpt)}</p>
    <div class="tag-row">${post.tags
      .map((tag) => `<a class="post-tag" href="./threads.html?tag=${encodeURIComponent(tag)}">${escapeHtml(tag)}</a>`)
      .join("")}</div>
    <a class="post-link" href="./post.html?id=${encodeURIComponent(post.id)}">Read more</a>
  `;
  return card;
}

function createTag(label, className) {
  const pill = document.createElement("span");
  pill.className = className;
  pill.textContent = label;
  return pill;
}

function applyTheme() {
  const root = document.documentElement;
  root.style.setProperty("--blue-main", siteData.theme.blueMain);
  root.style.setProperty("--blue-accent", siteData.theme.blueAccent);
  root.style.setProperty("--yellow-soft", siteData.theme.yellowSoft);
  root.style.setProperty("--cream-bg", siteData.theme.creamBg);
  root.style.setProperty("--brown-text", siteData.theme.brownText);
  root.style.setProperty("--pink-shadow", siteData.theme.pinkShadow);
  root.style.setProperty("--font-heading", siteData.theme.fontHeading);
  root.style.setProperty("--font-body", siteData.theme.fontBody);
  root.style.setProperty("--font-hand", siteData.theme.fontHand);
}

function currentPage() {
  return document.body.dataset.page || "home";
}

function setImage(selector, source) {
  const image = document.querySelector(selector);
  if (!image) return;
  image.src = source || PHOTO_PLACEHOLDER;
}

function text(selector, value) {
  const node = document.querySelector(selector);
  if (node) node.textContent = value;
}

function html(selector, value) {
  const node = document.querySelector(selector);
  if (node) node.innerHTML = value;
}

function formatDate(value, style) {
  return new Date(value).toLocaleDateString("en-GB", {
    day: "numeric",
    month: style === "long" ? "long" : "short",
    year: "numeric"
  });
}

function labelForLayout(value) {
  switch (value) {
    case "notebook":
      return "Notebook layout";
    case "moodboard":
      return "Moodboard layout";
    default:
      return "Essay layout";
  }
}

function escapeClass(value) {
  return String(value).replace(/[^a-z0-9_-]/gi, "");
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function escapeAttribute(value) {
  return escapeHtml(value).replaceAll("`", "&#96;");
}
