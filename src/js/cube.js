window.addEventListener("DOMContentLoaded", () => {
	const cube = document.querySelector(".cube"),
		  imageButtons = document.querySelector(".image-buttons"),
		  totalFaces = 6;

	let cubeImageClass = [...cube.classList].find(cls => cls.startsWith("show-image-")) || "show-image-1";
	let currentFace = parseInt(cubeImageClass.charAt(cubeImageClass.length - 1));

	imageButtons.addEventListener("click", e => {
		const targetNode = e.target.nodeName;
		const targetClass = e.target.className;

		if (targetNode === "INPUT" && targetClass !== cubeImageClass) {
			const faceNumber = parseInt(targetClass.charAt(targetClass.length - 1));
			currentFace = faceNumber;
			cube.classList.remove(cubeImageClass);
			cube.classList.add(targetClass);
			cubeImageClass = targetClass;
		}
	});

	let touchStartX = 0;
	let touchStartY = 0;
	let touchEndX = 0;
	let touchEndY = 0;

	const cubeContainer = document.querySelector(".cube-container");

	cubeContainer.addEventListener("touchstart", e => {
		touchStartX = e.changedTouches[0].screenX;
		touchStartY = e.changedTouches[0].screenY;
	});

	cubeContainer.addEventListener("touchend", e => {
		touchEndX = e.changedTouches[0].screenX;
		touchEndY = e.changedTouches[0].screenY;

		handleSwipe();
	});

	function handleSwipe() {
		const deltaX = touchEndX - touchStartX;
		const deltaY = touchEndY - touchStartY;

		if (Math.abs(deltaX) > Math.abs(deltaY)) {
			if (deltaX < -50) {
				currentFace = (currentFace % totalFaces) + 1; 
			} else if (deltaX > 50) {
				currentFace = (currentFace - 2 + totalFaces) % totalFaces + 1; 
			}
		} else {
			if (deltaY < -50) {
				currentFace = 5; 
			} else if (deltaY > 50) {
				currentFace = 6;
			}
		}

		const newClass = `show-image-${currentFace}`;
		cube.classList.remove(cubeImageClass);
		cube.classList.add(newClass);
		cubeImageClass = newClass;
	}
});
