"use client"

import { Dialog, DialogContent, DialogOverlay, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { X } from "lucide-react"

interface VideoModalProps {
  isOpen: boolean
  onClose: () => void
}

export function VideoModal({ isOpen, onClose }: VideoModalProps) {
  // Obtener el enlace de YouTube desde las variables de entorno
  const youtubeUrl = process.env.NEXT_PUBLIC_YOUTUBE_HERO_VIDEO || "https://www.youtube.com/embed/V0CvmK-MaOw"
  
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogOverlay className="bg-black/30 backdrop-blur-sm" />
      <DialogContent className="sm:max-w-[800px] bg-white/95 p-0 rounded-xl border shadow-lg overflow-hidden backdrop-blur-sm">
        <DialogTitle className="sr-only">Video promocional del producto</DialogTitle>
        <DialogDescription className="sr-only">Video demostrativo de las características del producto</DialogDescription>
        <div className="relative">
          <button
            onClick={onClose}
            className="absolute right-2 top-2 z-10 rounded-full bg-black/20 p-2 hover:bg-black/30 transition-colors"
          >
            <X className="h-4 w-4 text-white" />
            <span className="sr-only">Close</span>
          </button>
          <div className="aspect-video w-full">
            <iframe
              width="100%"
              height="100%"
              src={youtubeUrl}
              title="Demostración de FLUXO"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg"
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
