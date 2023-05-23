// Template for heads
var face = "https://www.facebook.com/avrilassistance/";
var insta = "https://www.instagram.com/avril.assistance/";
var linked = "https://ar.linkedin.com/company/avrilassistance";
// RRHH
document.getElementById("rrhh-head").innerHTML = `
<div class="head d-block">
  <div class="image-flip" ontouchstart="this.classList.toggle('hover');">
    <div class="mainflip">
      <div class="frontside">
        <div class="card">
          <div class="card-body">
            <p class="inner">
              <img src="./images/organigrama/melinaL.webp" alt="Melina Lerana" class="inner-image">
            </p>
            <div class="contenido">
              <p class="nombre">Melina Lerana</p>
              <p class="cargo">Head of RH</p>
            </div>
          </div>
        </div>
      </div>
      <div class="backside">
        <div class="wave">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <defs>
              <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="20%" style="stop-color:rgb(135,216,210);stop-opacity:1" />
                <stop offset="100%" style="stop-color:rgba(0,160,153);stop-opacity:1" />
              </linearGradient>
            </defs>
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"  fill="url(#grad1)"></path>
          </svg>
        </div>
        <div class="card">
          <div class="card-body rrhh">
            <div class="mb-2">
              <p class="titulo text-center">Head of RH</p>
            </div>
            <div>
              <p class="text-center"><i class="ti-email"></i></p>
              <p class="nombre">rr-hh@avril-assistance.com</p>
            </div>
            <ul class="list-inline text-center">
              <li class="list-inline-item"><a href="${face}" target="_blank">
                <i class="ti-facebook"></i></a>
              </li>
              <li class="list-inline-item"><a href="${insta}" target="_blank">
                <i class="ti-instagram"></i></a>
              </li>
              <li class="list-inline-item"><a href="${linked}" target="_blank">
                <i class="ti-linkedin"></i></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
`;
// Marketing
document.getElementById("marketing-head").innerHTML= `
<div class="head d-block">
  <div class="image-flip" ontouchstart="this.classList.toggle('hover');">
    <div class="mainflip">
      <div class="frontside">
        <div class="card">
          <div class="card-body">
            <p class="inner">
              <img class="inner-image" src="./images/organigrama/nicoleD.webp" alt="Nicole D'Agosto">
            </p>
            <div class="contenido">
              <p class="nombre">Nicole D'Agosto</p>
              <p class="cargo">Head of Marketing & Communications</p>
            </div>
          </div>
        </div>
      </div>
      <div class="backside">
        <div class="wave">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <defs>
              <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="20%" style="stop-color:rgb(248,177,51);stop-opacity:1" />
                <stop offset="100%" style="stop-color:rgb(232,78,27);stop-opacity:1" />
              </linearGradient>
            </defs>
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"  fill="url(#grad2)"></path>
          </svg>
        </div>
        <div class="card">
          <div class="card-body market">
            <div class="mb-2">
              <p class="titulo text-center">Head of Marketing & Communications</p>
            </div>
            <div>
              <p class="text-center"><i class="ti-email"></i></p>
              <p class="nombre text-center">marketing@avril-assistance.com</p>
            </div>
            <ul class="list-inline text-center">
              <li class="list-inline-item"><a href="https://www.facebook.com/profile.php?id=100089781212213" target="_blank">
                <i class="ti-facebook"></i></a>
              </li> 
              <li class="list-inline-item"><a href="https://www.instagram.com/nicole.avrilassistance/" target="_blank">
                <i class="ti-instagram"></i></a>
              </li>
              <li class="list-inline-item"><a href="https://www.linkedin.com/in/nicole-natasha-d-agosto-45b732247/" target="_blank">
                <i class="ti-linkedin"></i></a>
              </li>               
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
`;
// Administracion
document.getElementById("admin-head").innerHTML= `
<div class="head d-block">
  <div class="image-flip" ontouchstart="this.classList.toggle('hover');">
    <div class="mainflip">
      <div class="frontside">
        <div class="card">
          <div class="card-body">
            <p class="inner">
              <img class="inner-image" src="./images/organigrama/delfinaV.webp" alt="Delfina  Villalba">
            </p>
            <div class="contenido">
              <p class="nombre">Delfina Villalba</p>
              <p class="cargo">Head of Administration</p>
            </div>
          </div>
        </div>
      </div>
      <div class="backside">
        <div class="wave">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <defs>
              <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="20%" style="stop-color:rgba(0,160,153,1);stop-opacity:1" />
                <stop offset="100%" style="stop-color:rgba(36,99,81,1);stop-opacity:1" />
              </linearGradient>
            </defs>
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"  fill="url(#grad3)"></path>
          </svg>
        </div>
        <div class="card">
          <div class="card-body admin">
            <div class="mb-2">
              <p class="titulo text-center">Head of Administration</p>
            </div>
            <div>
              <p class="text-center"><i class="ti-email"></i></p>
              <p class="nombre text-center">administracion@avril-assistance.com</p>
            </div>
            <ul class="list-inline text-center">
              <li class="list-inline-item"><a href="${face}" target="_blank">
                <i class="ti-facebook"></i></a>
              </li> 
              <li class="list-inline-item"><a href="${insta}" target="_blank">
                <i class="ti-instagram"></i></a>
              </li>
              <li class="list-inline-item"><a href="${linked}" target="_blank">
                <i class="ti-linkedin"></i></a>
              </li>              
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
`;
// Comerciales
// Carlos Duarte
document.getElementById("comercial-argentina").innerHTML= `
<div class="head d-block">
  <div class="image-flip" ontouchstart="this.classList.toggle('hover');">
    <div class="mainflip">
      <div class="frontside">
        <div class="card">
          <div class="card-body">
            <p class="inner">
              <img class="inner-image" src="./images/organigrama/carlosD.webp" alt="Carlos Duarte">
            </p>
            <div class="contenido">
              <p class="nombre">Carlos Duarte</p>
              <p class="cargo">Argentina Commercial Manager</p>
            </div>
          </div>
        </div>
      </div>
      <div class="backside">
        <div class="wave">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <defs>
              <linearGradient id="grad4" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="20%" style="stop-color:rgba(89,0,177,1);stop-opacity:1" />
                <stop offset="100%" style="stop-color:rgba(148,27,128,1);stop-opacity:1" />
              </linearGradient>
            </defs>
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"  fill="url(#grad4)"></path>
          </svg>
        </div>
        <div class="card">
          <div class="card-body comercial">
            <div class="mb-2">
              <p class="titulo text-center">Argentina Commercial Manager</p>
            </div>
            <div>
              <p class="text-center"><i class="ti-email"></i></p>
              <p class="nombre text-center">carlos.duarte@avril-assistance.com</p>
            </div>
            <ul class="list-inline text-center">
              <li class="list-inline-item"><a href="https://www.facebook.com/profile.php?id=1428005957" target="_blank">
                <i class="ti-facebook"></i></a>
              </li> 
              <li class="list-inline-item"><a href="https://www.instagram.com/carlosduarte.avrilassistance/" target="_blank">
                <i class="ti-instagram"></i></a>
              </li>
              <li class="list-inline-item"><a href="https://www.linkedin.com/in/carlos-duarte-b8869a265/" target="_blank">
                <i class="ti-linkedin"></i></a>
              </li>               
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
`;
// Yesica D
document.getElementById("plani-head").innerHTML= `
<div class="head d-block">
  <div class="image-flip" ontouchstart="this.classList.toggle('hover');">
    <div class="mainflip">
      <div class="frontside">
        <div class="card">
          <div class="card-body">
            <p class="inner">
              <img class="inner-image" src="./images/organigrama/yesicaD.webp" alt="Yesica Diaz">
            </p>
            <div class="contenido">
              <p class="nombre">Yesica Diaz</p>
              <p class="cargo">Head of Planning, Product & Pricing</p>
            </div>
          </div>
        </div>
      </div>
      <div class="backside">
        <div class="wave">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <defs>
              <linearGradient id="grad8" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="20%" style="stop-color:rgba(211,110,53,1);stop-opacity:1" />
                <stop offset="100%" style="stop-color:rgba(168,43,188,1);stop-opacity:1" />
              </linearGradient>
            </defs>
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"  fill="url(#grad8)"></path>
          </svg>
        </div>
        <div class="card">
          <div class="card-body planificacion">
            <div class="mb-2">
              <p class="titulo text-center">Head of Planning, Product & Pricing</p>
            </div>
            <div>
              <p class="text-center"><i class="ti-email"></i></p>
              <p class="nombre">planificacion@avril-assistance.com</p>
            </div>
            <ul class="list-inline text-center">
              <li class="list-inline-item"><a href="${face}" target="_blank">
                <i class="ti-facebook"></i></a>
              </li> 
              <li class="list-inline-item"><a href="${insta}" target="_blank">
                <i class="ti-instagram"></i></a>
              </li>
              <li class="list-inline-item"><a href="${linked}" target="_blank">
                <i class="ti-linkedin"></i></a>
              </li>              
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
`;
// Sol Fernandez
document.getElementById("head-mdp").innerHTML = `
<div class="head d-block">
  <div class="image-flip" ontouchstart="this.classList.toggle('hover');">
    <div class="mainflip">
      <div class="frontside">
        <div class="card">
          <div class="card-body">
            <p class="inner">
              <img src="./images/organigrama/solF.webp" alt="Sol Fernandez" class="inner-image">
            </p>
            <div class="contenido">
              <p class="nombre">Sol Fernandez</p>
              <p class="cargo">Head of Commercial & Business - Buenos Aires</p>
            </div>
          </div>
        </div>
      </div>
      <div class="backside">
        <div class="wave">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <defs>
          <linearGradient id="grad4" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="20%" style="stop-color:rgba(89,0,177,1);stop-opacity:1" />
            <stop offset="100%" style="stop-color:rgba(148,27,128,1);stop-opacity:1" />
          </linearGradient>
        </defs>
        <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"  fill="url(#grad4)"></path>
      </svg>
        </div>
        <div class="card">
          <div class="card-body comercial">
            <div class="mb-2">
              <p class="titulo text-center">Head of Commercial & Business - Buenos Aires</p>
            </div>
            <div>
              <p class="text-center"><i class="ti-email"></i></p>
              <p class="nombre">sol.fernandez@avril-assistance.com</p>
            </div>
            <ul class="list-inline text-center">
              <li class="list-inline-item"><a href="https://www.facebook.com/sol.fernandez.avrilassistance" target="_blank">
                <i class="ti-facebook"></i></a>
              </li>
              <li class="list-inline-item"><a href="https://www.instagram.com/avrilassistancemdp/" target="_blank">
                <i class="ti-instagram"></i></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
`;
// Fernando Scrigna
document.getElementById("head-sta").innerHTML = `
<div class="head d-block">
  <div class="image-flip" ontouchstart="this.classList.toggle('hover');">
    <div class="mainflip">
      <div class="frontside">
        <div class="card">
          <div class="card-body">
            <p class="inner">
              <img src="./images/organigrama/fernandoSc.webp" alt="Fernando Scrigna" class="inner-image">
            </p>
            <div class="contenido">
              <p class="nombre">Fernando Scrigna</p>
              <p class="cargo">Head of Commercial & Business - Santa Fe</p>
            </div>
          </div>
        </div>
      </div>
      <div class="backside">
        <div class="wave">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <defs>
          <linearGradient id="grad4" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="20%" style="stop-color:rgba(89,0,177,1);stop-opacity:1" />
            <stop offset="100%" style="stop-color:rgba(148,27,128,1);stop-opacity:1" />
          </linearGradient>
        </defs>
        <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"  fill="url(#grad4)"></path>
      </svg>
        </div>
        <div class="card">
          <div class="card-body comercial">
            <div class="mb-2">
              <p class="titulo text-center">Head of Commercial & Business - Santa Fe</p>
            </div>
            <div>
              <p class="text-center"><i class="ti-email"></i></p>
              <p class="nombre">fernando.scrigna@avril-assistance.com</p>
            </div>
            <ul class="list-inline text-center">
              <li class="list-inline-item"><a href="https://www.facebook.com/fernando.avril.583" target="_blank">
                <i class="ti-facebook"></i></a>
              </li>
              <li class="list-inline-item"><a href="https://www.instagram.com/fer.avrilassistance/" target="_blank">
                <i class="ti-instagram"></i></a>
              </li>
              <li class="list-inline-item"><a href="https://www.linkedin.com/in/fernando-scrigna-38b76953/" target="_blank">
                <i class="ti-linkedin"></i></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
`;


