import {Header} from "@/components/header";
import {LobbySearch} from "./search";

const Home = () => {

  return (
    <div>
      <Header></Header>
      <main className="mt-10 max-w-[986px] mx-auto">
        <section className="flex flex-col items-center gap-6">
          <h1 className="text-3xl">Find available park space</h1>
          <LobbySearch></LobbySearch>
        </section>
      </main>
    </div>
  );
}

export default Home;