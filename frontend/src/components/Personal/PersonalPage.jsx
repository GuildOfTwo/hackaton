import styles from "./styles.module.sass";
import { FormLandlord } from "./FormLandlord";
import { AddNewObject } from "./addNewObject";
import { ObjectsList } from "./objectsList";
import { FormRenter } from "./FormRenter";

export const PersonalPage = () => {
  const role = localStorage.getItem("role");

  return (
    <div className={styles.element}>
      {role == "RENTER" ? (
        <FormRenter />
      ) : (
        <>
          {" "}
          <FormLandlord />
          <div className={styles.objectsSection}>
            <AddNewObject />
            <ObjectsList />
          </div>
        </>
      )}
    </div>
  );
};
