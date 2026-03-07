const Footer = () => {
  return (
    <footer className="bg-foreground text-background/80 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <p className="font-display text-2xl text-background">
              Artesia Bookkeeping
            </p>
            <p className="text-sm text-background/50 mt-1">Bookkeeping for the modern small business.</p>
          </div>
          <div className="flex items-center gap-8 text-sm">
            <a href="#services" className="hover:text-background transition-colors">Services</a>
            <a href="#pricing" className="hover:text-background transition-colors">Pricing</a>
            <a href="#about" className="hover:text-background transition-colors">About</a>
            <a href="#contact" className="hover:text-background transition-colors">Contact</a>
          </div>
        </div>
        <div className="border-t border-background/10 mt-8 pt-8 text-center text-sm text-background/40">
          © {new Date().getFullYear()} Artesia Bookkeeping. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
