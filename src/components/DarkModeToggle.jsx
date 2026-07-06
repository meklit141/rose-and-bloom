function DarkModeToggle({ darkMode, setDarkMode }) {
  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="text-2xl"
    >
      {darkMode ? "☀️" : "🌙"}
    </button>
  );
}

export default DarkModeToggle;