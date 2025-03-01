import Image from 'next/image';

function Home() {
  return (
    <div>
      Home
      <Image src="/discord.png" width={200} height={200} alt="hero" />
    </div>
  );
}
export default Home;
