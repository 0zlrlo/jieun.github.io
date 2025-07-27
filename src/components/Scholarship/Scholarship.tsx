const ScholarshipItem = ({
  name,
  organizer,
  description
}: {
  name: string;
  organizer: string;
  description: string;
}) => {
  return (
    <div className="flex flex-col md:flex-row gap-6 md:gap-0">
      <div className="flex flex-col gap-2">
        <div className="flex flex-col">
          <h3>{name}</h3>
        </div>
        <span>{organizer}</span>
        <span>{description}</span>
      </div>
    </div>
  );
};

export default ScholarshipItem;
