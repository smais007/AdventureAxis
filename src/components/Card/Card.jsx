import { Typewriter } from "react-simple-typewriter";

const stats = [
  { id: 1, name: "Travel pack Completed In Last 5 Years", value: "8,000+" },
  { id: 2, name: "Worldwide Premium Members", value: "93%" },
  { id: 3, name: "International Corporate Tie-ups", value: "99.9%" },
  { id: 4, name: "Local & International Client Tie-ups", value: "$70M" },
];

export default function Card() {
  return (
    <div className="bg-white py-24 sm:py-32 dark:bg-slate-700">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              <Typewriter
                cursor
                cursorBlinking
                delaySpeed={1000}
                deleteSpeed={25}
                loop={1}
                typeSpeed={75}
                words={[" We bring to life your tour dreams"]}
              />
            </h2>

            <p className="mt-4 text-lg leading-8 text-gray-600">
              Enjoy with adventure
            </p>
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.id} className="flex flex-col bg-gray-400/5 p-8">
                <dt className="text-sm font-semibold leading-6 text-gray-600">
                  {stat.name}
                </dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
