import { HistorySSR } from "@/presentation/pages";

import { makeRemoteLoadHistory } from "@/main/factories/usecases";

/**
 * @description This route is only for testing an SSR fetching scenario
 */
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
