let images = ['resources/works/corvette.jpg',
              'resources/works/videoGame-find-a-way.png', 
              'resources/works/videosInteractivos.PNG'];
let count = 0;

let titles =['Corvette-Micromachine','Find a Way-Videojuego','Videos interactivos'];
let descriptions =['description 1','description 2','description 3'];



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