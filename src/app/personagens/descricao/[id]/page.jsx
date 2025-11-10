import DescricaoPersonagens from "@/components/DescricaoPersonagens";

export default async function Page({ params, searchParams }) {
  const { id } = await params;
  const { from } = await searchParams;
  
  return <DescricaoPersonagens id={id} from={from} />;
}