// Elisa Mazzuco
document.getElementById("head-nor").innerHTML = `
<div class="head d-block">
  <div class="image-flip" ontouchstart="this.classList.toggle('hover');">
    <div class="mainflip">
      <div class="frontside">
        <div class="card">
          <div class="card-body">
            <p class="inner">
              <img src="./images/organigrama/elisaM.webp" alt="Elisa Mazzuco" class="inner-image">
            </p>
            <div class="contenido">
              <p class="nombre">Elisa Mazzuco</p>
              <p class="cargo">Head of Commercial & Business - Noroeste</p>
            </div>
          </div>
        </div>
      </div>
      <div class="backside">
        <div class="wave">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <defs>
          <linearGradient id="grad4" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="20%" style="stop-color:rgba(89,0,177,1);stop-opacity:1" />
            <stop offset="100%" style="stop-color:rgba(148,27,128,1);stop-opacity:1" />
          </linearGradient>
        </defs>
        <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"  fill="url(#grad4)"></path>
      </svg>
        </div>
        <div class="card">
          <div class="card-body comercial">
            <div class="mb-2">
              <p class="titulo text-center">Head of Commercial & Business - Noroeste</p>
            </div>
            <div>
              <p class="text-center"><i class="ti-email"></i></p>
              <p class="nombre">elisa.mazzuco@avril-assistance.com</p>
            </div>
            <ul class="list-inline text-center">
              <li class="list-inline-item"><a href="https://www.facebook.com/elisa.mazzucco.7777" target="_blank">
                <i class="ti-facebook"></i></a>
              </li>
              <li class="list-inline-item"><a href="https://www.instagram.com/elisa.mazzucco.avrilassistance/" target="_blank">
                <i class="ti-instagram"></i></a>
              </li>
              <li class="list-inline-item"><a href="https://www.linkedin.com/in/maria-elisa-mazzucco-ortiz-83116625/" target="_blank">
                <i class="ti-linkedin"></i></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
`;
// Ariel Pierini
document.getElementById("asistencias-head").innerHTML = `
<div class="head d-block">
  <div class="image-flip" ontouchstart="this.classList.toggle('hover');">
    <div class="mainflip">
      <div class="frontside">
        <div class="card">
          <div class="card-body">
            <p class="inner">
              <img src="./images/organigrama/arielP.webp" alt="Ariel Pierini" class="inner-image">
            </p>
            <div class="contenido">
              <p class="nombre">Ariel Pierini</p>
              <p class="cargo">Director of Assistance</p>
            </div>
          </div>
        </div>
      </div>
      <div class="backside">
        <div class="wave">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <defs>
          <linearGradient id="grad5" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="20%" style="stop-color:rgba(0,158,226,1);stop-opacity:1" />
            <stop offset="100%" style="stop-color:rgba(41,35,92,1);stop-opacity:1" />
          </linearGradient>
        </defs>
        <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"  fill="url(#grad5)"></path>
      </svg>
        </div>
        <div class="card">
          <div class="card-body asistencia">
            <div class="mb-2">
              <p class="titulo text-center">Director of Assistance</p>
            </div>
            <div>
              <p class="text-center"><i class="ti-email"></i></p>
              <p class="nombre">ariel.pierini@avril-assistance.com</p>
            </div>
            <ul class="list-inline text-center">
              <li class="list-inline-item"><a href="${face}" target="_blank">
                <i class="ti-facebook"></i></a>
              </li>
              <li class="list-inline-item"><a href="${insta}" target="_blank">
                <i class="ti-instagram"></i></a>
              </li>
              <li class="list-inline-item"><a href="${linked}" target="_blank">
                <i class="ti-linkedin"></i></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
`;
// Gustavo Tallaferro
document.getElementById("head-soporte").innerHTML = `
<div class="head d-block">
  <div class="image-flip" ontouchstart="this.classList.toggle('hover');">
    <div class="mainflip">
      <div class="frontside">
        <div class="card">
          <div class="card-body">
            <p class="inner">
              <img src="./images/organigrama/gustavoT.webp" alt="Gustavo Tallaferro" class="inner-image">
            </p>
            <div class="contenido">
              <p class="nombre">Gustavo Tallaferro</p>
              <p class="cargo">Head of IT & Web Development</p>
            </div>
          </div>
        </div>
      </div>
      <div class="backside">
        <div class="wave">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <defs>
          <linearGradient id="grad6" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="20%" style="stop-color:rgba(253,228,62,1);stop-opacity:1" />
            <stop offset="100%" style="stop-color:rgba(224,166,0,1);stop-opacity:1" />
          </linearGradient>
        </defs>
        <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"  fill="url(#grad6)"></path>
      </svg>
        </div>
        <div class="card">
          <div class="card-body soporte">
            <div class="mb-2">
              <p class="titulo text-center">Head of IT - Web Development</p>
            </div>
            <div>
              <p class="text-center"><i class="ti-email"></i></p>
              <p class="nombre">gustavo.tallaferro@avril-assistance.com</p>
            </div>
            <ul class="list-inline text-center">
              <li class="list-inline-item"><a href="${face}" target="_blank">
                <i class="ti-facebook"></i></a>
              </li>
              <li class="list-inline-item"><a href="${insta}" target="_blank">
                <i class="ti-instagram"></i></a>
              </li>
              <li class="list-inline-item"><a href="${linked}" target="_blank">
                <i class="ti-linkedin"></i></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
`;