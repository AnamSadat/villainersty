export function Input() {
  return <input type="text" placeholder="Type here" className="input" />;
}

export function InputGhost() {
  <input type="text" placeholder="Type here" className="input input-ghost" />;
}

export function InputFieldset() {
  <fieldset className="fieldset">
    <legend className="fieldset-legend">What is your name?</legend>
    <input type="text" className="input" placeholder="Type here" />
    <p className="label">Optional</p>
  </fieldset>;
}
