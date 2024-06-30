import styles from "./App.module.css";
import Header from "./Components/Header";
import LogoDiv from "./Components/LogoDiv";
import AboutSection from "./Components/AboutSection";
import WorkSection from "./Components/WorkSection";
import ContactForm from "./Components/ContactForm";

function App() {
  return (
    <section className={styles.mainBox}>
      <Header />
      <LogoDiv />
      <AboutSection />
      <WorkSection />
      <ContactForm />
    </section>
  );
}

export default App;
