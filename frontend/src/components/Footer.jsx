import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-32">
      <div className="container mx-auto text-center">
        <p className="text-lg font-semibold mb-2">Desenvolvedores</p>
        <div className="mt-4">
          <a href="https://github.com/Kur-0" className="text-gray-400 hover:text-gray-300 mx-2">Chloe Sonvesso</a>
          <a href="https://github.com/ArthurPedreca/" className="text-gray-400 hover:text-gray-300 mx-2">Arthur Pedreca</a>
          <a href="https://github.com/lecrudo-exe" className="text-gray-400 hover:text-gray-300 mx-2">Pedro Gomes</a>
        </div>
        <p className="mt-4 text-sm">© {new Date().getFullYear()} Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
