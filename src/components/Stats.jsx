export default function Stats({ items }) {
  const numItems = items.length;
  const numPack = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPack / numItems) * 100);
  return (
    <>
      <footer className="stats">
        <em>
          you have {numItems} items on your List and you have already packed
          {numPack} Items and {percentage}% Total was Packed
        </em>
      </footer>
    </>
  );
}
