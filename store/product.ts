import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

export const useProducts = create(
	persist(
		(set, get) => ({
			categories: null,
			products: null,
			addProducts: (products: any) => set({ products }),
			addCategories: (categories: any) => set({ categories }),
			basket: [],
			addBasket: (basket: any) => set({ basket }),
			lineItems: [],
			addLineItems: (lineItems: any) => set({ lineItems })
		}),
		{
			name: '_fancy_shop_storage', // unique name
			storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
		}
	)
)
