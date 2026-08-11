import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4">
      <div className="text-center max-w-sm">
        <div className="text-4xl mb-4">🔍</div>
        <h1 className="text-white text-lg font-bold mb-2">Página no encontrada</h1>
        <p className="text-gray-400 text-sm mb-6">No encontramos el juego o la página que buscas.</p>
        <Link href="/">
          <Button className="bg-purple-600 hover:bg-purple-700 text-white">Volver al inicio</Button>
        </Link>
      </div>
    </div>
  )
}
