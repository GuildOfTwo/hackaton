import React from "react";
import {
  getDaysInMonth,
  addDays,
  isSameDay,
  addMonths,
  subMonths,
  format,
  startOfWeek,
  isSameMonth,
  endOfMonth,
  startOfMonth,
  endOfWeek,
  isBefore,
  getDate
} from "date-fns";
import "./Calendar.css";
import { ButtonDefault } from "../ButtonDefault/ButtonDefault";

export class Calendar extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.generateBooking();
  }
  state = {
    currentMonth: new Date(),
    bookedDates: [],
  };

  generateBooking = () => {
    const { currentMonth } = this.state;
    let bookedDates = [];
    let dates = this.props.data;
    for (let i = 0; i < dates.length; i++) {
      const day = new Date(dates[i]).getDate()
      bookedDates.push(
        new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day - 1)
      );
    }
    this.setState(() => ({ bookedDates }));
  };

  isBooked = (date) => {
    const { bookedDates } = this.state;

    return bookedDates.some((bookedDate) => isSameDay(date, bookedDate));
  };

  nextMonth = () => {
    this.setState(() => ({
      currentMonth: addMonths(this.state.currentMonth, 1),
    }));
  };

  prevMonth = () => {
    this.setState(() => ({
      currentMonth: subMonths(this.state.currentMonth, 1),
    }));
  };

  renderButton = () => {
    return (
      <div className="buttonWrapper">
        <ButtonDefault lable="Оставить заявку" action={(e) => console.log(e)} />
      </div>
    );
  };

  renderHeader = () => {
    const dateFormat = "MMMM yyyy";
    return (
      <div className="calendarHeader row flex-middle">
        <div className="col col-start">
          <div className="icon" onClick={this.prevMonth}>
            chevron_left
          </div>
        </div>
        <div className="col col-center">
          <span>{format(this.state.currentMonth, dateFormat)}</span>
        </div>
        <div className="col col-end" onClick={this.nextMonth}>
          <div className="icon">chevron_right</div>
        </div>
      </div>
    );
  };

  renderDays = () => {
    const dateFormat = "EEEE";
    const days = [];
    let startDate = startOfWeek(this.state.currentMonth);
    for (let i = 0; i < 7; i++) {
      days.push(
        <div className="col col-center" key={i}>
          {format(addDays(startDate, i), dateFormat)}
        </div>
      );
    }
    return <div className="days row">{days}</div>;
  };

  renderCells = () => {
    const { currentMonth } = this.state;
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);

    const dateFormat = "d";
    const rows = [];

    let days = [];
    let day = startDate;
    let formattedDate = "";

    const thisDay = new Date();
    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        formattedDate = format(day, dateFormat);
        days.push(
          <div
            className={`col cell ${
              !isSameMonth(day, monthStart)
                ? "disabled"
                : this.isBooked(day)
                ? "selected"
                : ""
            }
            ${isBefore(day, thisDay) ? "disabled" : ""}`}
            key={day}
            id={day}
            onClick={() => {
              console.log(day);
            }}
          >
            <span className="number">{formattedDate}</span>
            <span className="bg">{formattedDate}</span>
          </div>
        );
        day = addDays(day, 1);
      }
      rows.push(
        <div className="row" key={day}>
          {days}
        </div>
      );
      days = [];
    }

    return <div className="body">{rows}</div>;
  };

  render() {
    return (
      <div className="calendar">
        {this.renderHeader()}
        {this.renderDays()}
        {this.renderCells()}
        {this.renderButton()}
      </div>
    );
  }
}
