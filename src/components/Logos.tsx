import Image from "next/image"
import Instagram from "@/../public/images/instagram.svg"
import Facebook from "@/../public/images/facebook.svg"
import Twitter from "@/../public/images/twitter.svg"

export function Logos() {
  return (
    <div className="logos">
      <Image src={ Instagram } alt={ "Logo do Instagram" }></Image>
      <Image src={ Facebook } alt={ "Logo do Facebook" }></Image>
      <Image src={ Twitter } alt={ "Logo do Twitter" }></Image>
    </div>
  )
}