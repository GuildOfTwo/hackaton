import { PersonalForm } from "./PersonalForm";
import styles from "./styles.module.sass";

export const PersonalTenant = () => {
  return (
    <div className={styles.element}>
      <PersonalForm />
      <section className={styles.section}>Список отправленных заявок</section>
    </div>
  );
};
