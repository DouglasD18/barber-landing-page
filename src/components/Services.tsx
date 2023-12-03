import Hair from "@/../public/images/hair.svg"
import Beard from "@/../public/images/beard.svg"
import HairAndBeard from "@/../public/images/hair-and-beard.svg"
import { ServicesCard } from "./ServicesCard"

export function Services() {
  return (
    <div className="services">
      <h2>Serviços</h2>
      <p>Lorem ipsum dolor sit amet consectetur. Ornare eget pellentesque proin risus. Orci proin morbi vestibulum convallis leo vestibulum mus. Non duis augue eros mattis a quis sem sodales.</p>
      <div className="services-cards">
        <ServicesCard image={ Hair } description={"Corte cabelo"} price={"45,00"} />
        <ServicesCard image={ Beard } description={"Barba completo"} price={"35,00"} />
        <ServicesCard image={ HairAndBeard } description={"Cabelo e barba"} price={"70,00"} />
      </div>
    </div>
  )
}