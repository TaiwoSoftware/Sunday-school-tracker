'use client'
export default function FormerStudent({handleClick, text}) {
  return (
    <div className="flex items-center  gap-4">
      <p className="text-sm">Are you a student</p>
      <button onClick={handleClick} className="bg-blue-500 text-white text-sm px-5 py-1 rounded-lg">
        {text}
      </button>
    </div>
  );
}
