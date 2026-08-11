import { GameList } from "@/components/game-list"
import { getAllGames } from "@/lib/games-service"

// Game/sleeve data changes infrequently; revalidate hourly instead of
// serving a permanent build-time snapshot or refetching on every request.
export const revalidate = 3600

export default async function HomePage() {
  const games = await getAllGames()

  return <GameList initialGames={games} />
}
