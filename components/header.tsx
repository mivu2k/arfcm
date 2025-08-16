
import Link from 'next/link';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="mr-4 flex items-center">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <img src='/public/assets/arf.png' className="h-6 w-6 text-primary" />
            <span className="font-bold sm:inline-block font-headline"> Arfstone</span>
          </Link>
          <nav className="hidden items-center gap-6 text-sm md:flex">
            <Link
              href="#about"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              About
            </Link>
            <Link
              href="#collection"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              Collection
            </Link>
            <Link
              href="#inquiry"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              Inquiry
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
