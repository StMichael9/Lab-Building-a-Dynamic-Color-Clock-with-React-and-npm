import { format, addDays, subMonths } from "date-fns";

function App() {
  const today = new Date();

  return (
    <>
      <p>{format(today, "MM/dd/yyyy")}</p>
    </>
  );
}

export default App;
