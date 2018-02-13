
Number.prototype.map = function (in_min, in_max, out_min, out_max) {
    return (this - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

var Portfolio = new Object();

Portfolio.sections = [
    {
        name: 'Embed systems',
        text: 'C/C++ Embed dev - STM32, AVR, Arduino',
        background: '#e67e22',
        icon: '<i class="fas fa-microchip"></i>'
    },
    {
        name: 'Web',
        text: 'Web dev - PHP7, JS, SQL, HTML/CSS',
        background: '#34495e',
        icon: '<i class="fas fa-globe"></i>'
    },
    {
        name: 'Linux',
        text: 'Advanced Linux user - Bash/Python scripting.',
        background: '#9b59b6',
        icon: '<i class="fab fa-linux"></i>'
    },
    {
        name: 'Design',
        text: 'This site is one of many sites I designed and made',
        background: '#e74c3c',
        icon: '<i class="fas fa-paint-brush"></i>'
    },
    {
        name: 'Also ... ',
        text: 'Knowledge of newest technologies like blockchain and deep learning',
        background: '#e67e22',
        icon: '<i class="fas fa-bolt"></i>'
    }
];
Portfolio.curr_section = -1;
Portfolio.animate = function() {

    const MAX_SIZE = 2;
    const MIN_SIZE = 0.4;
    const MAX_OFFSET = 300;

    let pi_slashed = Math.PI / 2;
	let offset = $(document).scrollTop();
	let side_offset = Math.round(Math.cos(offset.map(0, 600, -pi_slashed, pi_slashed)) * MAX_OFFSET);
	let scale = Math.sin(offset.map(0, 600, -pi_slashed, pi_slashed)).map(-pi_slashed, pi_slashed, MIN_SIZE, MAX_SIZE);
	let z_index = Math.round(scale.map(MIN_SIZE, MAX_SIZE, 5, 15));
    let shadow_offset = Math.round(side_offset / 2) * -1;

    let section_num = parseInt(offset / 1200);

	$('.planet').css({
		'transform': 'scale(' + scale + ') translateX(' + side_offset + '%)',
		'z-index': z_index
	});

    if(z_index < 11) var display = 'none';
    else var display = 'block';

    $('.sun-shadow').css({
        'transform': 'scale(' + scale + ') translateX(' + side_offset + '%)',
		'z-index': z_index - 1,
        'box-shadow': shadow_offset + 'px 0 10px -10px rgba(10, 10, 10, 0.5)',
        'display': display
    });

    $('.interesting-text').css('opacity', scale.map(MIN_SIZE, MAX_SIZE, -0.5, 2));

    if(offset > 100) {
        $('.interesting-text').addClass('fixed');
        $('.grav-anchor').addClass('fixed');
    } else {
        $('.interesting-text').removeClass('fixed');
        $('.grav-anchor').removeClass('fixed');
    }

    if(Portfolio.curr_section != section_num) {

        $('.planet').css('background-color', Portfolio.sections[section_num].background);

        $('.interesting-text .title').html(Portfolio.sections[section_num].name);
        $('.interesting-text .content').html(Portfolio.sections[section_num].text);

        $('.planet .icon').html(Portfolio.sections[section_num].icon);

        Portfolio.curr_section = section_num;
    }

}


$(document).ready(function() {
    Portfolio.animate();
    $(document).scroll(Portfolio.animate);
});
