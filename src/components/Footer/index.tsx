import Link from "next/link";


import styles from './styles.module.scss';

export default function Footer() {


    return (

        <footer className={styles.footer}>
            <div className={styles.footerContainer}>
                <div className={styles.linksContainer}>
                    <div>
                        <h6>SEÇÕES</h6>
                        <div className={styles.linksDiv}>
                            <ul>
                                <li><Link href="#">Principal</Link></li>
                                <li><Link href="#">Sobre mim</Link></li>
                                <li><Link href="#">Projetos</Link></li>

                            </ul>
                            <ul>
                                <li><Link href="#">Tecnologias</Link></li>
                                <li><Link href="#">Contatos</Link></li>
                                <li><Link href="#">Quero um projeto</Link></li>
                            </ul>
                        </div>

                    </div>
                    <div>
                        <h6>Outros</h6>
                        <ul>
                            <li><Link href="#">Termos e Condições</Link></li>
                            <li><Link href="#">Política de Privacidade</Link></li>
                        </ul>
                    </div>
                </div>
                <div className={styles.copyrightContainer}>
                    <p>Copyright © 2023 Julio Machado</p>
                </div>
            </div>

        </footer>
    )

}