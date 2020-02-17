let images = ['resources/works/corvette.jpg',
              'resources/works/videoGame-find-a-way.png', 
              'resources/works/videosInteractivos.PNG','resources/works/booksearch.jpg'];
let count = 0;

let titles =['Corvette-Micromachine','Find a Way-Videojuego','Videos interactivos','App Móvil Booksearch'];
let descriptions =['Modelo creado en maya 3D para la asignatura de modelado y animación 3D con el objetivo de realizar un video promocional estilo micromachine.',
'Es un videojuego para PC desarrollado en Unity donde se narra la historia de Orson, quien se encuentra recorriendo una compañía a través de diferentes dimensiones, buscando fragmentos de una materia denominada "Partículas cuánticas" para evitar que la tragedia que lo tiene viajando a través del tiempo y espacio se produzca en primer lugar.',
'Es un plataforma interactiva desarrollada para la asignatura de Video y Televisión Digital donde se explica por una serie de videos la temática de software las cuáles vienen incluidos 3 diferentes juegos (arrastrar y soltar,ahorcado y completar) '
,'Aplicación móvil desarrollado en Android Studio, donde consiste en que los estudiantes y profesores de la universidad Autónoma de Occidente pueden reservar libros y revistas indexadas las cuáles tenga disponible en la biblioteca, además de ver por medio de un mapa la ubicación del texto que desee reservar.'];



function showImages(container){
        container.addEventListener('click',e =>{
            let back = container.querySelector('.o-back');
            let forward = container.querySelector('.o-forward');
            let img = container.querySelector('img');
            let target = e.target;
            let title = $('#title');
            let desc =$('#description');

            if(target == back){
                if(count > 0 ){
                    img.src = images[count-1];
                    title.text(titles[count-1]);
                    desc.text(descriptions[count-1]);
                    count --; 
                                        
                }
                else{
                    img.src = images[images.length -1];
                    title.text(titles[titles.length-1]);
                    desc.text(descriptions[descriptions.length-1]);
                    count = images.length -1;
                }
            } else if(target == forward){
                if(count < images.length -1){
                    img.src = images[count+1];
                    title.text(titles[count+1]);
                    desc.text(descriptions[count+1]);
                    count++;
                }
                else{
                    img.src = images[0];
                    title.text(titles[0]);
                    desc.text(descriptions[0]);
                    count = 0;
                }
            }             
        });
    }

    document.addEventListener("DOMContentLoaded", () =>{
        let container = document.querySelector('.o-section');        
        showImages(container);
    });