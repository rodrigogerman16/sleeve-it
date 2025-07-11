-- Insert cards data for each game
INSERT INTO cards (game_id, size, dimensions, quantity, sleeve_type, brand, model)
SELECT g.id, 'Estándar', '63.5 x 88 mm', 170, 'Estándar Premium', 'Dragon Shield', 'Classic'
FROM games g WHERE g.slug = 'wingspan';

INSERT INTO cards (game_id, size, dimensions, quantity, sleeve_type, brand, model)
SELECT g.id, 'Estándar', '63.5 x 88 mm', 458, 'Estándar Premium', 'Mayday Games', 'Premium'
FROM games g WHERE g.slug = 'gloomhaven';

INSERT INTO cards (game_id, size, dimensions, quantity, sleeve_type, brand, model)
SELECT g.id, 'Mini Europeo', '44 x 68 mm', 305, 'Mini Europeo', 'Swan PanAsia', 'Mini Euro'
FROM games g WHERE g.slug = 'gloomhaven';

INSERT INTO cards (game_id, size, dimensions, quantity, sleeve_type, brand, model)
SELECT g.id, 'Cuadrado', '70 x 70 mm', 100, 'Cuadrado Premium', 'Ultra Pro', 'Square'
FROM games g WHERE g.slug = 'azul';

INSERT INTO cards (game_id, size, dimensions, quantity, sleeve_type, brand, model)
SELECT g.id, 'Estándar', '63.5 x 88 mm', 208, 'Estándar Premium', 'Fantasy Flight Games', 'Standard'
FROM games g WHERE g.slug = 'terraforming-mars';

INSERT INTO cards (game_id, size, dimensions, quantity, sleeve_type, brand, model)
SELECT g.id, 'Estándar', '63.5 x 88 mm', 123, 'Estándar Premium', 'Sleeve Kings', 'Premium'
FROM games g WHERE g.slug = 'spirit-island';

INSERT INTO cards (game_id, size, dimensions, quantity, sleeve_type, brand, model)
SELECT g.id, 'Estándar', '63.5 x 88 mm', 500, 'Estándar Premium', 'Ultra Pro', 'Standard'
FROM games g WHERE g.slug = 'dominion';

INSERT INTO cards (game_id, size, dimensions, quantity, sleeve_type, brand, model)
SELECT g.id, 'Estándar', '63.5 x 88 mm', 149, 'Estándar Premium', 'Mayday Games', 'Premium'
FROM games g WHERE g.slug = '7-wonders';

INSERT INTO cards (game_id, size, dimensions, quantity, sleeve_type, brand, model)
SELECT g.id, 'Estándar', '63.5 x 88 mm', 110, 'Estándar Premium', 'Fantasy Flight Games', 'Standard'
FROM games g WHERE g.slug = 'pandemic';

INSERT INTO cards (game_id, size, dimensions, quantity, sleeve_type, brand, model)
SELECT g.id, 'Estándar', '63.5 x 88 mm', 254, 'Estándar Premium', 'Fantasy Flight Games', 'Standard'
FROM games g WHERE g.slug = 'arkham-horror-lcg';

INSERT INTO cards (game_id, size, dimensions, quantity, sleeve_type, brand, model)
SELECT g.id, 'Estándar', '63.5 x 88 mm', 252, 'Estándar Premium', 'Dragon Shield', 'Matte'
FROM games g WHERE g.slug = 'netrunner';

-- Continue with more games...
INSERT INTO cards (game_id, size, dimensions, quantity, sleeve_type, brand, model)
SELECT g.id, 'Estándar', '63.5 x 88 mm', 114, 'Estándar Premium', 'Ultra Pro', 'Standard'
FROM games g WHERE g.slug = 'race-for-the-galaxy';

INSERT INTO cards (game_id, size, dimensions, quantity, sleeve_type, brand, model)
SELECT g.id, 'Estándar', '63.5 x 88 mm', 90, 'Estándar Premium', 'Sleeve Kings', 'Premium'
FROM games g WHERE g.slug = 'splendor';

INSERT INTO cards (game_id, size, dimensions, quantity, sleeve_type, brand, model)
SELECT g.id, 'Estándar', '63.5 x 88 mm', 144, 'Estándar Premium', 'Mayday Games', 'Premium'
FROM games g WHERE g.slug = 'ticket-to-ride';

