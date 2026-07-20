import { MapPin, Mail } from "lucide-react";
import Image from "next/image";

export default function ProfileCard() {
  return (
    <div className="rounded-3xl bg-[#EEDDC9] p-8 shadow-lg">
      <div className="flex flex-col items-center">
        <Image
         src="https://i.pravatar.cc/150?img=12"
         alt="Avatar"
         width={112}
         height={112}
         className="rounded-full"
        />

        <h2 className="mt-5 text-2xl font-bold">
          Adil
        </h2>

        <p className="text-slate-500">
          Volunteer Level 5
        </p>

        <div className="mt-6 space-y-3 text-slate-600">

          <div className="flex items-center gap-2">
            <MapPin size={18}/>
            Karaganda
          </div>

          <div className="flex items-center gap-2">
            <Mail size={18}/>
            adil@email.com
          </div>

        </div>
      </div>
    </div>
  );
}