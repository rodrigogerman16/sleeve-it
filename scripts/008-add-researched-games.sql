-- 54 games researched (from the games deleted earlier that actually have a
-- real sleeve-worthy card deck). Card counts and dimensions sourced from
-- sleeveyourgames.com / BoardGameGeek / manufacturer pages. Sleeve products
-- reuse the 4 categories already in the DB (Estándar, Estándar USA, Mini
-- Europeo, Cuadrado) plus 4 new ones, all verified to load and match the
-- expected product before being added: Mini Americano (41x63mm), Europeo
-- (59x92mm), Tarot (70x120mm), Grande/Dixit (81x122mm).
--
-- Simplifications: games with 3+ card sizes in reality (e.g. Arkham Horror,
-- Betrayal, Mysterium) are represented with their 1-2 dominant sizes only,
-- dropping minor secondary decks for manageability. Forbidden Sky's
-- dimension is inferred from its Forbidden-series siblings, not directly
-- confirmed. Secret Hitler and Robinson Crusoe are simplified to their
-- single most sleeve-relevant deck.

INSERT INTO games (slug, name, image) VALUES ('arkham-horror', 'Arkham Horror', '🐙');
INSERT INTO games (slug, name, image) VALUES ('ascension', 'Ascension', '🃏');
INSERT INTO games (slug, name, image) VALUES ('bang', 'BANG!', '🤠');
INSERT INTO games (slug, name, image) VALUES ('betrayal-at-house-on-the-hill', 'Betrayal at House on the Hill', '🏚️');
INSERT INTO games (slug, name, image) VALUES ('blood-rage', 'Blood Rage', '⚔️');
INSERT INTO games (slug, name, image) VALUES ('brass-birmingham', 'Brass: Birmingham', '🏭');
INSERT INTO games (slug, name, image) VALUES ('castle-panic', 'Castle Panic', '🏰');
INSERT INTO games (slug, name, image) VALUES ('century-spice-road', 'Century: Spice Road', '🌶️');
INSERT INTO games (slug, name, image) VALUES ('century-a-new-world', 'Century: A New World', '🗺️');
INSERT INTO games (slug, name, image) VALUES ('clank', 'Clank!', '💎');
INSERT INTO games (slug, name, image) VALUES ('codenames-duet', 'Codenames: Duet', '🔑');
INSERT INTO games (slug, name, image) VALUES ('codenames-pictures', 'Codenames: Pictures', '🖼️');
INSERT INTO games (slug, name, image) VALUES ('concordia', 'Concordia', '🏛️');
INSERT INTO games (slug, name, image) VALUES ('dead-of-winter', 'Dead of Winter', '❄️');
INSERT INTO games (slug, name, image) VALUES ('dixit', 'Dixit', '🎨');
INSERT INTO games (slug, name, image) VALUES ('elder-sign', 'Elder Sign', '🐙');
INSERT INTO games (slug, name, image) VALUES ('eldritch-horror', 'Eldritch Horror', '🌌');
INSERT INTO games (slug, name, image) VALUES ('fluxx', 'Fluxx', '🌀');
INSERT INTO games (slug, name, image) VALUES ('food-chain-magnate', 'Food Chain Magnate', '🍔');
INSERT INTO games (slug, name, image) VALUES ('forbidden-desert', 'Forbidden Desert', '🏜️');
INSERT INTO games (slug, name, image) VALUES ('forbidden-island', 'Forbidden Island', '🏝️');
INSERT INTO games (slug, name, image) VALUES ('forbidden-sky', 'Forbidden Sky', '⛅');
INSERT INTO games (slug, name, image) VALUES ('great-western-trail', 'Great Western Trail', '🐄');
INSERT INTO games (slug, name, image) VALUES ('hanabi', 'Hanabi', '🎆');
INSERT INTO games (slug, name, image) VALUES ('hanamikoji', 'Hanamikoji', '🌸');
INSERT INTO games (slug, name, image) VALUES ('istanbul', 'Istanbul', '🕌');
INSERT INTO games (slug, name, image) VALUES ('jaipur', 'Jaipur', '🐫');
INSERT INTO games (slug, name, image) VALUES ('just-one', 'Just One', '💡');
INSERT INTO games (slug, name, image) VALUES ('le-havre', 'Le Havre', '⚓');
INSERT INTO games (slug, name, image) VALUES ('legendary', 'Legendary: A Marvel Deck Building Game', '🦸');
INSERT INTO games (slug, name, image) VALUES ('lords-of-waterdeep', 'Lords of Waterdeep', '👑');
INSERT INTO games (slug, name, image) VALUES ('lost-cities', 'Lost Cities', '🧭');
INSERT INTO games (slug, name, image) VALUES ('mansions-of-madness', 'Mansions of Madness', '🏚️');
INSERT INTO games (slug, name, image) VALUES ('massive-darkness', 'Massive Darkness', '🗡️');
INSERT INTO games (slug, name, image) VALUES ('mice-and-mystics', 'Mice and Mystics', '🐭');
INSERT INTO games (slug, name, image) VALUES ('munchkin', 'Munchkin', '👹');
INSERT INTO games (slug, name, image) VALUES ('mysterium', 'Mysterium', '👻');
INSERT INTO games (slug, name, image) VALUES ('one-night-ultimate-werewolf', 'One Night Ultimate Werewolf', '🐺');
INSERT INTO games (slug, name, image) VALUES ('ora-et-labora', 'Ora et Labora', '🏗️');
INSERT INTO games (slug, name, image) VALUES ('power-grid', 'Power Grid', '⚡');
INSERT INTO games (slug, name, image) VALUES ('rising-sun', 'Rising Sun', '☀️');
INSERT INTO games (slug, name, image) VALUES ('robinson-crusoe', 'Robinson Crusoe', '🏝️');
INSERT INTO games (slug, name, image) VALUES ('secret-hitler', 'Secret Hitler', '🎩');
INSERT INTO games (slug, name, image) VALUES ('sheriff-of-nottingham', 'Sheriff of Nottingham', '👮');
INSERT INTO games (slug, name, image) VALUES ('smash-up', 'Smash Up', '💥');
INSERT INTO games (slug, name, image) VALUES ('spyfall', 'Spyfall', '🕵️');
INSERT INTO games (slug, name, image) VALUES ('star-realms', 'Star Realms', '🚀');
INSERT INTO games (slug, name, image) VALUES ('targi', 'Targi', '🏜️');
INSERT INTO games (slug, name, image) VALUES ('the-mind', 'The Mind', '🧠');
INSERT INTO games (slug, name, image) VALUES ('the-red-dragon-inn', 'The Red Dragon Inn', '🍺');
INSERT INTO games (slug, name, image) VALUES ('the-resistance-avalon', 'The Resistance: Avalon', '🗡️');
INSERT INTO games (slug, name, image) VALUES ('twilight-imperium', 'Twilight Imperium', '🌌');
INSERT INTO games (slug, name, image) VALUES ('viticulture', 'Viticulture', '🍇');
INSERT INTO games (slug, name, image) VALUES ('zombicide', 'Zombicide', '🧟');

