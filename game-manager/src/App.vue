<template>
  <b-container>
    <div class="page-header">
      <h2 class="text-center">Game Manager</h2>
      <hr />
    </div>
    <b-row>
      
      <!-- AGGIUNTA NUOVO GIOCO -->
      <b-col lg="4">
        <b-form @submit.stop.prevent="onSubmitForm">

          <b-form-group label="Titolo" label-for="titoloField">
            <b-form-input 
                type="text" 
                id="titoloField" 
                name="titolo"
                aria-describedby="input-1-live-feedback"
                v-validate="{ required: true }"
                :state="validateState('titoloField')">
            </b-form-input>
            <b-form-invalid-feedback id="input-1-live-feedback">{{ formErrors.first('titoloField') }}</b-form-invalid-feedback>
          </b-form-group>

          <b-form-group label="Software House" label-for="softwareHouseField">
            <b-form-input 
                type="text" 
                id="softwareHouseField" 
                name="softwareHouse"
                aria-describedby="input-2-live-feedback"
                v-validate="{ required: true }"
                :state="validateState('softwareHouseField')">
            </b-form-input>
            <b-form-invalid-feedback id="input-2-live-feedback">{{ formErrors.first('softwareHouseField') }}</b-form-invalid-feedback>
          </b-form-group>

          <b-form-group label="Tipo" label-for="tipoField">
            <b-form-select id="tipoField" name="tipo" :options="gamesTypeSelectList" ></b-form-select>
          </b-form-group>

          <b-form-group label="Piattaforma" label-for="piattaformaField">
            <b-form-select id="piattaformaField" name="piattaforma" :options="gamesPlatformsSelectList" ></b-form-select>
          </b-form-group>

          <b-btn type="submit" variant="primary">Aggiungi</b-btn>
          <b-btn class="ml-2" @click="resetForm()">Reset</b-btn>

        </b-form>
      </b-col>
      
      <b-col lg="8">
        <b-btn class="mb-3" varian="primary" @click="testClick()">TEST CLICK</b-btn>

        <!-- LISTA GIOCHI -->
        <b-table striped hover :items="games" :fields="fields">
          <!-- In questo caso si usa #cell(nomeColonna inserita nell'array fields)="data" per accedere a colonne specifiche  -->
          <template #cell(Tipo)="data" >{{ getGameType(data.item.Tipo) }}</template>
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
import { GameTypeEnum, PiattaformaEnum, gamesTypesList, gamesPlatformsList } from './models/game';
import { gamesList } from './appConstants';

export default {

  data() {
    return {
      games: gamesList,
      gameTypes: GameTypeEnum.properties,
      gamePlatforms: PiattaformaEnum.properties,
      gamesTypeSelectList: gamesTypesList,
      gamesPlatformsSelectList: gamesPlatformsList,
      fields: ['Titolo', 'SoftwareHouse', 'Tipo', 'Piattaforma', 'icons'],
      newGame: {
        Titolo: '',
        SoftwareHouse: '',
        Tipo: 0,
        Piattaforma: 0
      },
      isSubmitDisabled: true
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
    },
    validateState(ref) {
      if (
        this.formFields[ref] &&
        (this.formFields[ref].dirty || this.formFields[ref].validated)
      ) {
        return !this.formErrors.has(ref);
      }
      return null;
    },
    resetForm() {
      this.$nextTick(() => {
        this.$validator.reset();
      });
    },
    // Al click sul button submit viene richiamato questo metodo che aggiunge il nuovo game
    // alla lista e svuota i campi del nuovo game per poterne inserire un altro.
    onSubmitForm(){//submitEvent) {
      /**this.isSubmitDisabled = submitEvent.target.elements.titolo.value === '' || submitEvent.target.elements.softwareHouse.value === '';
      if (!this.isSubmitDisabled) {
        const newGameToAdd = {
          Titolo: submitEvent.target.elements.titolo.value,
          SoftwareHouse: submitEvent.target.elements.softwareHouse.value,
          Tipo: submitEvent.target.elements.tipo.value,
          PiattaformaEnum: submitEvent.target.elements.piattaforma.value
        }
        this.games.push(newGameToAdd);
        console.log(JSON.stringify(this.games));
        this.isSubmitDisabled = true; */
        this.$validator.validateAll().then(result => {
          if (!result) {
            return;
          }
          alert("Form submitted!");
        });
    },
    // Al cambio del valore sui due textbox viene controllato se abilitare o meno il submit
    onChangeForm(changeForm) {
      alert(changeForm.target.elements.titolo.value);
      this.isSubmitDisabled = this.newGame.Titolo === '' || this.newGame.SoftwareHouse === '';
    }
  }
  
}
</script>

<style lang="scss">

h2 {
  margin-top: 10px;
}

.iconButton {
  margin-right: 12px;
}

</style>
