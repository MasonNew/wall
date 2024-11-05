interface FeatureProps {
  title: string;
  description: string;
}

export function Feature({ title, description }: FeatureProps) {
  return (
    <div className="text-center">
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p>{description}</p>
    </div>
  );
}