INSERT INTO cards (game_id, size, dimensions, quantity, sleeve_type, brand, model)
SELECT g.id, 'Estándar', '63.5 x 88 mm', 21, 'Estándar Premium', 'Ultra Pro', 'Standard'
FROM games g WHERE g.slug = 'love-letter';

INSERT INTO cards (game_id, size, dimensions, quantity, sleeve_type, brand, model)
SELECT g.id, 'Estándar', '63.5 x 88 mm', 108, 'Estándar Premium', 'Dragon Shield', 'Classic'
FROM games g WHERE g.slug = 'machi-koro';

INSERT INTO cards (game_id, size, dimensions, quantity, sleeve_type, brand, model)
SELECT g.id, 'Estándar', '63.5 x 88 mm', 66, 'Estándar Premium', 'Fantasy Flight Games', 'Standard'
FROM games g WHERE g.slug = 'king-of-tokyo';

INSERT INTO cards (game_id, size, dimensions, quantity, sleeve_type, brand, model)
SELECT g.id, 'Estándar', '63.5 x 88 mm', 84, 'Estándar Premium', 'Sleeve Kings', 'Premium'
FROM games g WHERE g.slug = 'citadels';

INSERT INTO cards (game_id, size, dimensions, quantity, sleeve_type, brand, model)
SELECT g.id, 'Estándar', '63.5 x 88 mm', 15, 'Estándar Premium', 'Ultra Pro', 'Standard'
FROM games g WHERE g.slug = 'coup';

INSERT INTO cards (game_id, size, dimensions, quantity, sleeve_type, brand, model)
SELECT g.id, 'Estándar', '63.5 x 88 mm', 108, 'Estándar Premium', 'Mayday Games', 'Premium'
FROM games g WHERE g.slug = 'sushi-go';

-- Add more popular games
INSERT INTO cards (game_id, size, dimensions, quantity, sleeve_type, brand, model)
SELECT g.id, 'Estándar', '63.5 x 88 mm', 75, 'Estándar Premium', 'Dragon Shield', 'Matte'
FROM games g WHERE g.slug = 'magic-the-gathering';

INSERT INTO cards (game_id, size, dimensions, quantity, sleeve_type, brand, model)
SELECT g.id, 'Estándar', '63.5 x 88 mm', 60, 'Estándar Premium', 'Ultra Pro', 'Pokémon'
FROM games g WHERE g.slug = 'pokemon-tcg';

INSERT INTO cards (game_id, size, dimensions, quantity, sleeve_type, brand, model)
SELECT g.id, 'Yu-Gi-Oh', '59 x 86 mm', 60, 'Yu-Gi-Oh Premium', 'Konami', 'Official'
FROM games g WHERE g.slug = 'yu-gi-oh';

INSERT INTO cards (game_id, size, dimensions, quantity, sleeve_type, brand, model)
SELECT g.id, 'Estándar', '63.5 x 88 mm', 200, 'Estándar Premium', 'Czech Games Edition', 'Official'
FROM games g WHERE g.slug = 'codenames';

INSERT INTO cards (game_id, size, dimensions, quantity, sleeve_type, brand, model)
SELECT g.id, 'Estándar', '63.5 x 88 mm', 128, 'Estándar Premium', 'Dragon Shield', 'Matte'
FROM games g WHERE g.slug = 'everdell';

INSERT INTO cards (game_id, size, dimensions, quantity, sleeve_type, brand, model)
SELECT g.id, 'Estándar', '63.5 x 88 mm', 80, 'Estándar Premium', 'Stonemaier Games', 'Premium'
FROM games g WHERE g.slug = 'scythe';

-- Add Mini European games
INSERT INTO cards (game_id, size, dimensions, quantity, sleeve_type, brand, model)
SELECT g.id, 'Mini Europeo', '44 x 68 mm', 360, 'Mini Europeo', 'Swan PanAsia', 'Mini Euro'
FROM games g WHERE g.slug = 'agricola';

INSERT INTO cards (game_id, size, dimensions, quantity, sleeve_type, brand, model)
SELECT g.id, 'Mini Europeo', '44 x 68 mm', 234, 'Mini Europeo', 'Swan PanAsia', 'Mini Euro'
FROM games g WHERE g.slug = 'through-the-ages';

INSERT INTO cards (game_id, size, dimensions, quantity, sleeve_type, brand, model)
SELECT g.id, 'Mini Europeo', '44 x 68 mm', 36, 'Mini Europeo', 'Swan PanAsia', 'Mini Euro'
FROM games g WHERE g.slug = 'terra-mystica';
