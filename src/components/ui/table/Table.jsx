import { icons } from "../../../data/data";
import { Link } from "react-router-dom";
import {
  trimString,
  formatDateStringToHumanReadable,
} from "../../../utils/utils";
import ProgressBar from "../progressBar/ProgressBar";
import Loader from "../../ui/loader/Loader";

const Table = ({ list, title, className, link, loading, error }) => {
  if (loading) {
    return (
      <div className="w-full h-32 flex justify-center items-center">
        <Loader />
      </div>
    );
  }
  if (!list || list.length === 0) {
    return (
      <div className="w-full h-32 flex justify-center items-center">
        <h2>No data available</h2>
      </div>
    );
  }
  if (error) {
    return (
      <div className="w-full h-32 flex justify-center items-center">
        <h2>Something went wrong!</h2>
      </div>
    );
  }

  // Getting all the column Headings except the $id
  const columns = Array.from(
    new Set(list.flatMap((obj) => Object.keys(obj)))
  ).filter((column) => column !== "$id");

  // Check if a value in a column corresponds to an icon and return the appropriate JSX
  const getCellValue = (row, column) => {
    let value = row[column];

    // We do not want to show the $id to users, so we skip it
    if (column === "$id") {
      return;
    }

    if (!value || value.length === 0) {
      value = " - ";
    }

    if (column === "createdDate") {
      value = (
        <span className="block text-right text-secondary dark:text-whiteLight opacity-70">
          {formatDateStringToHumanReadable(value)}
        </span>
      );
    }

    if (column === "progress") {
      return (
        <ProgressBar progress={parseInt(value) || 0} className="h-[14px]" />
      );
    }

    // Check if an icon exists for the priority value
    if (Object.keys(icons).includes(column)) {
      return (
        <div
          className={`flex items-center justify-center gap-[5px] font-normal bg-[#fff] dark:bg-[#191919] rounded-sm ${column}-${value.replaceAll(
            " ",
            "-"
          )}`}
        >
          <span>{icons[column][value]}</span>
          <span className=" capitalize">{value}</span>
        </div>
      );
    }

    // Return the original value if no special handling is required
    return <span className="font-normal">{trimString(value)}</span>;
  };
  return (
    <div className={`overflow-y-auto ${className}`}>
      <h3 className=" text-tertiary inline-block font-medium text-xl p-3  dark:bg-secondary">
        {title}
      </h3>
      <table className=" overflow-x-auto w-full border-[0.5px] rounded cursor-pointer border-secondary transition bg-white dark:bg-secondary text-secondary dark:text-white  dark:border-secondaryLight divide-y divide-secondaryLight dark:divide-whiteLight">
        <thead className="bg-whiteBg dark:bg-secondaryLight sticky top-0">
          <tr>
            {columns.map((column) => (
              <th key={column} className="py-2 px-4 text-left capitalize">
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {list.map((row, index) => (
            <tr
              key={index}
              className=" font-extrabold whitespace-nowrap border-b-[0.5px] hover:text-secondary dark:hover:text-[#fff] border-secondaryLight hover:bg-whiteBg dark:hover:bg-secondaryLight"
            >
              {columns.map((column) => (
                <td
                  key={column}
                  className={`py-2 px-4 font-extrabold ${
                    column === "closedDate" && "text-center"
                  }`}
                >
                  <Link to={link && `${row["$id"]}`}>
                    {getCellValue(row, column)}
                  </Link>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
