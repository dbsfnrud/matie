//PC lnb - 메뉴
$(function () {
	const $btnGnb = $('header > .right-menu > button')
	const $clse = $('.btnclose')
	const $li = $('header #menu > .container > .big-gnb > .contents > ul.menu-list > li')
	const $li_bg = $(' .big-gnb ')

	//메뉴
	$btnGnb.on('click', function (evt) {
		evt.preventDefault()

		$('#menu').stop().addClass('on')
		$('.balloon').stop().fadeIn(50)
	})

	$clse.on('click', function (evt) {
		evt.preventDefault()
		$('#menu').stop().removeClass('on')
	})

	//li호버- 배경전환
	$li.first().on('mouseenter', function () {
		$li_bg.stop().addClass('one')
		$li_bg.removeClass('two thr four fiv six sev')
	})

	$li.eq(1).on('mouseenter', function () {
		$li_bg.stop().addClass('two')
		$li_bg.removeClass('one thr four fiv six sev')
	})

	$li.eq(2).on('mouseenter', function () {
		$li_bg.stop().addClass('thr')
		$li_bg.removeClass('one two four fiv six sev')
		$('.balloon').stop().fadeOut(500)
	})

	$li.eq(3).on('mouseenter', function () {
		$li_bg.stop().addClass('four')
		$li_bg.removeClass('one two thr fiv six sev')
	})

	$li.eq(4).on('mouseenter', function () {
		$li_bg.stop().addClass('fiv')
		$li_bg.removeClass('one two thr four six sev')
	})

	$li.eq(5).on('mouseenter', function () {
		$li_bg.stop().addClass('six')
		$li_bg.removeClass('one two thr four fiv sev')
	})

	$li.last().on('mouseenter', function () {
		$li_bg.stop().addClass('sev')
		$li_bg.removeClass('one two thr four fiv six')
	})
})

//MOBILE lnb - 메뉴
$(function () {
	const $btnGnb = $('header > .right-menu > button')
	const $clse = $('.btnclose')

	//메뉴
	$btnGnb.on('click', function (evt) {
		evt.preventDefault()

		$('#mo-menu').stop().addClass('on')
		$('#mo-menu-bar').addClass('off')
	})

	$clse.on('click', function (evt) {
		evt.preventDefault()
		$('#mo-menu').stop().removeClass('on')
		$('#mo-menu-bar').removeClass('off')
	})
})

//MAIN- 슬라이더
$(function () {
	const $slides = $('section #main-slider > .banner-slider > .slider > .slides')
	const $moSlides = $('section #main-slider > .mo-banner-slider > .slider > .slides')

	const $btnPrev = $(' .slides-navigation.prevBtn')
	const $btnNext = $(' .slides-navigation.nextBtn')

	let nowIdx = 0
	let intervalKey = null

	//다음 버튼
	$btnNext.on('click', function (evt) {
		evt.preventDefault()

		if (nowIdx < 2) {
			nowIdx++
		} else {
			nowIdx = 0
		}

		$slides.eq(nowIdx).fadeIn(1000).siblings().fadeOut(1000)
		$moSlides.eq(nowIdx).fadeIn(1000).siblings().fadeOut(1000)
	})

	//이전 버튼
	$btnPrev.on('click', function (evt) {
		evt.preventDefault()

		if (nowIdx > 0) {
			nowIdx--
		} else {
			nowIdx = 2
		}

		$slides.eq(nowIdx).fadeIn(1000).siblings().fadeOut(1000)
		$moSlides.eq(nowIdx).fadeIn(1000).siblings().fadeOut(1000)
	})

	//자동재생

	intervalKey = setInterval(function () {
		if (nowIdx < 2) {
			nowIdx++
		} else {
			nowIdx = 0
		}
		$slides.eq(nowIdx).fadeIn(1000).siblings().fadeOut(1000)
		$moSlides.eq(nowIdx).fadeIn(1000).siblings().fadeOut(1000)
	}, 3000)
})

//header 고정처리
$(function () {
	const $header = $('header')
	$(window).on({
		scroll: function () {
			const scrollTop = Math.ceil($(window).scrollTop())

			if (scrollTop > 50) {
				$header.addClass('fixed')
			} else {
				$header.removeClass('fixed')
			}
		},
	})
})

//모바일 swiper
const swiper = new Swiper('.swiper', {
	// Optional parameters
	slidesPerView: 'auto', //한 화면에 보이는 슬라이드의 갯수
	spaceBetween: 10, //슬라이드의 간격
	slidesPerGroup: 1, //한번에 슬라이드 되는 개수

	loop: false, //무한 반복
})

//parallax scroll
$(function () {
	$(window).on('load scroll', function () {
		let parallaxElement = $('.obj'),
			parallaxQuantity = parallaxElement.length

		window.requestAnimationFrame(function () {
			for (let i = 0; i < parallaxQuantity; i++) {
				var currentElement = parallaxElement.eq(i),
					windowTop = $(window).scrollTop(),
					elementTop = currentElement.offset().top,
					elementHeight = currentElement.height(),
					viewPortHeight = window.innerHeight * 0.2 - elementHeight * 0.5,
					scrolled = windowTop - elementTop + viewPortHeight
				currentElement.css({
					transform: 'translate3d(0,' + scrolled * -0.2 + 'px, 0)',
				})
			}
		})
	})
})

//top버튼
$(function () {
	const $aside = $('aside')

	$(window).on('scroll', function () {
		let scrollTop = Math.ceil($(this).scrollTop())
		//맨위로가기 top 버튼
		//view>0 이면 푸터가 화면에 노출되었다는 것을 의미
		const view = scrollTop + $(window).height() - $('footer').offset().top

		if (view > 0) {
			//푸터노출
			$aside.css('margin-bottom', view)
		} else {
			$aside.css('margin-bottom', 0)
		}

		//탑버튼 노출처리
		if (scrollTop > 120) {
			$aside.fadeIn()
		} else {
			$aside.fadeOut()
		}
	})

	$('aside').on('click', function (evt) {
		evt.preventDefault()
		$('html,body').animate({ scrollTop: 0 })
	})
})
