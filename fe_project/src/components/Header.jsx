import React, { useState } from 'react';
import { FaRegStickyNote } from 'react-icons/fa'; // Import icon ghi chú
import ListNote from './ListNote';
const Header = () => {
  const [user, setUser] = useState(null);

  const handleLogin = () => {
    setUser({ name: 'John Doe' });
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <header className="bg-gray-200">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="flex items-center">
          <FaRegStickyNote className="mr-2 text-2xl" /> {/* Tăng kích thước icon */}
          <h1 className="text-2xl font-bold">Personal Notebook</h1> {/* Tăng kích thước dòng chữ */}
        </div>
        <nav className="flex items-center ml-auto">
          {user ? (
            <div className="flex items-center">
              <span className="mr-3 text-lg">Chào, {user.name}</span> {/* Tăng kích thước chữ chào */}
              <button className="bg-red-500 text-white px-4 py-2 rounded" onClick={handleLogout}>
                Logout
              </button>
            </div>
          ) : (
            <div className="flex space-x-2">
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded flex-grow text-lg" // Tăng kích thước nút Đăng nhập
                onClick={handleLogin}
              >
                Đăng nhập
              </button>
              <button className="bg-green-500 text-white px-4 py-2 rounded flex-grow text-lg"> {/* Tăng kích thước nút Đăng ký */}
                Đăng ký
              </button>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
