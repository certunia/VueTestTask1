<template>
  <div class="main">
    <div class="container">
      <div class="form">
        <v-text-field
            placeholder="Search..."
            v-model="search"
            :rules="rules"
            :disabled="searchDisabled"
            solo
            rounded
            dense
            clearable
        />

        <v-btn
            fab
            dark
            small
            color="primary"
            to="/popup"
        >
          <v-icon>
            mdi-plus
          </v-icon>
        </v-btn>
      </div>

      <div class="form">
        <v-select
            v-model="selected"
            :items="correlation"
        />
      </div>
    </div>

    <hr />

    <div class="container list">
      <v-card
          v-for="(card, index) in cardsSorted"
          :key="index"
      >
        <v-card-title>
          {{ card.text }}
        </v-card-title>

        <v-card-subtitle>
          {{ card.email }}
        </v-card-subtitle>
      </v-card>
    </div>

    <RouterView/>
  </div>
</template>

<script>
export default {
  name: "main_page",
  data: () => ({
    search: '',
    searchDisabled: false,
    selected: 'start',
    correlation: [ 'start', 'precise' ,'partially'],
    rules: [
      value => (value && value.length >= 3) || 'Min 3 characters',
    ],
  }),
  computed: {
    cards() {
      return this.$store.getters.getCards;
    },
    cardsSorted() {
      if (this.search && this.search.length >= 3) {
        const result = [];

        if ( this.selected === 'start') {
          const searchString = this.search.toLowerCase();

          this.cards.forEach(card => {
            if (card.text.toLowerCase().match(`^(${searchString})`))
              result.push(card);
          })

          return result;
        }

        if ( this.selected === 'precise') {
          this.cards.forEach(card => {
            if (card.text.match(`^(${this.search})$`))
              result.push(card);
          })

          return result;
        }

        if ( this.selected === 'partially') {
          const searchString = this.search.toLowerCase();

          this.cards.forEach(card => {
            if (card.text.toLowerCase().match(`(${searchString})`))
              result.push(card);
          })

          return result;
        }

        console.log("Sort function doesn't work")
        return [];
      }
      else {
        return this.cards;
      }
    }
  },
}
</script>