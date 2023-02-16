
import Link from 'next/link';
import style from './styles.module.scss';
import LinkLikeButton from '../LinkLikeButton';


export default function ImageSection() {

    return (
        <section className={style.imageSection}>
            <div className={style.imageContainer}>
                <h2>Olá, meu nome é Julio Machado e seja bem-vindo(a) ao meu site de portifólio</h2>
                <p>Sou um desenvolvedor fullstack altamente capacitado com 4 anos de experiência em projetos internacionais e nacionais. Utilizo uma ampla gama de tecnologias e frameworks para criar soluções inovadoras e eficientes para meus clientes.</p>
                <p>Já trabalhei em empresas reconhecidas, como Aubay, Oracle Retail, Adx3 e Golden Wealth Management, e participei do sucesso de projetos complexos e desafiantes, incluindo um projeto para o governo português da AMA. Aqui, você pode ver alguns de meus trabalhos anteriores e avaliar a qualidade do meu trabalho.</p>
                <p>Se você está procurando por um desenvolvedor dedicado e apaixonado, não hesite em entrar em contato. Clique no botão abaixo para me enviar detalhes sobre seu projeto ou vaga em aberto e vamos conversar sobre como posso ajudá-lo a alcançar seus objetivos.</p>
                <LinkLikeButton href="#" size="lg" text="Entrar em contato" />
            </div>
        </section>
    )
}