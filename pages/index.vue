<template>
	<div class="flex-center position-ref full-height container-index">
		<div class="content" data-aos="zoom-in" data-aos-dealy="440" data-aos-duration="1000" data-aos-once="true">
			<div class="main-title" data-aos="zoom-in" data-aos-dealy="440" data-aos-duration="1000" data-aos-once="true">
				Full Stack Web Developer
			</div>
			<div class="my-name" data-aos="zoom-in" data-aos-dealy="440" data-aos-duration="1200" data-aos-once="true">
				Jakub Gania
			</div>
			<div data-aos="zoom-in" data-aos-delay="440" data-aos-duration="1400" data-aos-once="true">
				<v-layout row wrap class="links-section">
					<v-flex v-for="page in pages" :key="page.id" xs6 sm2 md2 lg2 style="padding-bottom: 20px;">
						<nuxt-link v-if="page.link == undefined" :to="page.path" class="link projects">
							{{ page.name }}
						</nuxt-link>
						<a v-else :href="page.link" target="_blank" rel="noreferrer" :class="'link ' + page.class">
							{{ page.name }}
						</a>
					</v-flex>
				</v-layout>
			</div>
		</div>

		<div class="copyright" v-html="copyrightText"></div>

	</div>
</template>

<script>
export default {
	data() {
		return {
			pages: [
				{
					name: 'O mnie',
					path: '/about',
				},
				{
					name: 'Projekty',
					path: '/projects',
				},
				{
					name: 'Kontakt',
					path: '/contact',
				},
				{
					name: 'Inne',
					path: '/other-resources',
				},
				{
					name: 'Github',
					link: 'https://github.com/jakubgania',
					class: 'github'
				},
				{
					name: 'Linkedin',
					link: 'https://www.linkedin.com/in/jakubgania',
					class: 'linkedin'
				}
			],
			copyrightText: 'Jakub Gania &copy 2018 - 2019'
		}
	},
	head() {
		return {
			title: 'Jakub Gania - Web Developer',
			meta: [
				{
					hid: 'description',
					name: 'description',
					content: 'Jakub Gania - Full Stack Web Developer. Vue.js, Vuex, Vuetify, TypeScript, NUXT, HTML, CSS, Node.js, PHP, Laravel, Symfony, Nginx, Docker.'
				},
				{
					name: 'keywords',
					content: 'software, developer, it, programmer, coder, www, web, website, frontend, backend, full stack, software engineer'
				}
			]
		}
	}
}
</script>

<style lang="scss" scoped>
	@import '../assets/scss/home/lg.scss';
	@import '../assets/scss/home/sm.scss';
	@import '../assets/scss/home/xs.scss';
</style>