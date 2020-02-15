$(document).ready(()=>{
    $('ul.o-tabs li a:first').addClass('.o-tabs o-active');
    $('.o-section article').hide();
    $('.o-section article:first').show();

    $('ul.o-tabs li a').click((e) =>{
        e.preventDefault();
        $('ul.o-tabs li a').toggleClass('.o-tabs o-active');

        var activeTab = $(this).prop('href');
        console.log(activeTab);
        
    });
});