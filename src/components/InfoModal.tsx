import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface InfoModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  content: string;
}

export const InfoModal = ({ open, onOpenChange, title, content }: InfoModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-primary">{title}</DialogTitle>
        </DialogHeader>
        <DialogDescription className="text-foreground leading-relaxed">
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
};
