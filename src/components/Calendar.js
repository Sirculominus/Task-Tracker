import React, { useState } from "react";
import Calendar from "@toast-ui/react-calendar";
import "tui-calendar/dist/tui-calendar.css";
import { RadioButtonGroup } from 'react-rainbow-components';


// If you use the default popups, use this.
import "tui-date-picker/dist/tui-date-picker.css";
import "tui-time-picker/dist/tui-time-picker.css";

export const MyCalendar = ({ bcTasks }) => {
  let [currentView, setView] = useState("month");

  const options = [
    { value: 'day', label: 'day' },
    { value: 'week', label: 'week' },
    { value: 'month', label: 'month' },
];

    const themeConfig = {
        'week.timegridOneHour.height':'50px',
    }

  return (
      <div>
        <div className="viewChooser">
            <RadioButtonGroup
                    id="radio-button-group-component-1"
                    options={options}
                    value={currentView}
                    onChange={(e) => {setView(e.target.value)}}
                />
        </div>
        <Calendar
            height="1400px"
            calendars={[
            {
                id: "0",
                name: "Private",
                bgColor: "#9e5fff",
                borderColor: "#9e5fff",
            },
            ]}
            month={{
            startDayOfWeek: 1,
            }}
            schedules=
                {bcTasks.map((bcTask) => ({
                    id: bcTask.id,
                    calendarId: bcTask.id,
                    title: bcTask.name,
                    category: "time",
                    dueDateClass: "",
                    start: bcTask.date,
                    end: bcTask.date,
                }))}
            scheduleView
            taskView={false}
            view={currentView}
            timezones={[
            {
                displayLabel: "GMT+02:00",
                tooltip: "Oslo",
            },
            ]}
            theme={themeConfig}
            useDetailPopup
            useCreationPopup
        />
      </div>
  );
};

export default MyCalendar;
