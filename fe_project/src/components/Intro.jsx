import React from 'react';

const Intro = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 overflow-hidden">
      <img
        src="https://media.istockphoto.com/id/1257567964/vector/horizontal-squared-paper-texture-for-school-notebook-page-in-cage-vector-background-in-cell.jpg?s=612x612&w=0&k=20&c=GMgBWj-cgut04CrXbIn_MB8SS0X5T2ZrfbEee3lsDVE="
        alt="Intro"
        className="w-full h-full object-cover" // Chiếm toàn bộ màn hình
      />
    </div>
  );
};

export default Intro;
