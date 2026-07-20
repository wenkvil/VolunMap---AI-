export default function SkillsCard() {
  const skills = [
    "Leadership",
    "Teaching",
    "Communication",
    "First Aid",
    "Environment",
    "Event Management",
  ];

  return (
    <div className="rounded-3xl bg-[#EEDDC9] p-8 shadow-lg">
      <h2 className="text-2xl font-bold">
        Skills & Interests
      </h2>

      <div className="mt-6 flex flex-wrap gap-3">
        {skills.map((skill) => (
          <span
            key={skill}
            className="rounded-full bg-emerald-100 px-4 py-2 text-emerald-700"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}