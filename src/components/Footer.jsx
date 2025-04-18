const Footer = () => {
  return (
    <footer className="bg-dark p-4">
      <div className="text-left custom-margin">
        <span className="text-light-grey">Italia | English (UK)</span>
      </div>
      <div className="text-left mt-2">
        <small>
          <span className="text-light-grey">© 2024 Apple Inc. Tutti i diritti riservati.</span>
        </small>
      </div>
      <div className="text-left mt-2">
        <a href="/terms" className="text-light-grey text-decoration-none">Condizioni dei servizi internet</a> | 
        <a href="/privacy" className="text-light-grey text-decoration-none"> Apple Music e privacy</a> | 
        <a href="/privacy" className="text-light-grey text-decoration-none"> Avviso sui cookie </a>
      </div>
      <div className="text-left mt-2">
        <a href="/support" className="text-light-grey text-decoration-none">Supporto</a> | 
        <a href="/feedback" className="text-light-grey text-decoration-none"> Feedback </a>
      </div>
    </footer>
  );
};

export default Footer;
