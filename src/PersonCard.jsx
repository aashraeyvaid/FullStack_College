import React from 'react';

const PersonCard = ({ person }) => {
  const isTeacher = person.role === "Teacher";
  
  return (
    <div className="bg-white p-6 rounded-3xl shadow-lg border border-slate-100 w-80 hover:shadow-2xl transition-all duration-300">
      <div className="flex items-center gap-4 mb-5">
        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl font-bold ${
          isTeacher ? 'bg-indigo-50 text-indigo-600' : 'bg-emerald-50 text-emerald-600'
        }`}>
          {person.name.charAt(0)}
        </div>
        <div>
          <h3 className="text-xl font-bold text-slate-800">{person.name}</h3>
          <span className={`text-[10px] font-black uppercase tracking-widest px-2 py-1 rounded-lg ${
            isTeacher ? 'bg-indigo-600 text-white' : 'bg-emerald-500 text-white'
          }`}>
            {person.role}
          </span>
        </div>
      </div>

      <p className="text-slate-600 italic mb-6 leading-relaxed">
        "{person.getInfo()}"
      </p>

      <div className="pt-4 border-t border-slate-50 flex justify-between items-end">
        <div>
          <p className="text-slate-400 text-[10px] font-bold uppercase">Age</p>
          <p className="text-slate-900 font-bold">{person.age}</p>
        </div>
        <div className="text-right">
          <p className="text-slate-400 text-[10px] font-bold uppercase">
            {isTeacher ? 'Employee ID' : 'Student ID'}
          </p>
          <p className="text-indigo-600 font-black">
            {isTeacher ? person.employeeId : person.studentId}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PersonCard;