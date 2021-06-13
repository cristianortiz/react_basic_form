import React from "react";
import { render, screen, fireEvent, getByTestId } from "@testing-library/react";
import App from "../App";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";

test("the app is shown correctly the first time", () => {
  /* const wrapper = render(<App />);
  wrapper.debug; */
  render(<App />);
  //the text exists in the document
  expect(screen.getByText("Pets Doctor Appointment")).toBeInTheDocument();
  //can be found with their data-testid
  expect(screen.getByTestId("title-app").textContent).toBe(
    "Pets Doctor Appointment"
  );
  //the title-app must be an <H1><H1/>
  expect(screen.getByTestId("title-app").tagName).toBe("H1");
  //testing other title text in the document
  expect(screen.getByText("Make an Appointment")).toBeInTheDocument();
  expect(screen.getByText("No Appointments")).toBeInTheDocument();
});
test("should render new titles when an appointment is created", () => {
  render(<App />); //mount the component
  const pet = screen.getByTestId("pet");
  const owner = screen.getByTestId("owner");
  const date = screen.getByTestId("date");
  const time = screen.getByTestId("time");
  const symptoms = screen.getByTestId("symptoms");
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

  //test the conditional title
  expect(screen.getByTestId("conditional-title").textContent).toBe(
    "Your Appointments"
  );
  expect(screen.getByTestId("conditional-title").textContent).not.toBe(
    "No Appointments"
  );
});

test("should show the new appointed created", async () => {
  render(<App />); //mount the component
  //this testid is marked in <Appo /> component, the findAllByTestId is async method, in this case
  //wait and get the element in the DOM from another component
  const appointment = await screen.findAllByTestId("appointment");
  //check the async calling complete (or promised completed)
  console.log(appointment.toString());
  //to show and check the content obtained from another component, snapshot will create a file with that content
  //expect(appointment).toMatchSnapshot();

  //to test if the created appoint div contains the delete button
  expect(screen.getByTestId("btn-delete").tagName).toBe("BUTTON");
  expect(screen.getByTestId("btn-delete")).toBeInTheDocument();

  //test the data values of the new created appointment
  expect(screen.getByText("Hook")).toBeInTheDocument();
});

test('should delete an appointment with delete button from "Your Appointment" div', () => {
  render(<App />); //mount the component
  //to test if the created appoint div contains the delete button
  const delete_button = screen.getByTestId("btn-delete");
  expect(delete_button.tagName).toBe("BUTTON");
  expect(delete_button).toBeInTheDocument();

  //simulate click delete button
  userEvent.click(delete_button);
  //if the appointment was deleted should not be a delete button
  expect(delete_button).not.toBeInTheDocument();
  //if the appointment was deleted should not be any appointment related element or data
  expect(screen.queryByText("Hook")).not.toBeInTheDocument();
  expect(screen.queryByTestId("appointment")).not.toBeInTheDocument();
});
