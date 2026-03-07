import { ArrowRight } from "lucide-react";

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
    <div className="container mx-auto flex items-center justify-between py-4 px-6">
      <a href="#" className="font-display text-2xl text-foreground">
        Artesia Bookkeeping
      </a>
      <div className="hidden md:flex items-center gap-8 font-body text-sm font-medium text-muted-foreground">
        <a href="#services" className="hover:text-foreground transition-colors">Services</a>
        <a href="#pricing" className="hover:text-foreground transition-colors">Pricing</a>
        <a href="#about" className="hover:text-foreground transition-colors">About</a>
        <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
      </div>
      <a
        href="#contact"
        className="hidden md:inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
      >
        Get Started <ArrowRight className="w-4 h-4" />
      </a>
    </div>
  </nav>
);

export default Navbar;
