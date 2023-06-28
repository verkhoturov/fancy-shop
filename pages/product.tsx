import { Page } from "../components/page";
import { Product } from "../components/product";
import { FreshOffers } from "../components/fresh-offers";

export default function Home() {
    return <Page>
        <Product />
        <FreshOffers />
    </Page>;
  }