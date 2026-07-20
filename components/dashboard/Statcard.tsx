type Props = {
  title: string;
  value: string;
  color: string;
};

export default function StatCard({
  title,
  value,
  color,
}: Props) {
  return (
    <div className="rounded-3xl bg-white p-8 shadow-lg">
      <h2 className={`text-4xl font-black ${color}`}>
        {value}
      </h2>

      <p className="mt-2 text-slate-500">
        {title}
      </p>
    </div>
  );
}