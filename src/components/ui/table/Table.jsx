import React from "react";
const Table = ({ list, title, className }) => {
  const tableHeadingArr = Object.keys(list[0]);
  return (
    <div className={`max-h-[400px]  overflow-y-auto ${className}`}>
      <h2 className=" text-tertiary font-medium text-xl p-3 bg-secondary">
        {title}
      </h2>
      <table className=" overflow-x-auto w-full border-[0.5px] rounded cursor-pointer  border-secondaryLight divide-y divide-whiteLight">
        <thead className="bg-secondaryLight sticky top-0">
          <tr>
            {tableHeadingArr.map((th, i) => (
              <th key={i} className="py-2 px-4 text-left capitalize">
                {th}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {list.map((li, i) => (
            <tr
              key={i}
              className="font-thin whitespace-nowrap border-b-[0.5px] hover:text-[#fff] border-secondaryLight hover:bg-secondaryLight"
            >
              <td className="py-2 px-4 ">{li.id}</td>
              <td className="py-2 px-4">{li.name}</td>
              <td className="py-2 px-4">{li.email}</td>
              <td className="py-2 px-4 flex items-center gap-2">
                {li.role.icon} {li.role.name}
              </td>
              <td className="py-2 px-4 font-medium">
                <span
                  className={
                    li.status === "active" ? "role-active" : "role-inactive"
                  }
                >
                  {li.status}
                </span>
              </td>
              <td className="py-2 px-4">{li.domain}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
