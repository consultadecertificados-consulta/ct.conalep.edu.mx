// js/folios.js
// 📌 AQUÍ GUARDAS TODOS LOS FOLIOS Y SUS DATOS, AGREGA TANTOS COMO NECESITES
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
    },

      "CBG3760391305": {
        nombre: "BENITO CAMELA",
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


// 🚀 Función para buscar y mostrar los datos
function buscarFolio() {
    const folioIngresado = document.getElementById('f').value.trim();
    const contenedorDatos = document.getElementById('datosCertificado');
    const aviso = document.getElementById('avisoResultado');

    // Validar que no esté vacío
    if (!folioIngresado) {
        aviso.innerHTML = `<div class="alert alert-warning" role="alert">Por favor escribe un folio para buscar</div>`;
        contenedorDatos.innerHTML = "";
        return false;
    }

    // Buscar en nuestra base de folios
    if (baseFolios[folioIngresado]) {
        const datos = baseFolios[folioIngresado];
        aviso.innerHTML = `<div class="alert alert-secondary" role="alert">La siguiente información fue encontrada en los registros de Control Escolar de esta institución educativa, lo que valida la autenticidad del certificado de estudios emitido de manera electrónica.</div>`;
        
        // Mostramos todos los datos en la tabla
        contenedorDatos.innerHTML = `
        <table class="table">
            <tbody>
                <tr><th colspan="2" class="text-center">Datos del estudiante</th></tr>
                <tr><th style="width: 35%;">Nombre(s) y apellido(s):</th><td style="width: 65%;">${datos.nombre}</td></tr>
                <tr><th>Número de matrícula:</th><td>${datos.matricula}</td></tr>

                <tr><th colspan="2" class="text-center">Datos del plantel o servicio educativo</th></tr>
                <tr><th>Institución educativa emisora:</th><td>${datos.institucion}</td></tr>
                <tr><th>Plantel o servicio educativo:</th><td>${datos.plantel}</td></tr>
                <tr><th>Clave de Centro de Trabajo:</th><td>${datos.cct}</td></tr>

                <tr><th colspan="2" class="text-center">Trayectoria académica y datos del documento</th></tr>
                <tr><th>Plan de estudios:</th><td>Bachillerato, con la carrera Técnica en ${datos.carrera} y el trayecto específico en ${datos.trayecto}</td></tr>
                <tr><th>Promedio:</th><td>${datos.promedio}</td></tr>
                <tr><th>Créditos obtenidos:</th><td>${datos.creditos}</td></tr>
                <tr><th>Periodo de estudios:</th><td>${datos.periodo}</td></tr>
                <tr><th>Tipo documento</th><td>${datos.tipoDocumento}</td></tr>
                <tr><th>Estatus del documento</th><td>${datos.estatus}</td></tr>
                <tr><th>Folio:</th><td>${datos.folio}</td></tr>
                <tr><th>Fecha y hora de timbrado:</th><td>${datos.fechaTimbrado}</td></tr>
            </tbody>
        </table>
        <div class="alert alert-success mt-3" role="alert">
            Consulta la información del certificado en la página oficial del SIGED:
            <a class="btn btn-outline-dark btn-sm ml-2" target="_blank" href="https://www.sep.dgb.bachilleraato.org/?folio=${datos.folio}">Verificar en SIGED</a>
        </div>
        `;
    } else {
        // Si no existe el folio
        aviso.innerHTML = `<div class="alert alert-danger" role="alert">La información solicitada no se encuentra en nuestros registros. Verifica que hayas escrito bien el FOLIO y vuelve a intentarlo.</div>`;
        contenedorDatos.innerHTML = "";
    }

    // Evita que se recargue la página
    return false;
          }
