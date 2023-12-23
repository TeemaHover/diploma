"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();
  return (
    <div className="h-[100vh] flex justify-center items-center">
      <div class="flex max-w-3xl bg-white mx-auto flex-col justify-center items-center px-6 py-12 lg:px-8 rounded">
        <div class="sm:mx-auto sm:w-full sm:max-w-sm">
          <h1 class="text-left text-3xl font-bold leading-9 tracking-tight text-[#1a2744]">
            Өмнөговь политехник коллеж
          </h1>
          <h5 className="text-left text-lg pt-5 text-gray-500">
            Ажлын байр дадлагын төлөвлөлт зохион байгуулалтын нэгдсэн системд
            тавтай морилно уу
          </h5>
        </div>

        <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form class="space-y-6" action="#" method="POST">
            <div>
              <label
                for="email"
                class="block text-sm font-medium leading-6 text-gray-900"
              >
                Нэвтрэх нэр
              </label>
              <div class="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div class="flex items-center justify-between">
                <label
                  for="password"
                  class="block text-sm font-medium leading-6 text-gray-900"
                >
                  Нууц Үг
                </label>
              </div>
              <div class="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                class="flex w-full justify-center rounded-md bg-[#1a2744] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#1a2744] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                // onClick={() => router.push("/internship")}
              >
                <Link href="/internship">Нэвтрэх </Link>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