INSERT INTO cards (game_id, size, dimensions, quantity, sleeve_type, brand, model)
SELECT g.id, 'Estándar USA', '56 x 87 mm', 282, 'Estándar USA Premium', 'Mayday Games', 'Standard USA'
FROM games g WHERE g.slug = 'arkham-horror';

INSERT INTO cards (game_id, size, dimensions, quantity, sleeve_type, brand, model)
SELECT g.id, 'Mini Americano', '41 x 63 mm', 187, 'Mini Americano Premium', 'Sleeve Kings', 'Mini USA'
FROM games g WHERE g.slug = 'arkham-horror';

INSERT INTO cards (game_id, size, dimensions, quantity, sleeve_type, brand, model)
SELECT g.id, 'Estándar', '63.5 x 88 mm', 200, 'Estándar Premium', 'Gamegenic', 'Prime'
FROM games g WHERE g.slug = 'ascension';

INSERT INTO cards (game_id, size, dimensions, quantity, sleeve_type, brand, model)
SELECT g.id, 'Estándar USA', '56 x 87 mm', 110, 'Estándar USA Premium', 'Mayday Games', 'Standard USA'
FROM games g WHERE g.slug = 'bang';

INSERT INTO cards (game_id, size, dimensions, quantity, sleeve_type, brand, model)
SELECT g.id, 'Tarot', '70 x 120 mm', 80, 'Tarot Premium', 'Sleeve Kings', 'Tarot'
FROM games g WHERE g.slug = 'betrayal-at-house-on-the-hill';

