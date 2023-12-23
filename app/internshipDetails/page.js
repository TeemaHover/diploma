"use client";
import NavigationBar from "../components/navigationBar";
import { useState } from "react";

export default function InternshipDetails() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedItemDes, setSelectedItemDes] = useState(null);
  const data = [
    {
      name: "Ханджамц",
      class: "ГАГНУУР",
      company: "СЭЗИС",
      startDate: "2023/01/01",
      endDate: "2023/12/31",
      point: 100,
      description: "Дадлагын тэмдэглэл",
    },
    {
      name: "Ханджамц",
      class: "ГАГНУУР",
      company: "СЭЗИС",
      startDate: "2023/01/01",
      endDate: "2023/12/31",
      point: 100,
      description: "Дадлагын тэмдэглэл",
    },
  ];
  const handleEditClick = (item) => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };
  const handleDesEditClick = (item) => {
    setSelectedItemDes(item);
  };

  const closeDesModal = () => {
    setSelectedItemDes(null);
  };
  return (
    <>
      <NavigationBar />
      <div className="mx-auto text-left w-3/4">
        <h1 className="text-2xl font-bold py-12 text-[#1a2744]">Дадлага</h1>
        <div>
          <table className="">
            <thead className="border-b-2  border-black">
              <tr>
                <th className="pr-16 py-6 w-1/6">Оюутны нэр</th>
                <th className="pr-16 py-6 w-1/6">Анги</th>
                <th className="pr-16 py-6 w-1/6">Байгууллага</th>
                <th className="pr-16 py-6 w-1/6">Эхлэх огноо</th>
                <th className="pr-16 py-6 w-1/6">Дуусах огноо</th>
                <th className="pr-16 py-6 w-1/6">Үнэлгээ</th>
                <th className="pr-16 py-6 w-1/6">Тэмдэглэл</th>
              </tr>
            </thead>

            <tbody>
              {data.map((item, index) => (
                <tr key={index}>
                  <td className="pr-16 py-6">{item.name}</td>
                  <td className="pr-16 py-6">{item.class}</td>
                  <td className="pr-16 py-6">{item.company}</td>
                  <td className="pr-16 py-6">{item.startDate}</td>
                  <td className="pr-16 py-6">{item.endDate}</td>
                  <td className="pr-16 py-6">
                    {" "}
                    {item.point}%
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                      onClick={() => handleEditClick(item)}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                      />
                    </svg>
                  </td>

                  <td
                    className="pr-16 py-6"
                    onClick={() => handleDesEditClick(item)}
                  >
                    {item.description}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {selectedItem && (
        <div
          id="crypto-modal"
          tabIndex="-1"
          aria-hidden="false"
          className="overflow-y-auto overflow-x-hidden flex items-center bg-black bg-opacity-30 justify-center fixed top-0 right-0 left-0 z-50  w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
        >
          <div className="relative p-4 w-full max-w-md max-h-full">
            <div className="relative bg-white rounded-lg shadow ">
              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <h3 className="text-lg font-semibold text-black  ">
                  Оюутны мэдээлэл
                </h3>
                <button
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm h-8 w-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  data-modal-toggle="crypto-modal"
                >
                  <span className="close" onClick={closeModal}>
                    &times;
                  </span>
                </button>
              </div>

              <div className="p-4 md:p-5">
                <ul className="my-4 space-y-3">
                  <li className="flex items-center justify-between">
                    <p>Овог:</p>
                    <p>{selectedItem.name}</p>
                  </li>
                  <li className="flex items-center justify-between">
                    <p>Нэр:</p>
                    <p>{selectedItem.name}</p>
                  </li>
                  <li className="flex items-center justify-between">
                    <p>Хүйс:</p>
                    <p>{selectedItem.name}</p>
                  </li>
                  <li className="flex items-center justify-between">
                    <p>Байгууллага:</p>
                    <p>{selectedItem.name}</p>
                  </li>
                </ul>
                <div>
                  <form>
                    <label
                      for="first_name"
                      class="block mb-2    font-bold text-black "
                    >
                      Үнэлгээ
                    </label>
                    <input
                      type="text"
                      id="first_name"
                      class="bg-gray-50 border border-gray-300 text-black  rounded-lg  block w-full p-2.5  "
                      required
                    />
                    <button
                      type="submit"
                      class="flex mt-4 py-2.5 w-full justify-center rounded-md bg-[#1a2744] px-3  text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#1a2744] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      // onClick={() => router.push("/internship")}
                    >
                      Хадгалах
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {selectedItemDes && (
        <div
          id="crypto-modal"
          tabIndex="-1"
          aria-hidden="false"
          className="overflow-y-auto overflow-x-hidden flex items-center bg-black bg-opacity-30 justify-center fixed top-0 right-0 left-0 z-50  w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
        >
          <div className="relative p-4 w-full max-w-md max-h-full">
            <div className="relative bg-white rounded-lg shadow ">
              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <h3 className="text-lg font-semibold text-black  ">
                  Оюутны мэдээлэл
                </h3>
                <button
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm h-8 w-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  data-modal-toggle="crypto-modal"
                >
                  <span className="close" onClick={closeDesModal}>
                    &times;
                  </span>
                </button>
              </div>

              <div className="p-4 md:p-5">
                <ul className="my-4 space-y-3">
                  <li className="flex items-center justify-between">
                    <p>Овог:</p>
                    <p>{selectedItemDes.name}</p>
                  </li>
                  <li className="flex items-center justify-between">
                    <p>Нэр:</p>
                    <p>{selectedItemDes.name}</p>
                  </li>
                  <li className="flex items-center justify-between">
                    <p>Оюутны код:</p>
                    <p>{selectedItemDes.name}</p>
                  </li>
                  <li className="flex items-center justify-between">
                    <p>Анги:</p>
                    <p>{selectedItemDes.name}</p>
                  </li>
                  <li className="flex items-center justify-between">
                    <p>Хүйс:</p>
                    <p>{selectedItemDes.name}</p>
                  </li>
                  <li className="flex items-center justify-between">
                    <p>Байгууллага:</p>
                    <p>{selectedItemDes.name}</p>
                  </li>
                  <li className="flex items-center justify-between">
                    <p>Байгууллагын хаяг:</p>
                    <p>{selectedItemDes.name}</p>
                  </li>
                  <li className="flex items-center justify-between">
                    <p>Байгууллагын утас:</p>
                    <p>{selectedItemDes.name}</p>
                  </li>
                </ul>
                <div>
                  <form>
                    <label
                      for="first_name"
                      class="block mb-2    font-bold text-black "
                    >
                      Дадлагын тэмдэглэл
                    </label>
                    <input
                      type="text"
                      id="first_name"
                      class="bg-gray-50 border border-gray-300 text-black  rounded-lg  block w-full p-2.5  "
                      required
                    />
                    <button
                      type="submit"
                      class="flex mt-4 py-2.5 w-full justify-center rounded-md bg-[#1a2744] px-3  text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#1a2744] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      // onClick={() => router.push("/internship")}
                    >
                      Хадгалах
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
