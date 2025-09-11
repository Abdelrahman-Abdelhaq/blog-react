import "./Task.css";
import { create } from "zustand";

export const testStore = create((set, get) => ({
  array: [],
  counter: 0,
  i: 2,
  addRandom: (v1, v2) => {
    const min = Math.ceil(v1);
    const max = Math.floor(v2);
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    set((state) => ({
      counter: state.counter + randomNumber,
      array: [...state.array, state.counter],
    }));
    console.log(get().array);
  },
  undo: () => {
    const ar = get().array;
    const len = ar.length;
    set((state) => ({
      counter: state.array[len - state.i],
      i: state.i + 1,
    }));
    console.log(ar);
  },
  redo: () => {
    const ar = get().array;
    const len = ar.length;
    set((state) => ({
      counter: state.array[len + state.i],
      i: state.i + 1,
    }));
    console.log(ar);
  },
}));

export const Task = () => {
  const counter = testStore((state) => state.counter);
  const addRandom = testStore((state) => state.addRandom);
  const undo = testStore((state) => state.undo);
  const redo = testStore((state) => state.redo);
  return (
    <div className="test-background">
      <div className="test-main">
        <div className="test-counter">
          <p>{counter}</p>
        </div>
        <div className="test-btns">
          <button
            className="test-undo"
            onClick={() => {
              undo();
            }}
          >
            Undo
          </button>
          <button
            className="test-random"
            onClick={() => {
              addRandom(1, 5);
            }}
          >
            Add Random
          </button>
          <button className="test-redo">redo</button>
        </div>
      </div>
    </div>
  );
};
