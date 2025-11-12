import DescricaoArsenal from "@/components/DescricaoArsenal";

export default async function Page({ params }) {
  const { id } = await params;
  
  return <DescricaoArsenal id={id} />;
}
