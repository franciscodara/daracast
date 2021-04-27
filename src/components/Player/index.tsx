import styles from './styles.module.scss';

export default function Player () {

    return (
        <div className={styles.playerContainer}>
            <header>
                <img src="/playing.svg" alt="Tocando..."/>
                <strong>Tocando...</strong>
            </header>

        <div className={styles.emptyPlayer}>
            <strong>Selecione um Podcast</strong>
        </div>

        <footer className={styles.empty}>
            <div className={styles.progress}>
                <span>00:00</span>
                <div className={styles.slider}>
                    <div className={styles.emptySlider}  />
                </div>
                <span>00:00</span>
            </div>

            <div className={styles.buttons}>
                <button type="button">
                    <img src="/shuffle.svg" alt="embaralhar"/>
                </button>
                <button type="button">
                    <img src="/play-previous.svg" alt="Voltar"/>
                </button>
                <button type="button" className={styles.playButton}>
                    <img src="/play.svg" alt="Play"/>
                </button>
                <button type="button">
                    <img src="/play-next.svg" alt="Próxima"/>
                </button>
                <button type="button">
                    <img src="/repeat.svg" alt="Repetir"/>
                </button>
            </div>

        </footer>

        </div>
    );
}