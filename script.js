
		$('.owl-carousel').owlCarousel({
			loop: false,
			margin: 10,
			nav: true,
			responsive: {
				0: {
					items: 1
				},
				400: {
					items: 2
				},
                600: {
					items: 3
				},
				800: {
					items: 4
				},
				1000: {
					items: 8
				}
			}
		})
		function setTime() {
			const today = new Date();
			let h = today.getHours();
			let m = today.getMinutes();
			let s = today.getSeconds();
			m = correctTime(m);
			s = correctTime(s);
			document.getElementById('time').innerHTML = h + " : " + m + " : " + s + " ";
			setTimeout(setTime, 1000);
		}
		setTime();
		function correctTime(i) {
			if (i < 10) { i = "0" + i };
			return i;
		}
		const dealOfTheDayContainer = [document.getElementById('deal-of-the-day-list')];
		console.log(dealOfTheDayContainer);
		let dealOfTheDayItem = dealOfTheDayContainer[0].getElementsByClassName('item-card');
		let itmeCardStyle = window.getComputedStyle(dealOfTheDayItem[0]);
		let itmeCardMargin = parseFloat(itmeCardStyle.marginLeft) + parseFloat(itmeCardStyle.marginRight);
		const prevBtn = document.getElementById('prev-btn');
		const nextBtn = document.getElementById('next-btn');
		let itmeCardWidth = dealOfTheDayItem[0].offsetWidth + itmeCardMargin
		const scrollWidth = (itmeCardWidth * dealOfTheDayItem.length);
		console.log(scrollWidth);
		// const dealOfTheDayContainer = [...document.querySelectorAll('.deal-of-the-day-list')];
		let containerWidth = dealOfTheDayContainer[0].offsetWidth;
		let scrolledWidth = containerWidth;
		prevBtn.style.display = "none"
		prevBtn.addEventListener('click', () => {
			if (scrolledWidth > containerWidth) {
				nextBtn.style.display = ""
			}
			dealOfTheDayContainer[0].scrollLeft -= itmeCardWidth;
			scrolledWidth -= itmeCardWidth;
			console.log("scrolledWidth " + scrolledWidth);
			if (scrolledWidth <= containerWidth) {
				prevBtn.style.display = "none"
			}
		})
		nextBtn.addEventListener('click', () => {
			if (scrolledWidth < scrollWidth) {
				prevBtn.style.display = ""
			}
			dealOfTheDayContainer[0].scrollLeft += itmeCardWidth;
			scrolledWidth += itmeCardWidth;
			console.log("scrolledWidth " + scrolledWidth);

			if (scrolledWidth > scrollWidth) {
				nextBtn.style.display = "none"
			}
		})
		const hideShowNav = () => {
			if (document.getElementById('navbarRight').style.display == 'none') {

				document.getElementById('navbarRight').style.display = 'block'
			} else {
				document.getElementById('navbarRight').style.display = 'none'
			}

		}
