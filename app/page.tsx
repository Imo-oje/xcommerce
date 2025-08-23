import FloatingCard from "@/components/floating-card";

export default function Home() {
  return (
    <div>
      <div id="hero_background" />
      <FloatingCard />
      <div className="text-center">
        <div className="p-4">
          <h2 className="capitalize text-3xl font-semibold">
            Browse the range
          </h2>
          <p className="font-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      </div>
      <div id="card_layout_3" className="border">
        <div className="border">one</div>
        <div className="border">two</div>
        <div className="border">three</div>
      </div>
      <div className="text-center">
        <div className="p-4">
          <h2 className="capitalize text-4xl font-semibold">Our products</h2>
        </div>
      </div>
      <div id="card_layout_4" className="border">
        <div className="border">one</div>
        <div className="border">two</div>
        <div className="border">three</div>
        <div className="border">four</div>
      </div>
    </div>
  );
}
