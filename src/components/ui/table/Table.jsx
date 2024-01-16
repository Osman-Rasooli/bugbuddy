import { icons } from "../../../data/data";
import { Link } from "react-router-dom";
import { trimString } from "../../../utils/utils";

const Table = ({ list, title, className, link }) => {
  if (!list || list.length === 0) {
    return <h2>No data available</h2>;
  }

  const columns = Array.from(new Set(list.flatMap((obj) => Object.keys(obj))));

  // Check if a value in a column corresponds to an icon and return the appropriate JSX
  const getCellValue = (row, column) => {
    const value = row[column];

    // Check if the column is 'priority' and if an icon exists for the priority value
    if (Object.keys(icons).includes(column)) {
      return (
        <div
          className={`flex items-center gap-2 ${column}-${value.replaceAll(
            " ",
            "-"
          )}`}
        >
          <span>{icons[column][value]}</span>
          <span className=" font-light capitalize">{value}</span>
        </div>
      );
    }
    let style = "";
    if (column === "status") {
      switch (value) {
        case "inactive":
          style = "status-inactive";
          break;
        case "in progress":
          style = "status-in-progress";
          break;
        case "on hold":
          style = "status-on-hold";
          break;
        default:
          style = "status-active";
      }
    }

    // Return the original value if no special handling is required
    return <span className={style}>{trimString(value)}</span>;
  };
  return (
    <div className={`overflow-y-auto ${className}`}>
      <h3 className=" text-tertiary inline-block font-medium text-xl p-3 bg-secondary">
        {title}
      </h3>
      <table className=" overflow-x-auto w-full border-[0.5px] rounded cursor-pointer  border-secondaryLight divide-y divide-whiteLight">
        <thead className="bg-secondaryLight sticky top-0">
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
              className="font-thin whitespace-nowrap border-b-[0.5px] hover:text-[#fff] border-secondaryLight hover:bg-secondaryLight"
            >
              {columns.map((column) => (
                <td key={column} className="py-2 px-4 font-normal">
                  <Link to={link && `${row["id"]}`}>
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
