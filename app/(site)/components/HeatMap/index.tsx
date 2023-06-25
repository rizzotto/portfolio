"use client";
import React from "react";
import { Tooltip as ReactTooltip } from "react-tooltip";
import GitHubCalendar from "react-github-calendar";
import "react-tooltip/dist/react-tooltip.css";
import { useTheme } from "next-themes";

export default function HeatMap() {
  const { systemTheme, theme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  const selectLastHalfYear = (contributions: any) => {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const shownMonths = 6;

    return contributions.filter((activity: any) => {
      const date = new Date(activity.date);
      const monthOfDay = date.getMonth();

      return (
        date.getFullYear() === currentYear &&
        monthOfDay > currentMonth - shownMonths &&
        monthOfDay <= currentMonth
      );
    });
  };

  return (
    <div>
      <GitHubCalendar
        renderBlock={(block, activity) =>
          React.cloneElement(block, {
            "data-tooltip-id": "react-tooltip",
            "data-tooltip-html": `${activity.count} activities on ${activity.date}`,
          })
        }
        colorScheme={currentTheme === "dark" ? "dark" : "light"}
        transformData={selectLastHalfYear}
        username="rizzotto"
      />
      <ReactTooltip id="react-tooltip" />
    </div>
  );
}
