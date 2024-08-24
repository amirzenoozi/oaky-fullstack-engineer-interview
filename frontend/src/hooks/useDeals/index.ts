import { useEffect, useState } from 'react'
import { fetchDeals } from '@/modules/api';
import { DealItem } from '@/hooks/useDeals/type';

const useDeals = (limit: number, page: number, orderBy: string, order: string) => {
	const [items, setItems] = useState<DealItem[]>([])
	const [fetching, setFetching] = useState<boolean>(true)
	const [error, setError] = useState<any>(undefined)

	// Get questions from API
	useEffect(() => {
		setFetching(true)
		fetchDeals(limit, page, orderBy, order).then((res: any) => {
			console.log(res)
			setItems(res.data)
		}).catch((e) => {
			setError(e)
		}).finally(() => {
			setFetching(false)
		})
	}, [])

	return { deals: items, fetching, error }
}

export default useDeals
