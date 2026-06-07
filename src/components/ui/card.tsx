import SectionTitle from "./section-title";


const Card = ({
    id,
    subtitle,
    children,
    title,
    description,
}: { 
    id: string;
    subtitle: string;
    children: React.ReactNode;
    title: string;
    description: string;
}) => {
  return (
    <section id={id} className="w-full flex flex-col items-center px-4 md:px-6">
      <div className="flex flex-col items-center py-14 lg:py-24 px-4 md:px-5 lg:px-[72px] w-full bg-white rounded-2xl border-[1.5px] border-[#E1E3E5]">
        <SectionTitle
          subtitle={subtitle}
          title={title}
          description={description}
        />
        {children}
      </div>
    </section>
  );
};

export default Card;
