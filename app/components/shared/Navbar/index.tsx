import styles from "./navbar.module.scss"
import Image from "next/image"
import logo from "../../../../public/assets/logo.png"
import Link from "next/link"

const Navbar = () => {
  return (
    <div className={ styles["navbar"] }>
        <div className="container">
            <div className={ styles["navbar__content"] }>
                <div className={ styles["navbar__content__left"] }>
                    <Link href="/"><Image src={ logo } height={100} width={100} alt="logo" /></Link>
                    <div className={ styles["navbar__content__left__links"] }>
                        <Link href="/invest">Invest</Link>
                        <Link href="/save">Save</Link>
                        <Link href="/invest">Company</Link>
                        <Link href="/invest">Contact Us</Link>
                    </div>
                </div>
                <div className={ styles["navbar__content__right"] }>
                   <div className={ styles["navbar__content__right__links"] }>
                    <Link className={ styles["navbar__content__right__links--login"] }  href="/sign-in">Login</Link>
                    <Link className={ styles["navbar__content__right__links--register"] } href="/sign-up">Create a free account</Link>
                   </div>
                </div>
                { /* Navbar hamburger on mobile goes here */ }
            </div>
        </div>
    </div>
  )
}

export default Navbar