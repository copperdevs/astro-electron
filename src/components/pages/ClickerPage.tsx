import { ReactLayout } from "@/components/layouts/ReactLayout";
import Counter from "../ui/testing/Counter";
import type { PageProps } from "@/lib";

export default function ClickerPage({ pageProps }: { pageProps: PageProps }) {
  return (
    <ReactLayout props={pageProps}>
      <div className="pagecenter scrollable">
        <div className="contentcenter">
          <div className="content">
            <Counter />
          </div>
        </div>
      </div>
    </ReactLayout>
  );
}
