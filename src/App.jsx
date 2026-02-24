import { useContext } from "react";
import DeleteButton from "./components/DeleteButton";
import Form from "./components/Form";
import Stats from "./components/Stats";
import TaskList from "./components/TaskList";
import { taskContext } from "./Context/CreateContext";
import EditTask from "./components/EditModal";
import ExpandTaskModel from "./components/ExpandTaskModel";

function App() {
  const { deleteModal, editModal, viewMore, setViewMore } =
    useContext(taskContext);
  return (
    <>
      <div className="bg-white p-4 sm:p-6 rounded-2xl text-center gap-5 flex flex-col min-h-screen overflow-x-hidden">
        <div className="text-3xl sm:text-4xl font-bold mt-4 text-gray-800 roboto">
          MR. Manager
        </div>
        <p className="text-xs sm:text-sm roboto text-gray-600">
          Simple todo manager to keep track of what you actually need to do.
        </p>
        <div className="w-full max-w-3xl mx-auto">
          <Stats />
          <Form />
          <TaskList />
          {deleteModal && <DeleteButton />}
          {editModal && <EditTask />}
          {viewMore && <ExpandTaskModel />}
        </div>
      </div>
    </>
  );
}

export default App;
