import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { CountdownTimer } from '@/components/countdown-timer';
import { EmailSubscriptionForm } from '@/components/email-subscription-form';
import { CustomInquiryForm } from '@/components/custom-inquiry-form';
import { ContactSection } from '@/components/contact-section';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

const stoneCollection = [
  {
    name: 'Calacatta Vagli',
    description: 'Classic Italian marble with bold, elegant veining.',
    image: 'https://placehold.co/600x400.png',
    hint: 'marble texture'
  },
  {
    name: 'Absolute Black',
    description: 'A solid, deep black granite for a modern statement.',
    image: 'https://placehold.co/600x400.png',
    hint: 'granite slab'
  },
  {
    name: 'Taj Mahal',
    description: 'Creamy quartzite with gentle, flowing caramel veins.',
    image: 'https://placehold.co/600x400.png',
    hint: 'quartzite countertop'
  },
   {
    name: 'Blue Bahia',
    description: 'An exotic granite featuring a stunning blue hue.',
    image: 'https://placehold.co/600x400.png',
    hint: 'blue stone'
  },
];

export default function Home() {
  const launchDate = new Date();
  launchDate.setDate(launchDate.getDate() + 30); // Set launch for 30 days from now

  return (
    <div className="flex flex-col min-h-dvh bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <section id="home" className="relative h-screen flex items-center justify-center text-center text-white">
           <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
              src="https://videos.pexels.com/video-files/7578544/7578544-hd_1920_1080_25fps.mp4"
            />
            <div className="absolute inset-0 bg-black/60" />
          </div>
          <div className="relative z-10 p-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-headline tracking-tighter">
              Crafted by Nature, Perfected for You
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-stone-200">
              Arfstone is coming soon to redefine luxury with the finest marble and granite selections from IS and Stone.
            </p>
            <CountdownTimer targetDate={launchDate} />
             <div className="mt-8">
               <EmailSubscriptionForm />
             </div>
          </div>
        </section>

        <section id="about" className="py-20 md:py-32 bg-secondary/30">
          <div className="container grid md:grid-cols-2 gap-12 items-center">
            <div>
               <h2 className="text-3xl md:text-4xl font-bold font-headline">The Arfstone Legacy</h2>
               <p className="mt-4 text-muted-foreground text-lg">
                For generations, IS and Stone has been synonymous with quality and craftsmanship. Arfstone is our new chapter, a curated collection of the world's most exquisite natural stones, sourced with passion and precision. We believe every slab has a story, and our mission is to bring that story into your home.
               </p>
               <Button variant="outline" className="mt-6" asChild>
                <a href="#contact">Learn More <ArrowRight className="ml-2" /></a>
               </Button>
            </div>
            <div className="relative h-80 rounded-lg overflow-hidden shadow-xl">
              <Image src="https://placehold.co/800x600.png" alt="Artisan carving stone" layout="fill" objectFit="cover" data-ai-hint="artisan carving" />
            </div>
          </div>
        </section>

        <section id="collection" className="py-20 md:py-32">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold font-headline">Our Collection</h2>
              <p className="mt-2 max-w-2xl mx-auto text-muted-foreground">
                A preview of the timeless beauty and exceptional quality that awaits.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stoneCollection.map((stone) => (
                <Card key={stone.name} className="overflow-hidden group border-primary/20 hover:border-primary/50 transition-all duration-300 transform hover:-translate-y-2">
                   <CardContent className="p-0">
                    <div className="relative h-64">
                       <Image src={stone.image} alt={stone.name} layout="fill" objectFit="cover" data-ai-hint={stone.hint} />
                       <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                    </div>
                     <div className="p-4 bg-secondary/20">
                      <h3 className="font-bold font-headline text-xl">{stone.name}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{stone.description}</p>
                     </div>
                   </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="inquiry" className="py-20 md:py-32 bg-secondary/30">
          <div className="container grid md:grid-cols-2 gap-16 items-center">
             <div className="max-w-xl">
                <h2 className="text-3xl md:text-4xl font-bold font-headline">Bespoke Inquiries</h2>
                <p className="mt-4 text-muted-foreground text-lg">
                  Have a unique vision? Our master artisans can source and custom-cut stone to your exact specifications, ensuring your project is as unique as you are. Let's create something extraordinary together.
                </p>
                <ContactSection />
             </div>
             <div>
              <CustomInquiryForm />
             </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
