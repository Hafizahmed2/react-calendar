import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

import { TIME_SLOTS, WEEK_DAYS } from "./constants";

const CalendarForm = (props) => {
  const [startState, setstartState] = useState(TIME_SLOTS[0]);
  const [endState, setendState] = useState(TIME_SLOTS[1]);
  const [dayState, setdayState] = useState(WEEK_DAYS[0]);

  const slotHandler = (e) => {
    e.preventDefault();
    const userSlotObject = { day: dayState, start: startState, end: endState };
    props.slotHandler(userSlotObject);
  };

  return (
    <>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>From</Form.Label>
          <Form.Select
            value={startState}
            onChange={(e) => setstartState(e.target.value)}
            aria-label="Default select example"
          >
            {TIME_SLOTS.map((slots) => {
              return <option value={slots}>{slots}</option>;
            })}
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>To</Form.Label>
          <Form.Select
            value={endState}
            onChange={(e) => setendState(e.target.value)}
            aria-label="Default select example"
          >
            {TIME_SLOTS.map((slots) => {
              return <option value={slots}>{slots}</option>;
            })}
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Weekday</Form.Label>
          <Form.Select
            value={dayState}
            onChange={(e) => setdayState(e.target.value)}
            aria-label="Default select example"
          >
            {WEEK_DAYS.map((day, index) => {
              return <option value={day}>{day}</option>;
            })}
          </Form.Select>
        </Form.Group>
        <Button onClick={slotHandler} variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};

export default CalendarForm;
