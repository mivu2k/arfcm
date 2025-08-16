import { Gem } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-primary/20 py-6 md:px-8 bg-background">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <Gem className="hidden h-6 w-6 md:inline-block text-primary" />
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            Built by IS and Stone. The content and images on this site are for demonstration purposes.
          </p>
        </div>
        <p className="text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Arfstone. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
