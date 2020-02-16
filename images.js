let images = ['resources/works/corvette.jpg',
              'resources/works/videoGame-find-a-way.png', 
              'resources/works/videosInteractivos.PNG'];
let count = 0;

let titles =['titulo1,titulo2,titulo3'];

function showImages(container){
        container.addEventListener('click',e =>{
            let back = container.querySelector('.o-back');
            let forward = container.querySelector('.o-forward');
            let img = container.querySelector('img');
            let target = e.target;
            let title = container.querySelector('h2');

            if(target == back){
                if(count > 0){
                    img.src = images[count-1];
                    count --;
                    
                }
                else{
                    img.src = images[images.length -1];
                    count = images.length -1;
                }
            } else if(target == forward){
                if(count < images.length -1){
                    img.src = images[count+1];
                    count++;
                }
                else{
                    img.src = images[0];
                    count = 0;
                }
            }             
        });
    }

    document.addEventListener("DOMContentLoaded", () =>{
        let container = document.querySelector('.o-section');        
        showImages(container);
    });