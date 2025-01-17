/* ----- NAVIGATION BAR FUNCTION ----- */
function myMenuFunction() {
	var menuBtn = document.getElementById("myNavMenu");

	if (menuBtn.className === "nav-menu") {
		menuBtn.className += " responsive";
	} else {
		menuBtn.className = "nav-menu";
	}
}

/* ----- ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING ----- */
window.onscroll = function () {
	headerShadow();
};

function headerShadow() {
	const navHeader = document.getElementById("header");

	if (
		document.body.scrollTop > 50 ||
		document.documentElement.scrollTop > 50
	) {
		navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
		navHeader.style.height = "70px";
		navHeader.style.lineHeight = "70px";
	} else {
		navHeader.style.boxShadow = "none";
		navHeader.style.height = "90px";
		navHeader.style.lineHeight = "90px";
	}
}

/* ----- TYPING EFFECT ----- */
var typingEffect = new Typed(".typedText", {
	strings: ["Ernest Diaz", "a Designer", "a Developer", "a Student"],
	loop: true,
	typeSpeed: 100,
	backSpeed: 80,
	backDelay: 2000,
});

/* ----- ## -- SCROLL REVEAL ANIMATION -- ## ----- */
const sr = ScrollReveal({
	origin: "top",
	distance: "80px",
	duration: 2000,
	reset: true,
});

/* -- HOME -- */
sr.reveal(".featured-text-card", {});
sr.reveal(".featured-name", { delay: 100 });
sr.reveal(".featured-text-info", { delay: 200 });
sr.reveal(".featured-text-btn", { delay: 200 });
sr.reveal(".social_icons", { delay: 200 });
sr.reveal(".featured-image", { delay: 300 });

/* -- PROJECT BOX -- */
sr.reveal(".project-box", { interval: 200 });

/* -- HEADINGS -- */
sr.reveal(".top-header", {});

/* ----- ## -- SCROLL REVEAL LEFT_RIGHT ANIMATION -- ## ----- */

/* -- ABOUT INFO & CONTACT INFO -- */
const srLeft = ScrollReveal({
	origin: "left",
	distance: "80px",
	duration: 2000,
	reset: true,
});

srLeft.reveal(".about-info", { delay: 100 });
srLeft.reveal(".contact-info", { delay: 100 });

/* -- ABOUT SKILLS & FORM BOX -- */
const srRight = ScrollReveal({
	origin: "right",
	distance: "80px",
	duration: 2000,
	reset: true,
});

srRight.reveal(".skills-box", { delay: 100 });
srRight.reveal(".form-control", { delay: 100 });

/* ----- CHANGE ACTIVE LINK ----- */

const sections = document.querySelectorAll("section[id], footer[id]");
const contactLink = document.querySelector('.nav-menu a[href="#contact"]');
const navLinks = document.querySelectorAll(".nav-menu a");

let preventScrollActivation = false; // Flag to control scroll activation

/* ----- DOWNLOAD CV FUNCTIONALITY ----- */
// document.getElementById("download-btn").addEventListener("click", function () {
// 	// Path to your CV file
// 	const fileUrl = "assets/cv/my_cv.pdf";

// 	// Create a temporary <a> element
// 	const anchor = document.createElement("a");
// 	anchor.href = fileUrl;
// 	anchor.target = "_blank";
// 	anchor.download = "My_CV.pdf"; // Name of the file to download
// 	document.body.appendChild(anchor);

// 	// Trigger the download
// 	anchor.click();

// 	// Remove the anchor element from the document
// 	document.body.removeChild(anchor);
// });

// Helper to handle scroll event
function scrollActive() {
	if (preventScrollActivation) return; // Skip activation if the flag is set

	const scrollY = window.scrollY;

	sections.forEach((current) => {
		const sectionHeight = current.offsetHeight,
			sectionTop = current.offsetTop - 50,
			sectionBottom = sectionTop + sectionHeight,
			sectionId = current.getAttribute("id");

		if (scrollY >= sectionTop && scrollY < sectionBottom) {
			document
				.querySelector(".nav-menu a[href*=" + sectionId + "]")
				.classList.add("active-link");
		} else {
			document
				.querySelector(".nav-menu a[href*=" + sectionId + "]")
				.classList.remove("active-link");
		}
	});
}

// Add scroll event listener
window.addEventListener("scroll", scrollActive);

// Event listener for the "Contacts" link
contactLink.addEventListener("click", () => {
	// Disable scroll activation temporarily
	preventScrollActivation = true;

	// Remove "active-link" from all links
	navLinks.forEach((link) => link.classList.remove("active-link"));

	// Add "active-link" to the "Contacts" link only
	contactLink.classList.add("active-link");

	// Scroll to the "Contacts" section
	document.querySelector("#contact").scrollIntoView({ behavior: "smooth" });

	// Optionally re-enable scroll activation after a short delay
	setTimeout(() => {
		preventScrollActivation = false;
	}, 2000); // Adjust timeout as needed to maintain "Contacts" as active
});
