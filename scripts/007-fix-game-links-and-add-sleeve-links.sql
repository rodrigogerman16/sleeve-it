-- Every existing purchase link was checked by loading it in a real browser.
-- Result: only 10 of 31 games had a correct, working Amazon link.
--   - 16 were dead (404)
--   - 5 pointed to a real but wrong product (duplicate/copy-pasted ASINs
--     across unrelated games)
--   - the 3 existing "second" links (meant as sleeve links) were also
--     broken (2x 404) or landed on a generic category page, not a product
-- This migration fixes all of it and adds a proper sleeve-purchase link
-- per game, based on each game's actual card dimensions. Every URL below
-- was verified to load and match the expected product before being added.

-- 1. Distinguish "buy the game" links from "buy sleeves" links.
ALTER TABLE purchase_links ADD COLUMN category TEXT NOT NULL DEFAULT 'game';
ALTER TABLE purchase_links ADD COLUMN dimensions TEXT;

-- 2. Remove the 3 unusable placeholder "sleeve" links.
DELETE FROM purchase_links WHERE id IN (
  '38108e05-1e86-4b62-a2e1-2822d5e38f10', -- CoolStuffInc (Azul) - generic category page, not a product
  'f16064b1-23c3-4717-8782-ec9a5eb591aa', -- BoardGameBliss (Gloomhaven) - 404
  '5bf441e8-e425-4029-9b4e-e49c5b1fb5ea'  -- SleeveKing (Wingspan) - 404
);

-- 3. Fix the 5 links that pointed to the wrong product.
UPDATE purchase_links SET url = 'https://www.amazon.com/29369-Agricola-Board-Game-Standard/dp/B07JZFN8WS', price = NULL WHERE id = '6ff3964c-e8da-4ed6-9ffe-e8234a99accc'; -- Agricola (was: Risk Star Wars Edition)
UPDATE purchase_links SET url = 'https://www.amazon.com/Cooperative-Games-Playtime-Fantasy-Flight/dp/B0999D3P8S', price = NULL WHERE id = '7f37580a-ee8d-4ac8-81bf-c3e152d0b274'; -- Arkham Horror: The Card Game (was: Gloomhaven)
UPDATE purchase_links SET url = 'https://www.amazon.com/Mattel-Original-Playing-Card-Game/dp/B00GTJSGXE', price = NULL WHERE id = '57dd2b3e-3eb6-47da-aa6c-c1a274e28f7e'; -- UNO (was: Pandemic)
UPDATE purchase_links SET url = 'https://www.amazon.com/Citadels-Board-Game-City-Building-Characters/dp/B01MDLM6I2', price = NULL WHERE id = 'e8bd4d6c-9815-473b-9960-d9249e29de84'; -- Citadels (was: Coup)
UPDATE purchase_links SET url = 'https://www.amazon.com/Alderac-Entertainment-Group-Letter-Boxed/dp/B00J1JLT8I', price = NULL WHERE id = '4df6b1df-b38d-49e7-89d5-1887cd9c3432'; -- Love Letter (was: Coup)

