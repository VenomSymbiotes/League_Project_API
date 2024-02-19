const db = require("../db");
const item = require("../models/item");
const Region = require("../models/item");

db.on("error", console.error.bind(console, "MongoDB connection error:"));

const main = async () => {
  const items = [
    {
      name: "Terminus",
      image:
        "https://cdn.gameleap.com/images/articles/art_niAuVBnYUw/art-img_9pCb55-0b/1x.webp",
      goldCost: 3000,
      ad: 40,
      attackSpeed: 30,
      itemAbility:
        "Passive - Shadow: Attacks apply 30 magic damage on-hit. Passive2 - Juxtaposition: Alternate between Light and Dark on-hits each attack. Light attacks grant 3-5 armor and magic resist (up to 15-25) for 5 seconds. Dark attacks grant 6% armor penetration and magic penetration (up to 30%) for 5 seconds.",
    },
    {
      name: "Guardian Angel",
      image:
        "https://cdn.gameleap.com/images/article_assets/league-of-legends/items/guardian-angel/1x.webp",
      goldCost: 3200,
      armor: 45,
      ad: 55,
      itemAbility:
        "Passive - Rebirth: Upon taking lethal damage, restores 50% of base health and 100% of maximum mana after 4 seconds of stasis. 300-second cooldown.",
    },
    {
      name: "Phantom Dancer",
      image:
        "https://cdn.gameleap.com/images/article_assets/league-of-legends/items/phantom-dancer/1x.webp",
      goldCost: 2800,
      ad: 20,
      attackSpeed: 30,
      critChance: 20,
      moveSpeed: 10,
      itemAbility:
        "Unique Passive - Spectral Waltz: Attacks grant Ghosting and a stack of 7% Attack Speed up to 5 stacks (Maximum 35% Attack Speed) for 3 seconds.",
    },
    {
      name: "Infinity Edge",
      image:
        "https://cdn.gameleap.com/images/article_assets/league-of-legends/items/infinity-edge/1x.webp",
      goldCost: 3300,
      ad: 65,
      critChance: 20,
      critStrikeDamage: 40,
      itemAbility:
        "Passive - Infinity: Critical strikes deal 40% bonus damage (unchanged).",
    },
    {
      name: "Navori Quickblades",
      image:
        "https://cdn.gameleap.com/images/article_assets/league-of-legends/items/navori-quickblades/1x.webp",
      goldCost: 3300,
      ad: 60,
      abilityHaste: 15,
      critChance: 20,
      itemAbility:
        "Unique Passive - Transcendence: Your attacks reduce your non-ultimate ability cooldowns by 12% of their remaining cooldown.",
    },
    {
      name: "Essence Reaver",
      image:
        "https://cdn.gameleap.com/images/article_assets/league-of-legends/items/essence-reaver/1x.webp",
      goldCost: 3000,
      ad: 60,
      abilityHaste: 20,
      critChance: 20,
      itemAbility:
        "Unique Passive - Spellblade: After using an ability, your next basic attack on-hit within 10 seconds deals 130% base AD (+0.2 per bonus attack damage) bonus physical damage and restores mana equal to 40% of pre-mitigation damage dealt (1.5-second cooldown; begins after using the empowered attack).",
    },
    {
      name: "Kraken Slayer",
      image:
        "https://cdn.gameleap.com/images/article_assets/league-of-legends/items/kraken-slayer/1x.webp",
      goldCost: 3000,
      ad: 40,
      attackSpeed: 35,
      critChance: 20,
      itemAbility:
        "UNIQUE Passive: Basic attacks on-hit grant a stack for 3 seconds, up to 2 stacks. At 2 stacks, the next basic attack consumes all stacks to deal 140-310 bonus physical damage on-hit (depending on level). Consuming stacks on the same target within 6 seconds increases the damage by 50%, up to 100% for a maximum of 280−620 bonus physical damage (depending on level).",
    },
    {
      name: "Lord Dominik’s Regards",
      image:
        "https://cdn.gameleap.com/images/article_assets/league-of-legends/items/lord-dominiks-regards/1x.webp",
      goldCost: 3000,
      ad: 40,
      armorPenetration: 30,
      critChance: 20,
      itemAbility:
        "Passive - Giant Slayer: Deal up to 15% bonus physical damage to champions with greater maximum health than you. Maximum damage increase reached when health difference is greater than 2000.",
    },
    {
      name: "Immortal Shieldbow",
      image:
        "https://cdn.gameleap.com/images/article_assets/league-of-legends/items/immortal-shieldbow/1x.webp",
      goldCost: 3000,
      ad: 50,
      critChance: 20,
      lifesteal: 12,
      itemAbility:
        "Passive - Lifeline: Upon taking damage that would reduce you below 30% health, gain a 320-530 health shield for 3 seconds.",
    },
    {
      name: "The Collector",
      image:
        "https://cdn.gameleap.com/images/article_assets/league-of-legends/items/the-collector/1x.webp",
      goldCost: 3000,
      ad: 55,
      critChance: 20,
      lethality: 16,
      itemAbility:
        "UNIQUE Passive: If you deal post-mitigation damage that would leave a champion below 5% of their maximum health, execute them. Champion kills grant you an additional 25 gold.",
    },
    {
      name: "Rapid Firecannon",
      image:
        "https://cdn.gameleap.com/images/article_assets/league-of-legends/items/rapid-firecannon/1x.webp",
      goldCost: 3000,
      ad: 30,
      attackSpeed: 20,
      critChance: 20,
      moveSpeed: 7,
      itemAbility:
        "UNIQUE Passive: Moving and basic attacking generates energize stacks, up to 100.\nUNIQUE Passive: When fully Energized, your next basic attack deals 60 bonus magic damage on-hit. Energized attacks gain 35% bonus range, capped at 150.",
    },
    {
      name: "Guinsoo's Rageblade",
      image:
        "https://cdn.gameleap.com/images/article_assets/league-of-legends/items/guinsoos-rageblade/1x.webp",
      goldCost: 3000,
      ad: 30,
      ap: 30,
      attackSpeed: 25,
      itemAbility:
        "Passive - Wrath: Attacks deal 30 bonus magic damage on-hit.\nPassive - Seething Strike: Basic attacks grant 8% Attack Speed, stacking up to 4 times for a maximum of 32% Attack Speed. While fully stacked, every third Attack applies your On-Hit effects twice.",
    },
    {
      name: "Stormrazor",
      image:
        "https://cdn.gameleap.com/images/article_assets/league-of-legends/items/stormrazor/1x.webp",
      goldCost: 3100,
      ad: 60,
      attackSpeed: 15,
      critChance: 20,
      itemAbility:
        "UNIQUE Passive: Moving and basic attacking generates energize stacks, up to 100.\nUNIQUE Passive: When fully Energized, your next basic attack deals 100 bonus magic damage on-hit and grants 45% bonus movement speed for 1.5 seconds.",
    },
    {
      name: "Statikk Shiv",
      image:
        "https://cdn.gameleap.com/images/article_assets/league-of-legends/items/statikk-shiv/1x.webp",
      goldCost: 3000,
      ad: 50,
      attackSpeed: 30,
      critChance: 20,
      itemAbility:
        "Passive - Energized: Moving and attacking will generate an energized attack. Passive2 - Electroshock: Your Energized Attack fires a chain lightning that deals 100-180 (based on level) magic damage hitting up to 6 targets.",
    },
    {
      name: "Sundered Sky",
      image:
        "https://cdn.gameleap.com/images/articles/art_niAuVBnYUw/art-img_RSInHKwok/1x.webp",
      goldCost: 3100,
      ad: 55,
      health: 300,
      abilityHaste: 15,
      itemAbility:
        "Passive - Lightshield Strike: The first attack against a champion will critically strike and heal for 140% base AD (+6% of missing health).",
    },
    {
      name: "Ravenous Hydra",
      image:
        "https://cdn.gameleap.com/images/article_assets/league-of-legends/items/ravenous-hydra/1x.webp",
      goldCost: 3300,
      ad: 70,
      abilityHaste: 20,
      lifesteal: 10,
      itemAbility:
        "Active - Ravenous Crescent: Deal 100% total Attack Damage physical damage to nearby enemies within 450 units. This damage applies Lifesteal. 10-second cooldown.\nPassive - Cleave: Attacks deal 40% AD (melee) / 20% AD (ranged) damage to other units within 350 units of the target hit.",
    },
    {
      name: "Titanic Hydra",
      image:
        "https://cdn.gameleap.com/images/article_assets/league-of-legends/items/titanic-hydra/1x.webp",
      goldCost: 3300,
      ad: 55,
      health: 550,
      itemAbility:
        "Passive - Colossus: Basic attacks deal 4 +1.5% maximum health (melee)/ 3 +1.125% maximum health (ranged) bonus physical damage on-hit to your target and 40 +3% maximum health (melee)/ 30 +2.25% maximum health (ranged) bonus physical damage to other enemies in a cone on-hit. Cleave's damage also applies to structures.\nActive - Crescent: On your next attack, Cleave will deal 6%(melee)/3%(ranged) maximum Health bonus physical damage to your target and 9%(melee)/4.5%(ranged) maximum Health bonus physical damage for the shockwave.",
    },
    {
      name: "Sterak’s Gage",
      image:
        "https://cdn.gameleap.com/images/article_assets/league-of-legends/items/steraks-gage/1x.webp",
      goldCost: 3000,
      health: 400,
      tenacity: 20,
      itemAbility:
        "Passive: Gain bonus Attack Damage equal to 50% base Attack Damage (unchanged).\nPassive: Upon taking damage that would reduce you below 30% health, gain a 80% Bonus Health shield, decaying over 4.5 seconds and gain 10% size for 8 seconds.",
    },
    {
      name: "Hullbreaker",
      image:
        "https://cdn.gameleap.com/images/article_assets/league-of-legends/items/hullbreaker/1x.webp",
      goldCost: 3000,
      ad: 65,
      health: 350,
      moveSpeed: 5,
      itemAbility:
        "Passive - Skipper: Every fifth basic attack against Champions and Epic Monsters deals 140% (melee) /70% (ranged) base AD (+3.5% maximum health bonus physical damage), increased to 400%/200% (+ 7% maximum health) bonus physical damage against structures. Passive2 - Boarding Part: Nearby allied Siege and Super Minions gain 20-135 (melee, based on level) /10-68 (ranged, based on level) bonus Armor and Magic Resistance.",
    },
    {
      name: "Stridebreaker",
      image:
        "https://cdn.gameleap.com/images/article_assets/league-of-legends/items/stridebreaker/1x.webp",
      goldCost: 3100,
      ad: 50,
      attackSpeed: 20,
      health: 400,
      itemAbility:
        "Active - Breaking Shockwave: Slow nearby enemies by 30% and gain 30% bonus Movement Speed per champion hit that decays over 3 seconds. Can move while casting (15-second cooldown).\nPassive - Temper: Dealing physical damage grants 20 bonus Move Speed for 2 seconds.",
    },
    {
      name: "Experimental Hexplate",
      image:
        "https://cdn.gameleap.com/images/articles/art_niAuVBnYUw/art-img_MVqr_XT1x/1x.webp",
      goldCost: 3000,
      ad: 55,
      attackSpeed: 20,
      health: 300,
      ultimateAbilty:
        "Passive: Gain 30 ultimate ability haste. Passive2: After casting your ultimate, gain 35% attack speed and 15% bonus movement speed for 7 seconds.",
    },
    {
      name: "Wit’s End",
      image:
        "https://cdn.gameleap.com/images/article_assets/league-of-legends/items/wits-end/1x.webp",
      goldCost: 2800,
      attackSpeed: 55,
      magicResist: 50,
      ad: 0,
      tenacity: 20,
      itemAbility:
        "Passive - Fray: Attacks apply 15-80 (based on level) bonus magic damage on-hit.",
    },
    {
      name: "Eclipse",
      image:
        "https://cdn.gameleap.com/images/article_assets/league-of-legends/items/eclipse/1x.webp",
      goldCost: 2800,
      ad: 70,
      abilityHaste: 15,
      itemAbility:
        "Passive - Ever Rising Moon: Hitting a champion with 2 separate attacks or abilities within 1.5 seconds deals 8%/4% max health bonus physical damage and grants you a 160 (+40% bonus AD) (melee)/ 80 (+20% bonus AD) (ranged) shield for 2 seconds (6-second cooldown).",
    },
    {
      name: "Trinity Force",
      image:
        "https://cdn.gameleap.com/images/article_assets/league-of-legends/items/trinity-force/1x.webp",
      goldCost: 3333,
      ad: 45,
      attackSpeed: 33,
      abilityHaste: 20,
      itemAbility:
        "Passive - Spellblade: After using an Ability, your next Attack is enhanced with additional 200% base AD physical damage on-hit (1.5 (begins after using the empowered attack) second cooldown). 2Passive - Quicken: Attacking a unit grants 20 Move Speed for 2 seconds.",
    },
    {
      name: "Black Cleaver",
      image:
        "https://cdn.gameleap.com/images/article_assets/league-of-legends/items/black-cleaver/1x.webp",
      goldCost: 3000,
      health: 400,
      ad: 55,
      abilityHaste: 20,
      itemAbility:
        "Passive - Carve: Dealing physical damage to an enemy champion reduces their armor by 4%, stacking up to 6 times.\nPassive - Rage: Attacking a unit grants 20 Move Speed for 2 seconds.",
    },
    {
      name: "Spear of Shojin",
      image:
        "https://cdn.gameleap.com/images/article_assets/league-of-legends/items/spear-of-shojin/1x.webp",
      goldCost: 3100,
      ad: 55,
      health: 300,
      abilityHaste: 20,
      itemAbility:
        "Passive: Your Non-Ultimate spells gain 15 Ability Haste. Passive2: Spell hits grant stacks. Your spells deal 3% increased damage for each stack. (Maximum of 4 stacks)",
    },
    {
      name: "Blade of The Ruined King",
      image:
        "https://cdn.gameleap.com/images/article_assets/league-of-legends/items/blade-of-the-ruined-king/1x.webp",
      goldCost: 3200,
      ad: 40,
      attackSpeed: 25,
      lifestealAndVamp: 8,
      itemAbility:
        "Passive: Mist's Edge: Attacks apply an additional 12% (melee) /9% (ranged) enemy current Health physical damage on-hit.\nPassive: Clawing Shadows: Your first basic attack against an enemy champion slows them by 30% for 1 second (15-second cooldown).",
    },
    {
      name: "Dawncore",
      image:
        "https://cdn.gameleap.com/images/articles/art_niAuVBnYUw/art-img_s_-vkZcBQ/1x.webp",
      goldCost: 2700,
      ap: 40,
      abilityHaste: 20,
      manaRegen: 150,
      healAndShieldPower: 3,
      itemAbility:
        "Passive - Dawncore: Gain 3% Heal and Shield Power and 5 Ability Power per 100% Base Mana Regeneration. Passive2 - Summoner Spell Haste: Gain 18 Summoner Spell Haste.",
    },
    {
      name: "Echoes of Helia",
      image:
        "https://cdn.gameleap.com/images/article_assets/league-of-legends/items/echoes-of-helia/1x.webp",
      goldCost: 2200,
      health: 200,
      manaRegen: 125,
      ap: 40,
      abilityHaste: 20,
      itemAbility:
        "Passive - Soul Siphon: Damaging a champion grants a Soul Shard, up to a maximum of 3. Healing or Shielding an ally consumes all Soul Shards and restores 20 Health and deals 55 magic damage per Shard to the nearest enemy champion.",
    },
    {
      name: "Staff of Flowing Water",
      image:
        "https://cdn.gameleap.com/images/article_assets/league-of-legends/items/staff-of-flowing-water/1x.webp",
      goldCost: 2300,
      ap: 40,
      manaRegen: 125,
      abilityHaste: 15,
      healAndShieldPower: 8,
      itemAbility:
        "Passive - Rapids: Healing or Shielding allied champions (excluding the user) grants the user and allied champion 30 Ability Power and 10% bonus Movement Speed over 3 seconds.",
    },
    {
      name: "Ardent Censer",
      image:
        "https://cdn.gameleap.com/images/article_assets/league-of-legends/items/ardent-censer/1x.webp",
      goldCost: 2300,
      ap: 50,
      manaRegen: 125,
      abilityHaste: 15,
      healAndShieldPower: 8,
      bonusMovementSpeed: 8,
      itemAbility:
        "Passive - Sanctify: Healing or Shielding allied champions (excluding the user) grants you and them 25% bonus Attack Speed and 20 bonus magic damage for 4 seconds.",
    },
    {
      name: "Hollow Radiance",
      image:
        "https://cdn.gameleap.com/images/articles/art_niAuVBnYUw/art-img_IUKnPbZdD/1x.webp", // Replace with the actual URL for the item's image
      goldCost: 2800,
      health: 600,
      magicResist: 40,
      healthRegen: 100,
      itemAbility:
        "Passive - Immolate: Taking or dealing damage causes you to begin dealing 10 (+1.75% bonus health) magic damage per second to nearby enemies (increased by 25% against minions) for 3 seconds. Taking or dealing damage refreshes the duration of this effect.\nPassive - Desolate: Killing an enemy (non-ward, non-structure) deals 20 (+3.5% bonus health) magic damage in an area around them.",
    },
    {
      name: "Unending Despair",
      image:
        "https://cdn.gameleap.com/images/articles/art_niAuVBnYUw/art-img_0o2tG02r5/1x.webp", // Replace with the actual URL for the item's image
      goldCost: 2800,
      health: 400,
      armor: 55,
      abilityHaste: 10,
      itemAbility:
        "Passive - Anguish: While in combat with champions, every 7 seconds, deal 30-50 (based on level) (+3% bonus health) magic damage to nearby enemy champions within 650 units, healing for 250% of the damage dealt.",
    },
    {
      name: "Kaenic Rookern",
      image:
        "https://cdn.gameleap.com/images/articles/art_niAuVBnYUw/art-img_NkLzyhmk3/1x.webp", // Replace with the actual URL for the item's image
      goldCost: 2900,
      health: 400,
      magicResist: 80,
      baseHealthRegen: 150,
      itemAbility:
        "Passive - Magebane: After not taking damage from champions for 12 seconds, gain a magic shield for 20% of your maximum health.",
    },
    {
      name: "Trailblazer",
      image:
        "https://cdn.gameleap.com/images/articles/art_niAuVBnYUw/art-img_lbLklSsjY/1x.webp", // Replace with the actual URL for the item's image
      goldCost: 2400,
      health: 250,
      armor: 40,
      bonusMovementSpeed: 5,
      itemAbility:
        "Passive - Lead the Way: While moving, build up to 20 bonus Move Speed. At maximum stacks, leave a trail that raises allied champions' movespeed by 15% of your Movement Speed. Your next Attack discharges built up Move Speed; for Melee champions at top speed, the Attack also Slows the target by 50% for 1 second.",
    },
    {
      name: "Jak’Sho the Protean",
      image:
        "https://cdn.gameleap.com/images/article_assets/league-of-legends/items/jaksho-the-protean/1x.webp", // Replace with the actual URL for the item's image
      goldCost: 3200,
      health: 300,
      armor: 50,
      magicResistance: 50,
      itemAbility:
        "Passive - Voidborn Resilience: For each second in champion combat, gain a stack, up to a maximum of 5 stacks. At maximum stacks become empowered, increasing your bonus resists by 30% until end of combat.",
    },
    {
      name: "Dead Man’s Plate",
      image:
        "https://cdn.gameleap.com/images/article_assets/league-of-legends/items/dead-mans-plate/1x.webp", // Replace with the actual URL for the item's image
      goldCost: 2900,
      health: 300,
      armor: 45,
      movementSpeed: 5,
      itemAbility:
        "Passive - Shipwrecker: While moving, build up to 40 bonus Move Speed. Your next Attack discharges built up Move Speed to deal up to 40 (+100% base AD) bonus physical damage. At maximum stacks, the target is also slowed by 50%\nPassive - Unsinkable: The strength of movement slowing effects on you is reduced by 25%",
    },
    {
      name: "Warmog's Armor",
      image:
        "https://cdn.gameleap.com/images/article_assets/league-of-legends/items/warmogs-armor/1x.webp", // Replace with the actual URL for the item's image
      goldCost: 3100,
      health: 750,
      baseHealthRegeneration: 200,
      movementSpeed: 5,
      itemAbility:
        "Passive - Warmog's Heart: If you have at least 1300 bonus health, restore health per second and gain 10% Movement Speed if damage hasn't been taken within 6 seconds (3 seconds for non-Champions)",
    },
    {
      name: "Heartsteel",
      image:
        "https://cdn.gameleap.com/images/article_assets/league-of-legends/items/heartsteel/1x.webp", // Replace with the actual URL for the item's image
      goldCost: 3000,
      health: 800,
      baseHealthRegeneration: 200,
      itemAbility:
        "Passive - Colossal Consumption: Charge up a powerful attack against a champion over 3 seconds while within 700 range of them. The charged attack deals 100 (+10% of health from Items) bonus physical damage, and grants you 12% of that value as permanent maximum health. 30-second cooldown per target.\nPassive - Goliath: For each 100 maximum health, gain 3% increased size, up to 30%",
    },
    {
      name: "Sunfire Aegis",
      image:
        "https://cdn.gameleap.com/images/article_assets/league-of-legends/items/sunfire-aegis/1x.webp", // Replace with the actual URL for the item's image
      goldCost: 2700,
      health: 450,
      armor: 50,
      itemAbility:
        "Unique Passive - Immolate: Taking or dealing damage causes you to begin dealing 12 (+ 1.75% bonus health) magic damage per second to nearby enemies (increased by 25% against minions) for 3 seconds. Taking or dealing damage refreshes the duration of this effect. Damaging champions or epic jungle monsters with this effect adds a stack, increasing subsequent Immolate damage by 10% for 5 seconds, stacking up to 6 times for a total 60% increase",
    },
    {
      name: "Voltaic Cyclosword",
      image:
        "https://cdn.gameleap.com/images/articles/art_niAuVBnYUw/art-img_onIDO-Pk1/1x.webp", // Replace with the actual URL for the item's image
      goldCost: 2900,
      ad: 55,
      lethality: 18,
      abilityHaste: 15,
      itemAbility:
        "Passive - Energized: Moving and Attacking will generate an Energized Attack. Dashes and Stealth stack Energized 75% faster. Passive - Firmament: Your Energized Attack applies 100 bonus physical damage and Slows enemies for 99% for 0.75 seconds (20% for ranged users).",
    },
    {
      name: "Profane Hydra",
      image:
        "https://cdn.gameleap.com/images/articles/art_niAuVBnYUw/art-img_wAIPzDg2L/1x.webp", // Replace with the actual URL for the item's image
      goldCost: 3400,
      ad: 60,
      lethality: 18,
      abilityHaste: 20,
      itemAbility:
        "Active - Heretical Slash: Deal 80% total Attack Damage physical damage to nearby enemies. This damage increases to 120% total Attack Damage physical damage to enemies below 30% health. Passive - Cleave: Attacks deal 40% AD (melee) / 20% AD (ranged) damage to other units within 450 units of the target hit.",
    },
    {
      name: "Opportunity",
      image:
        "https://cdn.gameleap.com/images/articles/art_niAuVBnYUw/art-img_vKAag0i-A/1x.webp", // Replace with the actual URL for the item's image
      goldCost: 2700,
      ad: 55,
      lethality: 18,
      movementSpeed: 5,
      itemAbility:
        "Passive - Preparation: After being out of combat with Champions for 8 seconds gain 5-10 Lethality (based on level). This Lethality lasts for 3 seconds after dealing damage to champions. Passive - Extraction: If a champion dies within 3 seconds of damaging them, gain 150 decaying movement speed for 1.5 seconds.",
    },
    {
      name: "Hubris",
      image:
        "https://cdn.gameleap.com/images/articles/art_niAuVBnYUw/art-img_RqfG8jU_m/1x.webp", // Replace with the actual URL for the item's image
      goldCost: 3000,
      ad: 60,
      lethality: 18,
      abilityHaste: 15,
      itemAbility:
        "Passive - Ego: When you kill an enemy champion you are granted a statue of yourself, if you already have a statue this statue upgrades. Passive - Eminence: When a champion that you have damaged within the last 3 seconds dies, gain 10 (+1 per rank of Statue) Attack Damage for 60 seconds.",
    },
    {
      name: "Serylda’s Grudge",
      image:
        "https://cdn.gameleap.com/images/article_assets/league-of-legends/items/seryldas-grudge/1x.webp", // Replace with the actual URL for the item's image
      goldCost: 3200,
      ad: 45,
      lethality: 15,
      abilityHaste: 15,
      itemAbility:
        "Passive - Rancor: Gain 20 (+11% of Lethality) Armor Penetration Passive - Bitter Cold: Damaging abilities slow enemies with 50% or less of their maximum health by 30% for 1 second.",
    },
    {
      name: "Axiom Arc",
      image:
        "https://cdn.gameleap.com/images/article_assets/league-of-legends/items/axiom-arc/1x.webp", // Replace with the actual URL for the item's image
      goldCost: 3000,
      ad: 55,
      lethality: 18,
      abilityHaste: 25,
      itemAbility:
        "Passive - Flux: Whenever a Champion dies within 3 seconds of you having damaged them, refund 10 (+30% Lethality) of your Ultimate Ability's total cooldown.",
    },
    {
      name: "Youmuu's Ghostblade",
      image:
        "https://cdn.gameleap.com/images/article_assets/league-of-legends/items/youmuus-ghostblade/1x.webp", // Replace with the actual URL for the item's image
      goldCost: 2700,
      ad: 60,
      lethality: 18,
      itemAbility:
        "Active - Wraith Step: Gain 20% movement speed and ghosting for 6 seconds. Passive - Haunt: Gain 40 Move Speed while out of combat.",
    },
    {
      name: "Malignance",
      image:
        "https://cdn.gameleap.com/images/articles/art_niAuVBnYUw/art-img_0pMSpSK1i/1x.webp",
      goldCost: 2800,
      ap: 80,
      mana: 600,
      abilityHaste: 20,
      itemAbility:
        "Ultimate Power: Gain 20 Ability Haste for your Ultimate. Hatefog: Whenever you damage an enemy champion with your Ultimate, burn the ground beneath them for 3 seconds, dealing 60 (+6% AP) magic damage every second and reducing their Magic Resistance by (1 per user level) for as long as they are on the burning ground. (Note: Radius increases based on damage done 250 (+2^(Damage Amount/100)) ; with a maximum radius of 550.)",
    },
    {
      name: "Luden’s Companion",
      image:
        "https://cdn.gameleap.com/images/articles/art_niAuVBnYUw/art-img_jKLTLRaBx/1x.webp",
      goldCost: 3000,
      ap: 90,
      abilityHaste: 20,
      mana: 600,
      itemAbility:
        "Load: Gain a Shot Charge every 3 seconds, up to a maximum of 6. Fire: Damaging abilities consume all Shot charges to deal an additional 40 (+ 8% AP) magic damage to the target and one additional nearby target per charge. If there are insufficient targets in range, for each remaining Shot, repeat the damage on the primary target dealing 35% of the damage.",
    },
    {
      name: "Stormsurge",
      image:
        "https://cdn.gameleap.com/images/articles/art_niAuVBnYUw/art-img_OegO08FOB/1x.webp",
      goldCost: 2900,
      ap: 100,
      magicPenetration: 10,
      moveSpeed: 5,
      itemAbility:
        "Passive - Stormraider: Dealing 35% of a champion's maximum health within 3 seconds applies Stormsurge to them and grants the user 25% movement speed for 2 seconds. 30-second cooldown. Passive - Stormsurge: After 2 seconds, Stormsurge strikes the target with lightning, dealing 120-260 (based on level) (+ 40% AP) (melee) / 90-195 (+ 30% AP) (ranged) magic damage to them. If they die to the lightning or before the lightning strikes, it detonates immediately in a large area around them and you gain 30 gold.",
    },
    {
      name: "Cryptbloom",
      image:
        "https://cdn.gameleap.com/images/articles/art_niAuVBnYUw/art-img__C119farU/1x.webp",
      goldCost: 2850,
      ap: 60,
      abilityHaste: 10,
      magicPenetration: 30,
      itemAbility:
        "Passive - Life From Death: Whenever you get a takedown on an enemy champion within 3 seconds of damaging them, create a healing nova on their location that heals allies for 50 (+50% AP). 60-second cooldown.",
    },
    {
      name: "Riftmaker",
      image:
        "https://cdn.gameleap.com/images/article_assets/league-of-legends/items/riftmaker/1x.webp",
      goldCost: 3000,
      ap: 80,
      abilityHaste: 15,
      health: 350,
      itemAbility:
        "Void Corruption: For each second in combat with enemy champions, deal 2% bonus damage (max 10%). At maximum strength, gain 10% (melee) / 6% (ranged) Omnivamp. Void Infusion: Gain 2% of your bonus health as Ability Power. Omnivamp: Heals you for a percentage of damage you deal, with reduced effect (20% effectiveness) on minions and monsters. Additionally, Omnivamp heals you for the full amount with Pet or AOE damage.",
    },
    {
      name: "Liandry’s Torment",
      image:
        "https://cdn.gameleap.com/images/article_assets/league-of-legends/items/liandrys-anguish/1x.webp",
      goldCost: 3000,
      ap: 90,
      health: 300,
      itemAbility:
        "Passive - Torment: Dealing damage with abilities causes enemies to burn for 2% maximum health magic damage per second for 3 seconds.\nPassive - Suffering: For each second in combat with enemy champions, gain 2% bonus damage (up to a max at 6% bonus damage).\nDamage Cap to Monsters per Second: 50",
    },
    {
      name: "Horizon Focus",
      image:
        "https://cdn.gameleap.com/images/article_assets/league-of-legends/items/horizon-focus/1x.webp",
      goldCost: 2700,
      ap: 90,
      abilityHaste: 20,
      itemAbility:
        "Passive - Hypershot: When you deal damage with Abilities to champions at 700 range or greater, reveal them for 6 seconds. Deal 10% increased damage to enemies revealed by Hypershot.\nPassive - Focus: When revealing an enemy with Hypershot, reveal all other enemy champions within 1200 range of them for 2 seconds. 30-second cooldown.",
    },
    {
      name: "Rod of Ages",
      image:
        "https://cdn.gameleap.com/images/article_assets/league-of-legends/items/rod-of-ages/1x.webp",
      goldCost: 2600,
      ap: 50,
      health: 350,
      mana: 300,
      itemAbility:
        "This item gains 20 Health, 20 Mana, and 4 Ability Power every 60 seconds up to 10 times, for a maximum of 200 Health, 200 Mana, and 40 Ability Power. Upon reaching maximum stacks, gain a level.\nPassive - Eternity: Restore Mana equal to 7% of premitigation damage taken from champions, and Health equal to 25% of Mana spent, up to 20 Health per cast, per second.",
    },
    {
      name: "Rabadon's Deathcap",
      image:
        "https://cdn.gameleap.com/images/article_assets/league-of-legends/items/rabadons-deathcap/1x.webp",
      goldCost: 3600,
      ap: 140,
      itemAbility:
        "Unique Passive - Magical Opus: Increase your Ability Power by 35%",
    },
    {
      name: "Shadowflame",
      image:
        "https://cdn.gameleap.com/images/article_assets/league-of-legends/items/shadowflame/1x.webp",
      goldCost: 3200,
      ap: 120,
      magicPenetration: 12,
      itemAbility:
        "Passive - Cinderbloom: Magic damage and true damage critically strikes enemies below 35% health, dealing 20% increased damage (30% increased damage for damage over time and pet effects). Critical damage modifiers only affect Cinderbloom's bonus damage.",
    },
    {
      name: "World Atlas",
      image:
        "https://cdn.gameleap.com/images/articles/art_niAuVBnYUw/art-img_QF2itegT6/1x.webp",
      goldCost: 400,
      health: 30,
      manaRegen: 25,
      healthRegen: 25,
      goldGeneration:
        "Gain a charge every 18 seconds, up to 3 charges. While nearby an ally champion, consume a charge to earn gold via the following methods: 1) Damaging abilities and attacks against champions or structures grant 30 (melee) / 28 (ranged) gold and 2) killing a minion by any means grants you 20 gold and the nearest allied champion the same amount of gold they would have received had they killed the minion.",
      itemAbility:
        "Earn 500 gold from this item to transform it into Runic Compass and gain the ability to hold wards.",
    },
    {
      name: "Runic Compass",
      image:
        "https://cdn.gameleap.com/images/articles/art_niAuVBnYUw/art-img_eW1jyLMrO/1x.webp",
      health: 100,
      manaRegen: 50,
      healthRegen: 50,
      goldGeneration:
        "Gain a charge every 18 seconds, up to 3 charges. While nearby an ally champion, consume a charge to earn gold via the following methods: 1) Damaging abilities and attacks against champions or structures grant 34 (melee) / 32 (ranged) gold and 2) killing a minion by any means grants you 28 gold and the nearest allied champion the same amount of gold they would have received had they killed the minion.",
      itemAbility:
        "Earn 1000 gold from this item to transform it into Runic Compass and gain the ability to hold wards.",
    },
    {
      name: "Bounty of Worlds",
      image:
        "https://cdn.gameleap.com/images/articles/art_niAuVBnYUw/art-img_SEDhqLzyQ/1x.webp",
      health: 100,
      manaRegen: 50,
      healthRegen: 50,
      goldGeneration:
        "Gain a charge every 18 seconds, up to 3 charges. While nearby an ally champion, consume a charge to earn gold via the following methods: 1) Damaging abilities and attacks against champions or structures grant 34 (melee) / 32 (ranged) gold and 2) killing a minion by any means grants you 28 gold and the nearest allied champion the same amount of gold they would have received had they killed the minion.",
      itemAbility:
        "Bounty of Worlds is an in-between state that allows the item to upgrade into any of the five support item upgrades! Once upgraded it served its purpose. Thank you, Bounty of Worlds.",
    },
  ];
  try {
    await item.insertMany(items);
    console.log("Welcome to Summenors rift!");
  } catch (error) {
    console.error("Error seeding data:", error);
  }
};
const run = async () => {
  await main();
  db.close();
};
run();
