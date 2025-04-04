import { ReactLayout } from "@/components/layouts/ReactLayout";
import Counter from "../ui/testing/Counter";
import type { PageProps } from "@/lib";
import { Heading } from "@radix-ui/themes";

export default function IndexPage({ pageProps }: { pageProps: PageProps }) {
  return (
    <ReactLayout props={pageProps}>
      <div className="pagecenter scrollable">
        <div className="contentcenter">
          <div className="content">
            <Heading align="center">Astro + Electron + React</Heading>
          </div>
        </div>
      </div>
    </ReactLayout>
  );
}
