const STORAGE_KEY = "athena-psychology-pages";
const FILTER_KEY = "athena-psychology-tag-filter";
const ADMIN_PASSWORD = "Ooni94662873!";
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
  posts: [
    {
      id: createId(),
      title: "Attachment theory, but written like a real student note",
      date: "2025-04-24",
      readTime: "6 min",
      excerpt:
        "A softer explanation of attachment styles, internal working models, and why early relationships still appear in adult patterns.",
      content:
        "Attachment theory is often introduced in a way that feels either too simplified or too clinical. What interests me is the bridge between the two: how an evidence-based theory can also help explain the emotional logic behind patterns people actually recognise in themselves. In this post I unpack secure, anxious, avoidant, and disorganised attachment while staying careful about not turning a psychological framework into a personality quiz.\n\nI also want to think about what makes attachment theory useful in educational settings. For students, especially, it offers a language for understanding emotional regulation, closeness, and sensitivity to rejection. That does not mean every difficulty is reducible to childhood attachment, but it can offer a meaningful lens when used thoughtfully.\n\nThe part that matters most to me is nuance. Attachment theory should encourage reflection, not self-labelling.",
      tags: ["Attachment theory", "Developmental psychology"],
      featured: true
    },
    {
      id: createId(),
      title: "What social media does to self-esteem when you already overthink",
      date: "2025-04-21",
      readTime: "5 min",
      excerpt:
        "A reflective post on upward comparison, validation loops, and why scrolling can shift mood before you even notice it.",
      content:
        "One reason social media is psychologically interesting is that it can intensify processes we already know a lot about, including social comparison, attentional bias, and reinforcement. For students, the effect is not always dramatic, but it can be cumulative. A platform that keeps rewarding appearance-focused comparison may gradually change how we monitor ourselves.\n\nI am especially interested in how this intersects with identity development and self-worth. There is a difference between enjoying aesthetics online and becoming dependent on external feedback. That difference matters clinically and culturally.\n\nWhat I want from this kind of post is balance: not moral panic, but honest reflection.",
      tags: ["Social media and self-esteem", "Anxiety in students"],
      featured: true
    },
    {
      id: createId(),
      title: "Cognitive bias in everyday decision-making",
      date: "2025-04-18",
      readTime: "4 min",
      excerpt:
        "Availability, confirmation bias, and the little shortcuts that can quietly shape judgement.",
      content:
        "Cognitive biases fascinate me because they make human thinking look both efficient and vulnerable at the same time. We rely on shortcuts because we have to, but those shortcuts can mislead us in ways that feel completely sensible from the inside.\n\nThis is one of the reasons psychology communication matters. If people understand bias without feeling judged, they are more likely to notice it in their own habits, media consumption, and social conversations.",
      tags: ["Cognitive biases", "Study tips"],
      featured: false
    },
    {
      id: createId(),
      title: "A small dissertation diary for the future",
      date: "2025-04-15",
      readTime: "3 min",
      excerpt:
        "Early thoughts on choosing a topic that feels meaningful, manageable, and methodologically realistic.",
      content:
        "I am not at dissertation submission stage yet, but I already find the planning process interesting. Topic choice is not just about passion; it is also about feasibility, literature, ethics, and whether the question can be turned into a solid method.\n\nWriting about this early helps me document how research interests develop over time, which is exactly the kind of academic growth I want this site to reflect.",
      tags: ["Dissertation journey", "Research communication"],
      featured: true
    }
  ],
  resources: [
    {
      id: createId(),
      title: "Favourite textbook chapter",
      type: "Reading note",
      description:
        "Use this card for chapter summaries, lecture-linked reading, or revision notes that you want easy access to.",
      link: "#"
    },
    {
      id: createId(),
      title: "Podcast episode on student anxiety",
      type: "Podcast",
      description:
        "A placeholder slot for public-facing psychology media that feels thoughtful rather than sensational.",
      link: "#"
    },
    {
      id: createId(),
      title: "Journal article archive",
      type: "Research",
      description:
        "A section for your saved papers on trauma, attachment, social cognition, or any topic you want to keep visible.",
      link: "#"
    }
  ]
};

const siteFields = [
  ["title", "Site title"],
  ["subtitle", "Sidebar subtitle"],
  ["heroTitle", "Hero title"],
  ["heroIntro", "Hero intro"],
  ["heroImage", "Hero image URL"],
  ["aboutImage", "About image URL"],
  ["pinnedTitle", "Pinned title"],
  ["pinnedExcerpt", "Pinned excerpt"],
  ["currentlyReadingTitle", "Currently reading title"],
  ["currentlyReadingBody", "Currently reading body"],
  ["newsletterText", "Newsletter text"],
  ["aboutTitle", "About title"],
  ["aboutBody", "About body"]
];

