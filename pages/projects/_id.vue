<template>
	<v-layout align-center justify-center row style="margin-top:80px">
		<div style="width: 100%;max-width: 660px;background-color:white;">
			<div class="link-section">
				<nuxt-link to="/projects" class="link">
					Projekty
				</nuxt-link>
			</div>

			<div v-html="$md.render(content)" class="posts-section" :class="{ 'page-not-found': error }"></div>
		</div>
	</v-layout>
</template>

<script>
import axios from 'axios';
import markdown from 'markdown-it';
import meta from 'markdown-it-meta';
import frontmatter from 'front-matter';

export default {
	async asyncData ({ params }) {
		try {
			let { data } = await axios.get(`https://jakubgania.io/projects-posts/${params.id}.md`)
			let frontmatterData = frontmatter(data);

			return { attributes: frontmatterData.attributes, content: data }
		} catch (error) {
			return { model: 'Taki post nie istnieje.', error: true }
		}
	},
	head() {
		return {
			title: this.attributes.title,
      		meta: [
        		{
          			hid: 'description',
          			name: 'description',
          			content: this.attributes.description
        		},
        		{
          			name: 'keywords',
          			content: this.attributes.keywords
        		},
      		]
		}
	}
}
</script>

<style lang="scss" scoped>
.posts-container
{
	// text-align: center;
}
.posts-section {
	// background-color: beige;
	font-size: 18px;
	margin-bottom: 80px;
}
a
{
	text-decoration: none;
}
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