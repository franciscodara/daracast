import format from "date-fns/format";
import ptBR from "date-fns/locale/pt-BR";
import Link from "next/link";
import styles from "./styles.module.scss";

export default function Header() {
  const currentDate = format(new Date(), "EEEEEE, d MMMM", {
    locale: ptBR,
  });

  return (
    <header className={styles.headerContainer}>
      <Link href="/">
        <a>
          <img src="/logo.svg" alt="logo-daracast" />
        </a>
      </Link>
      <p>Aqui a pauta é livre!</p>
      <span>{currentDate}</span>
    </header>
  );
}
