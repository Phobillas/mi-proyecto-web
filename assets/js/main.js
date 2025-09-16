// WEB ATELIER (UDIT) - Student Project Template JavaScript
// Add your interactive functionality here

document.addEventListener('DOMContentLoaded', function () {
	// Initialize your project functionality
	console.log('WEB ATELIER (UDIT) - Student project initialized');

	// Example: Add smooth scrolling for anchor links
	const links = document.querySelectorAll('a[href^="#"]');
	links.forEach((link) => {
		link.addEventListener('click', function (e) {
			e.preventDefault();
			const targetId = this.getAttribute('href').substring(1);
			const targetElement = document.getElementById(targetId);

			if (targetElement) {
				targetElement.scrollIntoView({
					behavior: 'smooth',
				});
			}
		});
	});

	// Example: Add skip link functionality
	const skipLink = document.querySelector('.skip-link');
	if (skipLink) {
		skipLink.addEventListener('click', function (e) {
			e.preventDefault();
			const target = document.querySelector(this.getAttribute('href'));
			if (target) {
				target.focus();
				target.scrollIntoView({ behavior: 'smooth' });
			}
		});
	}

	//// Commit 1 ////

	// Verificación de conexión
	console.log('✅ main.js cargado correctamente');

	// Selección de un elemento del DOM
	const titulo = document.getElementById('titulo');

	// Cambiar su contenido si existe
	if (titulo) {
	titulo.textContent = 'Texto cambiado desde main.js';
	}

	//// Commit 2 ////

	const btn = document.getElementById('btn-action');

	if (btn) {
		btn.addEventListener('click', () => {
			alert('🚀 Botón pulsado correctamente');
		});
	}

	//// Commit 3 //// 	(Con el DevoTools si se inspecciona el elemento header, se puede ver el cambio de estilo

	const header = document.querySelector('header');

	window.addEventListener('scroll', () => {
		if (header) {
			if (window.scrollY > 100) {
				header.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
				header.style.color = 'white';
			} else {
				header.style.backgroundColor = 'transparent';
				header.style.color = 'inherit';
			}
		}
	});
});

// Add your custom functions here
// Example: Function to update page metadata
function updatePageMetadata(title, description) {
	document.title = title;

	let metaDescription = document.querySelector('meta[name="description"]');
	if (metaDescription) {
		metaDescription.setAttribute('content', description);
	} else {
		metaDescription = document.createElement('meta');
		metaDescription.setAttribute('name', 'description');
		metaDescription.setAttribute('content', description);
		document.head.appendChild(metaDescription);
	}
}
