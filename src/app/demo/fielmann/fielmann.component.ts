import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { map, startWith } from "rxjs/operators";
import { Observable } from "rxjs/Observable";

export interface State {
  flag: string;
  name: string;
  weather: string;
  status: string;
}

@Component({
  selector: "app-fielmann",
  templateUrl: "./fielmann.component.html",
  styleUrls: ["./fielmann.component.scss"],
})
export class FielmannComponent implements OnInit {
  stateCtrl = new FormControl();
  filteredStates: Observable<State[]>;
  selectedState: State[] = [];
  isInfoAvilable: boolean;

  states: State[] = [
    {
      name: "Hamburg",
      weather: "13°",
      flag:
        "https://upload.wikimedia.org/wikipedia/commons/7/74/Flag_of_Hamburg.svg",
      status: "windy",
    },
    {
      name: "Berlin",
      weather: "17°",
      flag:
        "https://upload.wikimedia.org/wikipedia/commons/e/ec/Flag_of_Berlin.svg",
      status: "clear",
    },
    {
      name: "Dresden",
      weather: "15°",
      flag:
        "https://upload.wikimedia.org/wikipedia/commons/a/ac/Flag_of_Dresden_%28old_version%29.svg",
      status: "raining",
    },
    {
      name: "Bremen",
      weather: "30°",
      flag:
        "https://upload.wikimedia.org/wikipedia/commons/0/06/Dienstflagge_Staatsfahrzeuge_Bremen.svg",
      status: "warm",
    },
  ];

  constructor() {
    this.filteredStates = this.stateCtrl.valueChanges.pipe(
      startWith(""),
      map((state) => (state ? this._filterStates(state) : this.states.slice()))
    );
  }

  private _filterStates(value: string): State[] {
    const filterValue = value.toLowerCase();
    const searchResult = this.states.filter(
      (state) => state.name.toLowerCase().indexOf(filterValue) === 0
    );
    searchResult.length > 0
      ? (this.isInfoAvilable = false)
      : (this.isInfoAvilable = true);
    return this.states.filter(
      (state) => state.name.toLowerCase().indexOf(filterValue) === 0
    );
  }

  _getSelectedState(value: string) {
    const filterValue = value.toLowerCase();
    const result = this.states.filter(
      (state) => state.name.toLowerCase().indexOf(filterValue) === 0
    );
    this.selectedState[0] = result[0];
  }

  _resetStateSelection() {
    this.stateCtrl.reset();
    this.selectedState[0] = null;
  }

  ngOnInit() {
    this.isInfoAvilable = false;
  }
}
