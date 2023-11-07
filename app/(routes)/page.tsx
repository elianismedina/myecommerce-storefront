import billboard from "@/components/ui/billboard";
import Billboard from "@/components/ui/billboard";
import Container from "@/components/ui/container";
import React from "react";

function HomePage() {
  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />
      </div>
    </Container>
  );
}

export default HomePage;
