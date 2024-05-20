import Image from "next/image"

import styles from "./avatart.module.css"

export const Avatar = ({ name, imageSrc }) => {
  return (
    <div className={styles.avatar}>
      <Image 
        src={imageSrc} 
        alt={`Avatar do(a) ${name}`} 
        width={32} 
        height={32} 
      />
      <span>@{name}</span>
    </div>
  )
}