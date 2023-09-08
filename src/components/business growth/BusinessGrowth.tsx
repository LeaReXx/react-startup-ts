import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function BusinessGrowth() {
  let businessGrowth: {
    id: number;
    title: string;
    description: string;
    icon: string[];
  }[] = [
    {
      id: 1,
      title: "Digital Marketing",
      description:
        "We have financial professional leader who work remotely for your organization and provide guide.",
      icon: ["fas", "rocket"],
    },
    {
      id: 2,
      title: "Cloud Services",
      description:
        "We have financial professional leader who work remotely for your organization and provide guide.",
      icon: ["fas", "cloud-arrow-down"],
    },
    {
      id: 3,
      title: "Web Development",
      description:
        "We have financial professional leader who work remotely for your organization and provide guide.",
      icon: ["fas", "code"],
    },
    {
      id: 4,
      title: "IT Management",
      description:
        "We have financial professional leader who work remotely for your organization and provide guide.",
      icon: ["fas", "server"],
    },
    {
      id: 5,
      title: "Business Analysis",
      description:
        "We have financial professional leader who work remotely for your organization and provide guide.",
      icon: ["fas", "ranking-star"],
    },
    {
      id: 6,
      title: "Data Security",
      description:
        "We have financial professional leader who work remotely for your organization and provide guide.",
      icon: ["fas", "database"],
    },
  ];
  return (
    <section className="container mx-auto px-3 max-w-[1330px] md:pt-6">
      <h1 className="text-4xl font-semibold text-center py-16 lg:text-5xl">
        Business Growth Features
      </h1>
      <div className="flex flex-col md:flex-row flex-wrap justify-center">
        {businessGrowth.map(
          (item: {
            id: number;
            title: string;
            description: string;
            icon: string[];
          }) => (
            <div key={item.id} className="px-4 py-2 md:basis-2/4 lg:basis-1/3">
              <div className="bg-[#C6E0F9] w-14 h-14 flex items-center justify-center rounded-xl">
                <FontAwesomeIcon icon={item.icon} className="text-2xl" />
              </div>
              <div className="my-4">
                <h3 className="text-2xl font-semibold">{item.title}</h3>
                <p className="text-lg text-[#555555] py-3">
                  {item.description}
                </p>
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
}
