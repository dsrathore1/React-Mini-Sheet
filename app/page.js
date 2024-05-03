"use client";


export default function App() {
  const readData = async () => {
    await fetch("https://sheetdb.io/api/v1/t9eg9q3qn1sgj")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  };

  const updateData = async () => {
    await fetch("https://sheetdb.io/api/v1/t9eg9q3qn1sgj/ID/1", {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data: {
          COMPANY_NAME: "Qualcomm",
        },
      }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  };

  const createData = () => {
    fetch("https://sheetdb.io/api/v1/t9eg9q3qn1sgj", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data: [
          {
            ID: "3",
            COMPANY_NAME: "Flipkart",
            JOB_ROLE: "Softwate Engineer II",
            JOB_ID: "4",
            PLACE: "Hyderabad",
            APPLY: "Done",
          },
        ],
      }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  };

  const deleteData = async () => {
    await fetch("https://sheetdb.io/api/v1/t9eg9q3qn1sgj/ID/3", {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  };

  return (
    <>

      <div className="h-[100vh] w-full flex justify-center items-center bg-[#212121]">
        <div className="flex justify-center items-center gap-x-10">
          <button
            onClick={readData}
            className="bg-blue-300 w-44 h-10 rounded text-black shadow-blue-300 shadow-sm"
          >
            Read
          </button>
          <button
            onClick={createData}
            className="bg-green-300 w-44 h-10 rounded text-black shadow-green-300 shadow-sm"
          >
            Post
          </button>
          <button
            onClick={updateData}
            className="bg-amber-300 w-44 h-10 rounded text-black shadow-amber-300 shadow-sm"
          >
            Update
          </button>
          <button
            onClick={deleteData}
            className="bg-red-300 w-44 h-10 rounded text-black shadow-red-300 shadow-sm"
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
}
