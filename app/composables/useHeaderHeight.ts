import { ref, readonly } from 'vue'

// Crée un état global simple (ou utilisez Pinia si vous préférez)
const headerHeight = ref(0)

export function useHeaderHeight() {
const setHeaderHeight = (height: number) => {
headerHeight.value = height
}

return {
// 'readonly' pour que les layouts ne puissent que lire la valeur
headerHeight: readonly(headerHeight),
setHeaderHeight,
}
}