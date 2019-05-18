<template>
	<div style="text-align:center;">
		<div class="link-section">
			<nuxt-link to="/posts" class="link">
          		Posty
        	</nuxt-link>
		</div>

		<div v-html="$md.render(model)" class="" :class="{ 'page-not-found': error }"></div>
	</div>
</template>

<script>
import axios from 'axios';

export default {
	async asyncData ({ params }) {
		try {
			let { data } = await axios.get(`https://jakubgania.io/posts/${params.id}.md`)

			return { model: data }
		} catch (error) {
			return { model: 'Taki post nie istnieje.', error: true }
		}
	}
}
</script>

<style lang="scss" scoped>
.link-section
{
	margin-top: 100px;
}
.link
{
	text-decoration: none;
	letter-spacing: 1px;
}
.page-not-found
{
	margin-top: 280px;
	margin-bottom: 100px;
	font-weight: bold;
	letter-spacing: 1px;
}
</style>