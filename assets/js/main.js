// Creatrs — interacciones del portafolio
(function () {
  // Menú móvil
  var burger = document.querySelector('.burger');
  var menu = document.getElementById('menu');
  if (burger && menu) {
    burger.addEventListener('click', function () {
      var open = menu.classList.toggle('open');
      burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    menu.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { menu.classList.remove('open'); burger.setAttribute('aria-expanded', 'false'); });
    });
  }

  // Año del pie de página
  var y = document.getElementById('y');
  if (y) y.textContent = new Date().getFullYear();

  // Brief: preselecciona el plan desde ?plan=...
  var form = document.getElementById('brief');
  if (!form) return;
  var plan = new URLSearchParams(location.search).get('plan');
  var sel = form.querySelector('[name=plan]');
  if (plan && sel) {
    var opt = sel.querySelector('option[value="' + plan + '"]');
    if (opt) opt.selected = true;
  }

  // Lista de "lo que necesitamos": guarda las casillas marcadas solo en este navegador
  var KEY = 'creatrs-brief-checks';
  var checks = document.querySelectorAll('.reqc input[type=checkbox]');
  var saved = {};
  try { saved = JSON.parse(localStorage.getItem(KEY) || '{}'); } catch (e) {}
  checks.forEach(function (c, i) {
    if (saved[i]) c.checked = true;
    c.addEventListener('change', function () {
      saved[i] = c.checked;
      try { localStorage.setItem(KEY, JSON.stringify(saved)); } catch (e) {}
    });
  });

  // Arma el mensaje del brief
  function mensaje() {
    var d = new FormData(form);
    var objetivos = d.getAll('objetivo').join(', ') || 'Sin especificar';
    var partes = [
      'Hola Creatrs, este es mi brief:',
      '',
      'Nombre: ' + (d.get('nombre') || ''),
      'Empresa: ' + (d.get('empresa') || ''),
      'Ciudad: ' + (d.get('ciudad') || ''),
      'Web actual: ' + (d.get('web') || 'No tengo'),
      'Plan de interés: ' + (sel ? sel.options[sel.selectedIndex].text : ''),
      'Objetivos: ' + objetivos,
      'Presupuesto aproximado: ' + (d.get('presupuesto') || ''),
      'Fecha deseada: ' + (d.get('fecha') || ''),
      'Webs que le gustan: ' + (d.get('referencias') || ''),
      '',
      'Sobre el negocio: ' + (d.get('detalle') || '')
    ];
    return partes.join('\n');
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (!form.reportValidity()) return;
    var canal = e.submitter && e.submitter.value === 'correo' ? 'correo' : 'wa';
    var texto = mensaje();
    if (canal === 'correo') {
      location.href = 'mailto:agencia.creatrsplus@gmail.com?subject=' + encodeURIComponent('Brief de proyecto web') + '&body=' + encodeURIComponent(texto);
    } else {
      window.open('https://wa.me/573237962885?text=' + encodeURIComponent(texto), '_blank', 'noopener');
    }
  });
})();
