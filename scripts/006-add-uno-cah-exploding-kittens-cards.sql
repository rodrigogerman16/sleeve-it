-- Adds card/sleeve data for the 3 games that only had a purchase link
-- (UNO, Cards Against Humanity, Exploding Kittens). Specs sourced from
-- official card counts and sleeveyourgames.com / manufacturer sleeve
-- size guides, not guessed.

-- UNO: 108 cards, 56 x 87mm (narrower than standard poker/bridge size —
-- do not use 63.5mm-wide "Estándar" sleeves, they'll be loose).
INSERT INTO cards (game_id, size, dimensions, quantity, sleeve_type, brand, model)
SELECT g.id, 'Estándar USA', '56 x 87 mm', 108, 'Estándar USA Premium', 'Mayday Games', 'Standard USA'
FROM games g WHERE g.slug = 'uno';

-- Cards Against Humanity: 550 cards (base set), standard 63.5 x 88mm size.
INSERT INTO cards (game_id, size, dimensions, quantity, sleeve_type, brand, model)
SELECT g.id, 'Estándar', '63.5 x 88 mm', 550, 'Estándar Premium', 'Ultra Pro', 'Standard'
FROM games g WHERE g.slug = 'cards-against-humanity';

-- Exploding Kittens: 56 cards (Original edition), standard 63 x 88mm size.
INSERT INTO cards (game_id, size, dimensions, quantity, sleeve_type, brand, model)
SELECT g.id, 'Estándar', '63.5 x 88 mm', 56, 'Estándar Premium', 'Mayday Games', 'Premium'
FROM games g WHERE g.slug = 'exploding-kittens';
