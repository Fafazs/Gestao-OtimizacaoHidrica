import type { OnboardingOption } from "../types/onboarding";
import plantIcon from '../assets/images/vasoIcon.png'
import homeIcon from '../assets/images/homeIcon.png';
import tratorIcon from "../assets/images/tratorIcon.png";

export const onboardingOptions: OnboardingOption[] = [
  {
    id: 1,
    title: "Quero começar a plantar",
    icon: plantIcon,
  },
  {
    id: 2,
    title: "Tenho uma pequena horta",
    icon: homeIcon,
  },
  {
    id: 3,
    title: "Sou pequeno agricultor",
    icon: tratorIcon,
  },
];
