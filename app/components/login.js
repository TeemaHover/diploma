// pages/login.js
"use client";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useState } from "react";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("/api/login", { email, password });
      if (res.status === 200) {
        router.push("/internship");
      }
    } catch (error) {
      setError(error.response?.data?.message || "An error occurred");
    }
  };

  return (
    <div className="h-[100vh] flex justify-center items-center">
      <div className="flex max-w-3xl bg-white mx-auto flex-col justify-center items-center px-6 py-12 lg:px-8 rounded">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h1 className="text-left text-3xl font-bold leading-9 tracking-tight text-[#1a2744]">
            Өмнөговь политехник коллеж
          </h1>
          <h5 className="text-left text-lg pt-5 text-gray-500">
            Ажлын байр дадлагын төлөвлөлт зохион байгуулалтын нэгдсэн системд
            тавтай морилно уу
          </h5>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Нэвтрэх нэр
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Нууц Үг
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            {error && <p className="text-red-500">{error}</p>}

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-[#1a2744] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#1a2744] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Нэвтрэх
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