INSERT INTO cards (game_id, size, dimensions, quantity, sleeve_type, brand, model)
SELECT g.id, 'Mini Americano', '41 x 63 mm', 107, 'Mini Americano Premium', 'Sleeve Kings', 'Mini USA'
FROM games g WHERE g.slug = 'blood-rage';

INSERT INTO cards (game_id, size, dimensions, quantity, sleeve_type, brand, model)
SELECT g.id, 'Estándar', '63.5 x 88 mm', 76, 'Estándar Premium', 'Gamegenic', 'Prime'
FROM games g WHERE g.slug = 'brass-birmingham';

INSERT INTO cards (game_id, size, dimensions, quantity, sleeve_type, brand, model)
SELECT g.id, 'Estándar USA', '56 x 87 mm', 55, 'Estándar USA Premium', 'Mayday Games', 'Standard USA'
FROM games g WHERE g.slug = 'castle-panic';

INSERT INTO cards (game_id, size, dimensions, quantity, sleeve_type, brand, model)
SELECT g.id, 'Tarot', '70 x 120 mm', 94, 'Tarot Premium', 'Sleeve Kings', 'Tarot'
FROM games g WHERE g.slug = 'century-spice-road';

INSERT INTO cards (game_id, size, dimensions, quantity, sleeve_type, brand, model)
SELECT g.id, 'Tarot', '70 x 120 mm', 56, 'Tarot Premium', 'Sleeve Kings', 'Tarot'
FROM games g WHERE g.slug = 'century-a-new-world';

INSERT INTO cards (game_id, size, dimensions, quantity, sleeve_type, brand, model)
SELECT g.id, 'Estándar', '63.5 x 88 mm', 183, 'Estándar Premium', 'Gamegenic', 'Prime'
FROM games g WHERE g.slug = 'clank';

INSERT INTO cards (game_id, size, dimensions, quantity, sleeve_type, brand, model)
SELECT g.id, 'Mini Europeo', '44 x 68 mm', 202, 'Mini Europeo', 'Sleeve Kings', 'Mini Europeo'
FROM games g WHERE g.slug = 'codenames-duet';

INSERT INTO cards (game_id, size, dimensions, quantity, sleeve_type, brand, model)
SELECT g.id, 'Cuadrado', '70 x 70 mm', 240, 'Cuadrado Premium', 'Sleeve Kings', 'Cuadrado'
FROM games g WHERE g.slug = 'codenames-pictures';

INSERT INTO cards (game_id, size, dimensions, quantity, sleeve_type, brand, model)
SELECT g.id, 'Europeo', '59 x 92 mm', 72, 'Europeo Estándar Premium', 'Mayday Games', 'Standard European'
FROM games g WHERE g.slug = 'concordia';

INSERT INTO cards (game_id, size, dimensions, quantity, sleeve_type, brand, model)
SELECT g.id, 'Estándar', '63.5 x 88 mm', 329, 'Estándar Premium', 'Gamegenic', 'Prime'
FROM games g WHERE g.slug = 'dead-of-winter';

