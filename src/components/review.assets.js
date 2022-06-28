import React from "react";
import {
  StarBorder as Empty,
  StarHalf as Half,
  StarRate as Full
} from "@mui/icons-material";
import "../styles/reviews/reviews.css";

const TimeSince = (dateString) => {
  let year = dateString.substring(0, 4);
  let month = dateString.substring(4, 6);
  let day = dateString.substring(6, 8);
  let time = new Date(year, month - 1, day);
  let time_formats = [
    [60, "seconds", 1], // 60
    [120, "1 minute ago", "1 minute from now"], // 60*2
    [3600, "minutes", 60], // 60*60, 60
    [7200, "1 hour ago", "1 hour from now"], // 60*60*2
    [86400, "hours", 3600], // 60*60*24, 60*60
    [172800, "Yesterday", "Tomorrow"], // 60*60*24*2
    [604800, "days", 86400], // 60*60*24*7, 60*60*24
    [1209600, "Last week", "Next week"], // 60*60*24*7*4*2
    [2419200, "weeks", 604800], // 60*60*24*7*4, 60*60*24*7
    [4838400, "Last month", "Next month"], // 60*60*24*7*4*2
    [29030400, "months", 2419200], // 60*60*24*7*4*12, 60*60*24*7*4
    [58060800, "Last year", "Next year"], // 60*60*24*7*4*12*2
    [2903040000, "years", 29030400], // 60*60*24*7*4*12*100, 60*60*24*7*4*12
    [5806080000, "Last century", "Next century"], // 60*60*24*7*4*12*100*2
    [58060800000, "centuries", 2903040000] // 60*60*24*7*4*12*100*20, 60*60*24*7*4*12*100
  ];
  let today = new Date().getTime() / 1000;
  let seconds = Math.abs(today - time.getTime() / 1000),
    token = "ago",
    list_choice = 1;

  if (seconds == 0) {
    return "Just now";
  }
  if (seconds < 0) {
    seconds = Math.abs(seconds);
    token = "from now";
    list_choice = 2;
  }
  let i = 0,
    format;
  while ((format = time_formats[i++]))
    if (seconds < format[0]) {
      if (typeof format[2] == "string") return format[list_choice];
      else
        return Math.floor(seconds / format[2]) + " " + format[1] + " " + token;
    }
  return time.toString;
};

export const addStars = (count) => {
  if (count === 1) {
    return (
      <div>
        <Full className="Full" />
        <Empty className="Full" />
        <Empty className="Full" />
        <Empty className="Full" />
        <Empty className="Full" />
      </div>
    );
  } else if (count === 2) {
    return (
      <div>
        <Full className="Full" />
        <Full className="Full" />
        <Empty className="Full" />
        <Empty className="Full" />
        <Empty className="Full" />
      </div>
    );
  } else if (count === 3) {
    return (
      <div>
        <Full className="Full" />
        <Full className="Full" />
        <Full className="Full" />
        <Empty className="Full" />
        <Empty className="Full" />
      </div>
    );
  } else if (count === 4) {
    return (
      <div>
        <Full className="Full" />
        <Full className="Full" />
        <Full className="Full" />
        <Full className="Full" />
        <Empty className="Full" />
      </div>
    );
  } else if (count === 5) {
    return (
      <div>
        <Full className="Full" />
        <Full className="Full" />
        <Full className="Full" />
        <Full className="Full" />
        <Full className="Full" />
      </div>
    );
  } else if (count === 1.5) {
    return (
      <div>
        <Full className="Full" />
        <Half className="Full" />
        <Empty className="Full" />
        <Empty className="Full" />
        <Empty className="Full" />
      </div>
    );
  } else if (count === 2.5) {
    return (
      <div>
        <Full className="Full" />
        <Full className="Full" />
        <Half className="Full" />
        <Empty className="Full" />
        <Empty className="Full" />
      </div>
    );
  } else if (count === 3.5) {
    return (
      <div>
        <Full className="Full" />
        <Full className="Full" />
        <Full className="Full" />
        <Half className="Full" />
        <Empty className="Full" />
      </div>
    );
  } else if (count === 4.5) {
    return (
      <div>
        <Full className="Full" />
        <Full className="Full" />
        <Full className="Full" />
        <Full className="Full" />
        <Half className="Full" />
      </div>
    );
  }
};

export default TimeSince;
