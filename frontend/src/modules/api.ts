import client from '@/modules/apolloClient';
import { gql } from '@apollo/client';

const fetchDeals = async (page = 1, limit = 10, order = 'asc', orderBy = 'createdAt') => {
	const GET_DEALS = gql`
  query GetDeals($page: Int!, $limit: Int!, $order: String!, $orderBy: String!) {
    deals(page: $page, limit: $limit, order: $order, orderBy: $orderBy) {
      data {
        uuid
        title
        description
        imageUrl
        price
        discountPrice
        category
        createdAt
      }
      meta {
		total_count
		total_pages
		current_page
		limit
		order_by
		order
      }
    }
  }
`
	const {data} = await client.query({
		query: GET_DEALS,
		variables: {page, limit, order, orderBy},
	});
	return data.deals;
};

const fetchDealByID = async (uuid: string) => {
	const GET_DEAL = gql`
	query GetDeal($uuid: String!) {
		deal(uuid: $uuid) {
			uuid
			title
			description
			content
			imageUrl
			price
			discountPrice
			category
		}
	}
`
	const {data} = await client.query({
		query: GET_DEAL,
		variables: {uuid},
	});
	return data.deal;
};

export {
	fetchDeals,
	fetchDealByID,
}
