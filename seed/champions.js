const db = require("../db");
const Champion = require("../models/champion");
const Targon = "65d137d7482c195cf34a697d";
const Shurima = "65d137d7482c195cf34a697e";
const Ixtal = "65d137d7482c195cf34a697f";
const ShadowIsles = "65d137d7482c195cf34a6980";
const Bilgewater = "65d137d7482c195cf34a6981";
const BandleCity = "65d137d7482c195cf34a6982";
const Demacia = "65d137d7482c195cf34a6983";
const Noxus = "65d137d7482c195cf34a6984";
const Ionia = "65d137d7482c195cf34a6985";
const PiltoverNZaun = "65d137d7482c195cf34a6986";
const Freljord = "65d137d7482c195cf34a6987";
const Runeterra = "65d137d7482c195cf34a6988";
const TheVoid = "65d137d7482c195cf34a6989";

db.on("error", console.error.bind(console, "MongoDB connection error:"));

const main = async () => {
  const champions = [
    {
      name: "Aatrox",
      champTitle: "the Darkin Blade",
      passive: "Deathbringer Stance",
      ability1: "The Darkin Blade",
      ability2: "Infernal Chains",
      ability3: "Umbral Dash",
      ultimateAbility: "World Ender",
      lore: "Once honored defenders of Shurima against the Void, Aatrox and his brethren would eventually become an even greater threat to Runeterra...",
      usualRole: "Top Lane",
      regionId: Runeterra,
      skinList: [
        "Justicar Aatrox",
        "Mecha Kingdoms Aatrox",
        "Blood Moon Aatrox",
        "Pentakill Aatrox",
        "Victorious Aatrox",
      ],
      musicTheme: "https://youtu.be/cqE9xy0OMKY?si=rITiJSJRUHUL0Rfv",
    },
    {
      name: "Ahri",
      champTitle: "the Nine-Tailed Fox",
      passive: "Essence Theft",
      ability1: "Orb of Deception",
      ability2: "Fox-Fire",
      ability3: "Charm",
      ultimateAbility: "Spirit Rush",
      lore: "Centuries ago, Ahri discovered that she could consume the essence of unsuspecting victims...",
      usualRole: "Mid Lane",
      regionId: Ionia,
      skinList: [
        "Foxfire Ahri",
        "Popstar Ahri",
        "Arcade Ahri",
        "K/DA Ahri",
        "Star Guardian Ahri",
      ],
      musicTheme: "https://youtu.be/tgXfFhdbgSU?si=8np463GZaSQLlvUd",
    },
    {
      name: "Akali",
      champTitle: "the Rogue Assassin",
      passive: "Assassin's Mark",
      ability1: "Five Point Strike",
      ability2: "Twilight Shroud",
      ability3: "Shuriken Flip",
      ultimateAbility: "Perfect Execution",
      lore: "The Fist of Shadow, an Ionian ninja with a sharp blade and a sharper tongue...",
      usualRole: "Mid Lane",
      regionId: Ionia,
      skinList: [
        "Stinger Akali",
        "K/DA Akali",
        "Project Akali",
        "True Damage Akali",
        "Spirit Blossom Akali",
      ],
      musicTheme: "https://youtu.be/fndHvIZ7v64?si=ZYF0SfnCV_BhYozq",
    },
    {
      name: "Akshan",
      champTitle: "the Rogue Sentinel",
      passive: "Dirty Fighting",
      ability1: "Avengerang",
      ability2: "Dead Slinger",
      ability3: "Going Rogue",
      ultimateAbility: "Comeuppance",
      lore: "Akshan, a rogue Sentinel with a burning desire for justice, seeks revenge for those who have been wronged...",
      usualRole: "Bot Lane (ADC)",
      regionId: Shurima,
      skinList: [
        "Cyber Pop Akshan",
        "Crystal Rose Akshan",
        "Three Honors Akshan",
      ],
      musicTheme: "https://youtu.be/nudASZLNmV8?si=Y0bZQfU5iA8Q3072",
    },
    {
      name: "Alistar",
      champTitle: "the Minotaur",
      passive: "Triumphant Roar",
      ability1: "Pulverize",
      ability2: "Headbutt",
      ability3: "Trample",
      ultimateAbility: "Unbreakable Will",
      lore: "Alistar, the Minotaur, is a powerful tank and support known for his crowd control abilities and resilience in battle...",
      usualRole: "Support",
      regionId: Runeterra,
      skinList: [
        "Black Alistar",
        "Infernal Alistar",
        "Marauder Alistar",
        "Moo Cow Alistar",
        "High Noon Alistar",
      ],
      musicTheme: "https://youtu.be/FL6lnGTqGrs?si=2jL6IepR1H3SlNtF",
    },
    {
      name: "Amumu",
      champTitle: "the Sad Mummy",
      passive: "Cursed Touch",
      ability1: "Bandage Toss",
      ability2: "Despair",
      ability3: "Tantrum",
      ultimateAbility: "Curse of the Sad Mummy",
      lore: "Amumu is a lonely and melancholy Yordle who seeks the company of others, but often unintentionally causes them grief due to his curse...",
      usualRole: "Jungle",
      regionId: Shurima,
      skinList: [
        "Emumu",
        "Little Knight Amumu",
        "Sad Robot Amumu",
        "Surprise Party Amumu",
        "Pajama Guardian Amumu",
      ],
      musicTheme: "https://youtu.be/0AvWV6Mk374?si=MZX5jt5m_J6YMxm5",
    },
    {
      name: "Anivia",
      champTitle: "the Cryophoenix",
      passive: "Rebirth",
      ability1: "Flash Frost",
      ability2: "Crystallize",
      ability3: "Frostbite",
      ultimateAbility: "Glacial Storm",
      lore: "Anivia, the Cryophoenix, is an ancient and powerful being who guards the Freljord with her icy powers, embodying the harsh climate of the region...",
      usualRole: "Mid Lane",
      regionId: Freljord,
      skinList: [
        "Team Spirit Anivia",
        "Bird of Prey Anivia",
        "Noxus Hunter Anivia",
        "Papercraft Anivia",
        "Blackfrost Anivia",
      ],
      musicTheme: "https://youtu.be/V81uXNeTkvg?si=-p_zmU2Q809WSU1a",
    },
    {
      name: "Annie",
      champTitle: "the Dark Child",
      passive: "Pyromania",
      ability1: "Disintegrate",
      ability2: "Incinerate",
      ability3: "Molten Shield",
      ultimateAbility: "Summon: Tibbers",
      lore: "Annie, the Dark Child, is a powerful mage known for her proficiency with fire magic, and she carries a teddy bear named Tibbers who comes to life to aid her in battle...",
      usualRole: "Mid Lane",
      regionId: Noxus,
      skinList: [
        "Goth Annie",
        "Red Riding Annie",
        "Frostfire Annie",
        "Super Galaxy Annie",
        "Hextech Annie",
      ],
      musicTheme: "https://youtu.be/xM4YyvH8nyU?si=4_BXzosUqfqktmow",
    },
    {
      name: "Aphelios",
      champTitle: "the Weapon of the Faithful",
      passive: "Moonlight Vigil",
      ability1: "Calibrum, the Sniper Rifle",
      ability2: "Severum, the Scythe Pistol",
      ability3: "Gravitum, the Gravity Cannon",
      ultimateAbility: "Duskwave",
      lore: "Aphelios, the Weapon of the Faithful, wields a unique arsenal of five weapons created by his sister Alune, each with its own powers and abilities...",
      usualRole: "Bot Lane (ADC)",
      regionId: Targon,
      skinList: [
        "Nightbringer Aphelios",
        "Dawnbringer Aphelios",
        "Spirit Blossom Aphelios",
        "Lunar Beast Aphelios",
        "PROJECT: Aphelios",
      ],
      musicTheme: "https://youtu.be/NQIeAbFT4Kc?si=scc9wmfAI01xl1Aa",
    },
    {
      name: "Ashe",
      champTitle: "the Frost Archer",
      passive: "Frost Shot",
      ability1: "Ranger's Focus",
      ability2: "Volley",
      ability3: "Hawkshot",
      ultimateAbility: "Enchanted Crystal Arrow",
      lore: "Ashe, the Frost Archer, is the queen of the Freljord and a skilled archer known for her precision on the battlefield...",
      usualRole: "Bot Lane (ADC)",
      regionId: Freljord,
      skinList: [
        "Freljord Ashe",
        "Sherwood Forest Ashe",
        "Heartseeker Ashe",
        "PROJECT: Ashe",
        "High Noon Ashe",
      ],
      musicTheme: "https://youtu.be/3vylNCUu4eA?si=NtZfh_V4uryzaZNQ",
    },
    {
      name: "Aurelion Sol",
      champTitle: "the Star Forger",
      passive: "Center of the Universe",
      ability1: "Starsurge",
      ability2: "Celestial Expansion",
      ability3: "Comet of Legend",
      ultimateAbility: "Voice of Light",
      lore: "Aurelion Sol, the Star Forger, is an ancient celestial dragon who manipulates the stars themselves to reshape the cosmos according to his vision...",
      usualRole: "Mid Lane",
      regionId: Targon,
      skinList: [
        "Ashen Lord Aurelion Sol",
        "Mecha Aurelion Sol",
        "Storm Dragon Aurelion Sol",
        "InkShadow Aurelion Sol",
      ],
      musicTheme: "https://youtu.be/i_ujOtLDQco?si=zcj9SaSWTYv0c_bP",
    },
    {
      name: "Azir",
      champTitle: "the Emperor of the Sands",
      passive: "Shurima's Legacy",
      ability1: "Conquering Sands",
      ability2: "Arise!",
      ability3: "Shifting Sands",
      ultimateAbility: "Emperor's Divide",
      lore: "Azir, the Emperor of the Sands, is a powerful Shuriman ascendant who seeks to restore his fallen empire and reshape the desert with his sand soldiers...",
      usualRole: "Mid Lane",
      regionId: Shurima,
      skinList: [
        "Galactic Azir",
        "Warring Kingdoms Azir",
        "SKT T1 Azir",
        "Gravelord Azir",
        "Ruin Azir",
      ],
      musicTheme: "https://youtu.be/smNA_BYDODU?si=8QjGdmIPTrPmjDaM",
    },
    {
      name: "Bard",
      champTitle: "the Wandering Caretaker",
      passive: "Traveler's Call",
      ability1: "Cosmic Binding",
      ability2: "Caretaker's Shrine",
      ability3: "Magical Journey",
      ultimateAbility: "Tempered Fate",
      lore: "Bard, the Wandering Caretaker, is a celestial being who roams the universe, collecting and preserving cosmic artifacts to maintain balance...",
      usualRole: "Support",
      regionId: Runeterra,
      skinList: [
        "Elderwood Bard",
        "Snow Day Bard",
        "AstroNautilus Bard",
        "Bard Bard",
      ],
      musicTheme: "https://youtu.be/MWHmgob5FDA?si=FY0pdGbcZmkEHeRL",
    },
    {
      name: "Bel'Veth",
      champTitle: "The Empress of the Void",
      passive: "Death in Lavender",
      ability1: "Void Surge",
      ability2: "Above and Below",
      ability3: "Royal Maelstrom",
      ultimateAbility: "Endless Banquet",
      lore: "A nightmarish empress created from the raw material of an entire devoured city, Bel’Veth is the end of Runeterra itself... and the beginning of a monstrous reality of her own design. Driven by epochs of repurposed history, knowledge, and memories from the world above, she voraciously feeds an ever-expanding need for new experiences and emotions, consuming all that crosses her path. Yet her wants could never be sated by only one world as she turns her hungry eyes toward the Void’s old masters...",
      usualRole: "Jungle",
      regionId: TheVoid,
      skinList: ["Battle Boss Bel'Veth", "Cosmic Matriarch Bel'Veth"],
      musicTheme: "https://youtu.be/Ie2ia4kyRx4?si=jRsyqr7F-SUs8Y33",
    },
    {
      name: "Blitzcrank",
      champTitle: "the Great Steam Golem",
      passive: "Mana Barrier",
      ability1: "Rocket Grab",
      ability2: "Overdrive",
      ability3: "Power Fist",
      ultimateAbility: "Static Field",
      lore: "Blitzcrank, the Great Steam Golem, is a powerful and hulking automaton created to serve Piltover. He is known for his skill in grappling enemies with his Rocket Grab...",
      usualRole: "Support",
      regionId: PiltoverNZaun,
      skinList: [
        "Rusty Blitzcrank",
        "Boom Boom Blitzcrank",
        "iBlitzcrank",
        "Battle Boss Blitzcrank",
        "Arcade Blitzcrank",
      ],
      musicTheme: "https://youtu.be/Zns9ORxcfqU?si=MEY64sv3CXghQXcu",
    },
    {
      name: "Brand",
      champTitle: "the Burning Vengeance",
      passive: "Blaze",
      ability1: "Sear",
      ability2: "Pillar of Flame",
      ability3: "Conflagration",
      ultimateAbility: "Pyroclasm",
      lore: "Brand, the Burning Vengeance, is a powerful elemental being of fire seeking to engulf the world in flames. He was once a man but is now consumed by fiery rage...",
      usualRole: "Mid Lane",
      regionId: Runeterra,
      skinList: [
        "Vandal Brand",
        "Cryocore Brand",
        "Spirit Fire Brand",
        "Zombie Brand",
        "Arclight Brand",
      ],
      musicTheme: "https://youtu.be/qaz4suc0E1M?si=241V26Y9V8p-uxnU",
    },
    {
      name: "Braum",
      champTitle: "the Heart of the Freljord",
      passive: "Concussive Blows",
      ability1: "Winter's Bite",
      ability2: "Stand Behind Me",
      ability3: "Unbreakable",
      ultimateAbility: "Glacial Fissure",
      lore: "Braum, the Heart of the Freljord, is a gentle giant and a protector of his people. With his mighty shield, he stands as a bastion of strength and warmth in the icy Freljord...",
      usualRole: "Support",
      regionId: Freljord,
      skinList: [
        "Dragonslayer Braum",
        "El Tigre Braum",
        "Sugar Rush Braum",
        "Mafia Braum",
        "Arcade Braum",
      ],
      musicTheme: "https://youtu.be/F8cPDpXnQa0?si=amd3YIjoSArJbcIV",
    },
    {
      name: "Briar",
      champTitle: "The Restrained Hunger",
      passive: "Crimson Curse",
      ability1: "Head rush",
      ability2: "Blood Frenzy",
      ability3: "Chilling Scream",
      ultimateAbility: "Certain Death",
      lore: "Afailed experiment by the Black Rose, Briar’s uncontrollable bloodlust required a special pillory to focus her frenzied mind. After years of confinement, this living weapon broke free from her restraints and unleashed herself into the world. Now she’s controlled by no one—following only her hunger for knowledge and blood—and relishes the opportunities to let loose, even if reining back the frenzy isn’t easy.",
      usualRole: "Jungle",
      regionId: Noxus,
      skinList: ["Street Demons Briar"],
      musicTheme: "https://youtu.be/5LqjJYU6EP8?si=L-2WttQhSjpFxsiF",
    },
    {
      name: "Caitlyn",
      champTitle: "the Sheriff of Piltover",
      passive: "Headshot",
      ability1: "Piltover Peacemaker",
      ability2: "Yordle Snap Trap",
      ability3: "90 Caliber Net",
      ultimateAbility: "Ace in the Hole",
      lore: "Caitlyn, the Sheriff of Piltover, is a sharpshooting officer who upholds the law in the city of Piltover. Her precision with a rifle makes her a formidable force against criminals...",
      usualRole: "Bot Lane (ADC)",
      regionId: PiltoverNZaun,
      skinList: [
        "Safari Caitlyn",
        "Arctic Warfare Caitlyn",
        "Lunar Wraith Caitlyn",
        "Pool Party Caitlyn",
        "Arcade Caitlyn",
      ],
      musicTheme: "https://youtu.be/itK7gvvxxDs?si=Yb6E2yVwxKKNtiQd",
    },
    {
      name: "Camille",
      champTitle: "the Steel Shadow",
      passive: "Adaptive Defenses",
      ability1: "Precision Protocol",
      ability2: "Tactical Sweep",
      ability3: "Hookshot",
      ultimateAbility: "Hextech Ultimatum",
      lore: "Camille, the Steel Shadow, is a deadly and precise enforcer hailing from Piltover's prestigious Clan Ferros. She has undergone extensive hextech augmentations to become a formidable weapon...",
      usualRole: "Top Lane",
      regionId: PiltoverNZaun,
      skinList: [
        "Program Camille",
        "Coven Camille",
        "Battle Academia Camille",
        "IG Camille",
        "Arcade Camille",
      ],
      musicTheme: "https://youtu.be/0GJNJ2fsFno?si=1pnimBppVC9Apvm9",
    },
    {
      name: "Cassiopeia",
      champTitle: "the Serpent's Embrace",
      passive: "Aspect of the Serpent",
      ability1: "Noxious Blast",
      ability2: "Miasma",
      ability3: "Twin Fang",
      ultimateAbility: "Petrifying Gaze",
      lore: "Cassiopeia, the Serpent's Embrace, was once a noblewoman of Noxus who became cursed by dark sorcery. She now possesses a serpentine form and seeks to unlock the secrets of immortality...",
      usualRole: "Mid Lane",
      regionId: Noxus,
      skinList: [
        "Desperada Cassiopeia",
        "Siren Cassiopeia",
        "Jade Fang Cassiopeia",
        "Eternum Cassiopeia",
        "Coven Cassiopeia",
        "Spirit Blossom Cassiopeia",
      ],
      musicTheme: "https://youtu.be/06AKQWbupYA?si=oaF4qTd2C79kEn9W",
    },
    {
      name: "Cho'Gath",
      champTitle: "the Terror of the Void",
      passive: "Carnivore",
      ability1: "Rupture",
      ability2: "Feral Scream",
      ability3: "Vorpal Spikes",
      ultimateAbility: "Feast",
      lore: "Cho'Gath, the Terror of the Void, is a massive Voidborn creature that devours anything in its path. It grows larger and more powerful with each victim it consumes...",
      usualRole: "Top Lane",
      regionId: TheVoid,
      skinList: [
        "Gentleman Cho'Gath",
        "Battlecast Prime Cho'Gath",
        "Prehistoric Cho'Gath",
        "Dark Star Cho'Gath",
        "Nightmare Cho'Gath",
      ],
      musicTheme: "https://youtu.be/TKGeHMT6Ko4?si=fIgofHjijzDrLo5d",
    },
    {
      name: "Corki",
      champTitle: "the Daring Bombardier",
      passive: "Hextech Munitions",
      ability1: "Phosphorus Bomb",
      ability2: "Valkyrie",
      ability3: "Gatling Gun",
      ultimateAbility: "Missile Barrage",
      lore: "Corki, the Daring Bombardier, is a Yordle pilot known for his fearless aerial acrobatics and his love for flying dangerous missions in his modified aircraft, the ROFLcopter...",
      usualRole: "Bot Lane (ADC)",
      regionId: BandleCity,
      skinList: [
        "UFO Corki",
        "Ice Toboggan Corki",
        "Red Baron Corki",
        "Fnatic Corki",
        "Dragonwing Corki",
      ],
      musicTheme: "https://youtu.be/YpjPafm9VTw?si=xwc_2c4X5T2s1VRA",
    },
    {
      name: "Darius",
      champTitle: "the Hand of Noxus",
      passive: "Hemorrhage",
      ability1: "Decimate",
      ability2: "Crippling Strike",
      ability3: "Apprehend",
      ultimateAbility: "Noxian Guillotine",
      lore: "Darius, the Hand of Noxus, is a fearsome warrior who rose through the ranks of the Noxian military. He wields an immense axe and inspires fear on the battlefield...",
      usualRole: "Top Lane",
      regionId: Noxus,
      skinList: [
        "Lord Darius",
        "Bioforge Darius",
        "Dunkmaster Darius",
        "God-King Darius",
        "High Noon Darius",
      ],
      musicTheme: "https://www.youtube.com/watch?v=Qek-cf5GiXs",
    },
    {
      name: "Diana",
      champTitle: "Scorn of the Moon",
      passive: "Moonsilver Blade",
      ability1: "Crescent Strike",
      ability2: "Pale Cascade",
      ability3: "Lunar Rush",
      ultimateAbility: "Moonfall",
      lore: "Diana, Scorn of the Moon, is a powerful warrior who draws her strength from the moon. She seeks to unveil the hidden truths of her world and challenge the beliefs of her society...",
      usualRole: "Mid Lane",
      regionId: Targon,
      skinList: [
        "Dark Valkyrie Diana",
        "Lunar Goddess Diana",
        "Blood Moon Diana",
        "Dragonslayer Diana",
        "Infernal Diana",
      ],
      musicTheme: "https://youtu.be/ay_o-BGVhL4?si=eeS0FuQ72bCWpqsC",
    },
    {
      name: "Dr.Mundo",
      champTitle: "The Madman of Zaun",
      passive: "Goes Where He Pleases",
      ability1: "Infected Bonesaw",
      ability2: "Heart Zapper",
      ability3: "Blunt Force Trauma",
      ultimateAbility: "Maximum Dosage",
      lore: "Utterly mad, tragically homicidal, and horrifyingly purple, Dr. Mundo is what keeps many of Zaun’s citizens indoors on particularly dark nights. Now a self-proclaimed physician, he was once a patient of Zaun’s most infamous asylum. After “curing” the entire staff, Dr. Mundo established his practice in the empty wards that once treated him and began mimicking the highly unethical procedures he had so often experienced himself. With a full cabinet of medicines and zero medical knowledge, he now makes himself more monstrous with each injection and terrifies the hapless “patients” who wander near his office.",
      usualRole: "Top Lane",
      regionId: PiltoverNZaun,
      skinList: [
        "Street Demons Mundo",
        "Frozen Prince Mundo",
        "El Macho Mundo",
        "Pool Party Mundo",
        "TPA Mundo",
        "Executioner Mundo",
        "Mundo Mundo",
      ],
      musicTheme: "https://youtu.be/Iy1yS9ysT4A?si=Jh4j5LuUA6NoC54T",
    },
    {
      name: "Draven",
      champTitle: "the Glorious Executioner",
      passive: "League of Draven",
      ability1: "Spinning Axe",
      ability2: "Blood Rush",
      ability3: "Stand Aside",
      ultimateAbility: "Whirling Death",
      lore: "Draven, the Glorious Executioner, is a showman and skilled axe-thrower who revels in the thrill of the crowd. His flashy style and deadly accuracy make him a spectacle on the battlefield...",
      usualRole: "Bot Lane (ADC)",
      regionId: Noxus,
      skinList: [
        "Soul Reaver Draven",
        "Primetime Draven",
        "Pool Party Draven",
        "Beast Hunter Draven",
        "Odyssey Draven",
      ],
      musicTheme: "https://youtu.be/4tlwzqkeGyI?si=UJtlAWYgxursXWih",
    },
    {
      name: "Ekko",
      champTitle: "the Boy Who Shattered Time",
      passive: "Z-Drive Resonance",
      ability1: "Timewinder",
      ability2: "Parallel Convergence",
      ability3: "Phase Dive",
      ultimateAbility: "Chronobreak",
      lore: "Ekko, the Boy Who Shattered Time, is a street-smart inventor from Zaun with the ability to manipulate time. He fights to change his past and create a better future for his city...",
      usualRole: "Mid Lane",
      regionId: PiltoverNZaun,
      skinList: [
        "Sandstorm Ekko",
        "Academy Ekko",
        "PROJECT: Ekko",
        "True Damage Ekko",
        "FireFly Ekko",
      ],
      musicTheme: "https://youtu.be/f_Z1E32mxGg?si=CcBaXODmm8BZqNc6",
    },
    {
      name: "Elise",
      champTitle: "the Spider Queen",
      passive: "Spider Swarm",
      ability1: "Neurotoxin",
      ability2: "Volatile Spiderling",
      ability3: "Cocoon",
      ultimateAbility: "Spider Form / Human Form",
      lore: "Elise, the Spider Queen, is a cunning and deadly sorceress who can transform into a spider. She weaves her web of intrigue and terror, hunting those who dare to cross her path...",
      usualRole: "Jungle",
      regionId: ShadowIsles,
      skinList: [
        "Blood Moon Elise",
        "Victorious Elise",
        "Super Galaxy Elise",
        "Bewitching Elise",
      ],
      musicTheme: "https://www.youtube.com/watch?v=Ax_d-7_7umQ",
    },
    {
      name: "Evelynn",
      champTitle: "Agony's Embrace",
      passive: "Demon Shade",
      ability1: "Hate Spike",
      ability2: "Allure",
      ability3: "Whiplash",
      ultimateAbility: "Last Caress",
      lore: "Evelynn, Agony's Embrace, is a seductive and deadly assassin from the Shadow Isles. She thrives on the pain and suffering of others, lurking in the shadows to claim her victims...",
      usualRole: "Jungle",
      regionId: ShadowIsles,
      skinList: [
        "Shadow Evelynn",
        "Masquerade Evelynn",
        "K/DA Evelynn",
        "Safecracker Evelynn",
        "Bewitching Evelynn",
      ],
      musicTheme: "https://youtu.be/h98vAgTQihs?si=j82XK4_BgvOzmPGJ",
    },
    {
      name: "Ezreal",
      champTitle: "the Prodigal Explorer",
      passive: "Rising Spell Force",
      ability1: "Mystic Shot",
      ability2: "Essence Flux",
      ability3: "Arcane Shift",
      ultimateAbility: "Trueshot Barrage",
      lore: "Ezreal, the Prodigal Explorer, is a daring adventurer with a knack for uncovering ancient relics. He wields a powerful gauntlet that enhances his mystical abilities, making him a formidable marksman...",
      usualRole: "Bot Lane (ADC) / Mid Lane",
      regionId: PiltoverNZaun,
      skinList: [
        "Frosted Ezreal",
        "Pulsefire Ezreal",
        "Star Guardian Ezreal",
        "PROJECT: Ezreal",
        "PsyOps Ezreal",
      ],
      musicTheme: "https://youtu.be/NSM31U-4Eik?si=10aQpzYQW537tBDE",
    },
    {
      name: "Fiddlesticks",
      champTitle: "the Ancient Fear",
      passive: "A Harmless Scarecrow",
      ability1: "Terrify",
      ability2: "Reap",
      ability3: "Bountiful Harvest",
      ultimateAbility: "Crowstorm",
      lore: "Fiddlesticks, the Ancient Fear, is a malevolent and ancient scarecrow that thrives on fear. It emerges from the darkest corners of Runeterra to sow terror and harvest the nightmares of the living...",
      usualRole: "Jungle",
      regionId: Runeterra,
      skinList: [
        "Spectral Fiddlesticks",
        "Pumpkinhead Fiddlesticks",
        "Surprise Party Fiddlesticks",
        "Praetorian Fiddlesticks",
        "Star Nemesis Fiddlesticks",
        "Fiddle Me Timbers",
      ],
      musicTheme: "https://youtu.be/jNn2F39G-6s?si=57Dv0-y0QVWw6GXG",
    },
    {
      name: "Fiora",
      champTitle: "the Grand Duelist",
      passive: "Duelist's Dance",
      ability1: "Lunge",
      ability2: "Riposte",
      ability3: "Bladework",
      ultimateAbility: "Grand Challenge",
      lore: "Fiora, the Grand Duelist, is a skilled swordswoman hailing from the noble House Laurent. She seeks to prove her mastery in the art of dueling and uphold the honor of her family...",
      usualRole: "Top Lane",
      regionId: Demacia,
      skinList: [
        "Royal Guard Fiora",
        "Nightraven Fiora",
        "Project: Fiora",
        "Pool Party Fiora",
        "Coven Fiora",
      ],
      musicTheme: "https://youtu.be/GMcuT-xwTxg?si=JBqIeYiw84CpWdv2",
    },
    {
      name: "Gangplank",
      champTitle: "the Saltwater Scourge",
      passive: "Trial by Fire",
      ability1: "Parrrley",
      ability2: "Remove Scurvy",
      ability3: "Powder Keg",
      ultimateAbility: "Cannon Barrage",
      lore: "Gangplank, the Saltwater Scourge, is a ruthless pirate captain seeking to reclaim his stolen ship, the Dead Pool. He rules over Bilgewater with an iron fist and is feared by sailors across Runeterra...",
      usualRole: "Top Lane / Mid Lane",
      regionId: Bilgewater,
      skinList: [
        "Spooky Gangplank",
        "Toy Soldier Gangplank",
        "Dreadnova Gangplank",
        "Pool Party Gangplank",
        "Special Forces Gangplank",
      ],
      musicTheme: "https://youtu.be/A3hUQQAsa5s?si=O0xKrb92wAvrY_Hm",
    },
    {
      name: "Malphite",
      champTitle: "Shard of the Monolith",
      passive: "Granite Shield",
      ability1: "Seismic Shard",
      ability2: "Thunderclap",
      ability3: "Ground Slam",
      ultimateAbility: "Unstoppable Force",
      lore: "Malphite, the Shard of the Monolith, is a colossal rock elemental brought to life by elemental forces. He roams Runeterra to preserve the balance of nature and crush those who threaten it...",
      usualRole: "Top Lane / Support",
      regionId: Ixtal,
      skinList: [
        "Shamrock Malphite",
        "Coral Reef Malphite",
        "Glacial Malphite",
        "Odyssey Malphite",
        "Mecha Malphite",
      ],
      musicTheme: "https://youtu.be/f6OPCj_rvCg?si=ZeonDWtPlQTX1PZX",
    },
  ];
  try {
    await Champion.insertMany(champions);
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
