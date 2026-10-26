(function () {
  var api = impress();
  api.init();

  var steps = Array.prototype.slice.call(document.querySelectorAll('#impress .step.slide'));
  var bar = document.querySelector('.progress div');

  // Полоска прогресса внизу экрана
  document.addEventListener('impress:stepenter', function (e) {
    var i = steps.indexOf(e.target);
    if (i >= 0 && bar) bar.style.width = ((i + 1) / steps.length * 100) + '%';
  });

  // O — обзор всех листов (работает и в русской раскладке)
  document.addEventListener('keydown', function (e) {
    if (e.key === 'o' || e.key === 'O' || e.key === 'щ' || e.key === 'Щ') api.goto('overview');
  });
})();
