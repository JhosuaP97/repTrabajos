$(document).ready(()=>{
    $('ul.o-tabs li a:first').addClass('.o-tabs o-active');
    $('.o-section > div').hide();
    $('.o-section > div:first').show();
    
    /* Funcion al dar click que se seleccione un tab y su contenido */
    $('ul.o-tabs li a').click(function(e){
        e.preventDefault();
        $('ul.o-tabs li a').removeClass('.o-tabs o-active');
        $(this).addClass('.o-tabs o-active');

        $('.o-section > div').hide();

        let activeTab = $(this).attr('href');
        $(activeTab).show();
        return false;
    }); 

});