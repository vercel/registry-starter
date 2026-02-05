import Image from "next/image";

export function RegistryLogo() {
  return (
    <>
      <Image
        src="/aavya-logomark.svg"
        alt="AAVYA"
        width={28}
        height={28}
        className="flex-shrink-0 rounded-md"
      />
      <span className="font-semibold">AAVYA</span>
    </>
  );
}
