const projects = [
	{
		title: "Elo Tag",
		type: "E-Commerce",
		img: "assets/img/elo-tag.png",
		alt: "elo-tag",
		details:
			"Elo Tag is an e-commerce shop that offers an innovative alternative to traditional calling cards—people can contact you using the Elo Card, which leverages NFC technology.",
		tech: ["React", "Next.js", "Firebase", "Tailwind"],
		link: "https://elo-store.vercel.app/",
	},
	{
		title: "Sneaker Street Inventory",
		type: "Inventory System",
		img: "assets/img/sneaker-street.png",
		alt: "sneaker-street",
		details:
			"A retail shop specializing in branded shoes such as Nike, Adidas, Puma, and more. An inventory system to manage and track incoming and outgoing products, as well as monitor total income and profit.",
		tech: ["React", "Next.js", "Supabase", "Tailwind"],
		link: "https://sneaker-street-inventory.vercel.app/",
	},
	{
		title: "EAC MISD",
		type: "Ticketing System",
		img: "assets/img/eac-misd.png",
		alt: "eac-misd",
		details:
			"It is a ticketing system where students of Emilio Aguinaldo College Cavite can directly submit tickets to the IT staff. The system is enhanced with Gemini AI, which provides instant responses to help resolve common technical issues.",
		tech: ["React", "Next.js", "Firebase", "Tailwind", "Gemini AI"],
		link: "https://eac-misd.vercel.app/",
	},
	{
		title: "Ninja Bazaar",
		type: "E-Commerce",
		img: "assets/img/ninjabazaar.png",
		alt: "ninja-bazaar",
		details:
			"Ninja Bazaar is an international e-commerce platform centralized for Indian sellers, offering great deals on a wide range of products. It empowers local businesses to reach global customers with secure payments and fast shipping.",
		tech: ["React", "Next.js", "Supabase", "Axios", "Tailwind"],
		link: "#",
	},
	{
		title: "Neutein",
		type: "Landing Page",
		img: "assets/img/neutein.png",
		alt: "neutein",
		details:
			"Neutein is a landing page dedicated to promoting a powerful memory-support supplement, offering a wide range of benefits to enhance focus, cognitive function, mental clarity, alertness, retention, and productivity.",
		tech: ["HTML", "CSS", "JavaScript"],
		link: "https://neutein.com/pages/bogo-offer",
	},
	{
		title: "Real Estate",
		type: "Landing Page",
		img: "assets/img/marci.png",
		alt: "marci",
		details:
			"Marci Metzger is a dedicated real estate professional with years of experience serving the Pahrump community. Her approachable nature and strong negotiation skills have helped to achieve their real estate goals in Pahrump and the surrounding areas.",
		tech: ["HTML", "CSS", "JavaScript"],
		link: "https://ernestluizdiaz.github.io/marci/",
	},
];

const projectContainer = document.getElementById("project-container");

projects.forEach((project) => {
	const projectDiv = document.createElement("div");
	projectDiv.className = "project-item";

	projectDiv.innerHTML = `
      <div class="project-img">
        <img src="${project.img}" alt="${project.alt}">
      </div>
      <div class="project-about">
        <h3>${project.title}</h3>
        <p><strong>Type:</strong> ${project.type}</p>
        <p class="project-details">${project.details}</p>
        <div class="tech-stack">
          ${project.tech
				.map((t) => `<span class="tech-tag">${t}</span>`)
				.join("")}
        </div>
        <div class="card-actions">
          <a href="${
				project.link
			}" class="btn btn-primary" target="_blank"><span>Visit</span></a>
        </div>
      </div>
    `;

	projectContainer.appendChild(projectDiv);
});