let siteData = loadData();
let activeTag = "All";

init();

function init() {
  applyTheme();
  renderSharedLayout();
  renderCurrentPage();
  renderAdmin();
  bindEvents();
}

function loadData() {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (!stored) return structuredClone(defaultData);

  try {
    const parsed = JSON.parse(stored);
    return mergeWithDefaults(parsed);
  } catch {
    return structuredClone(defaultData);
  }
}

function mergeWithDefaults(parsed) {
  return {
    ...structuredClone(defaultData),
    ...parsed,
    theme: { ...structuredClone(defaultData.theme), ...parsed.theme },
    site: { ...structuredClone(defaultData.site), ...parsed.site }
  };
}

function saveData() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(siteData));
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
  siteData.posts
    .filter((post) => post.featured)
    .slice(0, 3)
    .forEach((post) => featuredPosts.appendChild(createPostCard(post)));
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
    threadList.innerHTML = '<div class="empty-state">No posts match this topic yet. Add one in the admin editor or switch the filter.</div>';
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
      <p class="post-detail-body">Open the threads page or create a new post from the admin editor.</p>
    `;
    relatedPosts.innerHTML = "";
    return;
  }

  document.title = `${post.title} | ${siteData.site.title}`;
  postDetail.innerHTML = `
    <p class="eyebrow">Thread</p>
    <h1>${escapeHtml(post.title)}</h1>
    <div class="thread-meta">
      <span>${escapeHtml(formatDate(post.date, "long"))}</span>
      <span>${escapeHtml(post.readTime)}</span>
    </div>
    <div class="tag-row">${post.tags.map((tag) => `<a class="post-tag" href="./threads.html?tag=${encodeURIComponent(tag)}">${escapeHtml(tag)}</a>`).join("")}</div>
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

function renderAdmin() {
  renderSiteFields();
  const tagEditor = document.querySelector("#tagEditor");
  if (tagEditor) tagEditor.value = siteData.tags.join(", ");
  renderPostEditors();
  renderResourceEditors();
}

function renderSiteFields() {
  const fieldContainer = document.querySelector("#siteFields");
  if (!fieldContainer) return;

  fieldContainer.innerHTML = "";
  siteFields.forEach(([key, label]) => {
    const wrapper = document.createElement("label");
    wrapper.className = "field-stack";
    const isLong = key.includes("Body") || key.includes("Intro") || key.includes("Excerpt");
    wrapper.innerHTML = `
      <span>${label}</span>
      ${isLong ? `<textarea data-site-field="${key}" rows="4">${escapeHtml(siteData.site[key])}</textarea>` : `<input data-site-field="${key}" value="${escapeAttribute(siteData.site[key])}" />`}
    `;
    fieldContainer.appendChild(wrapper);
  });

  appendField(fieldContainer, "aboutHighlights", "About highlights (comma-separated)", siteData.site.aboutHighlights.join(", "), true);
  appendField(fieldContainer, "featuredTopics", "Featured topics (comma-separated)", siteData.featuredTopics.join(", "), true);

  const themeIntro = document.createElement("div");
  themeIntro.className = "field-stack";
  themeIntro.innerHTML = "<strong>Theme controls</strong>";
  fieldContainer.appendChild(themeIntro);

  [
    ["blueMain", "Main color", "color"],
    ["yellowSoft", "Secondary color", "color"],
    ["blueAccent", "Accent color", "color"],
    ["creamBg", "Background color", "color"],
    ["brownText", "Text color", "color"],
    ["pinkShadow", "Decor color", "color"],
    ["fontHeading", "Heading font stack", "text"],
    ["fontBody", "Body font stack", "text"],
    ["fontHand", "Handwriting font stack", "text"]
  ].forEach(([key, label, type]) => {
    const wrapper = document.createElement("label");
    wrapper.className = "field-stack";
    wrapper.innerHTML = `
      <span>${label}</span>
      <input data-theme-field="${key}" type="${type}" value="${escapeAttribute(siteData.theme[key])}" />
    `;
    fieldContainer.appendChild(wrapper);
  });
}

function appendField(container, key, label, value, textarea) {
  const wrapper = document.createElement("label");
  wrapper.className = "field-stack";
  wrapper.innerHTML = `
    <span>${label}</span>
    ${textarea ? `<textarea data-site-field="${key}" rows="3">${escapeHtml(value)}</textarea>` : `<input data-site-field="${key}" value="${escapeAttribute(value)}" />`}
  `;
  container.appendChild(wrapper);
}

