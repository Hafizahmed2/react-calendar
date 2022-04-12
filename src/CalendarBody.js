import React from "react";
import { TIME_SLOTS } from "./constants";
import Table from "react-bootstrap/Table";

const CalendarBody = ({ userSlots }) => {
  const prinDays = (day) => {
    return userSlots.map((element) => {
      if (element.day === day) {
        const start = TIME_SLOTS.findIndex(
          (timeSlot) => timeSlot === element.start
        );
        const end = TIME_SLOTS.findIndex(
          (timeSlot) => timeSlot === element.end
        );
        return TIME_SLOTS.map((_value, index) => {
          if (index < start || index > end) {
            return <div>not used</div>;
          } else {
            return <div>occupied</div>;
          }
        });
      }
    });
  };

  return (
    <div style={{ display: "flex", gap: "20px" }}>
      <div style={{ display: "flex", gap: "20px" }}>
        <div>
          <div>time slots</div>
          {TIME_SLOTS.map((timeSlot) => {
            return <div>{timeSlot}</div>;
          })}
        </div>
        <div id="monday">
          <div>Monday</div>
          {prinDays("Monday")}
        </div>
        <div id="tuesday">
          <div>Tuesday</div>
          {prinDays("Tuesday")}
        </div>
        <div>
          <div>Wednesday</div>
          {prinDays("Wednesday")}
        </div>
        <div>
          <div>Thursday</div>
          {prinDays("Thursday")}
        </div>
        <div>
          <div>Friday</div>
          {prinDays("Friday")}
        </div>
        <div>
          <div>Saturday</div>
          {prinDays("Saturday")}
        </div>
        <div>
          <div>Sunday</div>
          {prinDays("Sunday")}
        </div>
      </div>
      <div>
        <h3>my time slots are</h3>
        {console.log(userSlots)}
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>day</th>
              <th>from</th>
              <th>to</th>
            </tr>
          </thead>
          <tbody>
            {userSlots.map((timeSlot) => {
              const { day, start, end } = timeSlot;
              return (
                <tr>
                  <td>{day}</td>
                  <td>{start}</td>
                  <td>{end}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default CalendarBody;
