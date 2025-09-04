"use client";

export default function Home() {
  return (
    <div className="max-w-xl mx-auto p-8 text-center">
      <h1 className="text-3xl font-bold mb-4">Welcome to School Project</h1>
      <p className="mb-6">Use the navigation above to add a school or view all schools.</p>
      <div className="flex justify-center gap-4">
        <a href="/addSchool" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Add School</a>
        <a href="/showSchools" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Show Schools</a>
      </div>
    </div>
  );
}
