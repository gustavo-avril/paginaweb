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
	//Comerciales
	const filterComerciales = data.filter((data) => data.department == "comerciales");
	document.getElementById("comercio").innerHTML = `
    ${filterComerciales
		.map(function(comercio) {
			return `
      <div class="persona d-flex">
        <div class="inner">
          <img class="inner-image" src="./images/organigrama/${comercio.pic}.webp" alt="${comercio.name}">
        </div>
        <div class="contenido">
          <p class="nombre ">${comercio.name}</p>
          <p class="cargo">${comercio.position}</p>
        </div>
      </div>
      `;
		})
		.join("")}
  `;
}