INSERT INTO cards (game_id, size, dimensions, quantity, sleeve_type, brand, model)
SELECT g.id, 'Grande', '81 x 122 mm', 84, 'Grande Premium', 'Gamegenic', 'Prime Dixit'
FROM games g WHERE g.slug = 'dixit';

INSERT INTO cards (game_id, size, dimensions, quantity, sleeve_type, brand, model)
SELECT g.id, 'Mini Americano', '41 x 63 mm', 76, 'Mini Americano Premium', 'Sleeve Kings', 'Mini USA'
FROM games g WHERE g.slug = 'elder-sign';

INSERT INTO cards (game_id, size, dimensions, quantity, sleeve_type, brand, model)
SELECT g.id, 'Tarot', '70 x 120 mm', 80, 'Tarot Premium', 'Sleeve Kings', 'Tarot'
FROM games g WHERE g.slug = 'elder-sign';

INSERT INTO cards (game_id, size, dimensions, quantity, sleeve_type, brand, model)
SELECT g.id, 'Estándar USA', '56 x 87 mm', 189, 'Estándar USA Premium', 'Mayday Games', 'Standard USA'
FROM games g WHERE g.slug = 'eldritch-horror';

INSERT INTO cards (game_id, size, dimensions, quantity, sleeve_type, brand, model)
SELECT g.id, 'Mini Americano', '41 x 63 mm', 114, 'Mini Americano Premium', 'Sleeve Kings', 'Mini USA'
FROM games g WHERE g.slug = 'eldritch-horror';

INSERT INTO cards (game_id, size, dimensions, quantity, sleeve_type, brand, model)
SELECT g.id, 'Estándar USA', '56 x 87 mm', 100, 'Estándar USA Premium', 'Mayday Games', 'Standard USA'
FROM games g WHERE g.slug = 'fluxx';

INSERT INTO cards (game_id, size, dimensions, quantity, sleeve_type, brand, model)
SELECT g.id, 'Estándar USA', '56 x 87 mm', 330, 'Estándar USA Premium', 'Mayday Games', 'Standard USA'
FROM games g WHERE g.slug = 'food-chain-magnate';

INSERT INTO cards (game_id, size, dimensions, quantity, sleeve_type, brand, model)
SELECT g.id, 'Estándar', '63.5 x 88 mm', 49, 'Estándar Premium', 'Gamegenic', 'Prime'
FROM games g WHERE g.slug = 'forbidden-desert';

INSERT INTO cards (game_id, size, dimensions, quantity, sleeve_type, brand, model)
SELECT g.id, 'Estándar', '63.5 x 88 mm', 58, 'Estándar Premium', 'Gamegenic', 'Prime'
FROM games g WHERE g.slug = 'forbidden-island';

INSERT INTO cards (game_id, size, dimensions, quantity, sleeve_type, brand, model)
SELECT g.id, 'Estándar', '63.5 x 88 mm', 37, 'Estándar Premium', 'Gamegenic', 'Prime'
FROM games g WHERE g.slug = 'forbidden-sky';

INSERT INTO cards (game_id, size, dimensions, quantity, sleeve_type, brand, model)
SELECT g.id, 'Estándar USA', '56 x 87 mm', 159, 'Estándar USA Premium', 'Mayday Games', 'Standard USA'
FROM games g WHERE g.slug = 'great-western-trail';

INSERT INTO cards (game_id, size, dimensions, quantity, sleeve_type, brand, model)
SELECT g.id, 'Estándar USA', '56 x 87 mm', 60, 'Estándar USA Premium', 'Mayday Games', 'Standard USA'
FROM games g WHERE g.slug = 'hanabi';

INSERT INTO cards (game_id, size, dimensions, quantity, sleeve_type, brand, model)
SELECT g.id, 'Grande', '81 x 122 mm', 7, 'Grande Premium', 'Gamegenic', 'Prime Dixit'
FROM games g WHERE g.slug = 'hanamikoji';

