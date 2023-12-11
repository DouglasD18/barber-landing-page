import Image from "next/image";
import { Logos } from "./Logos";
import BarberLogo from "@/../public/images/barber-logo.svg";
import WhatsApp from "@/../public/images/whatsapp.svg";

export function Footer() {
  return (
    <div>
      <div className="principal-footer">
        <Logos />
        <Image src={ BarberLogo } alt={ "Logo da barbearia" } className="barber-logo" />
        <div>Copyright© 2023 | Dev Barbearia  - Todos os direitos reservados.</div>
      </div>
      <button className="whats-button">
        <Image src={ WhatsApp } alt={"WhatsApp logo"} className="whats-logo" />
      </button>
    </div>
  )
}