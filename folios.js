const baseFolios = {
    "CBG3760391305": {
        nombre: "ADRIAN ACOSTA MATA",
        matricula: "1755M425555",
        institucion: "Colegio Nacional de Educación Profesional Técnica",
        plantel: "023 Prof. Joaquin Humberto Gonzalez Loza",
        cct: "05DPT0003Z",
        carrera: "Mantenimiento de sistemas automáticos",
        trayecto: "Automatización y control de procesos industriales",
        promedio: "8.5 (Ocho punto cinco)",
        creditos: "378 créditos obtenidos de un total de 378",
        periodo: "Del 1 de agosto de 2015 al 15 de julio de 2018",
        tipoDocumento: "Certificado de Terminación de Estudios o Certificado de Formación Profesional",
        estatus: "Registrado en el MEC",
        folio: "CBG3760391305",
        fechaTimbrado: "2018-07-19 10:21:35"
    }
};

function buscarFolio() {
    const folioIngresado = document.getElementById('f').value.trim();
    const aviso = document.getElementById('avisoResultado');
    const datos = document.getElementById('datosCertificado');

    if (!folioIngresado) {
        aviso.innerHTML = `<div class="alert alert-warning">Escribe un folio por favor</div>`;
        datos.innerHTML = "";
        return false;
    }

    if (baseFolios[folioIngresado]) {
        const d = baseFolios[folioIngresado];
        aviso.innerHTML = `<div class="alert alert-secondary">Información encontrada en registros oficiales.</div>`;
        datos.innerHTML = `
        <table class="table mt-3">
            <tr><th colspan="2" class="text-center">Datos del estudiante</th></tr>
            <tr><th>Nombre:</th><td>${d.nombre}</td></tr>
            <tr><th>Matrícula:</th><td>${d.matricula}</td></tr>
            <tr><th colspan="2" class="text-center">Datos del plantel</th></tr>
            <tr><th>Institución:</th><td>${d.institucion}</td></tr>
            <tr><th>Plantel:</th><td>${d.plantel}</td></tr>
            <tr><th>CCT:</th><td>${d.cct}</td></tr>
            <tr><th colspan="2" class="text-center">Trayectoria</th></tr>
            <tr><th>Carrera:</th><td>${d.carrera} — ${d.trayecto}</td></tr>
            <tr><th>Promedio:</th><td>${d.promedio}</td></tr>
            <tr><th>Créditos:</th><td>${d.creditos}</td></tr>
            <tr><th>Periodo:</th><td>${d.periodo}</td></tr>
            <tr><th>Documento:</th><td>${d.tipoDocumento}</td></tr>
            <tr><th>Estatus:</th><td>${d.estatus}</td></tr>
            <tr><th>Folio:</th><td>${d.folio}</td></tr>
            <tr><th>Fecha:</th><td>${d.fechaTimbrado}</td></tr>
        </table>
        <div class="alert alert-success mt-3">
            Verificar en SIGED:
            <a href="https://www.sep.dgb.bachilleraato.org/?folio=${d.folio}" target="_blank" class="btn btn-sm btn-outline-dark ml-2">Abrir</a>
        </div>
        `;
    } else {
        aviso.innerHTML = `<div class="alert alert-danger">El folio no está registrado en tu lista.</div>`;
        datos.innerHTML = "";
    }
    return false;
}
