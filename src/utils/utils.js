export function trimString(str, maxLength = 25) {
  if (str.length > maxLength) {
    return str.substring(0, maxLength - 3) + "...";
  }
  return str;
}

export function uniqueID() {
  // Generate a timestamp
  const timestamp = new Date().getTime();

  // Generate a random number (between 0 and 9999)
  const randomNumber = Math.floor(Math.random() * 10000);

  // Combine timestamp and random number to create a unique ID
  const uniqueId = `${timestamp}${randomNumber}`;

  return uniqueId;
}

export const formatDateForFormik = (date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

export function formatDateStringToHumanReadable(dateString) {
  if (!dateString) return false;

  // Create a Date object from the date string
  const dateObject = new Date(dateString);

  // Format the date to a human-readable format
  const options = { year: "numeric", month: "long", day: "numeric" };
  const humanReadableDate = dateObject.toLocaleDateString("en-US", options);

  return humanReadableDate;
}

export function getColor(str) {
  switch (str) {
    case "critical":
      return "bg-tags-critical";
    case "high":
      return "bg-tags-high";
    case "medium":
      return "bg-tags-medium";
    case "low":
      return "bg-tags-low";
    case "open":
      return "bg-tags-open";
    case "in progress":
      return "bg-tags-in-progress";
    case "review":
      return "bg-tags-review";
    case "closed":
      return "bg-tags-closed";
    case "resolved":
      return "bg-tags-resolved";
    case "completed":
      return "bg-tags-completed";
    case "new":
      return "bg-tags-new";
    default:
      return "";
  }
}

export const extractSpecificData = (data, fieldsToExtract) => {
  const extractedData = data.map((document, index) => {
    const extractedItem = {};
    fieldsToExtract.forEach((field) => {
      if (document.hasOwnProperty(field)) {
        extractedItem[field] = document[field];
      }
    });
    return { No: index + 1, ...extractedItem };
  });

  return extractedData;
};
