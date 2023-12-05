import { Logos } from "./Logos"
import Image from "next/image"
import BarberLogo from "@/../public/images/barber-logo.svg"
import BackgroundImage from "@/../public/images/background-img.svg"

export function Header() {
  return (
    <header className="header" style={{ backgroundImage: `url(${BackgroundImage.src})`, backgroundSize: "cover", zIndex: 1, position: "absolute" }}>
      <nav className="header-nav">
        <Logos />
        <Image src={ BarberLogo } alt={ "Logo da barbearia" } className="barber-logo" />
        <button className="header-btn">
          Agendar horário
        </button>
      </nav>

      <div className="header-content">
        <h1>ESTILO É UM REFLEXO DA SUA ATITUDE E SUA PERSONALIDADE.</h1>
        <p>Horário de funcionamento: 09:00 às 19:00</p>
        <button className="content-btn">
          Agendar horário
        </button>
      </div>
    </header>
  )
}
