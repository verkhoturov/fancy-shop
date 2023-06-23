import { Page } from "../components/page";
import { OneExample } from "../components/one-example";
import { AnotherExample } from "../components/another-example";

export default function Home() {
  return <Page>
    <OneExample />
    <AnotherExample />
  </Page>;
}
