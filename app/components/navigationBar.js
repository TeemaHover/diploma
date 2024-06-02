import Image from "next/image";
import logo from "../images/logoblue.jpg";

export default function NavigationBar() {
  return (
    <nav className="bg-[#3050a1]">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex flex-1 items-center justify-between sm:items-stretch sm:justify-between">
            <div className="flex flex-shrink-0 items-center">
              <Image src={logo} width={125} height={125} alt="logo" />
            </div>
            <div className="sm:ml-6 sm:block md:flex md:items-center">
              <div className="flex space-x-4 ">
                <a
                  href="/internship"
                  className="text-gray-300  hover:text-red-500 rounded-md px-3 py-2 text-sm font-medium"
                >
                  Дадлага
                </a>
                <a
                  href="/job"
                  className="text-gray-300  hover:text-red-500 rounded-md px-3 py-2 text-sm font-medium"
                >
                  Ажлын байр
                </a>
                <a
                  href="/profile"
                  className="text-gray-300  hover:text-red-500 rounded-md px-3 py-2 text-sm font-medium"
                >
                  Хувийн мэдээлэл
                </a>

                <a
                  href="/"
                  className="text-gray-300  hover:text-red-500 rounded-md px-3 py-2 text-sm font-medium"
                >
                  Гарах
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
