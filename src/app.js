function changeClass() {
  document.getElementById('1').className = "tab tab-lg tab-bordered font-fredoka tab-active";
  let button_class = document.getElementById('1').className;
  document.getElementById('pId').innerHTML = "tab tab-lg tab-bordered font-fredoka tab-active" + button_class;
}
window.onload = function() {
  document.getElementById("1").addEventListener('click', changeClass);
}