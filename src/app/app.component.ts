import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { LiftBuilder } from './lifts/lift-builder';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  lift = new LiftBuilder('Curl').setReps(12).setWeight(135).setSets(2).build();

  form = new FormGroup({});
  model = { sport: 1 };
  options: FormlyFormOptions = {};
  fields: Array<FormlyFieldConfig> = [
    {
      key: 'routine',
      type: 'select',
      defaultValue: 1,
      templateOptions: {
        label: 'Routine',
        required: true,
        options: [
          { id: 1, name: 'Boring But Big' },
          { id: 2, name: 'Boring But Big 3 Month Challenge' },
          { id: 3, name: 'Triumvirate' },
          { id: 4, name: 'I’m Not Doing Jack Shit' },
          { id: 5, name: 'Periodization Bible' },
          { id: 6, name: 'Bodyweight' },
          { id: 7, name: 'Young Jim Wendler' },
          { id: 8, name: 'Simplest Strength' },
          { id: 9, name: 'I’m Not Doing Jack Shit' },
          { id: 10, name: 'Full Body, Full Boring' },
          { id: 11, name: 'Full Body Training' },
          { id: 12, name: 'Two Days Per Week Option 1' },
          { id: 13, name: 'Two Days Per Week Option 2' },
          { id: 14, name: 'More Squatting' },
          { id: 15, name: 'For Beginners' },
          { id: 16, name: 'Offseason For Mass' },
          { id: 17, name: 'Offseason For Strength' },
          { id: 18, name: 'Offseason For Conditioning' },
          { id: 19, name: 'Bodybuilder (from Men’s Fitness)' },
          { id: 20, name: 'Bodybuilder (from Blood and Chalk 8 and Wendler’s Blog)' },
          { id: 21, name: 'Beach Body Challenge' },
          { id: 22, name: 'Building the Monolith' },
          { id: 23, name: 'Karl’s Method' }
        ],
        valueProp: 'id',
        labelProp: 'name',
      },
    },
    {
      key: 'maxes',
      type: 'select',
      templateOptions: {
        label: 'Maxes',
        options: [
          { id: 1, name: 'Real Rep Maxes' },
          { id: 2, name: 'Wendler Training Maxes' },
          { id: 3, name: '1+ Set Weights' },
        ],
        valueProp: 'id',
        labelProp: 'name',
      },
    },
    {
      key: 'warmup',
      type: 'select',
      templateOptions: {
        label: 'Warmup',
        options: [
          { id: 1, name: 'Foam Roller, Stretch, Jump Rope' },
          { id: 2, name: 'DeFranco Agile 8' },
        ],
        valueProp: 'id',
        labelProp: 'name',
        change: (field, $event) => {
          switch (field.model.warmup) {
            case 1:
              return field.templateOptions!.description = JSON.stringify('<a href="#>Recommended in 5/3/1</a>');
            case 2:
              return field.templateOptions!.description = 'Recommended in Beyond 5/3/1';
            default:
              return '';
          }
        }
      },
    },
  ];

  onSubmit() {
    console.log(this.model);
  }
}