-- 4. Fix the 16 dead (404) links.
UPDATE purchase_links SET url = 'https://www.amazon.com/Android-Netrunner-LCG-Revised-Core/dp/B076TV5SFH', price = NULL WHERE id = '8943a1bf-8a72-492a-a641-7216065eb078'; -- Android: Netrunner
UPDATE purchase_links SET url = 'https://www.amazon.com/Plan-B-Games-Azul/dp/B07C3M44TC', price = NULL WHERE id = 'e48d22e7-68fd-4e48-8643-d03efc09a81c'; -- Azul
UPDATE purchase_links SET url = 'https://www.amazon.com/Rio-Grande-Games-Dominion-2nd/dp/B01LYLIS2U', price = NULL WHERE id = '66fc0aa6-aa0a-4941-b9ce-c056d3eedb01'; -- Dominion
UPDATE purchase_links SET url = 'https://www.amazon.com/Starling-Games-Everdell-Standard-Edition/dp/B09ZWQTTNR', price = NULL WHERE id = '53fd3ac5-532c-46ea-91cd-cd33ae2e6eed'; -- Everdell
UPDATE purchase_links SET url = 'https://www.amazon.com/Exploding-Kittens-LLC-EKG-ORG1-1-Card/dp/B010TQY7A8', price = NULL WHERE id = '373b641e-9252-4509-8e64-76f526061ede'; -- Exploding Kittens
UPDATE purchase_links SET url = 'https://www.amazon.com/IELLO-King-Tokyo-Board-Game/dp/B01F46RPS4', price = NULL WHERE id = 'e47a58d8-d2b3-49a2-9d64-b746498aecba'; -- King of Tokyo
UPDATE purchase_links SET url = 'https://www.amazon.com/Pandasaurus-Games-Machi-Koro-Anniversary/dp/B07HKZ4BH6', price = NULL WHERE id = '3b8afe1c-4525-42fa-8f42-73417885fec5'; -- Machi Koro
UPDATE purchase_links SET url = 'https://www.amazon.com/Magic-Gathering-Foundations-Starter-Collection/dp/B0D9KYHN4D', price = NULL WHERE id = '283a68df-24bc-4596-954f-6d190d7fce10'; -- Magic: The Gathering
UPDATE purchase_links SET url = 'https://www.amazon.com/POKEMON-TCG-BATTLE-ACADEMY-2024/dp/B0D1R6CT83', price = NULL WHERE id = '86efc27d-b12d-416e-8728-8fde94ad9c9f'; -- Pokémon Trading Card Game
UPDATE purchase_links SET url = 'https://www.amazon.com/Greater-Than-Games-Spirit-Island/dp/B01MUHP51S', price = NULL WHERE id = '5a2fb335-1638-413e-9b27-aeb0e9bef6c7'; -- Spirit Island
UPDATE purchase_links SET url = 'https://www.amazon.com/Z-Man-Games-ZM7240-Terra-Mystica/dp/B00APPE4HK', price = NULL WHERE id = 'c8a88622-b7f4-411f-b728-1adcd89e3d44'; -- Terra Mystica
UPDATE purchase_links SET url = 'https://www.amazon.com/Indie-Boards-Terraforming-Multicolor-6005SG/dp/B01GSYA4K2', price = NULL WHERE id = 'd8218c34-efac-4b6a-b28a-fa18612f6905'; -- Terraforming Mars
UPDATE purchase_links SET url = 'https://www.amazon.com/Days-Wonder-Ticket-Ride-Board/dp/B0CDVHMP9S', price = NULL WHERE id = 'f70494fe-5154-4d1c-92a4-61db8dbbdd26'; -- Ticket to Ride
UPDATE purchase_links SET url = 'https://www.amazon.com/Stonemaier-Games-STM910-Wingspan-Multi-colored/dp/B07YQ641NQ', price = NULL WHERE id = 'c02339ef-4f28-480a-a4b7-6fb037382168'; -- Wingspan
UPDATE purchase_links SET url = 'https://www.amazon.com/YuGiOh-Yugi-Card-Starter-Deck/dp/B000W48IIU', price = NULL WHERE id = '0905de28-f8eb-4099-ad01-cbd2d7fbe145'; -- Yu-Gi-Oh!
UPDATE purchase_links SET url = 'https://www.amazon.com/Czech-Games-Through-months-Multi-colored/dp/B071CZT9D9', price = NULL WHERE id = 'e503bdff-7056-475a-abd0-06691cd8a7dd'; -- Through the Ages

-- 5. Add a verified sleeve-purchase link for every (game, card dimension)
--    pair. Gloomhaven has cards in two different sizes, so it gets two
--    sleeve links automatically via the join.
INSERT INTO purchase_links (game_id, name, url, price, category, dimensions)
SELECT DISTINCT c.game_id, 'Fundas Gamegenic Prime (63.5 x 88 mm)',
  'https://www.amazon.com/Sleeves-Gamegenic-Prime-Standard-Card/dp/B084TMFSG8', NULL, 'sleeve', '63.5 x 88 mm'
FROM cards c WHERE c.dimensions = '63.5 x 88 mm';

INSERT INTO purchase_links (game_id, name, url, price, category, dimensions)
SELECT DISTINCT c.game_id, 'Fundas Sleeve Kings Mini Europeo (44 x 68 mm)',
  'https://www.amazon.com/Mini-European-Sleeves-44x68mm-Microns/dp/B09PHVS2DG', NULL, 'sleeve', '44 x 68 mm'
FROM cards c WHERE c.dimensions = '44 x 68 mm';

INSERT INTO purchase_links (game_id, name, url, price, category, dimensions)
SELECT DISTINCT c.game_id, 'Fundas Sleeve Kings Cuadrado (70 x 70 mm)',
  'https://www.amazon.com/Sleeve-Kings-Square-Sleeves-70x70mm/dp/B07NPR83N1', NULL, 'sleeve', '70 x 70 mm'
FROM cards c WHERE c.dimensions = '70 x 70 mm';

INSERT INTO purchase_links (game_id, name, url, price, category, dimensions)
SELECT DISTINCT c.game_id, 'Fundas Mayday Games Estándar USA (56 x 87 mm)',
  'https://www.amazon.com/Mayday-Games-Boared-Sleeves-Purple/dp/B003Y7O3KY', NULL, 'sleeve', '56 x 87 mm'
FROM cards c WHERE c.dimensions = '56 x 87 mm';

INSERT INTO purchase_links (game_id, name, url, price, category, dimensions)
SELECT DISTINCT c.game_id, 'Fundas DeElf Yu-Gi-Oh (59 x 86 mm)',
  'https://www.amazon.com/1000ct-Clear-Card-Sleeves-Yu-Gi-Oh/dp/B07KBXMJJX', NULL, 'sleeve', '59 x 86 mm'
FROM cards c WHERE c.dimensions = '59 x 86 mm';
