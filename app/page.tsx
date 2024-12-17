import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1>Home</h1>

      <Image
        src="/image/bgweb.jpg"
        alt="background"
        width={1000}
        height={1000}
        priority
        className="object-cover h-[25vh] w-full"
      />
    </div>
  );
}
