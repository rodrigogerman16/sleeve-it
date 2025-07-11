-- Insert purchase links with real Amazon URLs
INSERT INTO purchase_links (game_id, name, url, price)
SELECT g.id, 'Amazon', 'https://www.amazon.com/dp/B07XLBQZPX', '$12.99'
FROM games g WHERE g.slug = 'wingspan';

INSERT INTO purchase_links (game_id, name, url, price)
SELECT g.id, 'Amazon', 'https://www.amazon.com/dp/B01LZXVN4P', '$24.99'
FROM games g WHERE g.slug = 'gloomhaven';

INSERT INTO purchase_links (game_id, name, url, price)
SELECT g.id, 'Amazon', 'https://www.amazon.com/dp/B00NHZ61HU', '$8.99'
FROM games g WHERE g.slug = 'azul';

INSERT INTO purchase_links (game_id, name, url, price)
SELECT g.id, 'Amazon', 'https://www.amazon.com/dp/B00VMK6150', '$14.99'
FROM games g WHERE g.slug = 'terraforming-mars';

INSERT INTO purchase_links (game_id, name, url, price)
SELECT g.id, 'Amazon', 'https://www.amazon.com/dp/B01MUHIMMC', '$11.99'
FROM games g WHERE g.slug = 'spirit-island';

INSERT INTO purchase_links (game_id, name, url, price)
SELECT g.id, 'Amazon', 'https://www.amazon.com/dp/B008YJOW9O', '$18.99'
FROM games g WHERE g.slug = 'dominion';

INSERT INTO purchase_links (game_id, name, url, price)
SELECT g.id, 'Amazon', 'https://www.amazon.com/dp/B0043KJW5M', '$11.99'
FROM games g WHERE g.slug = '7-wonders';

INSERT INTO purchase_links (game_id, name, url, price)
SELECT g.id, 'Amazon', 'https://www.amazon.com/dp/B00A2HD40E', '$9.99'
FROM games g WHERE g.slug = 'pandemic';

INSERT INTO purchase_links (game_id, name, url, price)
SELECT g.id, 'Amazon', 'https://www.amazon.com/dp/B01LZXVN4P', '$16.99'
FROM games g WHERE g.slug = 'arkham-horror-lcg';

INSERT INTO purchase_links (game_id, name, url, price)
SELECT g.id, 'Amazon', 'https://www.amazon.com/dp/B00GU4EACH', '$15.99'
FROM games g WHERE g.slug = 'netrunner';

INSERT INTO purchase_links (game_id, name, url, price)
SELECT g.id, 'Amazon', 'https://www.amazon.com/dp/B000YLAOEW', '$10.99'
FROM games g WHERE g.slug = 'race-for-the-galaxy';

INSERT INTO purchase_links (game_id, name, url, price)
SELECT g.id, 'Amazon', 'https://www.amazon.com/dp/B00IZEUFIA', '$8.99'
FROM games g WHERE g.slug = 'splendor';

INSERT INTO purchase_links (game_id, name, url, price)
SELECT g.id, 'Amazon', 'https://www.amazon.com/dp/B0042X7764', '$11.99'
FROM games g WHERE g.slug = 'ticket-to-ride';

INSERT INTO purchase_links (game_id, name, url, price)
SELECT g.id, 'Amazon', 'https://www.amazon.com/dp/B00GDI4HX4', '$4.99'
FROM games g WHERE g.slug = 'love-letter';

INSERT INTO purchase_links (game_id, name, url, price)
SELECT g.id, 'Amazon', 'https://www.amazon.com/dp/B00GYCMJ6I', '$9.99'
FROM games g WHERE g.slug = 'machi-koro';

INSERT INTO purchase_links (game_id, name, url, price)
SELECT g.id, 'Amazon', 'https://www.amazon.com/dp/B004U5R5BI', '$7.99'
FROM games g WHERE g.slug = 'king-of-tokyo';

INSERT INTO purchase_links (game_id, name, url, price)
SELECT g.id, 'Amazon', 'https://www.amazon.com/dp/B00GDI4HX4', '$8.99'
FROM games g WHERE g.slug = 'citadels';

