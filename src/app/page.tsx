import Server from "@/components/serverComponent";
import dynamic from "next/dynamic";
const Client = dynamic(() => import("@/components/clientComponent"), {ssr: false});
// import Client from "@/components/clientComponent"

export default async function Home() {
  return (
    <main >
      Hello from home route
      <Client/>
      <Server/>
    </main>
  );
}
