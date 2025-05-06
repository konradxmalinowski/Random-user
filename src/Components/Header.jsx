/* eslint-disable react/prop-types */
export default function Header({ handleClick }) {
  return (
    <>
      <header>
        <button
          onClick={() => {
            handleClick();
          }}
        >
          Generate person
        </button>
      </header>
    </>
  );
}
