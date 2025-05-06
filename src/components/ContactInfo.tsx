import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { contactData } from "../constant/data.js";
// const ContactInfo = () => {
//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 max-w-4xl mx-auto">
//       <Card className="bg-moncees-black border-moncees-gold border-2 shadow-lg overflow-hidden fade-in delay-100">
//         <CardContent className="pt-6">
//           <div className="flex items-start space-x-4">
//             <div>
//               <div className="flex gap-5">
//                 <Phone className="h-6 w-6 text-moncees-gold shrink-0" />
//                 <h3 className="font-cormorant font-semibold text-moncees-gold mb-1 text-xl">
//                   Phone
//                 </h3>
//               </div>
//               <p className="text-moncees-white font-nunito">
//                 +1 (555) 123-4567
//               </p>
//             </div>
//           </div>
//         </CardContent>
//       </Card>

//       <Card className="bg-moncees-black border-moncees-gold border-2 shadow-lg overflow-hidden fade-in delay-200">
//         <CardContent className="pt-6">
//           <div className="flex items-start space-x-4">
//             <div>
//               <div className="flex gap-5">
//                 <Mail className="h-6 w-6 text-moncees-gold shrink-0" />

//                 <h3 className="font-cormorant font-semibold text-moncees-gold mb-1 text-xl">
//                   Email
//                 </h3>
//               </div>
//               <p className="text-moncees-white font-nunito">
//                 info@monceesrestaurant.com
//               </p>
//             </div>
//           </div>
//         </CardContent>
//       </Card>

//       <Card className="bg-moncees-black border-moncees-gold border-2 shadow-lg overflow-hidden fade-in delay-300">
//         <CardContent className="pt-6">
//           <div className="flex items-start space-x-4">
//             <div>
//               <div className="flex gap-5">
//                 <MapPin className="h-6 w-6 text-moncees-gold shrink-0" />
//                 <h3 className="font-cormorant font-semibold text-moncees-gold mb-1 text-xl">
//                   Location
//                 </h3>
//               </div>
//               <p className="text-moncees-white font-nunito">
//                 123 Luxury Ave, Beverly Hills, CA 90210
//               </p>
//             </div>
//           </div>
//         </CardContent>
//       </Card>

//       <Card className="bg-moncees-black border-moncees-gold border-2 shadow-lg overflow-hidden fade-in delay-400">
//         <CardContent className="pt-6">
//           <div className="flex items-start space-x-4">
//             <div>
//               <div className="flex gap-5">
//                 <Clock className="h-6 w-6 text-moncees-gold shrink-0" />
//                 <h3 className="font-cormorant font-semibold text-moncees-gold mb-1 text-xl">
//                   Hours
//                 </h3>
//               </div>
//               <div className="text-moncees-white text-start font-nunito space-y-1">
//                 <p>Mon-Thu: 11:30AM - 10:00PM</p>
//                 <p>Fri-Sat: 11:30AM - 11:00PM</p>
//                 <p>Sunday: 10:00AM - 9:00PM</p>
//               </div>
//             </div>
//           </div>
//         </CardContent>
//       </Card>
//     </div>
//   );
// };
const ContactInfo = () => {
  const icons = {
    Phone,
    Mail,
    MapPin,
    Clock,
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 max-w-4xl mx-auto">
      {contactData.map((item, index) => {
        const Icon = icons[item.icon];
        return (
          <Card
            key={item.title}
            className={`bg-moncees-black border-moncees-gold border-2 shadow-lg overflow-hidden fade-in delay-${
              (index + 1) * 100
            }`}
          >
            <CardContent className="pt-6">
              <div className="flex items-start space-x-4">
                <div>
                  <div className="flex gap-5">
                    <Icon className="h-6 w-6 text-moncees-gold shrink-0" />
                    <h3 className="font-cormorant font-semibold text-moncees-gold mb-1 text-xl">
                      {item.title}
                    </h3>
                  </div>
                  {Array.isArray(item.value) ? (
                    <div className="text-moncees-white text-start font-nunito space-y-1">
                      {item.value.map((line, i) => (
                        <p key={i}>{line}</p>
                      ))}
                    </div>
                  ) : (
                    <p className="text-moncees-white font-nunito">
                      {item.value}
                    </p>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};
export default ContactInfo;
