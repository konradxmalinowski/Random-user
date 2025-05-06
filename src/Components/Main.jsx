/* eslint-disable react/prop-types */
import Image from "./Image";
import Data from "./Data";

export default function Main({ data }) {
  return (
    <>
      <main>
        <Image src={data?.results?.at(0)?.picture?.medium} />
        <Data
          degree={data?.results?.at(0)?.name?.title}
          name={data?.results?.at(0)?.name?.first}
          surname={data?.results?.at(0)?.name?.last}
          country={data?.results?.at(0)?.location?.country}
          city={data?.results?.at(0)?.location?.city}
          email={data?.results?.at(0)?.email}
        />
      </main>
    </>
  );
}
