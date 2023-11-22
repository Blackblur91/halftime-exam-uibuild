document.querySelector("#root").insertAdjacentHTML("beforeend", `
<form>
  <h1>Visszajelzés</h1>

  <input type="text" placeholder="Tárgy">

  <textarea placeholder="Megjegyzés" id="" cols="30" rows="10"></textarea>

  <div>
    <input type="checkbox">
    <p>Elolvastam és elfogadom az <span class="underline">Adatkezelési Tájékoztatót</span></p>
  </div>

  <div>
    <input type="checkbox">
    <p>Szeretnék hírlevelet kapni</p>
  </div>

  <div>
    <button>Mentés</button>
  </div>

</form>

`)