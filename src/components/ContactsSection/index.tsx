import { faSquareEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faSquareGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

import style from './styles.module.scss';
import LinkLikeButton from '../LinkLikeButton';

export default function ContactsSection() {

    return (
        <section className={style.contactsSection}>
            <h2>CONTATOS</h2>
            <p>Clique no ícone para acessar os contatos ou no botão abaixo</p>

            <ul>
                <li>
                    <Link href="#">
                        <FontAwesomeIcon icon={faLinkedin} width={48} />
                        <p>/in/juliomchado/</p>
                    </Link>
                </li>
                <li>
                    <Link href="#">
                        <FontAwesomeIcon icon={faSquareEnvelope} width={48} />
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

            <span>OU</span>

            <div>
                <p> Clique no botão abaixo para me enviar detalhes sobre seu projeto ou vaga em aberto e vamos conversar sobre como posso ajudá-lo a alcançar seus objetivos.</p>

                <LinkLikeButton href="#" size="md" text="Entrar em contato" />
            </div>
        </section>
    )
}