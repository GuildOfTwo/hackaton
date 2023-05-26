import styles from "./styles.module.sass";
import { PersonalForm } from "./PersonalForm";
import { AddNewObject } from "./addNewObject";
import { ObjectsList } from "./objectsList";

export const PersonalPage = () => { 
  return (
    <div className={styles.element}>
      <PersonalForm />
      <div className={styles.objectsSection}>
        <AddNewObject />
        <ObjectsList />
      </div>
    </div>
  );
};