INSERT INTO cards (game_id, size, dimensions, quantity, sleeve_type, brand, model)
SELECT g.id, 'Estándar', '63.5 x 88 mm', 21, 'Estándar Premium', 'Gamegenic', 'Prime'
FROM games g WHERE g.slug = 'hanamikoji';

INSERT INTO cards (game_id, size, dimensions, quantity, sleeve_type, brand, model)
SELECT g.id, 'Mini Europeo', '44 x 68 mm', 92, 'Mini Europeo', 'Sleeve Kings', 'Mini Europeo'
FROM games g WHERE g.slug = 'istanbul';

INSERT INTO cards (game_id, size, dimensions, quantity, sleeve_type, brand, model)
SELECT g.id, 'Estándar', '63.5 x 88 mm', 55, 'Estándar Premium', 'Gamegenic', 'Prime'
FROM games g WHERE g.slug = 'jaipur';

INSERT INTO cards (game_id, size, dimensions, quantity, sleeve_type, brand, model)
SELECT g.id, 'Estándar', '63.5 x 88 mm', 110, 'Estándar Premium', 'Gamegenic', 'Prime'
FROM games g WHERE g.slug = 'just-one';

INSERT INTO cards (game_id, size, dimensions, quantity, sleeve_type, brand, model)
SELECT g.id, 'Europeo', '59 x 92 mm', 143, 'Europeo Estándar Premium', 'Mayday Games', 'Standard European'
FROM games g WHERE g.slug = 'le-havre';

INSERT INTO cards (game_id, size, dimensions, quantity, sleeve_type, brand, model)
SELECT g.id, 'Estándar', '63.5 x 88 mm', 500, 'Estándar Premium', 'Gamegenic', 'Prime'
FROM games g WHERE g.slug = 'legendary';

INSERT INTO cards (game_id, size, dimensions, quantity, sleeve_type, brand, model)
SELECT g.id, 'Estándar', '63.5 x 88 mm', 121, 'Estándar Premium', 'Gamegenic', 'Prime'
FROM games g WHERE g.slug = 'lords-of-waterdeep';

INSERT INTO cards (game_id, size, dimensions, quantity, sleeve_type, brand, model)
SELECT g.id, 'Estándar USA', '56 x 87 mm', 110, 'Estándar USA Premium', 'Mayday Games', 'Standard USA'
FROM games g WHERE g.slug = 'lost-cities';

INSERT INTO cards (game_id, size, dimensions, quantity, sleeve_type, brand, model)
SELECT g.id, 'Mini Americano', '41 x 63 mm', 211, 'Mini Americano Premium', 'Sleeve Kings', 'Mini USA'
FROM games g WHERE g.slug = 'mansions-of-madness';

INSERT INTO cards (game_id, size, dimensions, quantity, sleeve_type, brand, model)
SELECT g.id, 'Tarot', '70 x 120 mm', 24, 'Tarot Premium', 'Sleeve Kings', 'Tarot'
FROM games g WHERE g.slug = 'mansions-of-madness';

INSERT INTO cards (game_id, size, dimensions, quantity, sleeve_type, brand, model)
SELECT g.id, 'Mini Americano', '41 x 63 mm', 231, 'Mini Americano Premium', 'Sleeve Kings', 'Mini USA'
FROM games g WHERE g.slug = 'massive-darkness';

INSERT INTO cards (game_id, size, dimensions, quantity, sleeve_type, brand, model)
SELECT g.id, 'Estándar', '63.5 x 88 mm', 68, 'Estándar Premium', 'Gamegenic', 'Prime'
FROM games g WHERE g.slug = 'massive-darkness';

INSERT INTO cards (game_id, size, dimensions, quantity, sleeve_type, brand, model)
SELECT g.id, 'Mini Europeo', '44 x 68 mm', 47, 'Mini Europeo', 'Sleeve Kings', 'Mini Europeo'
FROM games g WHERE g.slug = 'mice-and-mystics';

