import { Award, Clock3, Medal, FileCheck } from "lucide-react";

export default function PassportCard() {
  return (
    <div className="rounded-3xl p-8 shadow-lg">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">
            Volunteer Passport
          </h2>

          <p className="mt-1 text-slate-500">
            Your volunteering achievements
          </p>
        </div>

        <Award className="text-emerald-600" size={36} />
      </div>

      <div className="mt-8 space-y-5">

        <div className="flex items-center justify-between rounded-2xl bg-slate-50 p-4">
          <div className="flex items-center gap-3">
            <Clock3 className="text-emerald-600" />
            <span>Total Hours</span>
          </div>

          <span className="font-bold">124h</span>
        </div>

        <div className="flex items-center justify-between rounded-2xl bg-slate-50 p-4">
          <div className="flex items-center gap-3">
            <Medal className="text-yellow-500" />
            <span>Badges</span>
          </div>

          <span className="font-bold">8</span>
        </div>

        <div className="flex items-center justify-between rounded-2xl bg-slate-50 p-4">
          <div className="flex items-center gap-3">
            <FileCheck className="text-blue-600" />
            <span>Certificates</span>
          </div>

          <span className="font-bold">15</span>
        </div>

      </div>

      <button className="mt-8 w-full rounded-2xl bg-emerald-600 py-3 font-semibold text-white transition hover:bg-emerald-700">
        View Passport
      </button>
    </div>
  );
}