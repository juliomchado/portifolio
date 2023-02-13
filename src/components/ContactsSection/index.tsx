import { faSquareEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faSquareGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

import style from './styles.module.scss';

export default function ContactsSection() {

    return (
        <section className={style.contactsSection}>
            <h2>CONTATOS</h2>
            <p>Clique no ícone para acessar os contatos ou no botão abaixo</p>

            <ul>
                <li>
                    <Link href="#">
                        <FontAwesomeIcon icon={faLinkedin} width={48}/>
                        <p>/in/juliomchado/</p>
                    </Link>
                </li>
                <li>
                    <Link href="#">
                        <FontAwesomeIcon icon={faSquareEnvelope} width={48}/>
                        <p>juliocarlos00@hotmail.com</p>
                    </Link>
                </li>
                <li>
                    <Link href="#">
                        <FontAwesomeIcon icon={faSquareGithub} width={48} />
                        <p>/juliomchado</p>
                    </Link>
                </li>
            </ul>

        </section>
    )
}