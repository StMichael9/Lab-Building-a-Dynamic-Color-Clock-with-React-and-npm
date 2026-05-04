import { format, addDays, subMonths } from "date-fns";

function App() {
  const today = new Date();

  return (
    <>
      <p>{format(today, "MM/dd/yyyy hh:mm a")}</p>
    </>
  );
}

export default App;
