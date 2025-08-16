import { Mail, MapPin, Phone } from 'lucide-react';

const contactDetails = [
  {
    icon: MapPin,
    text: '123 Stone Street, Rockington, USA 12345',
    href: '#',
  },
  {
    icon: Phone,
    text: '(123) 456-7890',
    href: 'tel:123-456-7890',
  },
  {
    icon: Mail,
    text: 'contact@arfstone.com',
    href: 'mailto:contact@arfstone.com',
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
