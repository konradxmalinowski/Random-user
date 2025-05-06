/* eslint-disable react/prop-types */
export default function Image({ src }) {
  return (
    <>
      <section className="image-wrapper wrapper">
        <img src={src} alt="Photo" />
      </section>
    </>
  );
}
