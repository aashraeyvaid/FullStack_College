import React from 'react';

const LibraryCard = ({ book, onRemove }) => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-md border border-slate-100 flex justify-between items-center hover:shadow-lg transition-shadow">
      <div>
        <h3 className="text-xl font-bold text-slate-800">{book.title}</h3>
        <p className="text-indigo-600 italic">by {book.author}</p>
        <span className="inline-block mt-2 px-3 py-1 bg-slate-100 text-slate-500 text-xs font-bold rounded-full uppercase">
          {book.category}
        </span>
      </div>
      <button 
        onClick={() => onRemove(book.id)}
        className="p-3 bg-rose-50 text-rose-500 rounded-xl hover:bg-rose-500 hover:text-white transition-all active:scale-90"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
        </svg>
      </button>
    </div>
  );
};

export default LibraryCard;