INSERT INTO cards (game_id, size, dimensions, quantity, sleeve_type, brand, model)
SELECT g.id, 'Estándar', '63.5 x 88 mm', 89, 'Estándar Premium', 'Gamegenic', 'Prime'
FROM games g WHERE g.slug = 'mice-and-mystics';

INSERT INTO cards (game_id, size, dimensions, quantity, sleeve_type, brand, model)
SELECT g.id, 'Estándar USA', '56 x 87 mm', 168, 'Estándar USA Premium', 'Mayday Games', 'Standard USA'
FROM games g WHERE g.slug = 'munchkin';

INSERT INTO cards (game_id, size, dimensions, quantity, sleeve_type, brand, model)
SELECT g.id, 'Grande', '81 x 122 mm', 84, 'Grande Premium', 'Gamegenic', 'Prime Dixit'
FROM games g WHERE g.slug = 'mysterium';

INSERT INTO cards (game_id, size, dimensions, quantity, sleeve_type, brand, model)
SELECT g.id, 'Estándar', '63.5 x 88 mm', 54, 'Estándar Premium', 'Gamegenic', 'Prime'
FROM games g WHERE g.slug = 'mysterium';

INSERT INTO cards (game_id, size, dimensions, quantity, sleeve_type, brand, model)
SELECT g.id, 'Europeo', '59 x 92 mm', 16, 'Europeo Estándar Premium', 'Mayday Games', 'Standard European'
FROM games g WHERE g.slug = 'one-night-ultimate-werewolf';

INSERT INTO cards (game_id, size, dimensions, quantity, sleeve_type, brand, model)
SELECT g.id, 'Mini Europeo', '44 x 68 mm', 110, 'Mini Europeo', 'Sleeve Kings', 'Mini Europeo'
FROM games g WHERE g.slug = 'ora-et-labora';

INSERT INTO cards (game_id, size, dimensions, quantity, sleeve_type, brand, model)
SELECT g.id, 'Cuadrado', '70 x 70 mm', 50, 'Cuadrado Premium', 'Sleeve Kings', 'Cuadrado'
FROM games g WHERE g.slug = 'power-grid';

INSERT INTO cards (game_id, size, dimensions, quantity, sleeve_type, brand, model)
SELECT g.id, 'Estándar USA', '56 x 87 mm', 96, 'Estándar USA Premium', 'Mayday Games', 'Standard USA'
FROM games g WHERE g.slug = 'rising-sun';

INSERT INTO cards (game_id, size, dimensions, quantity, sleeve_type, brand, model)
SELECT g.id, 'Estándar USA', '56 x 87 mm', 220, 'Estándar USA Premium', 'Mayday Games', 'Standard USA'
FROM games g WHERE g.slug = 'robinson-crusoe';

INSERT INTO cards (game_id, size, dimensions, quantity, sleeve_type, brand, model)
SELECT g.id, 'Estándar USA', '56 x 87 mm', 17, 'Estándar USA Premium', 'Mayday Games', 'Standard USA'
FROM games g WHERE g.slug = 'secret-hitler';

INSERT INTO cards (game_id, size, dimensions, quantity, sleeve_type, brand, model)
SELECT g.id, 'Estándar', '63.5 x 88 mm', 228, 'Estándar Premium', 'Gamegenic', 'Prime'
FROM games g WHERE g.slug = 'sheriff-of-nottingham';

INSERT INTO cards (game_id, size, dimensions, quantity, sleeve_type, brand, model)
SELECT g.id, 'Estándar USA', '56 x 87 mm', 176, 'Estándar USA Premium', 'Mayday Games', 'Standard USA'
FROM games g WHERE g.slug = 'smash-up';

INSERT INTO cards (game_id, size, dimensions, quantity, sleeve_type, brand, model)
SELECT g.id, 'Estándar', '63.5 x 88 mm', 240, 'Estándar Premium', 'Gamegenic', 'Prime'
FROM games g WHERE g.slug = 'spyfall';

