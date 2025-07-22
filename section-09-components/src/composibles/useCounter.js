import { ref } from "vue";

export function useCounter(initialValue = 0, step = 1) {
  const count = ref(initialValue);

  const increment = () => {
    count.value = count.value + step;
  };

  const decrement = () => {
    count.value = count.value - step;
  };

  return { count, increment, decrement };
}
