import { ref, readonly } from 'vue'

const headerHeight = ref(0)
const isHeaderScrolled = ref(false)

export function useHeaderHeight() {
  const setHeaderHeight = (height: number) => {
    headerHeight.value = height
  }

  const setHeaderScrolled = (scrolled: boolean) => {
    isHeaderScrolled.value = scrolled
  }

  return {
    headerHeight: readonly(headerHeight),
    isHeaderScrolled: readonly(isHeaderScrolled),
    setHeaderHeight,
    setHeaderScrolled,
  }
}
