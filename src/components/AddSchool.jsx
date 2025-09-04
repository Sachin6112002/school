"use client";
import { useForm } from "react-hook-form";
import { useState } from "react";

export default function AddSchool() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const onSubmit = async (data) => {
    setLoading(true);
    setMessage("");
    const formData = new FormData();
    Object.keys(data).forEach((key) => {
      formData.append(key, data[key]);
    });
    if (data.image[0]) {
      formData.append("image", data.image[0]);
    }
    try {
      const res = await fetch("/api/addSchool", {
        method: "POST",
        body: formData,
      });
      const result = await res.json();
      if (res.ok) {
        setMessage("School added successfully!");
        reset();
      } else {
        setMessage(result.error || "Error adding school.");
      }
    } catch (err) {
      setMessage("Network error.");
    }
    setLoading(false);
  };

  return (
    <div className="max-w-xl mx-auto p-4 bg-white rounded shadow mt-8">
      <h2 className="text-2xl font-bold mb-4 text-center">Add School</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <input
          {...register("name", { required: "Name is required" })}
          className="w-full p-2 border rounded"
          placeholder="School Name"
        />
        {errors.name && <p className="text-red-500">{errors.name.message}</p>}

        <input
          {...register("address", { required: "Address is required" })}
          className="w-full p-2 border rounded"
          placeholder="Address"
        />
        {errors.address && <p className="text-red-500">{errors.address.message}</p>}

        <input
          {...register("city", { required: "City is required" })}
          className="w-full p-2 border rounded"
          placeholder="City"
        />
        {errors.city && <p className="text-red-500">{errors.city.message}</p>}

        <input
          {...register("state", { required: "State is required" })}
          className="w-full p-2 border rounded"
          placeholder="State"
        />
        {errors.state && <p className="text-red-500">{errors.state.message}</p>}

        <input
          type="tel"
          {...register("contact", {
            required: "Contact is required",
            pattern: {
              value: /^[0-9]{10,15}$/,
              message: "Enter a valid contact number",
            },
          })}
          className="w-full p-2 border rounded"
          placeholder="Contact Number"
        />
        {errors.contact && <p className="text-red-500">{errors.contact.message}</p>}

        <input
          type="email"
          {...register("email_id", {
            required: "Email is required",
            pattern: {
              value: /^[^@\s]+@[^@\s]+\.[^@\s]+$/,
              message: "Enter a valid email address",
            },
          })}
          className="w-full p-2 border rounded"
          placeholder="Email ID"
        />
        {errors.email_id && <p className="text-red-500">{errors.email_id.message}</p>}

        <input
          type="file"
          accept="image/*"
          {...register("image", { required: "Image is required" })}
          className="w-full p-2 border rounded"
        />
        {errors.image && <p className="text-red-500">{errors.image.message}</p>}

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded font-semibold hover:bg-blue-700"
          disabled={loading}
        >
          {loading ? "Submitting..." : "Add School"}
        </button>
        {message && <p className="text-center mt-2 text-green-600">{message}</p>}
      </form>
    </div>
  );
}
