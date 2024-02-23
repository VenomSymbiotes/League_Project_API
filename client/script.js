async function displayChampions() {
  const championRoster = await axios.get("http://localhost:3001/champions");

  const champions = championRoster.data;

  const container = document.querySelector(".container");
  champions.forEach((champion) => {
    container.insertAdjacentHTML(
      "beforeend",
      `
      <h2>'${champion.name}'<h2>
      <h3>'${champion.champTitle}'<h3>
      <img src='${champion.image}'>
      <p>Passive:'${champion.passive}'<p>
      <p>ability 1:'${champion.ability1}<p>
      <p>ability 2:'${champion.ability2}<p>
      <p>ability 3:'${champion.ability3}<p>
      <p>Ultimate ability:'${champion.ultimateAbility}<p>
      <p>Lore:'${champion.lore}<p>
      <p>Role:'${champion.usualRole}<p>
      <p>Skins:'${champion.skinList}<p>
      <iframe width="560" height="315" src='${champion.musicTheme}'></iframe>
      



  
    `
    );
  });
}

displayChampions();
