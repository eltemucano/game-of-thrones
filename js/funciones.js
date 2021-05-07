$('img').hover(function () {
  $(this).toggleClass('magictime puffIn');
});

$("img").on("click", function () {
  // $(this).addClass('magictime vanishIn');
  let house = $(this).attr("id");
  console.log("click", house);
  $.get(
    `https://www.anapioficeandfire.com/api/houses/${house}`,
    function (dato) {
      console.log(dato);
      $("#info").html(`<p>Nombre : ${dato.name}</p><p>Frase : ${dato.words}</p><p>Titulos : ${dato.titles}</p><p>Region : ${dato.region}</p>`);
    }
  );
  
});
