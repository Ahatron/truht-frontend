function getFriendlyDate(createdAt: string) {
  const diff = Date.now() - Date.parse(createdAt),
    minutesSinceNow = new Date(diff).getMinutes();

  if (minutesSinceNow < 1) {
    return "right now";
  } else if (minutesSinceNow < 60) {
    return `${minutesSinceNow} minutes ago`;
  } else if (minutesSinceNow < 60 * 24) {
    return `${minutesSinceNow / 60} hours ago`;
  } else if (minutesSinceNow < 60 * 24 * 2) {
    return "yesterday";
  } else if (minutesSinceNow < 60 * 24 * 7) {
    return `${(minutesSinceNow / (60 * 24)).toFixed(1)} weeks ago`;
  } else if (minutesSinceNow < 60 * 24 * 30) {
    return "last month";
  } else {
    return "last year";
  }
}

export default getFriendlyDate;