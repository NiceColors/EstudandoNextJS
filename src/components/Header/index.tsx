import styles from './styles.module.scss'

export function Header() {
    return (
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <h1>XIV Interfaces</h1>
                <nav>
                    <a className={styles.active} href="">Home</a>
                    <a href="">Posts</a>
                </nav>
            </div>
        </header>
    );
}