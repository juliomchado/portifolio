import Link from "next/link";
import style from './styles.module.scss';


interface LinkLikeButtonProps {
    text: string;
    size?: "md" | "lg"
    href: string;
}

export default function LinkLikeButton({ text, href, size = "md" }: LinkLikeButtonProps) {

    const className = `${style.linkButton} ${style[size]}`;

    var textUpperCase = text.toUpperCase();
  
    return (
      <Link className={className} href={href}>
        {textUpperCase}
      </Link>
    );
}