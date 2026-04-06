export const contactDetails = {
  phoneLabel: "+254 712 909 475",
  phoneHref: "tel:+254712909475",
  whatsappLabel: "WhatsApp",
  whatsappHref: "https://wa.me/254712909475",
  emailLabel: "motanyac@gmail.com",
  emailHref: "mailto:motanyac@gmail.com",
  location: "Mombasa, Kenya",
};

export const quickLinks = [
  {
    title: "Phone",
    value: contactDetails.phoneLabel,
    href: contactDetails.phoneHref,
    iconSrc: "/icons/phone1.svg",
    note: "Best for urgent project discussions.",
  },
  {
    title: "Email",
    value: contactDetails.emailLabel,
    href: contactDetails.emailHref,
    iconSrc: "/icons/gmail2.png",
    note: "Ideal for briefs, quotes, and attachments.",
  },
  {
    title: "WhatsApp",
    value: contactDetails.whatsappLabel,
    href: contactDetails.whatsappHref,
    iconSrc: "/icons/whatsapp.svg",
    note: "Great for quick questions and informal chats.",
  },
];
