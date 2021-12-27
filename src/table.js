function ambilData() {
  const cekData = document.getElementsByTagName("button")[0];
  cekData.addEventListener("click", function () {
    new gridjs.Grid({
      columns: ["Name", "Email", "Phone Number", "Alamat"],
      search: true,
      pagination: true,
      sort: true,
      data: [
        ["Fahmi", "fahimun32@gmail.com", "085268477587", "Madiun"],
        ["Gama", "gama123@gmail.com", "089519813988", "Bandung"],
        ["Indra", "indra222@gmail.com", "085277648798", "Jakarta"],
        ["Miftarif", "miftarif@gmail.com", "087784493444", "Pekalongan"],
        ["Rhesa", "rhesa111@gmail.com", "08985554431", "Banyumas"],
      ],
    }).render(document.getElementById("wrapper"));
  });
}


export { ambilData };