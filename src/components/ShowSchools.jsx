"use client";
import { useEffect, useState } from "react";

export default function ShowSchools() {
  const [schools, setSchools] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/getSchools")
      .then((res) => res.json())
      .then((data) => {
        setSchools(data);
        setLoading(false);
      });
  }, []);

  return  schools.length == null ? <div> no data here </div> :  (
    <div className="max-w-6xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-6 text-center">Schools</h2>
      {loading ? (
        <p className="text-center">Loading...</p>
      ) : schools.length === 0 ? (
        <p className="text-center">No schools found.</p>
      ) : (
        <div className="flex flex-wrap flex-row gap-5  justify-center ">
          {schools.map((school) => (
            <div key={school.id} className="rounded-3xl shadow-md  flex flex-col items-center  bg-gray-200 w-72 h-96 gap-3 hover:shadow-2xl ">
              {school.image && school.image.startsWith("https://") ? (
                <img
                  src={school.image}
                  alt={school.name}
                  className="w-full h-56 object-cover rounded mb-4 border "
                />
              ) : null}
              <h3 className="text-lg font-semibold mb-2">{school.name}</h3>
              <p className="text-gray-700 mb-1 font-semibold">{school.address}</p>
              <p className="text-gray-500 font-semibold">{school.city}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
