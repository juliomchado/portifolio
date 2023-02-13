import style from './styles.module.scss';

export default function TechnologySection() {


    return (
        <section className={style.technologySection}>
            <h2>TECNOLOGIAS</h2>
            <ul>
                <li className={style.technology}>
                    <p><span>Linguagens: </span>Javascript/Typescript, SQL, C#, C, HTML5, CSS3, Java.</p>
                </li>
                <li className={style.technology}>
                    <p><span>Ferramentas, bibliotecas, frameworks: </span> Axios, Node, ReactJS, Yup, Cors, bcrypt, nodeMailer, rate-limiter-flexible, styled-components, React Native, Jest, Express.</p>
                </li>
                <li className={style.technology}>
                    <p><span>Projetos educacionais e de portfólio - </span>Marketing digital, Design U.I, U.X, Git, Figma, Docker.</p>
                </li>
                <li className={style.technology}>
                    <p><span>Design patterns e princípios de programação: </span> M.V.C, T.D.D, D.D.D, S.O.L.I.D, P.O.O, P.F. </p>
                </li>
            </ul>
        </section>

    )
}