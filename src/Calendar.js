import { useState } from "react";
import Container from "react-bootstrap/Container";
import CalendarBody from "./CalendarBody";
import CalendarForm from "./CalendarForm";

const Calendar = () => {
  const [userSlotsState, setuserSlotsState] = useState([]);

  const slotHandler = (userSlots) => {
    setuserSlotsState((prevState) => [...prevState, userSlots]);
  };

  return (
    <Container>
      <h1>My Calendar</h1>
      <CalendarForm slotHandler={slotHandler} />
      <CalendarBody userSlots={userSlotsState} />
    </Container>
  );
};

export default Calendar;
