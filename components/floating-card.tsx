export default function FloatingCard() {
  return (
    <div className="absolute top-1/2 right-10 text-justify w-[calc(50%-3rem)] mt-auto mb-0 -translate-y-1/2 bg-secondary p-10">
      <div className="flex flex-col items-start gap-4">
        <span>New Arrival</span>
        <h1 className="capitalize text-primary text-5xl font-semibold">
          discover our
        </h1>
        <h1 className="capitalize text-primary text-5xl font-semibold">
          new collection
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni tempore
          quidem delectus ex voluptatem rem accusamus libero.
        </p>
        <button className="uppercase bg-primary py-4 px-10 cursor-pointer font-light text-primary-foreground">
          Buy Now
        </button>
      </div>
    </div>
  );
}
