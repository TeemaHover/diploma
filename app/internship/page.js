"use client";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import NavigationBar from "../components/navigationBar";
import axios from "axios";

export default function Internship() {
  const router = useRouter();
  const [internships, setInternships] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const handleModalToggle = () => {
    setShowModal(!showModal);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("/api/internship");
        setInternships(res.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <NavigationBar />
      <div className="mx-auto text-left w-3/4">
        <h1 className="text-2xl font-bold py-12 text-[#1a2744]">Дадлага</h1>
        <div>
          <table>
            <thead className="border-b-2 border-black">
              <tr>
                <th className="pr-16 py-6 w-1/4">Ажил олгогч</th>
                <th className="pr-16 py-6 w-1/4">Мэргэжил</th>
                <th className="pr-16 py-6 w-1/4">Хугацаа</th>
                <th className="pr-16 py-6 w-1/9">Бүртгүүлсэн</th>
                <th className="pr-16 py-6 w-1/5">Цалин</th>
                <th className="pr-16 py-6 w-1/5"></th>
              </tr>
            </thead>
            <tbody>
              {internships.map((item, index) => (
                <tr key={index}>
                  <td className="pr-16 py-6">{item.employer}</td>
                  <td className="pr-16 py-6">{item.profession}</td>
                  <td className="pr-16 py-6">
                    {item.start_date} - {item.end_date}
                  </td>
                  <td className="pr-16 py-6">{item.student_number}</td>
                  <td className="pr-16 py-6">{item.salary}</td>
                  <td className="py-6">
                    <button
                      type="button"
                      className="text-white bg-blue-300  font-medium rounded-lg text-sm px-10 py-2.5 me-2 mb-2"
                      onClick={() =>
                        router.push(
                          `/internshipDetails?id=${item.internship_id}`
                        )
                      }
                    >
                      Дэлгэрэнгүй
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div>
            <h2 className="font-bold">Дадлагын санал хүсэлт</h2>
            <div className="flex m-4 ml-0">
              <div
                className="px-16 py-8 bg-white rounded"
                onClick={handleModalToggle}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              </div>
              <div className="w-[200px] mx-5">
                Та өөрөө дадлага хийх байгууллага олсон бол энд дарна уу
              </div>
            </div>
          </div>
        </div>
      </div>
      {showModal && (
        <div
          id="crypto-modal"
          tabIndex="-1"
          aria-hidden="false"
          className="overflow-y-auto overflow-x-hidden bg-black bg-opacity-30 flex items-center justify-center fixed top-0 right-0 left-0 z-50  w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
        >
          <div className="relative p-4 w-full max-w-3xl  max-h-full">
            <div className="relative bg-white rounded-lg shadow ">
              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <h3 className="text-lg font-semibold text-black  ">
                  Дадлагын хүсэлт үүсгэх
                </h3>
                <button
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm h-8 w-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  data-modal-toggle="crypto-modal"
                >
                  <span className="close" onClick={handleModalToggle}>
                    &times;
                  </span>
                </button>
              </div>

              <div className="p-4 md:p-5">
                <div>
                  <form>{/* Form fields go here */}</form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
