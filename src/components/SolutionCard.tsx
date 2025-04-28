interface SolutionCardProps {
  title: string;
}

export default function SolutionCard({ title }: SolutionCardProps) {
  return (
    <div className="aspect-square rounded-2xl border-2 border-gray-900 p-6 hover:bg-gray-50 transition-colors">
      <h3 className="text-xl font-medium text-gray-900">
        {title}
      </h3>
    </div>
  );
} 