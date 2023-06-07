import styles from './styles.module.sass';
import { FormLandlord } from './FormLandlord';
import { AddNewObject } from './addNewObject';
import { ObjectsList } from './objectsList';
import { FormRenter } from './FormRenter';
import { Routes, Route } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { ButtonBack } from '../ButtonDefault/ButtonBack';

export const PersonalPage = () => {
  const role = localStorage.getItem('role');

  return (
    <div className={styles.element}>
      <ButtonBack />
      
      {role == 'RENTER' ? (
        <FormRenter />
      ) : (
        <>
          {' '}
          <nav className={styles.nav}>
            <NavLink to="/lk" className={styles.navLink}>Список объектов</NavLink>
            <NavLink to="/lk/profile" className={ styles.navLink}>Редактировать профиль</NavLink>
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
            <Route path="profile" element={<FormLandlord />} />
          </Routes>
        </>
      )}
    </div>
  );
};
