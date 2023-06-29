import { Page } from '../components/page';
import { Slider } from '../components/slider';
import { Services } from '../components/services';
import { Catalog } from '../components/catalog';

export default function Home() {
    return (
        <Page>
            <Slider />
            <Services />
            <Catalog />
        </Page>
    );
}
