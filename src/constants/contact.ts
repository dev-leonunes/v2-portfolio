import {
  TbBrandGithub,
  TbBrandLinkedin,
  TbBrandWhatsapp,
} from "react-icons/tb";
import { FaDiscord } from "react-icons/fa";
import { MailIcon } from "lucide-react";

export const CONTACT = {
  Github: {
    url: "https://github.com/dev-leonunes/",
    icon: TbBrandGithub,
  },
  Linkedin: {
    url: "https://www.linkedin.com/in/leonardo-nunes-dev/",
    icon: TbBrandLinkedin,
  },
  Whatsapp: {
    url: "https://wa.me/557391225081",
    icon: TbBrandWhatsapp,
  },
  Email: {
    url: "mailto:leonunes07@outlook.com",
    icon: MailIcon,
  },
  Discord: {
    url: "https://discord.com/users/726271049209086094",
    icon: FaDiscord,
  },
};

export const WHATSAPP_CTA_MESSAGE =
  "Olá, Leonardo! Vi seu portfólio e gostaria de conversar sobre uma oportunidade ou projeto.";