INSERT INTO cards (game_id, size, dimensions, quantity, sleeve_type, brand, model)
SELECT g.id, 'Estándar', '63.5 x 88 mm', 128, 'Estándar Premium', 'Gamegenic', 'Prime'
FROM games g WHERE g.slug = 'star-realms';

INSERT INTO cards (game_id, size, dimensions, quantity, sleeve_type, brand, model)
SELECT g.id, 'Europeo', '59 x 92 mm', 80, 'Europeo Estándar Premium', 'Mayday Games', 'Standard European'
FROM games g WHERE g.slug = 'targi';

INSERT INTO cards (game_id, size, dimensions, quantity, sleeve_type, brand, model)
SELECT g.id, 'Europeo', '59 x 92 mm', 120, 'Europeo Estándar Premium', 'Mayday Games', 'Standard European'
FROM games g WHERE g.slug = 'the-mind';

INSERT INTO cards (game_id, size, dimensions, quantity, sleeve_type, brand, model)
SELECT g.id, 'Estándar', '63.5 x 88 mm', 190, 'Estándar Premium', 'Gamegenic', 'Prime'
FROM games g WHERE g.slug = 'the-red-dragon-inn';

INSERT INTO cards (game_id, size, dimensions, quantity, sleeve_type, brand, model)
SELECT g.id, 'Estándar USA', '56 x 87 mm', 36, 'Estándar USA Premium', 'Mayday Games', 'Standard USA'
FROM games g WHERE g.slug = 'the-resistance-avalon';

INSERT INTO cards (game_id, size, dimensions, quantity, sleeve_type, brand, model)
SELECT g.id, 'Mini Americano', '41 x 63 mm', 50, 'Mini Americano Premium', 'Sleeve Kings', 'Mini USA'
FROM games g WHERE g.slug = 'the-resistance-avalon';

INSERT INTO cards (game_id, size, dimensions, quantity, sleeve_type, brand, model)
SELECT g.id, 'Mini Americano', '41 x 63 mm', 454, 'Mini Americano Premium', 'Sleeve Kings', 'Mini USA'
FROM games g WHERE g.slug = 'twilight-imperium';

INSERT INTO cards (game_id, size, dimensions, quantity, sleeve_type, brand, model)
SELECT g.id, 'Estándar', '63.5 x 88 mm', 78, 'Estándar Premium', 'Gamegenic', 'Prime'
FROM games g WHERE g.slug = 'viticulture';

INSERT INTO cards (game_id, size, dimensions, quantity, sleeve_type, brand, model)
SELECT g.id, 'Mini Europeo', '44 x 68 mm', 154, 'Mini Europeo', 'Sleeve Kings', 'Mini Europeo'
FROM games g WHERE g.slug = 'viticulture';

INSERT INTO cards (game_id, size, dimensions, quantity, sleeve_type, brand, model)
SELECT g.id, 'Mini Americano', '41 x 63 mm', 107, 'Mini Americano Premium', 'Sleeve Kings', 'Mini USA'
FROM games g WHERE g.slug = 'zombicide';

-- Sleeve purchase links, one per (game, dimension) pair actually used above.
INSERT INTO purchase_links (game_id, name, url, price, category, dimensions)
SELECT g.id, 'Fundas Mayday Games Estándar USA (56 x 87 mm)', 'https://www.amazon.com/Mayday-Games-Boared-Sleeves-Purple/dp/B003Y7O3KY', NULL, 'sleeve', '56 x 87 mm'
FROM games g WHERE g.slug IN ('arkham-horror', 'bang', 'castle-panic', 'eldritch-horror', 'fluxx', 'food-chain-magnate', 'great-western-trail', 'hanabi', 'lost-cities', 'munchkin', 'rising-sun', 'robinson-crusoe', 'secret-hitler', 'smash-up', 'the-resistance-avalon');

