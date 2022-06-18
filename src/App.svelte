<script>
	import FeedbackList from './components/FeedbackList.svelte';
	import FeedbackStats from './components/FeedbackStats.svelte';
	import FeedbackForm from './components/FeedbackForm.svelte';
	
	// let feedback = [
	// 	{
	// 		id: 1,
	// 		rating: 10,
	// 		text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, quo debitis, facilis saepe placeat amet eos earum perspiciatis, nam ipsum dolorem. Dolorum eligendi fugiat fuga distinctio quasi a nostrum illo?'
	// 	},
	// 	{
	// 		id: 2,
	// 		rating: 9,
	// 		text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, quo debitis, facilis saepe placeat amet eos earum perspiciatis, nam ipsum dolorem. Dolorum eligendi fugiat fuga distinctio quasi a nostrum illo?'
	// 	},
	// 	{
	// 		id: 3,
	// 		rating: 7,
	// 		text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, quo debitis, facilis saepe placeat amet eos earum perspiciatis, nam ipsum dolorem. Dolorum eligendi fugiat fuga distinctio quasi a nostrum illo?'
	// 	},
	// 	{
	// 		id: 4,
	// 		rating: 9,
	// 		text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, quo debitis, facilis saepe placeat amet eos earum perspiciatis, nam ipsum dolorem. Dolorum eligendi fugiat fuga distinctio quasi a nostrum illo?'
	// 	},
	// 	{
	// 		id: 5,
	// 		rating: 7,
	// 		text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, quo debitis, facilis saepe placeat amet eos earum perspiciatis, nam ipsum dolorem. Dolorum eligendi fugiat fuga distinctio quasi a nostrum illo?'
	// 	}
	// ]


	
	// const deleteFeedback = (e) => {
	// 	const itemId = e.detail;
	// 	feedback = feedback.filter((item) => item.id != itemId);
	// }

	// const addNewFeedback = (e) => {
	// 	const newItem = e.detail;
	// 	feedback = [newItem, ...feedback];
	// 	// console.log(newItem)
	// }

</script>
<main class="container">
	<FeedbackForm />
	<FeedbackStats />
	<FeedbackList />
</main>

<style>
	
</style>

<!--  on:add-newFeedback={addNewFeedback}  -->