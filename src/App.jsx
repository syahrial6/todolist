import { useState } from "react";
import swal from "sweetalert";
import { FaCheckCircle, FaEdit, FaTrash } from "react-icons/fa";
import { motion } from "framer-motion";
function App() {
  const [hook, setHook] = useState();
  const [todos, setTodo] = useState([]);
  const [todos_selesai, setTodo_selesai] = useState([]);

  const submit = (e) => {
    e.preventDefault();
    e.target.reset();
    setTodo([...todos, hook]);
    swal({
      title: "Good job!",
      text: "To Do List Berhasil Ditambahkan",
      icon: "success",
      button: "OK",
    });
  };

  const edit = async(id) => {
    const ambil_todos = [...todos];
    const result = await swal({
      text: 'Ubah Tugas',
      content: {
        element: 'input',
        attributes: {
          placeholder: 'Ketik di sini',
          value:ambil_todos[id],
          type: 'text',
        },
      },
    });
  
    if (result) {
      ambil_todos[id] = result;
    } else {
      ambil_todos[id];
    }
   

    setTodo(ambil_todos);
  };

  const hapus = (id) => {
    const ambil_todos = [...todos];
    ambil_todos.splice(id, 1);
    setTodo(ambil_todos);
  };

  const hapus_todo_selesai = (id) => {
    const ambil_todos = [...todos_selesai];
    ambil_todos.splice(id, 1);
    setTodo_selesai(ambil_todos);
  };

  const selesai = (todo, id) => {
    setTodo_selesai([...todos_selesai, todo]);
    console.log(todos_selesai);
    hapus(id);
  };
  return (
    <>
    
    <motion.div
    initial={{ y: -400,opacity:0 }}
    animate={{ y: 0,opacity:1}}
    transition={{
      duration: 0.8,
      delay: 0.5,
      ease: [0, 0.71, 0.8, 1.01],
    }}
    >
      <div className="h-[50vh] bg-gradient-to-r from-sky-500 to-indigo-500 relative flex"></div>
      </motion.div>
   
      <div className="lg:w-1/3 w-72 m-auto absolute top-20 right-0 left-0">
      <motion.div
      initial={{ x: -400, }}
      animate={{ x: 0,}}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.51, 1, 1.01],
      }}
      >
        <p className="text-center font-bold uppercase mb-12 lg:text-4xl text-4xl text-white">
          To Do List
        </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <form onSubmit={submit}>
            <input
              type="text"
              placeholder="Tambahkan Tugas Hari Ini"
              className="input lg:w-full w-full"
              onChange={(e) => setHook(e.target.value)}
            />
            <button className="btn btn-info text-white mt-4">Simpan</button>
          </form>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
        <div className="bg-white border-solid border-2 rounded-3xl border-indigo-600 mt-12">
          <p className="text font-bold ml-3 mt-3 uppercase mb-12 text-2xl">
            Tugas Belum Selesai
          </p>
          {todos.length == 0 ? (
            <p className="text-center text-lg">Belum Ada To Do List</p>
          ) : (
            todos.map((todo, index) => (
              <div
                key={index}
                className="m-5 lg:flex justify-between items-center border-solid border-2 rounded-3xl  border-indigo-600"
              >
                <p className="item text-center text-xl lg:flex justify-start py-8 ml-3">
                  {todo}
                </p>
                <div className="flex justify-between lg:pt-0 pt-3">
                  <button
                    onClick={() => edit(index)}
                    className="btn btn-warning lg:mr-3"
                  >
                    <FaEdit />
                  </button>
                  <button
                    onClick={() => selesai(todo, index)}
                    className="btn btn-success lg:mr-3"
                  >
                    <FaCheckCircle />
                  </button>
                  <button
                    onClick={() => hapus(index)}
                    className="btn btn-error lg:mr-3"
                  >
                    <FaTrash />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
        <div className="bg-white border-solid border-2 rounded-3xl border-indigo-600 mt-12">
          <p className="text font-bold ml-3 mt-3 uppercase mb-12 text-2xl">
            Tugas Selesai
          </p>

          {todos_selesai.length == 0 ? (
            <p className="text-center text-lg">Belum Ada Tugas Selesai</p>
          ) : (
            todos_selesai.map((todo, index) => (
              <div
                key={index}
                className="m-5 lg:flex justify-between items-center border-solid border-2 rounded-3xl border-indigo-600"
              >
                <p className="item text-center text-xl lg:flex justify-center line-through py-8 ml-3">
                  {todo}
                </p>
                <div className="flex justify-end">
                  <button
                    onClick={() => hapus_todo_selesai(index)}
                    className="btn btn-error lg:mr-3"
                  >
                    <FaTrash />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
        </motion.div>
      </div>
    </>
  );
}

export default App;
