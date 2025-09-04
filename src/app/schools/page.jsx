"use client";
import { useState } from "react";
import AddSchool from "../../components/AddSchool";
import ShowSchools from "../../components/ShowSchools";
import Link from "next/link";

export default function SchoolsPage() {
  

  return (
    <div className="max-w-2xl mx-auto p-4">
      <div className="flex gap-4 mb-6 justify-center">
        <Link href="/addSchool"
          className={`px-4 py-2 rounded font-semibold ${tab === "add" ? "bg-blue-600 text-white" : "bg-gray-200"}`}
          
        >
          Add School
        </Link>
        <Link href="/showSchools"
          className={`px-4 py-2 rounded font-semibold ${tab === "show" ? "bg-blue-600 text-white" : "bg-gray-200"}`}
         
        >
          Show Schools
        </Link>
      </div>

    </div>
  );
}
