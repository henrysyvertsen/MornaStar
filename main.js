function onScroll() {
	var st = window.pageYOffset

	$scrollElements.forEach(function(el) {
		var elTop = el.getBoundingClientRect().top + st

		if (st > elTop - windowHeight + 150) {
			el.classList.add('scrolled-into-view')
		// } else {
		// 	el.classList.remove('scrolled-into-view')
		}
	})
}

var $page = document.documentElement
var $scrollElements = document.querySelectorAll('[data-scroll-fade]')
var windowHeight = window.innerHeight

onScroll()

window.addEventListener('scroll', onScroll)