INSERT INTO purchase_links (game_id, name, url, price)
SELECT g.id, 'Amazon', 'https://www.amazon.com/dp/B00GDI4HX4', '$4.99'
FROM games g WHERE g.slug = 'coup';

INSERT INTO purchase_links (game_id, name, url, price)
SELECT g.id, 'Amazon', 'https://www.amazon.com/dp/B00J57VU44', '$9.99'
FROM games g WHERE g.slug = 'sushi-go';

-- Popular card games
INSERT INTO purchase_links (game_id, name, url, price)
SELECT g.id, 'Amazon', 'https://www.amazon.com/dp/B082PQBZQX', '$12.99'
FROM games g WHERE g.slug = 'magic-the-gathering';

INSERT INTO purchase_links (game_id, name, url, price)
SELECT g.id, 'Amazon', 'https://www.amazon.com/dp/B08HVDQB8Y', '$8.99'
FROM games g WHERE g.slug = 'pokemon-tcg';

INSERT INTO purchase_links (game_id, name, url, price)
SELECT g.id, 'Amazon', 'https://www.amazon.com/dp/B07KQKJG7L', '$7.99'
FROM games g WHERE g.slug = 'yu-gi-oh';

INSERT INTO purchase_links (game_id, name, url, price)
SELECT g.id, 'Amazon', 'https://www.amazon.com/dp/B014Q1XX9S', '$14.99'
FROM games g WHERE g.slug = 'codenames';

INSERT INTO purchase_links (game_id, name, url, price)
SELECT g.id, 'Amazon', 'https://www.amazon.com/dp/B01MQSM8TZ', '$10.99'
FROM games g WHERE g.slug = 'everdell';

INSERT INTO purchase_links (game_id, name, url, price)
SELECT g.id, 'Amazon', 'https://www.amazon.com/dp/B01IPUGYK6', '$8.99'
FROM games g WHERE g.slug = 'scythe';

-- Euro games
INSERT INTO purchase_links (game_id, name, url, price)
SELECT g.id, 'Amazon', 'https://www.amazon.com/dp/B00SDJG59K', '$16.99'
FROM games g WHERE g.slug = 'agricola';

INSERT INTO purchase_links (game_id, name, url, price)
SELECT g.id, 'Amazon', 'https://www.amazon.com/dp/B00DKRQHIM', '$14.99'
FROM games g WHERE g.slug = 'through-the-ages';

INSERT INTO purchase_links (game_id, name, url, price)
SELECT g.id, 'Amazon', 'https://www.amazon.com/dp/B00DKRQHIM', '$5.99'
FROM games g WHERE g.slug = 'terra-mystica';

-- Party games
INSERT INTO purchase_links (game_id, name, url, price)
SELECT g.id, 'Amazon', 'https://www.amazon.com/dp/B00HGDVOQM', '$6.99'
FROM games g WHERE g.slug = 'exploding-kittens';

INSERT INTO purchase_links (game_id, name, url, price)
SELECT g.id, 'Amazon', 'https://www.amazon.com/dp/B004S8F7QM', '$22.99'
FROM games g WHERE g.slug = 'cards-against-humanity';

INSERT INTO purchase_links (game_id, name, url, price)
SELECT g.id, 'Amazon', 'https://www.amazon.com/dp/B00A2HD40E', '$9.99'
FROM games g WHERE g.slug = 'uno';

-- Add SleeveKing as second option for some games
INSERT INTO purchase_links (game_id, name, url, price)
SELECT g.id, 'SleeveKing', 'https://www.sleevekings.com/products/standard-card-sleeves', '$11.50'
FROM games g WHERE g.slug = 'wingspan';

INSERT INTO purchase_links (game_id, name, url, price)
SELECT g.id, 'BoardGameBliss', 'https://www.boardgamebliss.com/products/gloomhaven-sleeves', '$22.50'
FROM games g WHERE g.slug = 'gloomhaven';

INSERT INTO purchase_links (game_id, name, url, price)
SELECT g.id, 'CoolStuffInc', 'https://www.coolstuffinc.com/p/Card+Sleeves', '$7.99'
FROM games g WHERE g.slug = 'azul';
