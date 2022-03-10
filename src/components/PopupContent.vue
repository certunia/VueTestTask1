<template>
  <PopupRouterView>
    <PopupBase>
      <v-card>
        <v-toolbar dark>
          Fill the form
        </v-toolbar>

        <v-card-text>
          <v-form
              ref="form"
              v-model="valid"
              @submit.prevent="onSubmit"
          >
            <v-text-field
                type="email"
                v-model="email"
                :rules="emailRules"
                label="E-mail"
                solo
                required
            />

            <v-textarea
                :rules="textRules"
                v-model="text"
                solo
                label="text..."
                auto-grow
                required
            />

            <v-btn @click="onSubmit">
              Send
            </v-btn>
          </v-form>
        </v-card-text>
      </v-card>
    </PopupBase>
  </PopupRouterView>
</template>

<script>
import PopupBase from './PopupBase.vue';
import PopupRouterView from './PopupRouterView.vue';

export default {
  name: 'PopupContent',
  components: {
    PopupBase,
    PopupRouterView
  },
  data() {
    return {
      valid: false,
      text: '',
      email: '',
      emailRules: [
        v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid',
      ],
      textRules: [
        v => v.length > 10 || 'at least 10 characters',
        v => /^[A-Za-z0-9А-Яа-яё\n\s ]+$/.test(v) || 'Text should not contain any special characters',
      ]
    };
  },
  methods: {
    onSubmit () {
      this.$refs.form.validate();

      if (this.valid) {
        var card = {
          text: this.text,
          email: this.email
        }

        this.$store.dispatch('addCard',card);
        this.$router.back();
      }
    }
  }
}
</script>
