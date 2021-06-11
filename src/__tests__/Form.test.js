import React from "react";
import { render, screen, fireEvent, getByTestId } from "@testing-library/react";
import Form from "../component/Form";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";

//to simulates the function required in the component
const createAppo = jest.fn();
/* //to unmount components through tests, not necessary in last react testing versions
afterEach(cleanup); */

test("<Form /> testing the correct component load", () => {
  /* mounting Form component and show their html structure
  const wrapper = render(<Form />);
  wrapper.debug(); */
  render(<Form createAppo={createAppo} />);
  expect(screen.getByText("Make an Appointment")).toBeInTheDocument();
  //testing heading, get an element by id, nedd to setup a data-testid in the component
  const title = screen.getByTestId("title");
  expect(title.tagName).toBe("H2");
  expect(title.tagName).not.toBe("H1");
  expect(title.textContent).toBe("Make an Appointment");

  //test submit button
  const submit_button = screen.getByTestId("btn-submit");
  expect(submit_button.tagName).toBe("BUTTON");
  expect(submit_button.textContent).toBe("Send");
});

//validates form inputs
test("should validates empty fields alert msg", () => {
  render(<Form createAppo={createAppo} />);
  //click en submit button
  const submit_button = screen.getByTestId("btn-submit");
  fireEvent.click(submit_button);
  //check for alert msg
  expect(screen.getByTestId("alert").textContent).toBe(
    "All fields are mandatory"
  );
});

test("should test the user inputs in the form ", () => {
  render(<Form createAppo={createAppo} />);
  const pet = screen.getByTestId("pet");
  const owner = screen.getByTestId("owner");
  const date = screen.getByTestId("date");
  const time = screen.getByTestId("time");
  const symptoms = screen.getByTestId("symptoms");
  /* //to write in form inputs using fireEvent
  fireEvent.change(pet, {
    target: { value: "Hook" }, //write "Hook" in the 'pet' input
  });
  fireEvent.change(owner, {
    target: { value: "Juanito" }, //write "Hook" in the 'pet' input
  }); */

  //using userEvent
  userEvent.type(pet, "Hook");
  userEvent.type(owner, "Juanito");
  userEvent.type(date, "2021-02-02");
  userEvent.type(time, "09:00");
  userEvent.type(symptoms, "do not wnats to eat");
  //simulates click and writes the above input
  const submit_button = screen.getByTestId("btn-submit");
  userEvent.click(submit_button);

  //test for do not show the alert when the user submit the form with corrects inputs values
  const alert = screen.queryByTestId("alert"); //query for a conditional element, maybe it does not exists
  expect(alert).not.toBeInTheDocument();
});
