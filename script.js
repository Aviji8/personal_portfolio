const aboutData = {
  biography: "I'm an AI engineer focused on building intelligent systems with deep roots in AR/VR, large language models, and robotics. Currently pursuing a master’s degree at NTU and actively contributing to research and development in the AI space.",
  education: [
    {
      degree: "MS in Networking and Multimedia",
      emphasis: "Advisor: Prof. Yung-Jen Hsu",
      university: "National Taiwan University, Taipei, Taiwan",
      date: "Expected Jul 2025"
    },
    {
      degree: "BS in Computer Science and Engineering",
      emphasis: "CUTM, Bhubaneswar, India",
      university: "Centurion University of Technology and Management",
      date: "2020"
    }
  ],
  experience: [
    {
      title: "AI/ML Intern",
      team: "XRSPACE, Taipei, Taiwan",
      date: "Aug 2024 – Present",
      detail: "Conducting R&D on AI agent decision-making using intent classification for production deployment. Solving challenges in agent memory, knowledge graphs, and retrieval mechanisms by leveraging insights from research papers."
    },
    {
      title: "Most GASE Summer Internship",
      team: "Robotics & CV, NTNU, Taipei, Taiwan",
      date: "Jun 2019 – Aug 2019",
      detail: "Developed a smart visual tracking system on humanoid robot (THORMANG3)."
    }
  ]
};

const container = document.getElementById("about-content");

container.innerHTML = `
  <h2>Biography</h2>
  <p>${aboutData.biography}</p>
  <h2>Education</h2>
  <div class="education-grid">
    ${aboutData.education.map(item => `
      <div class="edu-item">
        <strong>${item.degree}</strong><br />
        <span class="emphasis">${item.emphasis}</span><br />
        <span class="university">${item.university}</span><br />
        <span class="date">${item.date}</span>
      </div>
    `).join("")}
  </div>
  <h2>Experience</h2>
  <div class="education-grid">
    ${aboutData.experience.map(item => `
      <div class="edu-item">
        <strong>${item.title}</strong><br />
        <span class="emphasis">${item.team}</span><br />
        <span class="date">${item.date}</span><br />
        <p>${item.detail}</p>
      </div>
    `).join("")}
  </div>
`;

// Split Projects
const topProjects = [
  {
    title: "Ongoing Agentic AI Research",
    tag: "LLMs & Agents",
    description: "Closely researching LLM prompting, Retrieval-Augmented Generation (RAG), agent memory design, multi-agent orchestration, and reasoning in real-world deployments.",
    link: "#"
  },
  {
    title: "Intent Classification (Ongoing)",
    tag: "LLM + Embedding Hybrid",
    description: "Developed a hybrid intent classification model combining an embedding-based model and an LLM for reasoning-driven decision-making. Optimized accuracy, scalability, and cost.",
    link: "#"
  },
  {
    title: "2D–3D Human Pose Estimation",
    tag: "Computer Vision",
    description: "Optimized selection of the best 3D human pose from multiple predicted 3D poses derived from 2D keypoints, with minimal computational cost.",
    link: "#"
  },
  {
    title: "Paired-EMS for VR & Haptics",
    tag: "HCI + VR",
    description: "Developed a haptic VR system using EMS and Air-jet sensors in collaboration with NTU's HCI Lab to provide realistic experiences for sports applications.",
    link: "#"
  }
];

const moreProjects = [
  {
    title: "Delivery Robot for Quarantine Center",
    tag: "Robotics & CV",
    description: "Designed a mobile robot for contactless delivery. Integrated indoor route-planning and gesture recognition CV model for autonomous navigation and human interaction.",
    link: "#"
  }
];

// Inject Top Projects
const projectSection = document.querySelector("#projects");

projectSection.innerHTML = `
  <h2>My Latest Projects</h2>
  <div class="project-grid">
    ${topProjects.map(p => `
      <div class="project-card">
        <div class="project-tag">${p.tag}</div>
        <h3>${p.title}</h3>
        <p>${p.description}</p>
        <a class="button" href="${p.link}" target="_blank">View Project</a>
      </div>
    `).join("")}
  </div>
  <a href="#more-projects" class="button" style="margin-top: 2rem;">More Projects</a>
`;

// Create More Projects Section
const moreProjectsSection = document.createElement('section');
moreProjectsSection.id = "more-projects";
moreProjectsSection.className = "projects";
moreProjectsSection.innerHTML = `
  <h2>More Projects</h2>
  <div class="project-grid">
    ${moreProjects.map(p => `
      <div class="project-card">
        <div class="project-tag">${p.tag}</div>
        <h3>${p.title}</h3>
        <p>${p.description}</p>
        <a class="button" href="${p.link}" target="_blank">View Project</a>
      </div>
    `).join("")}
  </div>
`;

document.body.appendChild(moreProjectsSection);
