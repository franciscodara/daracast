import format from 'date-fns/format';
import ptBR from 'date-fns/locale/pt-BR';
import styles from './styles.module.scss';

export default function Header () {
    const currentDate = format(new Date(), 'EEEEEE, d MMMM', {
        locale: ptBR
    });

    return (
        <header className={styles.headerContainer}>
            <img src="logo.svg" alt="logo-daracast"/>
            <p>Aqui a pauta é livre!</p>
            <span>{currentDate}</span>
        </header>
    );
}