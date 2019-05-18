<template>
	<v-layout row wrap class="projects-layout">
		<v-flex xs12 sm6 offset-sm3 md8 offset-md2 lg8 offset-lg2>
			<div class="title-page">
				{{ pageTitle }}
			</div>
		</v-flex>
		<v-flex xs12 sm6 offset-sm3 md8 offset-md2 offset-lg2>
			<div class="subtitle">
				{{ pageSubtitle }}
			</div>
		</v-flex>
		<v-flex xs12 sm10 offset-sm1 md10 offset-md1 lg8 offset-lg2 class="images-section">
			<v-container fluid grid-list-sm>
				<v-layout row wrap>
					<v-flex v-for="(thumbnail, index) in details" :key="thumbnail.id" xs6 sm6 md4 lg3>
						<v-img
							:src="baseURL + pathSmallSize + details[index].src"
							@click="setDetailsPhoto(index)"
							aspect-ratio="1"
						>
							<v-layout slot="placeholder" fill-height aligin-center justify-center ma-0>
								<v-progress-circular indeterminate color="blue"/>
							</v-layout>
						</v-img>
					</v-flex>
				</v-layout>
			</v-container>
		</v-flex>

		<v-flex v-if="showPagingButton" xs10 offset-xs1 sm6 offset-sm3 md4 offset-md4 lg4 offset-lg4>
			<v-btn block depressed @click="getPhotos(page)" class="paging-button">
				{{ pagingButtonText }}
				<v-icon style="margin-left:6px;font-size:20px;">
					cached
				</v-icon>
			</v-btn>
		</v-flex>

		<v-dialog
			v-model="fullScreenPhoto"
      		fullscreen
      		hide-overlay
      		transition=""
      		@keydown.esc="fullScreenPhoto = false"
		>
			<v-card v-if="src">
				<v-toolbar style="box-shadow:none;background-color:#ffffff;">
					<v-btn icon @click.native="fullScreenPhoto = false">
						<v-icon color="black">
							close
						</v-icon>
					</v-btn>
				</v-toolbar>
				<img :src="baseURL + pathFullSize + src" class="full-size-photo">
			</v-card>
		</v-dialog>

	</v-layout>
</template>

<script>
import axios from 'axios';
import imdd from '../assets/images/background.jpg';

export default {
	data() {
		return {
			pageTitle: 'Zdjęcia',
      		pageSubtitle: 'Na tej stronie będą pojawiać się wykonane przeze mnie zdjęcia.',
      		pagingButtonText: 'Więcej',
      		fullScreenPhoto: false,
      		src: null,
      		page: 1,
      		baseURL: 'https://jakubgania.io',
      		pathFullSize: '/images/full-size/',
      		pathSmallSize: '/images/small-size/',
      		showPagingButton: true,
      		details: [],
			xdf: imdd
		}
	},
	methods: {
		setDetailsPhoto(index) {
      		let details = this.details[index];
      		this.src = details.src;
      		this.fullScreenPhoto = true;
    	},
		getPhotos(pageNumber) {
			axios.get('https://jakubgania.io/api/photos.php', {
        		params: {
          			page: pageNumber
        		}
      		})
      		.then(response => {
        		if (response.data.data.length !== 0) {
          			this.details = this.details.concat(response.data.data);
          			this.page++;

          			if (this.page > response.data.pages) {
            			this.showPagingButton = false;
          			}			
        		}
      		})
      		.catch(e => {
        		//
      		})
		}
	},
	created() {
		this.getPhotos(this.page);
	},
	head() {
		return {
			title: 'Jakub Gania - Photos',
      		meta: [
        		{
          			hid: 'description',
          			name: 'description',
          			content: 'Galeria zdjęć.'
        		},
        		{
          			name: 'keywords',
          			content: 'photos, gallery, images'
        		},
      		]
		}
	}
}
</script>

<style lang="scss" scoped>
	@import '../assets/scss/photos/lg.scss';
  	@import '../assets/scss/photos/xs.scss';
</style>