function TodoFilter({ filter, setFilter }) {
  const filters = [
    { key: "all", label: "Tất cả" },
    { key: "active", label: "Chưa xong" },
    { key: "completed", label: "Hoàn thành" }
  ];

  return (
    <div className="todo-filter">
      {filters.map((item) => (
        <button
          key={item.key}
          onClick={() => setFilter(item.key)}
          className={filter === item.key ? "active" : ""}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
}

export default TodoFilter;
