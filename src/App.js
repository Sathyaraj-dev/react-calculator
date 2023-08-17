import React, { useState } from "react";

function App() {
  const [value, setValue] = useState("");

  const clear = () => {
    setValue(value.slice(0, -1));
  };

  const reset = () => {
    setValue("");
  };

  const total = () => {
    try {
      // eslint-disable-next-line
      let evaluation = Function("return " + value)();
      setValue(evaluation.toString() + "");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="App">
      <h1 className="text-3xl text-white font-bold p-4">React Calculator</h1>
      <form className="flex flex-wrap w-96 justify-center m-auto">
        <label className="block w-full my-5">
          <input
            type="text"
            className="peer text-2xl rounded-md appearance-none w-full ring-1 ring-slate-200 shadow-sm p-4 focus:outline-none"
            value={value}
            readOnly
          />
        </label>
      </form>
      <div className="flex flex-wrap justify-center w-96 m-auto shadow-lg bg-white rounded-lg p-4">
        <button
          className="btn btn--primary"
          value={7}
          onClick={(e) => setValue(value + e.target.value)}
        >
          7
        </button>
        <button
          className="btn btn--primary"
          value={8}
          onClick={(e) => setValue(value + e.target.value)}
        >
          8
        </button>
        <button
          className="btn btn--primary"
          value={9}
          onClick={(e) => setValue(value + e.target.value)}
        >
          9
        </button>
        <button className="btn btn--primary" value="C" onClick={clear}>
          C
        </button>
        <button
          className="btn btn--primary"
          value={4}
          onClick={(e) => setValue(value + e.target.value)}
        >
          4
        </button>
        <button
          className="btn btn--primary"
          value={5}
          onClick={(e) => setValue(value + e.target.value)}
        >
          5
        </button>
        <button
          className="btn btn--primary"
          value={6}
          onClick={(e) => setValue(value + e.target.value)}
        >
          6
        </button>
        <button
          className="btn btn--primary"
          value="+"
          onClick={(e) => setValue(value + e.target.value)}
        >
          +
        </button>

        <button
          className="btn btn--primary"
          value={1}
          onClick={(e) => setValue(value + e.target.value)}
        >
          1
        </button>
        <button
          className="btn btn--primary"
          value={2}
          onClick={(e) => setValue(value + e.target.value)}
        >
          2
        </button>
        <button
          className="btn btn--primary"
          value={3}
          onClick={(e) => setValue(value + e.target.value)}
        >
          3
        </button>
        <button
          className="btn btn--primary"
          value="-"
          onClick={(e) => setValue(value + e.target.value)}
        >
          -
        </button>

        <button
          className="btn btn--primary"
          value="."
          onClick={(e) => setValue(value + e.target.value)}
        >
          .
        </button>
        <button
          className="btn btn--primary"
          value={0}
          onClick={(e) => setValue(value + e.target.value)}
        >
          0
        </button>
        <button
          className="btn btn--primary"
          value="/"
          onClick={(e) => setValue(value + e.target.value)}
        >
          ÷
        </button>
        <button
          className="btn btn--primary"
          value="*"
          onClick={(e) => setValue(value + e.target.value)}
        >
          x
        </button>
        <button
          className="btn bg-gray-500 w-36 text-white text-lg"
          value="Reset"
          onClick={reset}
        >
          Reset
        </button>
        <button
          className="text-lg font-bold btn bg-red-800 w-36 text-white "
          value="Total"
          onClick={total}
        >
          =
        </button>
      </div>
    </div>
  );
}

export default App;
