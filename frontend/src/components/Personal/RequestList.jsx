import { useEffect, useState } from "react";
import requestList from "./requestList.module.sass";
import { apiBooking } from "../../utils/api/bookingApi";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
export const RequestList = () => {
  const token = localStorage.getItem("token");
  const id = localStorage.getItem("id"); //15, build 54
  const [booking, setBooking] = useState([]);

  console.log(booking);
  const obj = useSelector((state) => state.cards.objects);
  useEffect(() => {
    if (Array.isArray(obj)) {
      apiBooking.getBookings(token).then((res) => {
        let renter = res.filter((el) => el.renter == id);
        let result = renter.filter((obj1) =>
          obj.some((obj2) => obj1.building === obj2.id)
        );
        setBooking(result);
      });
    }
  }, [id, obj]);


  return (
    <section className={requestList.section}>
      <h2 className={requestList.title}>Все заявки</h2>

{booking.map((el, index) => (
    <div className={requestList.item} key={index}>
        <p className={requestList.date}>{el.check_in}</p>
        <p className={requestList.status}>{el.approve}</p>
        <NavLink to={el.building} className={requestList.navLink}>
          название
        </NavLink>
      </div>
))}
      

    </section>
  );
};
