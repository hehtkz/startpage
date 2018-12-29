var sitesSearch = [
  "http://pt.stackoverflow.com/search?q=",
  "https://www.youtube.com/results?search_query=",
  "https://github.com/search?&q=",
  "https://thepiratebay.org/search/",
  "http://www.dicio.com.br/pesquisa.php?q=",
  "https://reddit.com/r/",
  "http://caniuse.com/#search=",
  "https://wiki.archlinux.org/index.php?search=",
  "http://gen.lib.rus.ec/search.php?req="
];

var sitesNIDSearch = [
  "stack-ov",
  "youtube",
  "github",
  "pirate-bay",
  "dicio",
  "reddit",
  "caniuse",
  "archwiki",
  "libgen"
];

var sitesNSearch = [
  "Stack Overflow",
  "Youtube",
  "GitHub",
  "The Pirate Bay",
  "Dicio",
  "Reddit",
  "Can I Use",
  "ArchWiki",
  "Library Genesis"
];

var conSearch = document.getElementById("container-search");
for (var i = 0; i < sitesNSearch.length; i++) {
  var searchBox = document.createElement("input");
  searchBox.setAttribute("placeholder", sitesNSearch[i]);
  searchBox.id = sitesNIDSearch[i];
  conSearch.appendChild(searchBox);
}

document.body.setAttribute("class", "load");

var input = document.getElementsByTagName("input");
for (var i = 0; i < input.length; i++) {
  input[i].addEventListener("keydown", function(event) {
    var tecla = event.keyCode;
    if (tecla == 13) {
      var pos = sitesNIDSearch.indexOf(this.id);
      window.location = sitesSearch[pos] + this.value;
    }
  });
}
