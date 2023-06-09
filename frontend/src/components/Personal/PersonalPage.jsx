import styles from "./styles.module.sass";
import { FormLandlord } from "./FormLandlord";
import { AddNewObject } from "./addNewObject";
import { ObjectsList } from "./objectsList";
import { FormRenter } from "./FormRenter";
import { Routes, Route } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { ButtonBack } from "../ButtonDefault/ButtonBack";
import { RequestList } from "./RequestList";
import { RequestLandlordList } from "./RequestLandlordList";

export const PersonalPage = () => {
  const role = localStorage.getItem("role");

  return (
    <div className={styles.element}>
      <ButtonBack />

      {role == "RENTER" ? (
        <>
          {" "}
          <nav className={styles.nav}>
            <NavLink to="/lk" className={styles.navLink}>
              Список заявок
            </NavLink>
            <NavLink to="/lk/profile" className={styles.navLink}>
              Редактировать профиль
            </NavLink>
          </nav>
          <Routes>
            <Route
              index
              element={
                <div className={styles.objectsSection}>
                  <RequestList />
                </div>
              }
            />
            <Route path="profile" element={<FormRenter />} />
          </Routes>
        </>
      ) : (
        <>
          {" "}
          <nav className={styles.nav}>
          <NavLink to="/lk/requests" className={({ isActive }) => isActive ? styles.navLinkActive : styles.navLink }>
              Заявки
            </NavLink>
            <NavLink exact to="/lk" className={({ isActive }) => isActive ? styles.navLinkActive : styles.navLink }>
              Список объектов
            </NavLink>
            <NavLink to="/lk/profile" className={({ isActive }) => isActive ? styles.navLinkActive : styles.navLink }>
              Редактировать профиль
            </NavLink>
          </nav>
          <Routes>
            <Route
              index
              element={
                <div className={styles.objectsSection}>
                  <AddNewObject />
                  <ObjectsList />
                </div>
              }
            />
              <Route
              path="requests"
              element={
                <div className={styles.objectsSection}>
                 <RequestLandlordList />
                </div>
              }
            />
            <Route path="profile" element={<FormLandlord />} />
          </Routes>
        </>
      )}
    </div>
  );
};
