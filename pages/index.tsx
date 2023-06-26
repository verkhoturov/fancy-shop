import { Page } from "../components/page";
import { OneExample } from "../components/one-example";
import { AnotherExample } from "../components/another-example";
import { Catalog } from "../components/catalog";

export default function Home() {
  return <Page>
    <OneExample />
    <AnotherExample />
    <Catalog />
  </Page>;
}
