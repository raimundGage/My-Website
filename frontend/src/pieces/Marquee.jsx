export const Marquee = ({ marqueeText }) => {
  return (
    <>
      <div className="@container bg-black max-w-full whitespace-nowrap overflow-hidden py-1 my-1">
        <div className="text-neon-green inline-block font-mono marquee">
          =+=+= {marqueeText} =+=+=
        </div>
      </div>
    </>
  );
};
