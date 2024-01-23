export function trimString(str, maxLength = 25) {
  if (str.length > maxLength) {
    return str.substring(0, maxLength - 3) + "...";
  }
  return str;
}

export function isValidEmail(email) {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}

export function formatDateStringToHumanReadable(dateString) {
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
