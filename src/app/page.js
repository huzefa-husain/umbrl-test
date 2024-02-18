import { Plans } from "@/mock/mock";
import Button from "@/components/ui/Button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="text-center w-3/4 my-20">
        <h1 className="text-4xl font-bold">Pricing & Plans</h1>
        <p className="">With lots of unique blocks, you can easily build a page without coding. Build your next consultancy website within few minutes.</p>
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-3 lg:text-left">
        {Plans?.map((plan) => {
              return (
                <div className="px-4 inline-block" key={plan?.name}>
                  <h4 className="mb-6 text-[#473BF0] uppercase text-xs">{plan?.name}</h4>
                  <h1 className="text-4xl font-bold mb-3">${plan?.price}<span className="text-base font-normal"> / month</span></h1>
                  <span className="mb-4 block">{plan?.frequency}</span>
                  {plan?.features.map((feature) => {
                    return <div key={feature} className="py-2">{feature}</div>
                  })}
                  <Button color="lightpurple">
                    Start Free Trial
                  </Button>
                </div>
              );
            })}
      </div>

      <div className="text-center w-3/4 my-20">
        <h1 className="text-4xl font-bold">Check our features</h1>
        <p>With lots of unique blocks, you can easily build a page without coding. Build your next consultancy website within few minutes.</p>
      </div>
    </main>
  );
}
