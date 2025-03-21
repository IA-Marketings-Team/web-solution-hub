
import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Send } from 'lucide-react';

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from '@/components/ui/card';

const formSchema = z.object({
  demande: z.string().min(1, { message: 'Veuillez sélectionner un type de demande.' }),
  message: z.string().min(10, { message: 'Votre message doit contenir au moins 10 caractères.' }),
  name: z.string().min(2, { message: 'Le nom complet doit contenir au moins 2 caractères.' }),
  societe: z.string().optional(),
  telephone: z.string().min(10, { message: 'Veuillez entrer un numéro de téléphone valide.' }),
  email: z.string().email({ message: 'Veuillez entrer une adresse email valide.' }),
});

export type FormValues = z.infer<typeof formSchema>;

const DevisForm = () => {
  const { toast } = useToast();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      demande: '',
      message: '',
      name: '',
      societe: '',
      telephone: '',
      email: '',
    },
  });

  const onSubmit = (data: FormValues) => {
    // In a real application, you would send the form data to a backend
    console.log('Form submitted:', data);
    
    toast({
      title: "Demande envoyée !",
      description: "Nous vous contacterons dans les plus brefs délais.",
    });
    
    form.reset();
  };

  return (
    <Card className="overflow-hidden">
      <CardContent className="p-6">
        <h2 className="text-2xl font-bold text-darkblue-900 mb-6">
          Devis / Contact
        </h2>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="demande"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Demande <span className="text-red-500">*</span></FormLabel>
                  <Select 
                    onValueChange={field.onChange} 
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Sélectionnez le type de demande" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="devis">Demande de devis</SelectItem>
                      <SelectItem value="info">Demande d'information</SelectItem>
                      <SelectItem value="demo">Demande de démonstration</SelectItem>
                      <SelectItem value="partenariat">Proposition de partenariat</SelectItem>
                      <SelectItem value="autre">Autre demande</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Précisions <span className="text-red-500">*</span></FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Précisez votre demande..." 
                      className="min-h-[150px] bg-gray-50" 
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nom complet <span className="text-red-500">*</span></FormLabel>
                  <FormControl>
                    <Input placeholder="Prénom Nom" className="bg-gray-50" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="societe"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Société</FormLabel>
                  <FormControl>
                    <Input placeholder="Ma Société" className="bg-gray-50" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="telephone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Téléphone <span className="text-red-500">*</span></FormLabel>
                    <FormControl>
                      <Input placeholder="0123456789" className="bg-gray-50" {...field} />
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
                    <FormLabel>E-mail <span className="text-red-500">*</span></FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="nom@exemple.com" className="bg-gray-50" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            <Button type="submit" className="w-full bg-red-600 hover:bg-red-700">
              <Send className="mr-2 h-4 w-4" />
              Envoyer la demande
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default DevisForm;
