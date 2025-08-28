export default function InputGroup({ name, onChange, value }) {
  return (
    <>
      <p>
        <label>{name}</label>
        <input type="number" required value={value} onChange={onChange}/>
      </p>
    </>
  );
}