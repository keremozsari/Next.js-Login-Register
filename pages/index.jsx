import { userService } from "services";
import { useEffect, useState } from "react";

export default Home;

function Home() {
  return (
    <div className="p-4">
      <div className="container">
        <h1>Hi {userService.userValue?.username}!</h1>
      </div>
    </div>
  );
}
