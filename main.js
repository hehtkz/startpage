var sites = {
  "stack-ov": "http://pt.stackoverflow.com/search?q=",
  "youtube": "https://www.youtube.com/results?search_query=",
  "github": "https://github.com/search?&q=",
  "pirate-bay": "https://thepiratebay.org/search/",
  "dicio": "http://www.dicio.com.br/pesquisa.php?q=",
  "reddit": "https://reddit.com/r/",
  "caniuse": "http://caniuse.com/#search=",
  "archwiki": "https://wiki.archlinux.org/index.php?search=",
  "libgen": "http://gen.lib.rus.ec/search.php?req="
};

var input = document.getElementsByTagName("input");
for (var i = 0; i < input.length; i++) {
  input[i].addEventListener("keydown", function(e) {
    var tecla = e.keyCode;
    if (tecla == 13) {
      window.location = sites[this.id] + this.value;
    }
  });
}
