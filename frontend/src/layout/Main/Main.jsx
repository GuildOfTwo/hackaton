import { HomePage } from "../../pages/Home/Home";
import styles from "./styles.module.sass";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { AuthPage } from "../../pages/Auth/Auth";
import { NotFoundPage } from "../../pages/NotFound/NotFound";
import { AgreementPage } from "../../pages/Agreement/Agreement";
import { SpacePage } from "../../pages/Space/Space";
import { PersonalAreaPage } from "../../pages/Personal/PersonalArea";
import { NewObjectPage } from "../../pages/NewObject/NewObject";

export const Main = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  return (
    <main className={styles.main}>
      <div className={styles.main__wrapper}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route exact path="/auth" element={<AuthPage />} />
        <Route path='/*' element={<NotFoundPage/>} />
        <Route exact path="/agreement" element={<AgreementPage />} />
        <Route exact path="/space/:id" element={<SpacePage />}/>
        <Route exact path="lk" element={<PersonalAreaPage />}/>
        <Route exact path="new" element={<NewObjectPage lable='Добавить новый объект'/>}/>
        <Route exact path="edit/:id" element={<NewObjectPage lable='Внести изменения' edit={true}/>}/>
      </Routes>
      </div>
    </main>
  );
};
