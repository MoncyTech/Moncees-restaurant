
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ContactInfo = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 max-w-4xl mx-auto">
      <Card className="bg-moncees-black border-moncees-gold border-2 shadow-lg overflow-hidden fade-in delay-100">
        <CardContent className="pt-6">
          <div className="flex items-start space-x-4">
            <Phone className="h-6 w-6 text-moncees-gold shrink-0" />
            <div>
              <h3 className="font-playfair font-semibold text-moncees-gold mb-1">Phone</h3>
              <p className="text-moncees-white font-montserrat">+1 (555) 123-4567</p>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card className="bg-moncees-black border-moncees-gold border-2 shadow-lg overflow-hidden fade-in delay-200">
        <CardContent className="pt-6">
          <div className="flex items-start space-x-4">
            <Mail className="h-6 w-6 text-moncees-gold shrink-0" />
            <div>
              <h3 className="font-playfair font-semibold text-moncees-gold mb-1">Email</h3>
              <p className="text-moncees-white font-montserrat">info@monceesrestaurant.com</p>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card className="bg-moncees-black border-moncees-gold border-2 shadow-lg overflow-hidden fade-in delay-300">
        <CardContent className="pt-6">
          <div className="flex items-start space-x-4">
            <MapPin className="h-6 w-6 text-moncees-gold shrink-0" />
            <div>
              <h3 className="font-playfair font-semibold text-moncees-gold mb-1">Location</h3>
              <p className="text-moncees-white font-montserrat">123 Luxury Ave, Beverly Hills, CA 90210</p>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card className="bg-moncees-black border-moncees-gold border-2 shadow-lg overflow-hidden fade-in delay-400">
        <CardContent className="pt-6">
          <div className="flex items-start space-x-4">
            <Clock className="h-6 w-6 text-moncees-gold shrink-0" />
            <div>
              <h3 className="font-playfair font-semibold text-moncees-gold mb-1">Hours</h3>
              <div className="text-moncees-white font-montserrat space-y-1">
                <p>Mon-Thu: 11:30AM - 10:00PM</p>
                <p>Fri-Sat: 11:30AM - 11:00PM</p>
                <p>Sunday: 10:00AM - 9:00PM</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ContactInfo;
