import React from 'react';
import Navbar from './Navbar';

function Layout({ children }) {
  return (
    <div className="min-h-screen bg-flower-cream">
      <Navbar />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {children}
      </main>
      <footer className="bg-flower-dark text-flower-cream py-8 mt-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-poppins">&copy; 2024 FloraBloom. All rights reserved.</p>
          <p className="text-flower-pink/80 text-sm mt-2">Celebrating the beauty of nature.</p>
        </div>
      </footer>
    </div>
  );
}

export default Layout;
