<template>
  <b-container>
    <div class="page-header">
      <h2 class="text-center">Game Manager</h2>
      <hr />
    </div>
    <b-row>
      <b-col>
        <b-btn class="mb-3" varian="primary" @click="testClick()">TEST CLICK</b-btn>
        <b-table striped hover :items="games" :fields="fields">
          <template #cell(Piattaforma)="data" >{{ getPiattaforma(data.item.Piattaforma) }}</template>
          <template #cell(icons)="data">
            <b-btn class="iconButton" size="sm" variant="warning">X</b-btn>
            <b-btn size="sm" variant="secondary">M</b-btn>
          </template>
        </b-table>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { GameTypeEnum, PiattaformaEnum } from './models/game';
import { gamesList } from './appConstants';

export default {

  data() {
    return {
      games: gamesList,
      gameTypes: GameTypeEnum.properties,
      gamePlatforms: PiattaformaEnum.properties,
      fields: ['Titolo', 'SoftwareHouse', 'Tipo', 'Piattaforma', 'icons'],
    }
  },
  methods: {
    getPiattaforma(value) {
      return this.gamePlatforms[value].text;
    },
    getGameType(value) {
      return this.gameTypes[value].text;
    },
    testClick() {
      alert('Test Click OK');
    }
  }
  
}
</script>

<style lang="scss">

.iconButton {
  margin-right: 12px;
}

</style>
