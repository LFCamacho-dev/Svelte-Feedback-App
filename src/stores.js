import { writable } from "svelte/store";

export const FeedbackStore = writable(
    [
		{
			id: 1,
			rating: 10,
			text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, quo debitis, facilis saepe placeat amet eos earum perspiciatis, nam ipsum dolorem. Dolorum eligendi fugiat fuga distinctio quasi a nostrum illo?'
		},
		{
			id: 2,
			rating: 9,
			text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, quo debitis, facilis saepe placeat amet eos earum perspiciatis, nam ipsum dolorem. Dolorum eligendi fugiat fuga distinctio quasi a nostrum illo?'
		},
		{
			id: 3,
			rating: 7,
			text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, quo debitis, facilis saepe placeat amet eos earum perspiciatis, nam ipsum dolorem. Dolorum eligendi fugiat fuga distinctio quasi a nostrum illo?'
		},
		{
			id: 4,
			rating: 9,
			text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, quo debitis, facilis saepe placeat amet eos earum perspiciatis, nam ipsum dolorem. Dolorum eligendi fugiat fuga distinctio quasi a nostrum illo?'
		},
		{
			id: 5,
			rating: 7,
			text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, quo debitis, facilis saepe placeat amet eos earum perspiciatis, nam ipsum dolorem. Dolorum eligendi fugiat fuga distinctio quasi a nostrum illo?'
		}
	]
)