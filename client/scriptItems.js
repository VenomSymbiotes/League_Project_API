async function displayItems() {
  const itemList = await axios.get("http://localhost:3001/items");

  const items = itemList.data;

  const itemcontainer = document.querySelector(".container");
  items.forEach((item) => {
    itemcontainer.insertAdjacentHTML(
      "beforeend",
      `
            <h2>'${item.name}'<h2>
            <h4>'${item.image}'<h4>
            <h3>'${item.goldCost}'<h3>
            <h4>'${item.ad}<h4>
            <h4>'${item.ap}<h4>
            <h4>'${item.critChance}<h4>
            <h4>'${item.critStrikeDamage}<h4>
            <h4>'${item.magicPenetration}<h4>
            <h4>'${item.armorPenetration}<h4>
            <h4>'${item.lethality}<h4>
            <h4>'${item.lifestealAndVamp}<h4>
            <h4>'${item.magicResist}<h4>
            <h4>'${item.armor}<h4>
            <h4>'${item.attackSpeed}<h4>
            <h4>'${item.health}<h4>
            <h4>'${item.healthRegen}<h4>
            <h4>'${item.mana}<h4>
            <h4>'${item.manaRegen}<h4>
            <h4>'${item.moveSpeed}<h4>
            <h4>'${item.abilityHaste}<h4>
            <h4>'${item.tenacity}<h4>
            <h4>'${item.healandShieldPower}<h4>
            <h4>'${item.goldGeneration}<h4>
            <h3>'${item.itemAbility}<h3>

            
            
            `
    );
  });
}

displayItems();
