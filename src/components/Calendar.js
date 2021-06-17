import React, { Component, useEffect } from 'react';
import MonthlyEvents from 'react-monthly-events';

export const Calendar = ({ bcTasks }) => {
    const currentMonth = new Date();

    return (
        <div className="row">
            <MonthlyEvents
                currentMonth={ currentMonth }
                events={ bcTasks.map((bcTask) => ({ 
                    id: bcTask.id,
                    start: bcTask.date,
                    end: bcTask.date,
                    allDay: false,
                    event: bcTask.name
                })) }
            />
        </div>
    );
}



export default Calendar