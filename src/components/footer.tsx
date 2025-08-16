import Image from "next/image";
import logo1 from "@/app/arf.png";

export function Footer() {
  return (
    <footer className="border-t border-primary/20 py-6 md:px-8 bg-background">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        
        {/* Left side (logo + name) */}
        <div className="flex flex-col items-center gap-2 md:flex-row md:gap-2">
          <Image
            src={logo1}
            alt="Arfstone Logo"
            width={34}
            height={34}
            className=" h-7 w-7 hidden md:inline-block"
          />
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            Arf Stone
          </p>
        </div>
        
        {/* Right side (copyright) */}
        <p className="text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Arfstone. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
