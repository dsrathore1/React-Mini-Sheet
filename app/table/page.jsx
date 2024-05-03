"use client";

import { BiCopy, BiPencil } from "react-icons/bi";
import { AiOutlineDelete } from "react-icons/ai";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";

export default function Table() {
  const [data, setData] = useState([]);

  useEffect(() => {
    
  }, []);

  return (
    <div className="p-10">
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                id
              </th>
              <th scope="col" class="px-6 py-3">
                Company Name
              </th>
              <th scope="col" class="px-6 py-3">
                Job Role
              </th>
              <th scope="col" class="px-6 py-3">
                Job ID
              </th>
              <th scope="col" class="px-6 py-3">
                Place
              </th>
              <th scope="col" class="px-6 py-3">
                Apply
              </th>
              <th scope="col" class="px-6 py-3">
                Action
              </th>
              <th scope="col" class="px-6 py-3">
                Copy
              </th>
            </tr>
          </thead>

          <tbody>
            <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Apple MacBook Pro 17"
              </th>
              <td class="px-6 py-4">Silver</td>
              <td class="px-6 py-4">Laptop</td>
              <td class="px-6 py-4">$2999</td>
              <td class="px-6 py-4">Ahmedabad</td>
              <td class="px-6 py-4">Done</td>
              <td class="px-6 py-4 justify-center items-center">
                <div className="flex justify-between items-center">
                  <BiPencil size={20} />
                  <AiOutlineDelete color="red" size={20} />
                </div>
              </td>
              <td class="px-6 py-4 flex justify-start">
                <BiCopy
                  className="cursor-pointer"
                  onClick={() => toast.success("Copied")}
                  size={20}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
