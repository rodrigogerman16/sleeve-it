"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4">
      <div className="text-center max-w-sm">
        <div className="text-4xl mb-4">⚠️</div>
        <h1 className="text-white text-lg font-bold mb-2">Algo salió mal</h1>
        <p className="text-gray-400 text-sm mb-6">
          No pudimos cargar los datos. Puede ser un problema temporal de conexión con el servidor.
        </p>
        <Button onClick={() => reset()} className="bg-purple-600 hover:bg-purple-700 text-white">
          Reintentar
        </Button>
      </div>
    </div>
  )
}
