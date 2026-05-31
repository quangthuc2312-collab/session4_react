function TierLayout({ title, goal, children }) {
  return (
    <section className="tier-card">
      <div className="tier-heading">
        <p className="badge">Bài thực hành</p>
        <h2>{title}</h2>
        <p>{goal}</p>
      </div>
      {children}
    </section>
  );
}

export default TierLayout;
