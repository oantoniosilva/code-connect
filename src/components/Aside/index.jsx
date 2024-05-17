import Image from "next/image"
import styles from "./aside.module.css"
import logoImg from "@/assets/logo.png"

export const Aside = () => {
  return (
    <aside className={styles.aside}>
      <Image src={logoImg} alt="" width={128} height={40} priority />
    </aside>
  )
}