import { Mail, MapPin, Phone } from 'lucide-react';

const contactDetails = [
  {
    icon: MapPin,
    text: 'Opp DHA Phase-2, Near Giga MAll, Main GT Road, Islamabad',
    href: 'https://maps.app.goo.gl/yV5dpC1QVenJtNoi9',
  },
  {
    icon: Phone,
    text: '+92 321 3330097',
    href: 'tel:+92 321 3330097',
  },
  {
    icon: Mail,
    text: 'info@arfstone.com',
    href: 'mailto:m.usman.micro@gmail.com',
  },
];

export function ContactSection() {
  return (
    <div className="w-full mt-8">
      <div className="space-y-4">
        {contactDetails.map((detail, index) => (
          <a key={index} href={detail.href} className="flex items-center gap-4 group">
            <div className="bg-secondary/80 text-primary p-3 rounded-lg group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
              <detail.icon className="h-5 w-5" />
            </div>
            <span className="text-muted-foreground group-hover:text-foreground transition-colors">{detail.text}</span>
          </a>
        ))}
      </div>
    </div>
  );
}
