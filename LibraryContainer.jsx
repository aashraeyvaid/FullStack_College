import React, { useState } from 'react';
import LibraryCard from './LibraryCard';

function LibraryContainer() {
  const [books, setBooks] = useState([
    { id: 1, title: "Deep Work", author: "Cal Newport", category: "Productivity" },
    { id: 2, title: "1984", author: "George Orwell", category: "Dystopian" }
  ]);
  const [search, setSearch] = useState("");
  const [formData, setFormData] = useState({ title: '', author: '' });

  const addBook = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.author) return;
    setBooks([...books, { ...formData, id: Date.now(), category: "New" }]);
    setFormData({ title: '', author: '' });
  };

  const filteredBooks = books.filter(b => b.title.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="min-h-screen bg-slate-50 p-8">
      <div className="max-w-2xl mx-auto space-y-8">
        <h1 className="text-3xl font-black text-center text-slate-900">Library Manager</h1>
        
        {/* Form */}
        <form onSubmit={addBook} className="bg-white p-6 rounded-3xl shadow-lg flex gap-4">
          <input className="flex-1 p-3 border rounded-xl" placeholder="Title" value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})} />
          <input className="flex-1 p-3 border rounded-xl" placeholder="Author" value={formData.author} onChange={e => setFormData({...formData, author: e.target.value})} />
          <button className="bg-indigo-600 text-white px-6 rounded-xl font-bold">Add</button>
        </form>

        {/* Search */}
        <input className="w-full p-4 rounded-2xl border shadow-sm" placeholder="🔍 Search books..." onChange={e => setSearch(e.target.value)} />

        {/* List */}
        <div className="space-y-4">
          {filteredBooks.map(book => (
            <LibraryCard key={book.id} book={book} onRemove={id => setBooks(books.filter(b => b.id !== id))} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default LibraryContainer;