function renderPostEditors() {
  const list = document.querySelector("#postEditorList");
  if (!list) return;

  list.innerHTML = "";
  siteData.posts.forEach((post) => {
    const card = document.querySelector("#editorCardTemplate").content.firstElementChild.cloneNode(true);
    card.dataset.postId = post.id;
    card.innerHTML = `
      <label class="field-stack">
        <span>Title</span>
        <input data-field="title" value="${escapeAttribute(post.title)}" />
      </label>
      <label class="field-stack">
        <span>Date</span>
        <input data-field="date" type="date" value="${escapeAttribute(post.date)}" />
      </label>
      <label class="field-stack">
        <span>Read time</span>
        <input data-field="readTime" value="${escapeAttribute(post.readTime)}" />
      </label>
      <label class="field-stack">
        <span>Excerpt</span>
        <textarea data-field="excerpt" rows="3">${escapeHtml(post.excerpt)}</textarea>
      </label>
      <label class="field-stack">
        <span>Content</span>
        <textarea data-field="content" rows="8">${escapeHtml(post.content)}</textarea>
      </label>
      <div class="field-stack">
        <span>Tags</span>
        <div class="checkbox-grid">
          ${siteData.tags
            .map(
              (tag) => `
            <label class="checkbox-item">
              <input data-tag="${escapeAttribute(tag)}" type="checkbox" ${post.tags.includes(tag) ? "checked" : ""} />
              <span>${escapeHtml(tag)}</span>
            </label>`
            )
            .join("")}
        </div>
      </div>
      <label class="checkbox-item">
        <input data-field="featured" type="checkbox" ${post.featured ? "checked" : ""} />
        <span>Show on homepage</span>
      </label>
      <div class="editor-actions">
        <button type="button" class="secondary-button small-button" data-action="save-post">Save post</button>
        <button type="button" class="ghost-button small-button" data-action="delete-post">Delete post</button>
      </div>
    `;
    list.appendChild(card);
  });
}

function renderResourceEditors() {
  const list = document.querySelector("#resourceEditorList");
  if (!list) return;

  list.innerHTML = "";
  siteData.resources.forEach((resource) => {
    const card = document.querySelector("#editorCardTemplate").content.firstElementChild.cloneNode(true);
    card.dataset.resourceId = resource.id;
    card.innerHTML = `
      <label class="field-stack">
        <span>Title</span>
        <input data-field="title" value="${escapeAttribute(resource.title)}" />
      </label>
      <label class="field-stack">
        <span>Type</span>
        <input data-field="type" value="${escapeAttribute(resource.type)}" />
      </label>
      <label class="field-stack">
        <span>Description</span>
        <textarea data-field="description" rows="4">${escapeHtml(resource.description)}</textarea>
      </label>
      <label class="field-stack">
        <span>Link</span>
        <input data-field="link" value="${escapeAttribute(resource.link)}" />
      </label>
      <div class="editor-actions">
        <button type="button" class="secondary-button small-button" data-action="save-resource">Save resource</button>
        <button type="button" class="ghost-button small-button" data-action="delete-resource">Delete resource</button>
      </div>
    `;
    list.appendChild(card);
  });
}

