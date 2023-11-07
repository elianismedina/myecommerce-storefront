import getBillboard from "@/actions/get-billboard";
import billboard from "@/components/ui/billboard";
import Billboard from "@/components/ui/billboard";
import Container from "@/components/ui/container";
import React from "react";

export const revalidate = 0;

const HomePage = async () => {
  const billboard = await getBillboard("66ab90f8-3442-4ba3-9456-21f7a6f5aee4");
  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />
      </div>
    </Container>
  );
};

export default HomePage;
