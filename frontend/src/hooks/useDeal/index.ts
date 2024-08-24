import { useEffect, useState } from 'react'
import { fetchDealByID } from '@/modules/api';
import { DealItem } from './type';

const useDeals = ( uuid: string ) => {
	const [item, setItem] = useState<DealItem>()
	const [fetching, setFetching] = useState<boolean>(true)
	const [error, setError] = useState<any>(undefined)

	// Get deals by ID
	useEffect(() => {
		setFetching(true)
		fetchDealByID(uuid).then((res: any) => {
			setItem(res)
		}).catch((e) => {
			setError(e)
		}).finally(() => {
			setFetching(false)
		})
	}, [])

	return { deal: item, fetching, error }
}

export default useDeals
