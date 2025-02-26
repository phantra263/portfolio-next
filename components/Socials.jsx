import Link from "next/link";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const socialLinks = [
    {
        name: "Facebook",
        href: "https://www.facebook.com/profile.php?id=100000000000000",
        icon: <FaFacebook />
    },
    {
        name: "Github",
        href: "https://www.github.com/profile.php?id=100000000000000",
        icon: <FaGithub />
    },
    {
        name: "Linkedin",
        href: "https://www.linkedin.com/profile.php?id=100000000000000",
        icon: <FaLinkedin />
    }
]
const Socials = ({ containerStyles, iconStyles }) => {
    return (
        <div className={containerStyles}>
            {socialLinks.map((link) => (
                <Link href={link.href} key={link.name} className={iconStyles}>
                    {link.icon}
                </Link>
            ))}
        </div>
    )
}

export default Socials;
