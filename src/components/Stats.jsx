export default function Stats({ items }) {
  if (items.length === 0)
    return (
      <p className="stats">
        <em>Start adding some items to your packing list 🚀</em>
      </p>
    );
  const numItems = items.length;
  const numPack = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPack / numItems) * 100);
  return (
    <>
      <footer className="stats">
        <em>
          {percentage === 100
            ? "You are ready to go ✈️"
            : ` you have ${numItems} items on your List and you have already packed
          ${numPack} Items and ${percentage}% Total was Packed`}
        </em>
      </footer>
    </>
  );
}
