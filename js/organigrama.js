getData();

async function getData() {
	const resp = await fetch("js/organigrama.json");
	const data = await resp.json();
	
	//Markeitng
	const filterMarketing = data.filter((data) => data.department == "marketing");
	document.getElementById("marketing").innerHTML = `
    ${filterMarketing
		.map(function(market) {
			return `
        <div class="persona d-flex">
          <div class="inner">
            <img class="inner-image" src="./images/organigrama/${market.pic}.webp" alt="${market.name}">
          </div>
          <div class="contenido">
            <p class="nombre ">${market.name}</p>
            <p class="cargo">${market.position}</p>
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
        <div class="persona d-flex">
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
	//Administracion
	const filterAdministracion = data.filter((data) => data.department == "administracion");
	document.getElementById("administracion").innerHTML = `
    ${filterAdministracion
		.map(function(admin) {
			return `
      <div class="persona d-flex">
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
      <div class="persona d-flex">
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
      <div class="persona d-flex">
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
      <div class="persona d-flex">
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
	//Soporte & IT
	const filterSoporte = data.filter((data) => data.department == "soporte");
	document.getElementById("soporte").innerHTML = `
    ${filterSoporte
		.map(function(soporte) {
			return `
      <div class="persona d-flex">
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
      <div class="persona d-flex">
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
      <div class="persona d-flex">
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
      <div class="persona d-flex">
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
}

