-- Game purchase links for the 54 researched games. 51 of 54 verified with a
-- live, correct Amazon listing (loaded the actual page and confirmed the
-- title matches). 3 skipped entirely rather than guessing a wrong product:
-- Forbidden Sky, Hanamikoji, and base Spyfall have no confirmed live
-- standard listing on Amazon (all appear out of print or superseded by
-- newer variants that don't match the card data already recorded for them).

INSERT INTO purchase_links (game_id, name, url, price, category, dimensions)
SELECT g.id, 'Amazon', 'https://www.amazon.com/Strategy-Cooperative-Fantasy-Flight-Games/dp/B07G3Y95R9', NULL, 'game', NULL
FROM games g WHERE g.slug = 'arkham-horror';

INSERT INTO purchase_links (game_id, name, url, price, category, dimensions)
SELECT g.id, 'Amazon', 'https://www.amazon.com/Stone-Blade-Entertainment-Ascension-Board/dp/B0D7DNRFNR', NULL, 'game', NULL
FROM games g WHERE g.slug = 'ascension';

INSERT INTO purchase_links (game_id, name, url, price, category, dimensions)
SELECT g.id, 'Amazon', 'https://www.amazon.com/dV-Giochi-Hidden-Role-Shootouts-Deduction/dp/B001037L8K', NULL, 'game', NULL
FROM games g WHERE g.slug = 'bang';

INSERT INTO purchase_links (game_id, name, url, price, category, dimensions)
SELECT g.id, 'Amazon', 'https://www.amazon.com/Hasbro-Gaming-Betrayal-Cooperative-Scenarios/dp/B09H23M384', NULL, 'game', NULL
FROM games g WHERE g.slug = 'betrayal-at-house-on-the-hill';

INSERT INTO purchase_links (game_id, name, url, price, category, dimensions)
SELECT g.id, 'Amazon', 'https://www.amazon.com/CMON-BLR001CMON-Blood-Rage/dp/B013TK5DFO', NULL, 'game', NULL
FROM games g WHERE g.slug = 'blood-rage';

INSERT INTO purchase_links (game_id, name, url, price, category, dimensions)
SELECT g.id, 'Amazon', 'https://www.amazon.com/Roxley-Games-Brass-Birmingham-Board/dp/1988884047', NULL, 'game', NULL
FROM games g WHERE g.slug = 'brass-birmingham';

INSERT INTO purchase_links (game_id, name, url, price, category, dimensions)
SELECT g.id, 'Amazon', 'https://www.amazon.com/Fireside-Games-FSD1001-Castle-Panic/dp/B002IUFSPM', NULL, 'game', NULL
FROM games g WHERE g.slug = 'castle-panic';

INSERT INTO purchase_links (game_id, name, url, price, category, dimensions)
SELECT g.id, 'Amazon', 'https://www.amazon.com/Exploration-Plan-Games-Multi-Colored-40000ENPBG/dp/B071DXCT5L', NULL, 'game', NULL
FROM games g WHERE g.slug = 'century-spice-road';

INSERT INTO purchase_links (game_id, name, url, price, category, dimensions)
SELECT g.id, 'Amazon', 'https://www.amazon.com/Plan-B-Games-PBG40040EN-Century/dp/B07PKDF6WT', NULL, 'game', NULL
FROM games g WHERE g.slug = 'century-a-new-world';

INSERT INTO purchase_links (game_id, name, url, price, category, dimensions)
SELECT g.id, 'Amazon', 'https://www.amazon.com/RENEGADE-GAMES-STUDIOS-Clank-Event/dp/B0721RJ1QK', NULL, 'game', NULL
FROM games g WHERE g.slug = 'clank';

INSERT INTO purchase_links (game_id, name, url, price, category, dimensions)
SELECT g.id, 'Amazon', 'https://www.amazon.com/Codenames-Duet-Player-Word-Deduction/dp/B072J234ZF', NULL, 'game', NULL
FROM games g WHERE g.slug = 'codenames-duet';

INSERT INTO purchase_links (game_id, name, url, price, category, dimensions)
SELECT g.id, 'Amazon', 'https://www.amazon.com/Czech-Games-00036CGE-Codenames-Pictures/dp/B01HT9DERU', NULL, 'game', NULL
FROM games g WHERE g.slug = 'codenames-pictures';

INSERT INTO purchase_links (game_id, name, url, price, category, dimensions)
SELECT g.id, 'Amazon', 'https://www.amazon.com/Rio-Grande-Games-RIO-499/dp/B00HFDSQP6', NULL, 'game', NULL
FROM games g WHERE g.slug = 'concordia';

INSERT INTO purchase_links (game_id, name, url, price, category, dimensions)
SELECT g.id, 'Amazon', 'https://www.amazon.com/Fantasy-Flight-Games-PH1000-Winter/dp/B00HFKITJC', NULL, 'game', NULL
FROM games g WHERE g.slug = 'dead-of-winter';

INSERT INTO purchase_links (game_id, name, url, price, category, dimensions)
SELECT g.id, 'Amazon', 'https://www.amazon.com/Dixit-Board-Game-Award-Winning-Storytelling/dp/2914849656', NULL, 'game', NULL
FROM games g WHERE g.slug = 'dixit';

INSERT INTO purchase_links (game_id, name, url, price, category, dimensions)
SELECT g.id, 'Amazon', 'https://www.amazon.com/Fantasy-Flight-Games-Elder-Sign/dp/1616611359', NULL, 'game', NULL
FROM games g WHERE g.slug = 'elder-sign';

INSERT INTO purchase_links (game_id, name, url, price, category, dimensions)
SELECT g.id, 'Amazon', 'https://www.amazon.com/Fantasy-Flight-Games-EH01-Eldritch/dp/1616617667', NULL, 'game', NULL
FROM games g WHERE g.slug = 'eldritch-horror';

INSERT INTO purchase_links (game_id, name, url, price, category, dimensions)
SELECT g.id, 'Amazon', 'https://www.amazon.com/Looney-Labs-001LOO-5-0-Fluxx-Card/dp/B00OETKWCE', NULL, 'game', NULL
FROM games g WHERE g.slug = 'fluxx';

INSERT INTO purchase_links (game_id, name, url, price, category, dimensions)
SELECT g.id, 'Amazon', 'https://www.amazon.com/Food-Chain-Magnate-by-Splotter/dp/B017AED3AM', NULL, 'game', NULL
FROM games g WHERE g.slug = 'food-chain-magnate';

INSERT INTO purchase_links (game_id, name, url, price, category, dimensions)
SELECT g.id, 'Amazon', 'https://www.amazon.com/Gamewright-415-Forbidden-Desert-Board/dp/B00B4ECHJI', NULL, 'game', NULL
FROM games g WHERE g.slug = 'forbidden-desert';

INSERT INTO purchase_links (game_id, name, url, price, category, dimensions)
SELECT g.id, 'Amazon', 'https://www.amazon.com/Gamewright-317-Forbidden-Island-Card/dp/B003D7F4YY', NULL, 'game', NULL
FROM games g WHERE g.slug = 'forbidden-island';

INSERT INTO purchase_links (game_id, name, url, price, category, dimensions)
SELECT g.id, 'Amazon', 'https://www.amazon.com/Western-Adventure-Strategy-Playtime-Eggertspiele/dp/B09L55YLJC', NULL, 'game', NULL
FROM games g WHERE g.slug = 'great-western-trail';

INSERT INTO purchase_links (game_id, name, url, price, category, dimensions)
SELECT g.id, 'Amazon', 'https://www.amazon.com/Games-Hanabi-Card-Game/dp/B00CYQ9Q76', NULL, 'game', NULL
FROM games g WHERE g.slug = 'hanabi';

INSERT INTO purchase_links (game_id, name, url, price, category, dimensions)
SELECT g.id, 'Amazon', 'https://www.amazon.com/Pegasus-Spiele-Istanbul-Board-Game/dp/B0DF4PR1XJ', NULL, 'game', NULL
FROM games g WHERE g.slug = 'istanbul';

INSERT INTO purchase_links (game_id, name, url, price, category, dimensions)
SELECT g.id, 'Amazon', 'https://www.amazon.com/Space-Cowboys-JAIP01-Jaipur/dp/B07SRMXRZB', NULL, 'game', NULL
FROM games g WHERE g.slug = 'jaipur';

INSERT INTO purchase_links (game_id, name, url, price, category, dimensions)
SELECT g.id, 'Amazon', 'https://www.amazon.com/Repos-JOUS01-Just-One/dp/B07W3PJTL2', NULL, 'game', NULL
FROM games g WHERE g.slug = 'just-one';

INSERT INTO purchase_links (game_id, name, url, price, category, dimensions)
SELECT g.id, 'Amazon', 'https://www.amazon.com/European-Building-Strategy-Management-Lookout/dp/B01N17W07Y', NULL, 'game', NULL
FROM games g WHERE g.slug = 'le-havre';

INSERT INTO purchase_links (game_id, name, url, price, category, dimensions)
SELECT g.id, 'Amazon', 'https://www.amazon.com/Upper-Deck-Legendary-Marvel-Building/dp/B00A4KHEK0', NULL, 'game', NULL
FROM games g WHERE g.slug = 'legendary';

INSERT INTO purchase_links (game_id, name, url, price, category, dimensions)
SELECT g.id, 'Amazon', 'https://www.amazon.com/Lords-Waterdeep-Dungeons-Dragons-Board/dp/0786959916', NULL, 'game', NULL
FROM games g WHERE g.slug = 'lords-of-waterdeep';

INSERT INTO purchase_links (game_id, name, url, price, category, dimensions)
SELECT g.id, 'Amazon', 'https://www.amazon.com/Lost-Cities-Card-Game-Expedition/dp/B07KLWPHFF', NULL, 'game', NULL
FROM games g WHERE g.slug = 'lost-cities';

INSERT INTO purchase_links (game_id, name, url, price, category, dimensions)
SELECT g.id, 'Amazon', 'https://www.amazon.com/Mansions-Madness-Board-Game-2nd/dp/B01J4NB6CO', NULL, 'game', NULL
FROM games g WHERE g.slug = 'mansions-of-madness';

INSERT INTO purchase_links (game_id, name, url, price, category, dimensions)
SELECT g.id, 'Amazon', 'https://www.amazon.com/CMON-Massive-Darkness-Board-Games/dp/B01MA4ET20', NULL, 'game', NULL
FROM games g WHERE g.slug = 'massive-darkness';

INSERT INTO purchase_links (game_id, name, url, price, category, dimensions)
SELECT g.id, 'Amazon', 'https://www.amazon.com/Plaid-Hat-Games-PH1100-Mystics/dp/B009TNOF9G', NULL, 'game', NULL
FROM games g WHERE g.slug = 'mice-and-mystics';

INSERT INTO purchase_links (game_id, name, url, price, category, dimensions)
SELECT g.id, 'Amazon', 'https://www.amazon.com/Steve-Jackson-Games-1408SJG-Munchkin/dp/1556344732', NULL, 'game', NULL
FROM games g WHERE g.slug = 'munchkin';

INSERT INTO purchase_links (game_id, name, url, price, category, dimensions)
SELECT g.id, 'Amazon', 'https://www.amazon.com/Asmodee-MYST01-Mysterium/dp/B013TJ5P80', NULL, 'game', NULL
FROM games g WHERE g.slug = 'mysterium';

INSERT INTO purchase_links (game_id, name, url, price, category, dimensions)
SELECT g.id, 'Amazon', 'https://www.amazon.com/Bezier-Games-ONUWBEZ-Ultimate-Werewolf/dp/B00HS7GG5G', NULL, 'game', NULL
FROM games g WHERE g.slug = 'one-night-ultimate-werewolf';

INSERT INTO purchase_links (game_id, name, url, price, category, dimensions)
SELECT g.id, 'Amazon', 'https://www.amazon.com/Z-Man-Games-7092ZMG-Ora-Labora/dp/B006EJ2KNQ', NULL, 'game', NULL
FROM games g WHERE g.slug = 'ora-et-labora';

INSERT INTO purchase_links (game_id, name, url, price, category, dimensions)
SELECT g.id, 'Amazon', 'https://www.amazon.com/Rio-Grande-Games-Power-Grid/dp/B0007YDBLE', NULL, 'game', NULL
FROM games g WHERE g.slug = 'power-grid';

INSERT INTO purchase_links (game_id, name, url, price, category, dimensions)
SELECT g.id, 'Amazon', 'https://www.amazon.com/CMON-RSU001-Rising-Sun/dp/B076PDV9KR', NULL, 'game', NULL
FROM games g WHERE g.slug = 'rising-sun';

INSERT INTO purchase_links (game_id, name, url, price, category, dimensions)
SELECT g.id, 'Amazon', 'https://www.amazon.com/Portal-Games-Robinson-Crusoe-Adventures/dp/B01HDYFCJO', NULL, 'game', NULL
FROM games g WHERE g.slug = 'robinson-crusoe';

INSERT INTO purchase_links (game_id, name, url, price, category, dimensions)
SELECT g.id, 'Amazon', 'https://www.amazon.com/Secret-Hitler/dp/B01JKD4HYC', NULL, 'game', NULL
FROM games g WHERE g.slug = 'secret-hitler';

INSERT INTO purchase_links (game_id, name, url, price, category, dimensions)
SELECT g.id, 'Amazon', 'https://www.amazon.com/Arcane-Wonders-Sheriff-of-Nottingham/dp/B007EZMABG', NULL, 'game', NULL
FROM games g WHERE g.slug = 'sheriff-of-nottingham';

INSERT INTO purchase_links (game_id, name, url, price, category, dimensions)
SELECT g.id, 'Amazon', 'https://www.amazon.com/Alderac-Entertainment-Group-AEG-Smash/dp/B00875JE0C', NULL, 'game', NULL
FROM games g WHERE g.slug = 'smash-up';

INSERT INTO purchase_links (game_id, name, url, price, category, dimensions)
SELECT g.id, 'Amazon', 'https://www.amazon.com/White-Wizard-Games-WW500-Realms/dp/B00HRGMPIU', NULL, 'game', NULL
FROM games g WHERE g.slug = 'star-realms';

INSERT INTO purchase_links (game_id, name, url, price, category, dimensions)
SELECT g.id, 'Amazon', 'https://www.amazon.com/Thames-Kosmos-Targi-Player-Game/dp/B07B7TTRDF', NULL, 'game', NULL
FROM games g WHERE g.slug = 'targi';

INSERT INTO purchase_links (game_id, name, url, price, category, dimensions)
SELECT g.id, 'Amazon', 'https://www.amazon.com/Pandasaurus-Games-201809PAN-Mind-Card/dp/B07C4F3KLF', NULL, 'game', NULL
FROM games g WHERE g.slug = 'the-mind';

INSERT INTO purchase_links (game_id, name, url, price, category, dimensions)
SELECT g.id, 'Amazon', 'https://www.amazon.com/Slugfest-Games-Red-Dragon-Inn/dp/0976914417', NULL, 'game', NULL
FROM games g WHERE g.slug = 'the-red-dragon-inn';

INSERT INTO purchase_links (game_id, name, url, price, category, dimensions)
SELECT g.id, 'Amazon', 'https://www.amazon.com/Resistance-Avalon-Social-Deduction-Game/dp/B009SAAV0C', NULL, 'game', NULL
FROM games g WHERE g.slug = 'the-resistance-avalon';

INSERT INTO purchase_links (game_id, name, url, price, category, dimensions)
SELECT g.id, 'Amazon', 'https://www.amazon.com/Fantasy-Flight-Games-TI07-Twilight/dp/B074YPSTRP', NULL, 'game', NULL
FROM games g WHERE g.slug = 'twilight-imperium';

INSERT INTO purchase_links (game_id, name, url, price, category, dimensions)
SELECT g.id, 'Amazon', 'https://www.amazon.com/Stonemaier-Games-Viticulture-Essential-Board/dp/B018GRSLK4', NULL, 'game', NULL
FROM games g WHERE g.slug = 'viticulture';

INSERT INTO purchase_links (game_id, name, url, price, category, dimensions)
SELECT g.id, 'Amazon', 'https://www.amazon.com/CMON-GUG001-Zombicide-Base-Game/dp/B0092GHPSI', NULL, 'game', NULL
FROM games g WHERE g.slug = 'zombicide';

