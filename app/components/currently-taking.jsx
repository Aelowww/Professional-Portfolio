import { currentlyTaking } from "../data/profile";

// Certificate programs in progress, listed under the earned certificates.
export default function CurrentlyTaking() {
  return (
    <div className="cert-progress">
      <h3>Currently taking</h3>
      <ul>
        {currentlyTaking.map((course) => (
          <li key={course.title}>
            <span className="cert-progress-dot" aria-hidden="true" />
            <strong>{course.title}</strong>
            <small>{course.issuer}</small>
            <span className="cert-progress-badge">In progress</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
