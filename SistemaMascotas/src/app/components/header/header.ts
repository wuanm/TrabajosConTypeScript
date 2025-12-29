

const header=document.getElementById('header')as HTMLElement;


window.addEventListener('DOMContentLoaded',()=>{

    //creamos el contenedor padre para poder pasarle mi  headierf
    const contenedorPadreDeMiheader= document.createElement('div');
    contenedorPadreDeMiheader.className=('contenedor-header');

    contenedorPadreDeMiheader.innerHTML = `
        <div class="contenedor-header"> 
            <div class="contendor-imagen">
            <img class="imagen-header"src="https://segurossura.com/content/webp-express/webp-images/doc-root/content/uploads/sites/10/2021/01/seguros-sura-las-mascotas-son-peligrosas-para-la-salud.jpg.webp" alt="mascota">
           </div> 
            <h1 class="titulo-header" >  La Salud Mi Mascota </h1>
             <Button class="hamburguer"id="btnBurguer"> =</Button>

            <ul class="contenedor-nav" id="contenedor-nav">
                 <li><a href= "#inicio">Inicio</a></li>
                <li><a href= "#buscar">Buscar</a></li>
                <li><a href= "#footer">Contacto</a></li>
            </ul>
        </div>

    `;
      
    header.appendChild(contenedorPadreDeMiheader);


    const nav =document.getElementById('contenedor-nav') as HTMLElement;
    const btnBurguer =document.getElementById('btnBurguer') as HTMLButtonElement;
    if (btnBurguer && nav){
        btnBurguer.addEventListener("click",()=>{
            nav.classList.toggle('active'); //activo o no activo


            if(nav.classList.contains('active')){
                nav.style.display ="flex";
                nav.style.flexDirection ="column";
            }else{
                nav.style.display ="none";
            }   
        })
    }
    
    //cerrar nav cuando se dio click
    const enlace  = nav.querySelectorAll('a');

    enlace.forEach(enlace =>
        enlace.addEventListener('click',()=>{
        nav.classList.remove('active');
        nav.style.display ="none";
    
    }))

    


});

