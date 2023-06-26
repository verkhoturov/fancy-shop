import { Page } from "../components/page";
import { Services } from "../components/services";
import { Catalog } from "../components/catalog";

export default function Home() {
  return <Page>
    <Services />
    <Catalog />
  </Page>;
}
