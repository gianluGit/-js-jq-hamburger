$('.header-right > a').click(function(){
  $('div.hamburger-menu').addClass('active');
  console.log("ho cliccato l'icona hamburger");
});

$('.close').click(function(){
  $('div.hamburger-menu').removeClass('active');
  console.log('ho cliccato la x');
});
