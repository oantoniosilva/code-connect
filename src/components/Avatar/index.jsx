import Image from "next/image"

import styles from "./avatart.module.css"

export const Avatar = ({ author, imageSrc }) => {
  return (
    <div className={styles.avatar}>
      <Image src={imageSrc} alt={`Avatar do(a) ${author}`} width={32} height={32} />
      <span>@{author}</span>
    </div>
  )
}