INSERT INTO purchase_links (game_id, name, url, price, category, dimensions)
SELECT g.id, 'Fundas Sleeve Kings Mini Americano (41 x 63 mm)', 'https://www.amazon.com/Sleeve-Kings-Mini-Sleeves-41x63mm/dp/B07PZ2ZGPX', NULL, 'sleeve', '41 x 63 mm'
FROM games g WHERE g.slug IN ('arkham-horror', 'blood-rage', 'elder-sign', 'eldritch-horror', 'mansions-of-madness', 'massive-darkness', 'the-resistance-avalon', 'twilight-imperium', 'zombicide');

INSERT INTO purchase_links (game_id, name, url, price, category, dimensions)
SELECT g.id, 'Fundas Gamegenic Estándar (63.5 x 88 mm)', 'https://www.amazon.com/Sleeves-Gamegenic-Prime-Standard-Card/dp/B084TMFSG8', NULL, 'sleeve', '63.5 x 88 mm'
FROM games g WHERE g.slug IN ('ascension', 'brass-birmingham', 'clank', 'dead-of-winter', 'forbidden-desert', 'forbidden-island', 'forbidden-sky', 'hanamikoji', 'jaipur', 'just-one', 'legendary', 'lords-of-waterdeep', 'massive-darkness', 'mice-and-mystics', 'mysterium', 'sheriff-of-nottingham', 'spyfall', 'star-realms', 'the-red-dragon-inn', 'viticulture');

INSERT INTO purchase_links (game_id, name, url, price, category, dimensions)
SELECT g.id, 'Fundas Sleeve Kings Tarot (70 x 120 mm)', 'https://www.amazon.com/Sleeves-70x120mm-Microns-Sleeve-Kings/dp/B09PHWQGCF', NULL, 'sleeve', '70 x 120 mm'
FROM games g WHERE g.slug IN ('betrayal-at-house-on-the-hill', 'century-spice-road', 'century-a-new-world', 'elder-sign', 'mansions-of-madness');

INSERT INTO purchase_links (game_id, name, url, price, category, dimensions)
SELECT g.id, 'Fundas Sleeve Kings Mini Europeo (44 x 68 mm)', 'https://www.amazon.com/Mini-European-Sleeves-44x68mm-Microns/dp/B09PHVS2DG', NULL, 'sleeve', '44 x 68 mm'
FROM games g WHERE g.slug IN ('codenames-duet', 'istanbul', 'mice-and-mystics', 'ora-et-labora', 'viticulture');

INSERT INTO purchase_links (game_id, name, url, price, category, dimensions)
SELECT g.id, 'Fundas Sleeve Kings Cuadrado (70 x 70 mm)', 'https://www.amazon.com/Sleeve-Kings-Square-Sleeves-70x70mm/dp/B07NPR83N1', NULL, 'sleeve', '70 x 70 mm'
FROM games g WHERE g.slug IN ('codenames-pictures', 'power-grid');

INSERT INTO purchase_links (game_id, name, url, price, category, dimensions)
SELECT g.id, 'Fundas Mayday Games Europeo (59 x 92 mm)', 'https://www.amazon.com/Mayday-Games-Premium-Card-Sleeves/dp/B002901NF0', NULL, 'sleeve', '59 x 92 mm'
FROM games g WHERE g.slug IN ('concordia', 'le-havre', 'one-night-ultimate-werewolf', 'targi', 'the-mind');

INSERT INTO purchase_links (game_id, name, url, price, category, dimensions)
SELECT g.id, 'Fundas Gamegenic Grande (81 x 122 mm)', 'https://www.amazon.com/Extra-Clear-Optimized-Mysterium-Protection-Gamegenic/dp/B084TMCRD7', NULL, 'sleeve', '81 x 122 mm'
FROM games g WHERE g.slug IN ('dixit', 'hanamikoji', 'mysterium');

