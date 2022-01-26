// Função de adicionar scroll suave em link interno
$('.nav__list a[href^="#"]').on('click', function(e) {
	e.preventDefault();
	var id = $(this).attr('href'),
			targetOffset = $(id).offset().top;
			
	$('html, body').animate({ 
		scrollTop: targetOffset - 100
	}, 500);
});

// Função de adicionar background no menu ao ser scrollado
window.addEventListener('scroll', function() {
	var header = document.querySelector('header');
	header.classList.toggle('sticky', window
	.scrollY > 0);
});

// Função para adicionar classe ativo nos links ao serem clicados
const links = document.querySelectorAll('.nav__link');
links.forEach(link => {
	link.addEventListener('click', function() {
		links.forEach(l => l.classList.remove('active'));
		this.classList.add('active');
	})
})
