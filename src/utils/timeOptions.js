const generateTimeOptions = () => {
  const options = [];
  let id = 1;

  for (let hour = 0; hour < 24; hour++) {
    for (let minute = 0; minute < 60; minute += 30) {
      const timeValue = `${hour.toString().padStart(2, "0")}:${minute
        .toString()
        .padStart(2, "0")}`;
      const period = hour < 12 ? "AM" : "PM";
      const displayHour = hour % 12 === 0 ? 12 : hour % 12;
      const timeLabel = `${displayHour}:${minute
        .toString()
        .padStart(2, "0")} ${period}`;

      options.push({
        id: id++,
        value: timeValue,
        label: timeLabel,
      });
    }
  }
  return options;
};

export const timeOptions = generateTimeOptions();
