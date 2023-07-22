import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

export const useProducts = create(
	persist(
		(set, get) => ({
			products: null,
			addProducts: (products: any) => set({ products }),
		}),
		{
			name: '_fancy_shop_storage', // unique name
			storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
		}
	)
)
