import Image from "next/image"
import Image1 from "@/../public/images/image1.svg"
import Image2 from "@/../public/images/image2.svg"
import Image3 from "@/../public/images/image3.svg"

export function About() {
  return (
    <div className="about">
      <div className="about-images">
        <Image src={Image1} alt={"Imagem de uma barbearia"} />
        <Image src={Image2} alt={"Imagem de um corte de cabelo"} />
        <Image src={Image3} alt={"Imagem de um corte de barba"} />
      </div>

      <div className="about-content">
        <h2>SOBRE</h2>
        <p>Lorem ipsum dolor sit amet consectetur. Ornare eget pellentesque proin risus. Orci proin morbi vestibulum convallis leo vestibulum mus. Non duis augue eros mattis a quis sem sodales.</p>
        <p>Horário de funcionamento: 09:00 às 19:00</p>
      </div>
    </div>
  )
}