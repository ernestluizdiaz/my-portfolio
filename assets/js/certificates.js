const certificates = [
	{
		name: "Ernest Diaz",
		title: "Web Developer",
		link: "https://www.testdome.com/certificates/93bd096174f241e59d22b286bb85b0ab",
		color: "gold",
	},
	{
		name: "Ernest Diaz",
		title: "HTML & CSS",
		link: "https://www.testdome.com/certificates/c43677d85ea541d1beaef462113b4e30",
		color: "gold",
	},
	{
		name: "Ernest Diaz",
		title: "React",
		link: "https://www.testdome.com/certificates/b8d6a491d6e14302b9338634c9b4d4b5",
		color: "gold",
	},
	{
		name: "Ernest Diaz",
		title: "Bootstrap",
		link: "https://www.testdome.com/certificates/3bae9029c92a49638c8df8467f05d5a8",
		color: "gold",
	},
	{
		name: "Ernest Diaz",
		title: "JavaScript",
		link: "https://www.testdome.com/certificates/6016497473fc4e19980e06323244728a",
		color: "gold",
	},
	{
		name: "Ernest Diaz",
		title: "PHP",
		link: "https://www.testdome.com/certificates/fc9f0bb2843e411581a7efe44e6382a9",
		color: "gold",
	},
	{
		name: "Ernest Diaz",
		title: "Node.js",
		link: "https://www.testdome.com/certificates/1583daa1a94f4c489badd7adb483f89c",
		color: "gold",
	},
	{
		name: "Ernest Diaz",
		title: "MySQL",
		link: "https://www.testdome.com/certificates/5aa8bca458a244319f84bfc369d9d105",
		color: "silver",
	},
];

const certificateContainer = document.getElementById("certificate-container");

certificates.forEach((cert) => {
	const certEl = document.createElement("a");
	certEl.className = `certificate ${cert.color}`;
	certEl.href = cert.link;
	certEl.target = "_blank";

	certEl.innerHTML = `
      <p>${cert.name}</p>
      <small>${cert.title}</small>
      <div class="flex-grow-1"></div>
      <small>TestDome <br> Certificate</small>
      <img src="assets/img/certificate-img.svg" alt="icon" class="decoration">
    `;

	certificateContainer.appendChild(certEl);
});
