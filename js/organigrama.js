getData();

async function getData() {
	const resp = await fetch("js/organigrama.json");
	const data = await resp.json();
	
	//Marketing
	const filterMarketing = data.filter((data) => data.department == "marketing");
	document.getElementById("marketing").innerHTML = `
    ${filterMarketing
		.map(function(market) {
			return `
      <div class="image-flip" ontouchstart="this.classList.toggle('hover');">
        <div class="mainflip">
          <div class="frontside">
            <div class="card">
              <div class="card-body text-center">
                <p class="inner">
                  <img class="inner-image" src="./images/organigrama/${market.pic}.webp" alt="${market.name}">
                </p>
                <div class="contenido">
                    <p class="nombre ">${market.name}</p>
                    <p class="cargo">${market.position}</p>
                  </div>
              </div>
            </div>
          </div>
          <div class="backside">
            <div class="card">
              <div class="card-body text-center4">
                <h4 class="cargo">Email</h4>
                <p class="nombre">nicole.dagosto@avril-assistance.com</p>
              </div>
              <ul class="list-inline">
                <li class="list-inline-item"><a href="https://www.facebook.com/avrilassistance/" target="_blank">
                  <i class="ti-facebook text-cyan fa-2x"></i></a>
                </li> 
                <li class="list-inline-item"><a href="https://www.facebook.com/avrilassistance/" target="_blank">
                  <i class="ti-facebook text-cyan fa-2x"></i></a>
                </li>
                <li class="list-inline-item"><a href="https://www.facebook.com/avrilassistance/" target="_blank">
                  <i class="ti-facebook text-cyan fa-2x"></i></a>
                </li>
                <li class="list-inline-item"><a href="https://www.facebook.com/avrilassistance/" target="_blank">
                  <i class="ti-facebook text-cyan fa-2x"></i></a>
                </li>                  
              </ul>
            </div>
          </div>
        </div>
      </div>
      `;
		})
		.join("")}
  `;
  //Diseño
	const filterDesign = data.filter((data) => data.department == "design");
	document.getElementById("design").innerHTML = `
    ${filterDesign
		.map(function(design) {
			return `
        <div class="persona d-block">
          <div class="inner">
            <img class="inner-image" src="./images/organigrama/${design.pic}.webp" alt="${design.name}">
          </div>
          <div class="contenido">
            <p class="nombre ">${design.name}</p>
            <p class="cargo">${design.position}</p>
          </div>
        </div>
      `;
		})
		.join("")}
  `;
	//Asistencias
	const filterAsistencia = data.filter((data) => data.department == "asistencias");
	document.getElementById("asis").innerHTML = `
    ${filterAsistencia
		.map(function(asis) {
			return `
        <div class="persona">
          <div class="inner">
            <img class="inner-image" src="./images/organigrama/${asis.pic}.webp" alt="${asis.name}">
          </div>
          <div class="contenido">
            <p class="nombre ">${asis.name}</p>
            <p class="cargo">${asis.position}</p>
          </div>
        </div>
      `;
		})
		.join("")}
  `;
  //Asistencias2
	const filterAsistencia2 = data.filter((data) => data.department == "asistencias2");
	document.getElementById("asis2").innerHTML = `
    ${filterAsistencia2
		.map(function(asis2) {
			return `
        <div class="persona">
          <div class="inner">
            <img class="inner-image" src="./images/organigrama/${asis2.pic}.webp" alt="${asis2.name}">
          </div>
          <div class="contenido">
            <p class="nombre ">${asis2.name}</p>
            <p class="cargo">${asis2.position}</p>
          </div>
        </div>
      `;
		})
		.join("")}
  `;
  //Prestadores
	const filterPrestadores = data.filter((data) => data.department == "prestadores");
	document.getElementById("presta").innerHTML = `
    ${filterPrestadores
		.map(function(presta) {
			return `
        <div class="persona d-block">
          <div class="inner">
            <img class="inner-image" src="./images/organigrama/${presta.pic}.webp" alt="${presta.name}">
          </div>
          <div class="contenido">
            <p class="nombre ">${presta.name}</p>
            <p class="cargo">${presta.position}</p>
          </div>
        </div>
      `;
		})
		.join("")}
  `;
  //Reintegros
	const filterReintegros = data.filter((data) => data.department == "reintegros");
	document.getElementById("reint").innerHTML = `
    ${filterReintegros
		.map(function(reint) {
			return `
        <div class="persona d-block">
          <div class="inner">
            <img class="inner-image" src="./images/organigrama/${reint.pic}.webp" alt="${reint.name}">
          </div>
          <div class="contenido">
            <p class="nombre ">${reint.name}</p>
            <p class="cargo">${reint.position}</p>
          </div>
        </div>
      `;
		})
		.join("")}
  `;
	//Administracion
	const filterAdministracion = data.filter((data) => data.department == "administracion");
	document.getElementById("administracion").innerHTML = `
    ${filterAdministracion
		.map(function(admin) {
			return `
      <div class="persona">
        <div class="inner">
          <img class="inner-image" src="./images/organigrama/${admin.pic}.webp" alt="">
        </div>
        <div class="contenido">
          <p class="nombre ">${admin.name}</p>
          <p class="cargo">${admin.position}</p>
        </div>
      </div>
      `;
		})
		.join("")}
  `;
  //Emisiones
	const filterEmisiones = data.filter((data) => data.department == "emisiones");
	document.getElementById("emisiones").innerHTML = `
    ${filterEmisiones
		.map(function(emision) {
			return `
      <div class="persona">
        <div class="inner">
          <img class="inner-image" src="./images/organigrama/${emision.pic}.webp" alt="">
        </div>
        <div class="contenido">
          <p class="nombre ">${emision.name}</p>
          <p class="cargo">${emision.position}</p>
        </div>
      </div>
      `;
		})
		.join("")}
  `;
	//RRHH
	const filterRRHH = data.filter((data) => data.department == "rrhh");
	document.getElementById("rrhh").innerHTML = `
    ${filterRRHH
		.map(function(rrhh) {
			return `
      <div class="persona d-block">
        <div class="inner">
          <img class="inner-image" src="./images/organigrama/${rrhh.pic}.webp" alt="${rrhh.name}">
        </div>
        <div class="contenido">
          <p class="nombre ">${rrhh.name}</p>
          <p class="cargo">${rrhh.position}</p>
        </div>
      </div>
    `;
		})
		.join("")}
  `;
  //RRHH 2
	const filterRRHH2 = data.filter((data) => data.department == "rrhh2");
	document.getElementById("rrhh2").innerHTML = `
    ${filterRRHH2
		.map(function(rrhh2) {
			return `
      <div class="persona d-block">
        <div class="inner">
          <img class="inner-image" src="./images/organigrama/${rrhh2.pic}.webp" alt="${rrhh2.name}">
        </div>
        <div class="contenido">
          <p class="nombre ">${rrhh2.name}</p>
          <p class="cargo">${rrhh2.position}</p>
        </div>
      </div>
    `;
		})
		.join("")}
  `;
  //RRHH 3
	const filterRRHH3 = data.filter((data) => data.department == "rrhh3");
	document.getElementById("rrhh3").innerHTML = `
    ${filterRRHH3
		.map(function(rrhh3) {
			return `
      <div class="persona d-block">
        <div class="inner">
          <img class="inner-image" src="./images/organigrama/${rrhh3.pic}.webp" alt="${rrhh3.name}">
        </div>
        <div class="contenido">
          <p class="nombre ">${rrhh3.name}</p>
          <p class="cargo">${rrhh3.position}</p>
        </div>
      </div>
    `;
		})
		.join("")}
  `;
	//Soporte & IT
	const filterSoporte = data.filter((data) => data.department == "soporte");
	document.getElementById("soporte").innerHTML = `
    ${filterSoporte
		.map(function(soporte) {
			return `
      <div class="persona d-block">
        <div class="inner">
          <img class="inner-image" src="./images/organigrama/${soporte.pic}.webp" alt="${soporte.name}">
        </div>
        <div class="contenido">
          <p class="nombre ">${soporte.name}</p>
          <p class="cargo">${soporte.position}</p>
        </div>
      </div>
    `;
		})
		.join("")}
  `;
	//Comerciales CABA
	const filterCaba = data.filter((data) => data.department == "caba");
	document.getElementById("caba").innerHTML = `
    ${filterCaba
		.map(function(caba) {
			return `
      <div class="persona d-block">
        <div class="inner">
          <img class="inner-image" src="./images/organigrama/${caba.pic}.webp" alt="${caba.name}">
        </div>
        <div class="contenido">
          <p class="nombre ">${caba.name}</p>
          <p class="cargo">${caba.position}</p>
        </div>
      </div>
      `;
		})
		.join("")}
  `;
  //Comerciales MDP
	const filterMdp = data.filter((data) => data.department == "mdp");
	document.getElementById("mdp").innerHTML = `
    ${filterMdp
		.map(function(mdp) {
			return `
      <div class="persona d-block">
        <div class="inner">
          <img class="inner-image" src="./images/organigrama/${mdp.pic}.webp" alt="${mdp.name}">
        </div>
        <div class="contenido">
          <p class="nombre ">${mdp.name}</p>
          <p class="cargo">${mdp.position}</p>
        </div>
      </div>
      `;
		})
		.join("")}
  `;
  //Comerciales CDA
	const filterCda = data.filter((data) => data.department == "cda");
	document.getElementById("cda").innerHTML = `
    ${filterCda
		.map(function(cda) {
			return `
      <div class="persona d-block">
        <div class="inner">
          <img class="inner-image" src="./images/organigrama/${cda.pic}.webp" alt="${cda.name}">
        </div>
        <div class="contenido">
          <p class="nombre ">${cda.name}</p>
          <p class="cargo">${cda.position}</p>
        </div>
      </div>
      `;
		})
		.join("")}
  `;
  //Comerciales Santa Fe
	const filterSta = data.filter((data) => data.department == "sta");
	document.getElementById("sta").innerHTML = `
    ${filterSta
		.map(function(sta) {
			return `
      <div class="persona d-block">
        <div class="inner">
          <img class="inner-image" src="./images/organigrama/${sta.pic}.webp" alt="${sta.name}">
        </div>
        <div class="contenido">
          <p class="nombre ">${sta.name}</p>
          <p class="cargo">${sta.position}</p>
        </div>
      </div>
      `;
		})
		.join("")}
  `;
  //Comerciales Litoral
	const filterLit = data.filter((data) => data.department == "lit");
	document.getElementById("lit").innerHTML = `
    ${filterLit
		.map(function(lit) {
			return `
      <div class="persona d-block">
        <div class="inner">
          <img class="inner-image" src="./images/organigrama/${lit.pic}.webp" alt="${lit.name}">
        </div>
        <div class="contenido">
          <p class="nombre ">${lit.name}</p>
          <p class="cargo">${lit.position}</p>
        </div>
      </div>
      `;
		})
		.join("")}
  `;
  //Comerciales Noroeste
	const filterNor = data.filter((data) => data.department == "nor");
	document.getElementById("nor").innerHTML = `
    ${filterNor
		.map(function(nor) {
			return `
      <div class="persona d-block">
        <div class="inner">
          <img class="inner-image" src="./images/organigrama/${nor.pic}.webp" alt="${nor.name}">
        </div>
        <div class="contenido">
          <p class="nombre ">${nor.name}</p>
          <p class="cargo">${nor.position}</p>
        </div>
      </div>
      `;
		})
		.join("")}
  `;
  //Comerciales Cuyo
	const filterCuyo = data.filter((data) => data.department == "cuyo");
	document.getElementById("cuyo").innerHTML = `
    ${filterCuyo
		.map(function(cuyo) {
			return `
      <div class="persona d-block">
        <div class="inner">
          <img class="inner-image" src="./images/organigrama/${cuyo.pic}.webp" alt="${cuyo.name}">
        </div>
        <div class="contenido">
          <p class="nombre ">${cuyo.name}</p>
          <p class="cargo">${cuyo.position}</p>
        </div>
      </div>
      `;
		})
		.join("")}
  `;
}

