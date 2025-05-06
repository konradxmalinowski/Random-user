/* eslint-disable react/prop-types */
export default function Data({ degree, name, surname, email, country, city }) {
  return (
    <>
      <section className="data-wrapper wrapper">
        <p>{[degree, name, surname].join(" ")}</p>
        <p>{[country, city].join(" ")}</p>
        <p className="email">{email}</p>
      </section>
    </>
  );
}
