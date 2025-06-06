import Content from "./content";

interface dishDetailsPageProps {
  params: Promise<{
    slug: string;
  }>;
}

const Page = async ({ params }: dishDetailsPageProps) => {
  const { slug } = await params;
  return (
    <div>
      <Content slug={slug} />
    </div>
  );
};

export default Page;
