import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'

type DemoModalProps = {
  isOpen: boolean
  onClose: () => void
}

export default function DemoModal({ isOpen, onClose }: DemoModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[800px]">
        <DialogHeader>
          <DialogTitle>ChatWize Demo</DialogTitle>
        </DialogHeader>
        <div className="aspect-video">
          {/* Replace with actual demo video */}
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ" // Placeholder
            title="Demo Video"
            allowFullScreen
          />
        </div>
      </DialogContent>
    </Dialog>
  )
}