function bindEvents() {
  const tagFilter = document.querySelector("#tagFilter");
  if (tagFilter) {
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

  const adminToggle = document.querySelector("#adminToggle");
  const adminModal = document.querySelector("#adminModal");
  const passwordGate = document.querySelector("#passwordGate");
  const adminPanel = document.querySelector("#adminPanel");

  if (adminToggle && adminModal && passwordGate && adminPanel) {
    adminToggle.addEventListener("click", () => {
      adminModal.showModal();
      passwordGate.hidden = false;
      adminPanel.hidden = true;
      passwordGate.reset();
      text("#passwordMessage", "");
    });

    document.querySelector("#closeAdminModal")?.addEventListener("click", () => adminModal.close());
    document.querySelector("#closeEditor")?.addEventListener("click", () => adminModal.close());

    passwordGate.addEventListener("submit", (event) => {
      event.preventDefault();
      const password = document.querySelector("#adminPassword")?.value;
      if (password !== ADMIN_PASSWORD) {
        text("#passwordMessage", "That password is incorrect.");
        return;
      }
      passwordGate.hidden = true;
      adminPanel.hidden = false;
    });
  }

  document.querySelector("#siteFields")?.addEventListener("input", (event) => {
    const siteKey = event.target.dataset.siteField;
    const themeKey = event.target.dataset.themeField;
    if (!siteKey && !themeKey) return;

    if (themeKey) {
      siteData.theme[themeKey] = event.target.value;
      applyTheme();
    } else if (siteKey === "aboutHighlights") {
      siteData.site.aboutHighlights = commaList(event.target.value);
    } else if (siteKey === "featuredTopics") {
      siteData.featuredTopics = commaList(event.target.value);
    } else {
      siteData.site[siteKey] = event.target.value;
    }

    saveData();
    rerender();
  });

  document.querySelector("#saveTags")?.addEventListener("click", () => {
    siteData.tags = commaList(document.querySelector("#tagEditor")?.value || "");
    siteData.posts = siteData.posts.map((post) => ({
      ...post,
      tags: post.tags.filter((tag) => siteData.tags.includes(tag))
    }));
    if (!siteData.tags.includes(activeTag)) activeTag = "All";
    localStorage.setItem(FILTER_KEY, activeTag);
    saveData();
    rerender();
  });

  document.querySelector("#addPost")?.addEventListener("click", () => {
    siteData.posts.unshift({
      id: createId(),
      title: "New post title",
      date: new Date().toISOString().slice(0, 10),
      readTime: "4 min",
      excerpt: "Short preview text.",
      content: "Write your full post here.",
      tags: [],
      featured: false
    });
    saveData();
    rerender();
  });

  document.querySelector("#postEditorList")?.addEventListener("click", (event) => {
    const card = event.target.closest(".editor-card");
    if (!card) return;

    const postId = card.dataset.postId;
    if (event.target.dataset.action === "save-post") {
      const post = siteData.posts.find((item) => item.id === postId);
      if (!post) return;

      post.title = card.querySelector('[data-field="title"]').value;
      post.date = card.querySelector('[data-field="date"]').value;
      post.readTime = card.querySelector('[data-field="readTime"]').value;
      post.excerpt = card.querySelector('[data-field="excerpt"]').value;
      post.content = card.querySelector('[data-field="content"]').value;
      post.featured = card.querySelector('[data-field="featured"]').checked;
      post.tags = [...card.querySelectorAll("[data-tag]:checked")].map((input) => input.dataset.tag);
      saveData();
      rerender();
    }

    if (event.target.dataset.action === "delete-post") {
      siteData.posts = siteData.posts.filter((item) => item.id !== postId);
      saveData();
      rerender();
    }
  });

  document.querySelector("#addResource")?.addEventListener("click", () => {
    siteData.resources.push({
      id: createId(),
      title: "New resource",
      type: "Resource",
      description: "Add a description here.",
      link: "#"
    });
    saveData();
    rerender();
  });

  document.querySelector("#resourceEditorList")?.addEventListener("click", (event) => {
    const card = event.target.closest(".editor-card");
    if (!card) return;

    const resourceId = card.dataset.resourceId;
    if (event.target.dataset.action === "save-resource") {
      const resource = siteData.resources.find((item) => item.id === resourceId);
      if (!resource) return;

      resource.title = card.querySelector('[data-field="title"]').value;
      resource.type = card.querySelector('[data-field="type"]').value;
      resource.description = card.querySelector('[data-field="description"]').value;
      resource.link = card.querySelector('[data-field="link"]').value || "#";
      saveData();
      rerender();
    }

    if (event.target.dataset.action === "delete-resource") {
      siteData.resources = siteData.resources.filter((item) => item.id !== resourceId);
      saveData();
      rerender();
    }
  });

  document.querySelector("#exportData")?.addEventListener("click", () => {
    const box = document.querySelector("#importExportBox");
    if (box) box.value = JSON.stringify(siteData, null, 2);
  });

  document.querySelector("#importData")?.addEventListener("click", () => {
    const box = document.querySelector("#importExportBox");
    if (!box) return;

    try {
      siteData = mergeWithDefaults(JSON.parse(box.value));
      saveData();
      rerender();
    } catch {
      box.value = "Invalid JSON. Check the pasted content and try again.";
    }
  });

  document.querySelector("#resetData")?.addEventListener("click", () => {
    siteData = structuredClone(defaultData);
    activeTag = "All";
    localStorage.setItem(FILTER_KEY, activeTag);
    saveData();
    rerender();
  });
}

function rerender() {
  applyTheme();
  renderSharedLayout();
  renderCurrentPage();
  renderAdmin();
}

function createPostCard(post) {
  const card = document.createElement("article");
  card.className = "thread-card";
  card.innerHTML = `
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

function commaList(value) {
  return value
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
}

function formatDate(value, style) {
  return new Date(value).toLocaleDateString("en-GB", {
    day: "numeric",
    month: style === "long" ? "long" : "short",
    year: "numeric"
  });
}

function createId() {
  if (typeof crypto !== "undefined" && crypto.randomUUID) return crypto.randomUUID();
  return `id-${Date.now()}-${Math.random().toString(16).slice(2)}`;
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
