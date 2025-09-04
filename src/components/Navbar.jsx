"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-blue-600 text-white px-6 py-3 flex justify-between items-center">
      {/* Left side: Logo */}
      <div className="text-xl font-bold">MyLogo</div>

      {/* Desktop Tabs */}
      <div className="hidden md:flex gap-6">
        <Link href="/addSchool" className="hover:underline">Add School</Link>
        <Link href="/showSchools" className="hover:underline">Show Schools</Link>
      </div>

      {/* Mobile menu toggle */}
      <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </button>

      {/* Mobile dropdown */}
      {isOpen && (
        <div className="absolute top-14 right-6 bg-blue-700 p-4 rounded shadow-lg flex flex-col gap-3 md:hidden">
          <Link href="/addSchool" className="hover:underline">Add School</Link>
          <Link href="/showSchools" className="hover:underline">Show Schools</Link>
        </div>
      )}
    </nav>
  );
}
