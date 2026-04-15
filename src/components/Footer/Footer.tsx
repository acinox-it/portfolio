const Footer = () => {
  return (
    <footer className="py-8 border-t border-zinc-800">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <p className="text-text-muted text-sm">
          © {new Date().getFullYear()} Abd eldjalil Sahraoui — Tous droits réservés.
        </p>
      </div>
    </footer>
  );
};

export default Footer;