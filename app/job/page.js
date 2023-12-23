import NavigationBar from "../components/navigationBar";

export default function Job() {
  return (
    <>
      <NavigationBar />
      <h1 className="pl-20 pt-10 text-[#1a2744] text-2xl font-bold">
        Үндсэн ажилчин авна
      </h1>
      <div className="flex">
        <div className="p-10  w-1/3 bg-white m-10 ml-20">
          <div className="py-8">
            <h5 className="text-gray-500">Утас</h5>
            <h3 className="font-bold text-xl">9999-9999</h3>
          </div>
          <div className="py-8">
            <h5 className="text-gray-500">Цахим шуудангийн хаяг</h5>
            <h3 className="font-bold text-xl">bilguun@gmail.com</h3>
          </div>
          <div className="py-8">
            <h5 className="text-gray-500">Тэнхим</h5>
            <h3 className="font-bold text-xl">МСМ</h3>
          </div>
          <div className="py-8 pb-60">
            <h5 className="text-gray-500">Өрөөний дугаар</h5>
            <h3 className="font-bold text-xl">201</h3>
          </div>
        </div>
        <div className="flex justify-center flex-col w-1/3">
          <h1 className=" text-[#1a2744] text-2xl font-bold text-left">
            Зарлал оруулах
          </h1>
          <div class="mt-10  sm:w-full sm:max-w-sm">
            <form class="space-y-6" action="#" method="POST">
              <div>
                <label
                  for="email"
                  class="block text-sm font-medium leading-6 text-gray-900"
                >
                  Утасны дугаар
                </label>
                <div class="mt-2">
                  <input
                    id="phoneNumber"
                    name="phoneNumber"
                    type="phoneNumber"
                    autoComplete="phoneNumber"
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
                    Цахим шуудан
                  </label>
                </div>
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
                <button
                  type="submit"
                  class="flex w-1/4 justify-center rounded-md bg-[#1a2744] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#1a2744] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Хадгалах
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
