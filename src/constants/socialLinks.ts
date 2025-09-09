// Types
export interface SocialLink {
  name: string
  href: string
  icon: string
  ariaLabel: string
}

// Centralized social links configuration
export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: 'GitHub',
    href: 'https://github.com/bkamkl9',
    icon: 'mdi:github',
    ariaLabel: "Visit Kamil's GitHub profile"
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/kamil-bartczak-dev/',
    icon: 'mdi:linkedin',
    ariaLabel: "Visit Kamil's LinkedIn profile"
  },
  {
    name: 'Medium',
    href: 'https://medium.com/@kamilbartczak2023',
    icon: 'mdi:medium',
    ariaLabel: "Visit Kamil's Medium blog"
  }
]
