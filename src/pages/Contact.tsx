
import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import CallToAction from '@/components/CallToAction';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Le nom doit contenir au moins 2 caractères.' }),
  email: z.string().email({ message: 'Veuillez entrer une adresse email valide.' }),
  phone: z.string().min(10, { message: 'Veuillez entrer un numéro de téléphone valide.' }),
  subject: z.string().min(3, { message: 'Veuillez entrer un sujet.' }),
  message: z.string().min(10, { message: 'Votre message doit contenir au moins 10 caractères.' }),
});

type FormValues = z.infer<typeof formSchema>;

const Contact = () => {
  const { toast } = useToast();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    },
  });

  const onSubmit = (data: FormValues) => {
    // In a real application, you would send the form data to a backend
    console.log('Form submitted:', data);
    
    toast({
      title: "Message envoyé !",
      description: "Nous vous répondrons dans les plus brefs délais.",
    });
    
    form.reset();
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Page Header */}
      <div className="bg-darkblue-900 text-white pt-32 pb-20">
        <div className="container px-4 md:px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contactez-nous</h1>
          <p className="text-xl text-white/80 max-w-2xl">
            Vous avez une question, un projet ou simplement envie de nous dire bonjour ?
            N'hésitez pas à nous contacter.
          </p>
        </div>
      </div>

      <div className="container px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
            <h2 className="text-2xl font-bold text-darkblue-900 mb-6">Envoyez-nous un message</h2>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nom</FormLabel>
                        <FormControl>
                          <Input placeholder="Votre nom" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="votre@email.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Téléphone</FormLabel>
                        <FormControl>
                          <Input type="tel" placeholder="Votre numéro" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Sujet</FormLabel>
                        <FormControl>
                          <Input placeholder="Sujet de votre message" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Détaillez votre projet ou votre demande..." 
                          className="min-h-[150px]" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button type="submit" className="w-full bg-red-600 hover:bg-red-700">
                  <Send className="mr-2 h-4 w-4" />
                  Envoyer le message
                </Button>
              </form>
            </Form>
          </div>
          
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold text-darkblue-900 mb-6">Nos coordonnées</h2>
            
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="bg-red-100 p-3 rounded-full text-red-600">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-medium text-lg text-darkblue-900">Adresse</h3>
                  <p className="text-gray-600 mt-1">
                    123 Rue de l'Innovation<br />
                    75000 Paris, France
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-red-100 p-3 rounded-full text-red-600">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-medium text-lg text-darkblue-900">Email</h3>
                  <p className="text-gray-600 mt-1">
                    <a href="mailto:contact@i-numera.com" className="hover:text-red-600 transition-colors">
                      contact@i-numera.com
                    </a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-red-100 p-3 rounded-full text-red-600">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-medium text-lg text-darkblue-900">Téléphone</h3>
                  <p className="text-gray-600 mt-1">
                    <a href="tel:+33123456789" className="hover:text-red-600 transition-colors">
                      +33 1 23 45 67 89
                    </a>
                  </p>
                </div>
              </div>
            </div>
            
            {/* Map or Additional Info */}
            <div className="mt-12 bg-gray-100 p-6 rounded-xl">
              <h3 className="font-medium text-lg text-darkblue-900 mb-3">Horaires d'ouverture</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex justify-between">
                  <span>Lundi - Vendredi:</span>
                  <span>9h00 - 18h00</span>
                </li>
                <li className="flex justify-between">
                  <span>Samedi:</span>
                  <span>Sur rendez-vous</span>
                </li>
                <li className="flex justify-between">
                  <span>Dimanche:</span>
                  <span>Fermé</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <CallToAction variant="dark" />
    </div>
  );
};

export default Contact;
