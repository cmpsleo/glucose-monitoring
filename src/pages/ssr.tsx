import { HistorySSR } from "@/presentation/pages";

import { makeRemoteLoadHistory } from "@/main/factories/usecases";

export default function SSR({ history }: HistorySSR.Props) {
  return <HistorySSR history={history} />;
}

export async function getServerSideProps() {
  const history = await makeRemoteLoadHistory().execute();

  return {
    props: {
      history,
    },
  };
}
