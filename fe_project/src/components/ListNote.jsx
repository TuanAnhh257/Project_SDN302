import React from 'react';

// Thêm trường ưu tiên vào ghi chú
const notes = [
  { id: 1, title: 'Ghi chú 1', content: 'Nội dung của ghi chú 1', createdAt: '2024-10-15', priority: 2 },
  { id: 2, title: 'Ghi chú 2', content: 'Nội dung của ghi chú 2', createdAt: '2024-10-14', priority: 1 },
  { id: 3, title: 'Ghi chú 3', content: 'Nội dung của ghi chú 3', createdAt: '2024-10-13', priority: 3 },
];

// Sắp xếp danh sách ghi chú theo mức độ ưu tiên
const sortedNotes = notes.sort((a, b) => a.priority - b.priority);

const ListNote = () => {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Danh sách Ghi chú</h2>
      <div className="grid grid-cols-1 gap-4">
        {sortedNotes.map((note) => (
          <div key={note.id} className="bg-white shadow-md rounded-lg p-4 flex flex-col">
            <h3 className="text-xl font-semibold">{note.title}</h3>
            <p className="text-gray-700">{note.content}</p>
            <div className="flex justify-between items-center mt-2"> {/* Căn lề cho thời gian và ưu tiên */}
              <span className="text-gray-500 text-sm">Tạo lúc: {note.createdAt}</span>
              <span className="text-yellow-500 font-bold">Ưu tiên: {note.priority}</span> {/* Hiển thị mức độ ưu tiên */}
            </div>
            <div className="mt-4 flex justify-between">
              <button className="bg-blue-500 text-white px-4 py-2 rounded">Chỉnh sửa</button>
              <button className="bg-red-500 text-white px-4 py-2 rounded">Xóa</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListNote;
