<template>
  <v-layout row wrap class="contact-layout">
    <v-flex xs12 sm12 md12 lg8 offset-lg2>
      <div class="title-page">
        Kontakt
      </div>
    </v-flex>

    <v-flex xs12 sm12 md12 lg8 offset-lg2 style="text-align:center;">
      <v-chip class="email-tag">
        <v-icon style="margin-right:14px;">alternate_email</v-icon>
        <a href="mailto:contact@jakubgania.io" class="email-link">contact@jakubgania.io</a>
      </v-chip>
    </v-flex>

    <!-- <v-flex lg12 class="contact-form">
      <v-form action="" method="POST" ref="form" @submit.prevent="submit">
        <v-flex xs12 sm8 offset-sm2 md6 offset-md3 lg4 offset-lg4 style="margin-bottom:24px;">
          <v-text-field
            ref="title"
            v-model="title"
            :label="text.label_title"
            :rules="rules.title"
            :error-messages="errorMessageTtile"
            prepend-icon="person"
            name="title"
            type="text"
            required
            counter="40"
          />
        </v-flex>
        <v-flex xs12 sm8 offset-sm2 md6 offset-md3 lg4 offset-lg4 style="margin-bottom:24px;">
          <v-text-field
            ref="email"
            v-model="email"
            label="E-mail"
            :rules="rules.email"
            :error-messages="errorMessageEmail"
            prepend-icon="alternate_email"
            name="login"
            type="text"
            required
          />
        </v-flex>
        <v-flex xs12 sm8 offset-sm2 md6 offset-md3 lg4 offset-lg4 style="margin-bottom:24px;">
          <v-textarea
            ref="message"
            v-model="message"
            label="Wiadomośc"
            :rules="rules.message"
            :error-messages="errorMessageMessage"
            prepend-icon="message"
            name="message"
            type="text"
            required
            counter="1000"
          />
        </v-flex>
        <v-flex xs12 sm8 offset-sm2 md6 offset-md3 lg4 offset-lg4 style="margin-bottom:24px;">
          <v-checkbox
            ref="terms"
            v-model="terms"
            :label="text.label_checkbox"
            :rules="rules.terms"
            :error-messages="errorMessageTerms"
            color="green"
          />
        </v-flex>
        <v-flex xs12 sm8 offset-sm2 md6 offset-md3 lg4 offset-lg4 style="margin-bottom:24px;">
          <div style="text-align:center;">
            <div
              class="g-recaptcha"
              data-theme="dark"
              data-callback="recaptchaCallback"
              data-sitekey="6Lf_MH4UAAAAAKnH6EzLo0zU3FpYNOYwkcUcOjUR"
            />
          </div>
        </v-flex>
        <v-flex xs12 sm8 offset-sm2 md6 offset-md3 lg4 offset-lg4 style="margin-bottom:24px;">
          <v-btn type="submit" name="submit" value="SUBMIT" depressed large block style="letter-spacing:2px;font-size:12px;">
            Wyślij
          </v-btn>
        </v-flex>
      </v-form>
    </v-flex> -->

  </v-layout>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      title: 'example title',
      email: 'example@email.ko',
      message: 'example message message',
      showPassword: false,
      terms: true,
      recaptcha: null,
      parameters: null,
      formHasErrors: false,
      errorMessageTtile: '',
      errorMessageEmail: '',
      errorMessageMessage: '',
      errorMessageTerms: '',
      rules: {
        title: [
          () => !!this.title || 'This field is required title',
        ],
        email: [
          () => !!this.email || 'This field is required email',
        ],
        message: [
          () => !!this.message || 'This field is required message',
        ],
        terms: [
          () => !!this.terms || 'This field is required terms',
          // () => true,
        ],
      },
      text: {
        title_page: 'Formularz kontaktowy',
        label_title: 'Tytuł',
        label_email: 'E-mail',
        label_message: 'Wiadomości',
        label_checkbox: 'Zezwalam na kontakt drogą elektroniczną na podany adres e-mail.',
        send_button: 'WYŚLIJ',
      },
    }
  },
  computed: {
    form() {
      return {
        title: this.title,
        email: this.email,
        message: this.message,
        terms: this.terms
      };
    },
  },
  methods: {
    submit() {
      this.formHasErrors = false;

      // Object.keys(this.form).forEach((f) => {
      //   if (!this.form[f]) this.formHasErrors = true;
      //   this.$refs[f].validate(true);
      // });

      // if (grecaptcha.getResponse().length == 0) {
      //   this.formHasErrors = true;
      // }

      // if (this.formHasErrors) {
      //   // alert('false');
      // } else {
      //   const parameters = {
      //     title: this.title,
      //     email: this.email,
      //     message: this.message,
      //     terms: this.terms
      //   };
      // }

      if (this.$refs.form.validate()) {
        const parameters = {
          title: this.title,
          email: this.email,
          message: this.message,
          terms: this.terms
        };

        this.sendForm(parameters);
      }
    },
    sendForm(parameters) {
      // const queryString = `title=${parameters.title}&email=${parameters.email}&message=${parameters.message}&terms=${parameters.terms}`;
      //
      // const xd = {
      //   title: 'test',
      // };
      //
      // axios.post('https://jakubgania.io/api/contact-form', {
      //   firstName: 'Fred',
      //   lastName: 'Flintstone'
      // })
      // .then(function (response) {
      //   console.log(response);
      // })
      // .catch(function (error) {
      //   console.log(error);
      // });

      // axios.post(`https://jakubgania.io/api/contact-form.php?${queryString}`)
      // .then(response => {
      //   // this.rules.terms[() => 'This field is required terms'];
      //   switch (response.data.status) {
      //     case 'INVALID_TITLE_MESSAGE':
      //       this.errorMessageTtile = 'invalid title';
      //       break;
      //     case 'INVALID_EMAIL':
      //       break;
      //     case 'INVALID_MESSAGE':
      //       break;
      //     case 'INVALID_TERMS':
      //       break;
      //     case 'INVALID_MESSAGE':
      //       break;
      //     case 'CAPTCHA_ERROR':
      //       break;
      //     case 'SUCCESS':
      //       break;
      //     case 'ERROR_SEND':
      //       break;
      //     default:
      //   }
      // })
      // .catch(e => {
      // })
    },
  },
  head() {
    return {
      title: 'Jakub Gania - Contact',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Jakub Gania - Kontakt'
        },
        {
          name: 'keywords',
          content: 'contact, contact form, message, email'
        },
      ],
      script: [
        {
          src: 'https://www.google.com/recaptcha/api.js'
        }
      ],
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../assets/scss/contact/contact.scss';
</style>
