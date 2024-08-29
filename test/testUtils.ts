import { render as VTLrender } from '@testing-library/vue'
import type { RenderOptions } from '@testing-library/vue'

export function render(component: unknown, options?: RenderOptions<unknown>) {
  const defaultOptions = {
    props: {
      ...options?.props,
    },
    slots: {
      ...options?.slots,
    },
  }

  return VTLrender(component, {
    global: {
      ...(options?.global?.stubs && {
        stubs: options?.global?.stubs,
      }),
      plugins: [
        ...(options?.global?.plugins || []),
      ],
    },
    ...defaultOptions,
  })
}
