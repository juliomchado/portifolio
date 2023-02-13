import Link from "next/link";

import style from './styles.module.scss';

export function Header() {
    return (

        <header className={style.header}>
            <nav>
                <Link href="#">PRINCIPAL</Link>
                <Link href="#">SOBRE MIM</Link>
                <Link href="#">PROJETOS</Link>
                <Link href="#">TECNOLOGIAS</Link>
                <Link href="#">CONTATOS</Link>
                <Link
                    href="#"
                    className={style.action_link}
                >
                    QUERO UM PROJETO
                </Link>
            </nav>
        </header>
    )
}